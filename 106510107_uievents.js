/**
    @fileoverview <H5><font color="#8A8A8A">module:</font><font color="#AA6600">Team Points Reduction</font></H5>
*/

function closeDiv_106510107 (oEvent)
{		
    if (!oEvent)
        oEvent = window.event;
    
	if (oEvent.keyCode == 27)
	    closeClicked_106510107 ();			
}

function countryChanged_106510107 ()
{	
    closeClicked_106510107 ();
	UDModule.COMP.replaceDynamicHtml ("tdReductionList", "");
	
	UDModule.COMP.fillDefaultValueDD ("cbSeason", 0, m_arrFirstElements [iF_ChooseOne]);
	fillLeaguesMod2_106510107 ();
}

function leagueChanged_106510107 ()
{	
    closeClicked_106510107 ();
	UDModule.COMP.replaceDynamicHtml ("tdReductionList", "");
		
	fillSeasonsMod2_106510107 ();
}

function showClicked_106510107 ()
{
    closeClicked_106510107 ();
    if (isValidData_106510107 ())
    {
        UDModule.COMP.replaceDynamicHtml ("tdReductionList", "");
	    showTPReductionList_106510107 ();    
	}
}

function editClicked_106510107 (oEvent, nTeamId, oTeamName, nReducePoints, oComments)
{
    UDModule.TBL.setEditRowColor (m_nTeamId, nTeamId);
    m_nTeamId = nTeamId;
 
    if (!oEvent)   
        oEvent = window.event;
	
	UDModule.COMP.setVisibility ("divTeamPoints", "hidden");
	m_nTeamId = nTeamId;
	
    var oDiv = UDModule.COMP.getElement ("divTeamPoints").style;
    var nLeft = oEvent.clientX;
    var nTop = oEvent.clientY;

    if (nTop > 210)
        nTop = nTop - 160;
    else
        nTop = nTop + 10;

    oDiv.top = nTop;
    oDiv.left = 660;
    oDiv.visibility = "visible";
        
    setSubTitles_106510107 (oTeamName);
    showReductionPoints_106510107 (nReducePoints, oComments);
    UDModule.COMP.setFocus ("txtDeductPoints");
}

function closeClicked_106510107 ()
{
    UDModule.COMP.setVisibility ("divTeamPoints", "hidden");
    resetRowColor_106510107 ();
}

function submitClicked_106510107 ()
{
    if (isValidPoints_106510107 () && window.confirm (m_arrMessages [iM_Submit]))
    {     
        var xmlDoc = UDModule.PROJ.processRequest (getRecordParam_106510107 ());        
        if (UDModule.PROJ.isValidStatus (xmlDoc))
	    {			
		    if (isValidStatus_T7_106510107 (xmlDoc))
			    afterSubmitClicked_106510107 (xmlDoc);		
	    }
    }	
}

function afterSubmitClicked_106510107 (xmlDoc)
{
	closeClicked_106510107 ();	
	buildReductionListUI_106510107 (xmlDoc);
}

function deleteClicked_106510107 (nTeamId)
{
    var xmlDoc = UDModule.PROJ.processRequest (getDeleteParam_106510107 (nTeamId));        
    if (UDModule.PROJ.isValidStatus (xmlDoc))
    {			
	    if (isValidStatus_T8_106510107 (xmlDoc))
		    buildReductionListUI_106510107 (xmlDoc);
    }
}