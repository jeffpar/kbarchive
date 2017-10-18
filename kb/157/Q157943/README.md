---
layout: page
title: "Q157943: PRB: Setup Wizard Error When Installing VFP 5.0 over VFP 3.0"
permalink: kb/157/Q157943/
---

## Q157943: PRB: Setup Wizard Error When Installing VFP 5.0 over VFP 3.0

	Article: Q157943
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Running the Visual FoxPro version 5.0 Setup Wizard, you may get the following
	error:
	
	  Required file missing Drvssrvr.hl_
	
	Or when running Setup.exe from a Setup Wizard created distribution, you may get
	the following error:
	
	  This Setup is not intended for your version of Windows
	
	The first error may occur if ODBC drivers are selected in Setup Wizard step 2.
	The second error can occur under any circumstances.
	
	CAUSE
	=====
	
	Visual FoxPro 5.0 has been installed to the same directory as Visual FoxPro 3.0.
	
	RESOLUTION
	==========
	
	To resolve this problem do the following:
	
	1. Run Visual FoxPro Setup, select Add/Remove, and under Professional
	  Applications, Change Options, uncheck Setup Wizard to uninstall the Setup
	  Wizard.
	
	2. Delete the Distrib and Distrib.src directories in the Visual FoxPro
	  directory.
	
	3. Run Setup again, click Add/Remove, and under Professional Applications,
	
	Change Options, recheck Setup Wizard to reinstall the Setup Wizard.
	4. Re-run Setup Wizard.
	
	-or-
	
	Reinstall Visual FoxPro 5.0 to a new directory.
	
	STATUS
	======
	
	Microsoft is researching this behavior and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Install Visual FoxPro 5.0 to a directory where Visual FoxPro 3.0 is
	  installed.
	
	2. Create an executable, and run the Setup Wizard. Select an ODBC driver in step
	  2 of the Setup Wizard.
	
	3. Create an executable, and run the Setup Wizard. Do not select an ODBC driver
	  in step 2.
	
	4. Install the executable from the disks or the Netsetup folder.
	
	NOTE: You may see other errors running the Setup Wizard or running Setup.exe from
	a distribution if Visual FoxPro 5.0 was installed over a Beta version of Visual
	FoxPro 5. The steps to remedy would be the same as listed above.
	
	Additional query words: kbdsd vfoxwin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500
	Version           : WINDOWS:5.0
	Issue type        : kbprb
	
	=============================================================================
	
