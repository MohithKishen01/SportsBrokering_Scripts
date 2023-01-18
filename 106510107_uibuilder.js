/**
    @fileoverview <H5><font color="#8A8A8A">module:</font><font color="#AA6600">Team Points Reduction</font></H5>
*/

var m_arrInfo = new Array ();

function showTPReductionList_106510107 ()
{
    var xmlDoc = UDModule.PROJ.processRequest (getReductionListParam_106510107 ());
    if (UDModule.PROJ.isValidStatus (xmlDoc))
    {
        if (isValidStatus_T6_106510107 (xmlDoc))
            buildReductionListUI_106510107 (xmlDoc);		
    }
}

function buildReductionListUI_106510107 (xmlDoc)
{
    m_arrNodes = new Array (), m_arrInfo = new Array ();                    
	var oBuffer = [];
	
	var nodeList = xmlDoc.getElementsByTagName (kSR_ReductionList);
    if (nodeList.length != null && nodeList.length > 0)
    {
        oBuffer.push ("<table class='table_bg' width='650' cellpadding='2' cellspacing='0' border='0'>");
        oBuffer.push (getHeaderRow_106510107 ());

		var nodeList_LT = xmlDoc.getElementsByTagName (kSR_LeagueTable);
		var arrNodes = UDModule.DOM.convertNodesToArray (nodeList_LT);
		
		var objLeagueTable = new LeagueTableObj_DA ();
		objLeagueTable.ArrNodes = arrNodes;

        for (var nIndex = 0; nIndex < nodeList.length; nIndex++)
        {
            var objNode = nodeList [nIndex];
            m_arrInfo = UDModule.DOM.getXMLIndexValue (objNode, 0).split (UDModule.Gk_DATA_SEP);
            
            oBuffer.push (getDataRow_106510107 (objLeagueTable, nIndex));
        }     
	
		objLeagueTable = null;
        oBuffer.push ("</table>");
    }		
	else
		oBuffer.push (UDModule.TBL.getNoDataPresentEx (650, 100, 1, "border_top_left_bottom_right"));

	UDModule.COMP.replaceDynamicHtml ("tdReductionList", oBuffer.join (""));
}

function getHeaderRow_106510107 ()
{
    var oTitle_RP = " title='" + m_arrMessages [iM_tReducePoints] + "' ";
	var oTitle_TP = " title='" + m_arrMessages [iM_tTeamPoints] + "' ";
    
	var oBuffer = [];	
	oBuffer.push ("<tr class='headerrow' height='22'>");
	oBuffer.push ("<td class='border_top_left_bottom' width='25' align='center'>" + m_arrHeaders [iH_SerialNo] + "</td>");
	oBuffer.push ("<td class='border_top_left_bottom' width='25' align='center'>" + m_arrHeaders [iH_Info] + "</td>");				
	oBuffer.push ("<td class='border_top_left_bottom' width='200' nowrap>" + m_arrHeaders [iH_TeamName] + "</td>");
	oBuffer.push ("<td class='border_top_left_bottom' width='30' align='center' " + oTitle_TP + " style='cursor:default;'>" + m_arrHeaders [iH_TeamPoints] + "</td>");
	oBuffer.push ("<td class='border_top_left_bottom' width='30' align='center' " + oTitle_RP + " style='cursor:default;'>" + m_arrHeaders [iH_ReducePoints] + "</td>");
	oBuffer.push ("<td class='border_top_left_bottom' width='35' align='center'>" + m_arrHeaders [iH_Edit] + "</td>");
	oBuffer.push ("<td class='border_top_left_bottom_right' width='300'>" + m_arrHeaders [iH_Comments] + "</td>");			
	oBuffer.push ("</tr>");

	return oBuffer.join ("");
}

function getDataRow_106510107 (objLeagueTable, nIndex)
{   
    var nTeamId = m_arrInfo [iTeamId];
	var onMouseOver = " onmouseover='UDModule.TBL.changeRowColor (this, true)' ";
	var onMouseOut = " onmouseout='UDModule.TBL.changeRowColor (this, false)' ";
	
	var oBuffer = [];
	oBuffer.push ("<tr id='row_" + nTeamId + "' height='22' " + onMouseOver + onMouseOut + ">");
	oBuffer.push (getIndexCell_106510107 (nIndex));
	oBuffer.push (getInfoCell_106510107 ());		
	oBuffer.push (getTeamNameCell_106510107 ());
	oBuffer.push (getTeamPointsCell_106510107 (objLeagueTable));
	oBuffer.push (getReducePointsCell_106510107 ());
	oBuffer.push (getEditCell_106510107 ());
	oBuffer.push (getCommentsCell_106510107 ());
	oBuffer.push ("</tr>");
	
	return oBuffer.join ("");	
}

function getTeamPointsCell_106510107 (objLeagueTable)
{
	var nTeamId = m_arrInfo [iTeamId];	
	var nPoints = objLeagueTable.getTeamPoints (objLeagueTable, nTeamId); 	
 
	var oCell = "<td class='border_left_bottom' align='center'>" + nPoints + "</td>";
	return oCell;
}

function getIndexCell_106510107 (nIndex)
{
   	var oCell = "<td class='border_left_bottom' align='center'>" + (nIndex + 1) + "</td>";
	return oCell;
}

function getInfoCell_106510107 ()
{
	var oBuffer = [];
    oBuffer.push ("<table class=divToolTip width=180 cellpadding=1 cellspacing=0 border=0>");        
    oBuffer.push (getToolTipRow_106510107 (true, m_arrHeaders [iH_TeamId], m_arrInfo [iTeamId]));   
    oBuffer.push (getToolTipRow_106510107 (false, UDModule.MSG.getInfoHeader (UDModule.MSG.GkINFO_CreatedBy), m_arrInfo [iCreatedBy]));
    oBuffer.push (getToolTipRow_106510107 (false, UDModule.MSG.getInfoHeader (UDModule.MSG.GkINFO_CreatedDate), m_arrInfo [iCreatedDate]));
    oBuffer.push (getToolTipRow_106510107 (false, UDModule.MSG.getInfoHeader (UDModule.MSG.GkINFO_CreatedTime), m_arrInfo [iCreatedTime]));
	oBuffer.push ("</table>");

	var mouseOver = " onclick=\"UDModule.TBL.showToolTip_CV (event, '" + oBuffer.join ("") + "', 70, true)\" ";
	var mouseOut = " onmouseout=\"UDModule.TBL.hideToolTip ()\" ";
	
    var oImage = "<img src='" + kImagePath + "/info.gif' class='link'>";
    var oCell = "<td class='border_left_bottom' align='center' " + mouseOver + mouseOut +">" + oImage + "</td>";
    
    return oCell;    
}

function getToolTipRow_106510107 (bWidth, oHeader, oValue)
{
	var oWidth1 = bWidth ? " width=70 " : "";
	var oWidth2 = bWidth ? " width=110 " : "";
	
	var oBuffer = [];
	oBuffer.push ("<tr>");
	oBuffer.push ("<td valign=top " + oWidth1 + ">" + oHeader + "</td>");
	oBuffer.push ("<td valign=top " + oWidth2 + ">" + oValue + "</td>");
	oBuffer.push ("</tr>");	
	
	return oBuffer.join ("");
}

function getTeamNameCell_106510107 ()
{	   
	var oTeamName = m_arrInfo [iTeamName];
	
	var oComments = m_arrInfo [iComments];
	var nLength = oComments.length;	
    if (nLength > 50)
        var oValign = "valign='top'";
    else
        oValign = "valign='center'";	
			
	var oCell = "<td class='border_left_bottom' " + oValign + ">" + oTeamName + "</td>";
	return oCell;
}

function getReducePointsCell_106510107 ()
{	
	var oReducePoints = m_arrInfo [iDeductPoints] == 0 ? "&nbsp;" : m_arrInfo [iDeductPoints];

	var oCell = "<td class='border_left_bottom' align='center'>" + oReducePoints + "</td>";
	return oCell;
}

function getEditCell_106510107 ()
{
	var nTeamId = m_arrInfo [iTeamId];
	var oTeamName = m_arrInfo [iTeamName];
	var nReducePoints = m_arrInfo [iDeductPoints];
	var oComments = m_arrInfo [iComments];
	
	var onClick = " onclick=\"editClicked_106510107 (event, " + nTeamId + ", '" + oTeamName + "', " + nReducePoints + ", '" + oComments + "')\" ";
	var oTitle = " title='" + m_arrMessages [iM_tEdit] + "' ";
	var oValue = m_arrHeaders [iH_Edit];

	var oCell = "<td class='border_left_bottom' align='center'>";
	oCell += "<font class='link' " + onClick + oTitle +">" + oValue + "</font>";
	oCell += "</td>";

	return oCell;	
}

function getCommentsCell_106510107 ()
{	   
	var oComments = m_arrInfo [iComments] == "-" ? "&nbsp;" : m_arrInfo [iComments];
	var nLength = oComments.length;	
    if (nLength > 50)
        var oValign = "valign='top'";
    else
        oValign = "valign='center'";

	var oCell = "<td class='border_left_bottom_right' " + oValign + ">" + oComments + "</td>";
	return oCell;
}