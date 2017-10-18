---
layout: page
title: "Q114721: PRB: Error Occurs When Starting a Wizard"
permalink: kb/114/Q114721/
---

## Q114721: PRB: Error Occurs When Starting a Wizard

	Article: Q114721
	Product(s): Microsoft FoxPro
	Version(s): MS-DOS:2.6; WINDOWS:2.6,3.0
	Operating System(s): 
	Keyword(s): kberrmsg
	Last Modified: 03-AUG-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	- Microsoft FoxPro for Windows, version 2.6 
	- Microsoft FoxPro for MS-DOS, version 2.6 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An error occurs when you try to run a wizard.
	
	NOTE: Some common error messages are listed in the MORE INFORMATION section
	below.
	
	CAUSE
	=====
	
	These errors occur if the wizard table file (WIZARD.DBF) or its associated memo
	file (WIZARD.FPT) is corrupted.
	
	RESOLUTION
	==========
	
	To re-create the default Wizard table files:
	
	1. Delete the WIZARD.DBF and WIZARD.FPT files, which are located in the WIZARDS
	  subdirectory of the main FoxPro directory.
	
	2. Start FoxPro.
	
	3. From the Run menu, choose Wizard, and then choose All.
	
	4. You are then prompted with the following dialog box:
	
	  The wizard registration table cannot be located. Would you like to locate it
	  or create a new registration table with default values?
	
	  Choose Create.
	
	5. When prompted to select a wizard, select the wizard you want to run, or
	  choose Cancel to return to the Command window.
	
	At this point, new default WIZARD.DBF and WIZARD.FPT files have been created.
	
	MORE INFORMATION
	================
	
	Listed below are some common error messages that a corrupted wizard table can
	cause.
	
	FoxPro Errors
	-------------
	
	  Line Number: 789
	  Program: GETWIZ
	  Error: Not a table/DBF.
	  Source: USE ...
	
	  Line Number: 789
	  Program: GETWIZ
	  Error: MEMO file is missing/invalid.
	  Source: USE ...
	
	  Line Number: 835
	  Program: GETWIZ
	  Error: String too long to fit.
	  Source: <??>
	
	Program Error
	-------------
	
	  Invalid function argument value, type, or count.
	
	Microsoft FoxPro Errors
	-----------------------
	
	  Cannot find the registered wizard.
	
	  No wizards are registered with "REPORT" class.
	
	NOTE: The wizard classes are SCREEN, REPORT, LABEL, MAIL, TABLE, and QUERY.
	
	Dialog Box Prompting to Locate the Wizard Application
	-----------------------------------------------------
	
	  Prompted to locate <wizard>.APP.
	
	NOTE: The Wizard applications are WZ_QFORM.APP, WZ_QREPO.APP, WZ_MREPO.APP,
	WZ_MAIL.APP, WZ_GREPO.APP, WZ_MMERG.APP, WZ_TABLE.APP, and WZ_BQUER.APP.
	
	Application Error (FoxPro for Windows Only)
	-------------------------------------------
	
	  FOXPROW caused a General Protection Fault in module FOXPROW.EXE at 0001:0BFA.
	
	Additional query words: VFoxWin FoxDos FoxWin errmsg err msg akz
	
	======================================================================
	Keywords          : kberrmsg 
	Technology        : kbVFPsearch kbAudDeveloper kbFoxproSearch kbZNotKeyword3 kbFoxPro260DOS kbFoxPro260 kbVFP300
	Version           : MS-DOS:2.6; WINDOWS:2.6,3.0
	
	=============================================================================
	
