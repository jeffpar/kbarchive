---
layout: page
title: "Q309290: Package Creation Errors Cause SQL Errors"
permalink: kb/309/Q309290/
---

## Q309290: Package Creation Errors Cause SQL Errors

	Article: Q309290
	Product(s): Microsoft SNA Server
	Version(s): 
	Operating System(s): 
	Keyword(s): kbbuglist kbfixlist
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Host Integration Server 2000 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to query the host for data by using the OLE DB Provider for
	DB2, you may receive the following error message:
	
	  [OLE/DB provider returned Msg: [Microsoft][ODBC Driver for DB2][Microsoft DB2
	  OLE DB Provider]A SQL error has occurred. Please consult the documentation
	  for your specific DB2 version for a description of the associated Native
	  Error and SQL State. SQLSTATE: 42501, SQLCODE: -551]
	
	CAUSE
	=====
	
	The Create Package Utility is experiencing permission errors when it attempts to
	create a package, but is not returning a message that indicates that a problem
	exists. If you enable logging from within the Crtpkg.exe utility, you see output
	that resembles the following:
	
	  Beginning creation process
	  Initializing environment...
	  Connecting to the host...
	  Connection established.
	  Start package creation process...
	  Creating READ UNCOMMITTED package...
	  READ UNCOMMITTED package created.
	  Package creation succeeded.
	  Errors occured when granting privilege on MSUR001           .  RETCODE=-1.
	  0 errors reported.
	  Free statement handles...
	  Disconnecting...
	  Disconnected
	  End of package creation.
	  Creation process has completed
	
	NOTE: To enable logging, select Out to a log file on the Options menu.
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem. This fix may receive additional
	testing at a later time, to further ensure product quality. Therefore, if you
	are not severely affected by this problem, Microsoft recommends that you wait
	for the next Microsoft Host Integration Server 2000 service pack that contains
	this fix.
	
	To resolve this problem immediately, contact Microsoft Product Support Services
	to obtain the fix. For a complete list of Microsoft Product Support Services
	phone numbers and information about support costs, please go to the following
	address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are normally incurred for support calls may
	be canceled, if a Microsoft Support Professional determines that a specific
	update will resolve your problem. Normal support costs will apply to additional
	support questions and issues that do not qualify for the specific update in
	question.
	
	The English version of this fix should have the following file attributes or
	later:
	
	+----------------------------------+
	| File name  | Date        | Time  | 
	+----------------------------------+
	| Crtpkg.dll | May-31-2001 | 12:00 | 
	+----------------------------------+
	
	NOTE: Because of file dependencies, the most recent fix that contains the above
	files may also contain additional files.
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Host Integration Server 2000.
	
	MORE INFORMATION
	================
	
	With the fix in place, if permission errors are encountered, the Create Package
	Utility stops the creation process and reports the error. If multiple packages
	are being created, the Create Package Utility attempts to create the rest of the
	packages.
	
	Additional query words: oledb2 create package, db2 his
	
	======================================================================
	Keywords          :  kbbuglist kbfixlist
	Technology        : kbAudDeveloper kbHostIntegServ2000
	Version           : :
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
