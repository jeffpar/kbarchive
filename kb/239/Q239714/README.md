---
layout: page
title: "Q239714: PRB: ODBC Error Message 1526 - &quot;Connectivity Error&quot;"
permalink: kb/239/Q239714/
---

## Q239714: PRB: ODBC Error Message 1526 - &quot;Connectivity Error&quot;

	Article: Q239714
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:2.5,3.0,3.0b,5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbwizard kbAppSetup kbODBC kbSQL kbvfp300 kbvfp300b kbvfp500 kbvfp500a kbvfp600 kbGrpDS
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a, 6.0 
	- Microsoft Data Access Components version 2.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When attempting to connect to an external data source using SQLCONNECT(), the
	following errors appear:
	
	  Connectivity error: [Microsoft][ODBC Driver Manager] Function sequence error
	
	- or -
	
	  The ODBC resource DLL (Drive:\Path\odbcinit.dll) is a different version than
	  the ODBC driver manager (Drive:\Application_Path\odbc32.dll)
	
	  You need to reinstall the ODBC components to ensure proper operation"
	
	This is followed by another error message:
	
	  "Initialization of the dynamic link library
	  Drive:\Application_Path\odbc32.dll failed. The process is terminating
	  abnormally."
	
	At other times, the same SQLCONNECT() command may work with no problem.
	
	CAUSE
	=====
	
	This behavior occurs when ODBC support files, incompatible with ODBC support
	files in the Windows System directory, are copied to the application directory
	and then loaded into memory.
	
	Files copied to the application directory of the distribution tree and included
	in setup diskettes created with the setup wizard are copied to the application
	directory during installation of the application.
	
	RESOLUTION
	==========
	
	Shut down Visual FoxPro. Remove the ODBC32.DLL, ODBC32INT.DLL, and any other
	ODBC components from that current application directory that are not compatible
	with the ODBC components in the Windows system directory. Restart Visual
	FoxPro.
	
	ODBC Components should be distributed by checking the ODBC drivers check box in
	step 2 of setup wizard.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	SQLCONNECT() loads the relevant ODBC components into memory, if they are not
	already loaded. Visual FoxPro searches for the ODBC components in the current
	directory before loading components from the Windows System directory. Any ODBC
	components that are not found in the current directory are loaded from the
	Windows system directory. Keeping ODBC components in the application directory
	increases the likelihood of a version mismatch and/or incompatibility with
	components located in the Windows System folder.
	
	Steps to Reproduce the Behavior
	-------------------------------
	
	1. From the Start button, select Settings, select Control Panel and then open
	  the ODBC Administration applet. Create a new DSN to any data source.
	
	2. Launch Visual FoxPro and set the default directory to a clean directory that
	  does not contain any files.
	
	3. Type "? SQLCONNECT()" (without the quotation marks) in the Command window and
	  select the DSN created in step 1 from the dialog box.
	
	4. Shut down and restart Visual FoxPro to unload the ODBC files in memory.
	
	5. Launch Windows Explorer and copy a version of ODBC32.DLL, earlier than the
	  version of ODBCINT.DLL located in the Windows System directory, to the
	  directory that was set as the default directory in step 3.
	
	6. Launch Visual FoxPro and set the default directory to the directory that now
	  contains an outdated copy of ODBC32.DLL.
	
	7. Type "?SQLCONNECT()" (without the quotation marks) in the Command window and
	  select the DSN created in step 1 from the dialog box. Note that one of the
	  error messages listed in the SYMPTOMS section of this article appears.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbwizard kbAppSetup kbODBC kbSQL kbvfp300 kbvfp300b kbvfp500 kbvfp500a kbvfp600 kbGrpDSFox kbDSupport kbMDAC250 kbSQLProg 
	Technology        : kbVFPsearch kbAudDeveloper kbMDACSearch kbMDAC250 kbVFP300 kbVFP300b kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:2.5,3.0,3.0b,5.0,5.0a,6.0
	Issue type        : kbprb
	
	=============================================================================
	
