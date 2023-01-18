/**
    @fileoverview <H5><font color="#8A8A8A">module:</font><font color="#AA6600">Team Points Reduction</font></H5>
*/

var m_nTeamId = 0;

/**
    Creates an object of League Info and initializes all member variables.
	Invokes init function.

    @author     Vinod
    @version    1.0.0
*/
function onload_106510107 ()
{
	Constructor_106510107 ();
	init_106510107 ();
}

function init_106510107 ()
{
	UDModule.PROJ.loadDefaultTheme ();
	initData_106510107 ();
	UDModule.COMP.setFocus_DD ("cbCountries");
}

function initData_106510107 ()
{
	var xmlDoc = UDModule.PROJ.processRequest (getInitParam_106510107 ());
	if (UDModule.PROJ.isValidStatus (xmlDoc))
	{
		if (isValidStatus_T1_106510107 (xmlDoc))
		{
		    UDModule.PROJ.setFunction_PM (xmlDoc);
		    fillCountries_106510107 (xmlDoc);
		}
	}
}

function fillCountries_106510107 (xmlDoc)
{
    var nodeList = xmlDoc.getElementsByTagName (kSR_Countries);
    UDModule.COMP.fillDropDown (nodeList, "cbCountries", 1, 0);
}

function fillLeaguesMod2_106510107 ()
{
	var xmlDoc = UDModule.PROJ.processRequest (getCountryIdParam_106510107 ());
	if (UDModule.PROJ.isValidStatus (xmlDoc))
	{
		if (isValidStatus_T4_106510107 (xmlDoc))					    
			fillLeagues_106510107 (xmlDoc);
	}
}

function fillLeagues_106510107 (xmlDoc)
{
    var nodeList = xmlDoc.getElementsByTagName (kSR_Leagues);  
    UDModule.COMP.fillDropDown (nodeList, "cbLeague", 1, 0);
}

function fillSeasonsMod2_106510107 ()
{
	var xmlDoc = UDModule.PROJ.processRequest (getLeagueIdParam_106510107 ());
	if (UDModule.PROJ.isValidStatus (xmlDoc))
	{
		if (isValidStatus_T5_106510107 (xmlDoc))					    
			fillSeasons_106510107 (xmlDoc);
	}
}

function fillSeasons_106510107 (xmlDoc)
{
    var nodeList = xmlDoc.getElementsByTagName (kSR_Seasons);  
    UDModule.COMP.fillDropDown (nodeList, "cbSeason", 1, 0);
}

function setSubTitles_106510107 (oTeamName)
{   
	UDModule.COMP.replaceDynamicHtml ("tdTeamPointsHeader", m_arrHeaders [iH_PRFor] + " : " + oTeamName);
}

function showReductionPoints_106510107 (nReducePoints, oComments)
{      
    nReducePoints = nReducePoints == 0 ? "" : nReducePoints; 
    
	UDModule.COMP.getElement ("txtDeductPoints").value = nReducePoints;
	UDModule.COMP.getElement ("txtComments").value = oComments;
}

function getCountryId_106510107 ()
{
	return parseInt (UDModule.COMP.getElement ("cbCountries").value);
}

function getLeagueId_106510107 ()
{
	return parseInt (UDModule.COMP.getElement ("cbLeague").value);
}

function getSeasonId_106510107 ()
{
	return parseInt (UDModule.COMP.getElement ("cbSeason").value);
}

function getTeamId_106510107 ()
{
	return m_nTeamId;
}

function getNewReducePoints_106510107 ()
{
    return UDModule.VAL.stringtrim (UDModule.COMP.getElement ("txtDeductPoints").value);
}

function getNewComments_106510107 ()
{
    return UDModule.VAL.formatText (UDModule.COMP.getElement ("txtComments").value);
}

function isValidData_106510107 ()
{
    var bStatus = false;

	if (getCountryId_106510107 () == 0)
	{
		alert (m_arrMessages [iM_Country]);
		UDModule.COMP.setFocus_DD ("cbCountries");
	}		
	else if (getLeagueId_106510107 () == 0)
	{
		alert (m_arrMessages [iM_League]);
		UDModule.COMP.setFocus_DD ("cbLeague");
	}	
	else if (getSeasonId_106510107 () == 0)
	{
		alert (m_arrMessages [iM_Season]);
		UDModule.COMP.setFocus_DD ("cbSeason");
	}
	else
		bStatus = true;

	return bStatus;
}

function isValidPoints_106510107 ()
{
    var bStatus = false;

	if (getNewReducePoints_106510107 () == "")
	{
		alert (m_arrMessages [iM_ReducePoints]);
		UDModule.COMP.setFocus ("txtDeductPoints");
	}		
	else
		bStatus = true;

	return bStatus;
}

function resetRowColor_106510107 ()
{
	UDModule.TBL.setEditRowColor (m_nTeamId, 0);
	m_nTeamId = 0;
}