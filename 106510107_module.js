﻿/**
    @fileoverview <H5><font color="#8A8A8A">module:</font><font color="#AA6600">Team Points Reduction</font></H5>
*/

/**
	This class extends the PEModule and initialise the moduleid, versionid.
*/
function TeamPointsReductionModule_106510107 ()
{
	this.inheritFrom = PEModule;
	this.inheritFrom ();
	
	/* p106trading - mssqlv51 - p10651sport - Team Points Reduction */
	this.ModuleId   = 106510107;
    this.VersionId  = 1.01;
}

/**
    Initializes objects namely PEProject, PEDocument, PEComponent, PEValidation & PEMessages.
*/
function Constructor_106510107 ()
{
	UDModule	= new TeamPointsReductionModule_106510107 ();
	
	UDModule.PROJ	= new PEProject ();
	UDModule.DOM    = new PEDocument ();
    UDModule.COMP   = new PEComponent ();
    UDModule.TBL	= new PETable ();    
    UDModule.VAL	= new PEValidation ();
    UDModule.MSG    = new PEMessages ();
    UDModule.PROJEX	= new Trading_10651 ();
}