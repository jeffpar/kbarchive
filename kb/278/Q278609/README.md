---
layout: page
title: "Q278609: SMS: Can't Modify Distribution Points for Packages from Parent"
permalink: kb/278/Q278609/
---

## Q278609: SMS: Can't Modify Distribution Points for Packages from Parent

	Article: Q278609
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbsms200
	Last Modified: 06-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you attempt to modify the Distribution Points for a Systems Management
	Server (SMS) package created at a parent site, the Package Creation Wizard may
	not function as expected. By clicking More Information, you may receive the
	following error messages:
	
	  An error occurred during the operation of this wizard.
	
	  Description: An error occurred during the operation of this wizard.
	  HRESULT : 0xEEEF0001
	  File : E:\OPALSP2\mmcadminui\Support\SMS_NBAS\NBAS_ErrorHelper.cpp
	  Line: 54
	
	  Description: Wizard internal error: invalid WBEM Get or Put result.
	  Please exit the Wizard.
	  HRESULT : 0x80041001
	  File : E:\OPALSP2\mmcadmpages\Advertwiz\DisWzFinish1.cpp
	  Line: 467
	
	  Description: DISTSRC_ACCESS_DENIED: Update to a package that's not created at
	  this site is not allowed.
	  Error : WBEM_E_FAILED
	  Operation: DeleteInstance
	  ParameterInfo:
	  SMS_DistributionPoint.PackageID="xxxxxxxx",ServerNALPath="[\"Display=\\\ADDCPA01M\\\"]MSWNET:[\"SMS_SITE=XXX\"]\\\\ADDCPA01M\\",SiteCode="XXX"
	
	  Wbem error object:
	
	  instance of SMS_ExtendedStatus
	  {
	  CauseInfo = "4";
	
	  Description = "DISTSRC_ACCESS_DENIED: Update to a package that's not created
	  at this site is not allowed. ";
	  ErrorCode = 2152073733;
	  File = "E:\\OPALSP2\\sdk_provider\\nt\\smsprov\\SspPkgServer.cpp";
	  Line = 287;
	  Operation = "DeleteInstance";
	  ParameterInfo =
	  "SMS_DistributionPoint.PackageID=\"xxxxxxxx\",ServerNALPath=\"[\\\"Displ
	  ay=\\\\\\\\ADDCPA01M\\\\\\\"]MSWNET:[\\\"SMS_SITE=XXX\\\"]\\\\\\\\ADDCPA
	  01M\\\\\",SiteCode=\"XXX\"";
	  ProviderName = "ExtnProv";
	  StatusCode = 2147749889;
	  };
	
	  MMF Build Info : SMS 2.0 SP2 (1493)
	
	MORE INFORMATION
	================
	
	This behavior can occur when you attempt to modify the properties of a package
	created at a higher-level site in your hierarchy. Because the package was
	created at a parent site, it is locked to prevent the child site from modifying
	any of its properties. The solution is to define the Distribution Points at the
	Parent site in which the package was created. When the clients attempt to run
	the advertised package, they will access it from a distribution point for their
	respective sites.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200 
	Technology        : kbSMSSearch kbSMS200
	Version           : :2.0
	Issue type        : kbinfo
	
	=============================================================================
	
