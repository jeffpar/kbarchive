---
layout: page
title: "Q248795: PRB: Setup Wizard Does not Distribute Current ODBC Drivers"
permalink: kb/248/Q248795/
---

## Q248795: PRB: Setup Wizard Does not Distribute Current ODBC Drivers

	Article: Q248795
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbwizard kbAppSetup KbClientServer kbMDAC kbvfp500 kbvfp500a kbvfp600 kbGrpDSFox kbGrpD
	Last Modified: 20-JUL-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When running the Setup Wizard, you select the option to distribute the ODBC
	Drivers as part of your application setup. However, the Setup Wizard does not
	include the latest Visual FoxPro ODBC Drivers that are installed in the System
	Folder. Instead, the Setup Wizard uses the Visual FoxPro ODBC Drivers that are
	installed in the HOME() + 'DISTRIB.SRC\SYSTEM' directory.
	
	RESOLUTION
	==========
	
	The recommended way to work around this behavior is to distribute Microsoft Data
	Access Components (MDAC) with your application.
	
	One way to ensure that the user has the latest version of MDAC is to:
	
	1. Download the latest version of MDAC from the following Web site:
	
	Microsoft Universal Data Access Web Site (http://www.microsoft.com/data/)
	
	2. Include the Mdac_typ.exe file in your distribution files.
	
	3. In Step 4 - Specify Setup Options/Post-setup executable of the Setup Wizard,
	  specify the path to the Mdac_typ.exe file.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Start Visual FoxPro.
	
	2. From the Tools menu, point to Wizards, and then choose Setup to run the Setup
	  Wizard.
	
	3. In Step 2 - Specify Components, make sure that you select the ODBC Drivers
	  check box.
	
	4. Complete the remaining steps of the Setup Wizard.
	
	5. When the Setup Wizard finishes, click the Preview Report command button.
	
	6. Browse across the Report Preview and look for the file named Vfpodbc.dll.
	
	7. Compare the size of the Sqlsrv32.dll file in the Report Preview against the
	  size of the file located in the Windows System Folder.
	
	Additional query words: MDAC
	
	======================================================================
	Keywords          : kbwizard kbAppSetup KbClientServer kbMDAC kbvfp500 kbvfp500a kbvfp600 kbGrpDSFox kbGrpDSMDAC kbDSupport kbMDAC260 kbfaq kbfixlist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:5.0,5.0a,6.0
	Issue type        : kbprb
	
	=============================================================================
	
