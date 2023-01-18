/**
    @fileoverview <H5><font color="#8A8A8A">module:</font><font color="#AA6600">Team Points Reduction</font></H5>
*/

var kImagePath = "../../../resource/images/default/info/";

/* Navigator Row Count Per Page */
var kNP_RowCount = 18;

/* Task Ids */
var kInitData		= "10651010701";
var kLeagues		= "10651010704";
var kSeasons		= "10651010705";
var kReductionList	= "10651010706";
var kUpdate	        = "10651010707";

/* Server Row Names */
var kSR_Countries		= "sr1";
var kSR_Leagues			= "sr2";
var kSR_Seasons			= "sr3";
var kSR_ReductionList	= "sr4";
var kSR_LeagueTable		= "sr5";

/* Client Row Names */
var kCR_CountryId		= "cr1";
var kCR_LeagueId		= "cr2";
var kCR_ReductionList	= "cr3";
var kCR_Update	        = "cr4";
var kCR_LeagueTable		= "cr5";

/* First Element Message Constants */
var iF_ChooseOne    = 0;

/* Header Constants */
var iH_SerialNo		= 0;
var iH_Info			= 1;
var iH_TeamName		= 2;
var iH_ReducePoints = 3;
var iH_Comments	    = 4;
var iH_Edit		    = 5; 
var iH_TeamId	    = 6;
var iH_PRFor        = 7;    // Point Reduction
var iH_TeamPoints	= 8;

/* Message Constants */
var iM_Submit   	= 0;
var iM_Clear	    = 1;
var iM_tEdit	    = 2;
var iM_Country      = 3;
var iM_League       = 4;
var iM_Season       = 5;
var iM_ReducePoints = 6;
var iM_tReducePoints= 7;
var iM_tTeamPoints	= 8;

/* Reduction List Index */
var iTeamId			= 0;
var iTeamName		= 1;
var iDeductPoints	= 2;
var iComments		= 3;
var iCreatedBy		= 4;
var iCreatedDate	= 5;
var iCreatedTime	= 6;

/* Status Id */
var GT_ReductionList = 51;

var T1_FunctionPM	= 101;
var T1_Countries	= 102;

var T4_Leagues		= 401;
var T5_Seasons		= 501;
var T6_LeagueTable	= 601;

var T7_Delete	= 701; 
var T7_Insert	= 702;

/* Status Message Ids */
var iGM_ReductionList = 0;

var iM1_FunctionPM	= 0;
var iM1_Countries	= 1;

var iM4_Leagues		= 0;
var iM5_Seasons		= 0;
var iM6_LeagueTable	= 0;

var iM7_Delete	= 0;
var iM7_Insert	= 1;