/**
    @fileoverview <H5><font color="#8A8A8A">module:</font><font color="#AA6600">Team Points Reduction</font></H5>
*/

var m_arrHeaders = new Array
    (
        "#",
        "i",
        "Team Name",        
        "R.P.",
        "Comments",
        "Edit",
        "Team Id",
        "Points Reduction for ",       
		"PT."
    );
    
var m_arrMessages = new Array
    (
        "Are you sure you want to Submit?",
        "Are you sure you want to Clear?",
        "Click here to Edit..",
                
        "Please select 'Country'",
        "Please select 'League'",
        "Please select 'Season'",
        "Please enter 'Deduct Points'",        
        "Reduce Points",
		"Team Points"        
    ); 

var m_arrFirstElements = new Array
    (
        "[Choose One]"        
    );	
    
var m_arrMessages_GT = new Array
	(
	    "'getReductionList': error"
	);	
	
var m_arrMessages_T1 = new Array
	(
	    "'getFunctionPM': error",
	    "'getLeagueCountries': error"
	);
	
var m_arrMessages_T4 = new Array
	(
	    "'getLeagues': error"
	);
	
var m_arrMessages_T5 = new Array
	(
	    "'getSeasons': error"
	);

var m_arrMessages_T6 = new Array
	(
	    "'getLeagueTable': error"
	);	

var m_arrMessages_T7 = new Array
	(	    
		"'deleteTeamPoints': error",
	    "'insertTeamPoints': error"
	);