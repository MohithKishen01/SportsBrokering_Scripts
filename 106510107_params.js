/**
    @fileoverview <H5><font color="#8A8A8A">module:</font><font color="#AA6600">Team Points Reduction</font></H5>
*/

function getInitParam_106510107 ()
{
	var xmlText = "<DataSet>";
	xmlText += UDModule.PROJ.getProcessXML (kInitData);
	xmlText += "</DataSet>";

	return xmlText;
}

function getCountryIdParam_106510107 ()
{
	var xmlText = "<DataSet>";
	xmlText += UDModule.PROJ.getProcessXML (kLeagues);
	xmlText += getCountryIdXML_106510107 ();
	xmlText += "</DataSet>";

	return xmlText;
}

function getCountryIdXML_106510107 ()
{
    var xmlText = "<" + kCR_CountryId + "><id>";
    xmlText += getCountryId_106510107 ();
    xmlText += "</id></" + kCR_CountryId + ">";

    return xmlText;
}

function getLeagueIdParam_106510107 ()
{
	var xmlText = "<DataSet>";
	xmlText += UDModule.PROJ.getProcessXML (kSeasons);
	xmlText += getLeagueIdXML_106510107 ();
	xmlText += "</DataSet>";

	return xmlText;
}

function getLeagueIdXML_106510107 ()
{
    var xmlText = "<" + kCR_LeagueId + "><id>";
    xmlText += getLeagueId_106510107 ();
    xmlText += "</id></" + kCR_LeagueId + ">";

    return xmlText;
}

function getReductionListParam_106510107 ()
{
	var xmlText = "<DataSet>";
	xmlText += UDModule.PROJ.getProcessXML (kReductionList);
	xmlText += getReductionListXML_106510107 ();
	xmlText += getLeagueListXML_106510107 ();	
	xmlText += "</DataSet>";

	return xmlText;
}

function getReductionListXML_106510107 ()
{
    var xmlText = "<" + kCR_ReductionList + "><id>";
    xmlText += getLeagueId_106510107 () + UDModule.Gk_DATA_SEP;
    xmlText += getSeasonId_106510107 ();
    xmlText += "</id></" + kCR_ReductionList + ">";

    return xmlText;
}

function getLeagueListXML_106510107 ()
{	
    var oTeamIds = "0";
	var nLastMatches = 0;
	var oStartDate = "0000-00-00";
    var oEndDate = oStartDate;

	var xmlText = "<" + kCR_LeagueTable + ">";
	xmlText += "<id>";
	xmlText += T6_LeagueTable + UDModule.Gk_DATA_SEP;
	xmlText += kSR_LeagueTable + UDModule.Gk_DATA_SEP;
    xmlText += getLeagueId_106510107 () + UDModule.Gk_DATA_SEP;
	xmlText += getSeasonId_106510107 () + UDModule.Gk_DATA_SEP;
	xmlText += oTeamIds + UDModule.Gk_DATA_SEP;		
	xmlText += nLastMatches + UDModule.Gk_DATA_SEP;
	xmlText += oStartDate + UDModule.Gk_DATA_SEP;
	xmlText += oEndDate;
    xmlText += "</id>";
    xmlText += "</" + kCR_LeagueTable + ">";
             
    return xmlText;
}

function getRecordParam_106510107 ()
{
	var xmlText = "<DataSet>";
	xmlText += UDModule.PROJ.getProcessXML (kUpdate);
	xmlText += getRecordXML_106510107 ();
	xmlText += getReductionListXML_106510107 ();
	xmlText += getLeagueListXML_106510107 ();
	xmlText += "</DataSet>";

	return xmlText;
}

function getRecordXML_106510107 ()
{          
    var xmlText = "<" + kCR_Update + "><id>";
    xmlText += getLeagueId_106510107 () + UDModule.Gk_DATA_SEP;
    xmlText += getSeasonId_106510107 () + UDModule.Gk_DATA_SEP;
    xmlText += getTeamId_106510107 () + UDModule.Gk_DATA_SEP;
    xmlText += getNewReducePoints_106510107 () + UDModule.Gk_DATA_SEP;
    xmlText += getNewComments_106510107 ();
    xmlText += "</id></" + kCR_Update + ">";

    return xmlText;
}