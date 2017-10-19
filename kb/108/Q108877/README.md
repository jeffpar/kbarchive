---
layout: page
title: "Q108877: PC Gen: PODIAG.EXE Toolbar Icon Descriptions"
permalink: /kb/108/Q108877/
---

## Q108877: PC Gen: PODIAG.EXE Toolbar Icon Descriptions

	Article: Q108877
	Product(s): Microsoft Mail For PC Networks
	Version(s): 3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Post Office Diagnostics Utility, version 3.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Postoffice Diagnostics Utility (PODIAG.EXE) has seven different toolbar
	icons. The toolbar will appear under the menu bar if the View, Toolbar option is
	selected.
	
	Reading from left to right, the first icon is a folder being opened. This is the
	Open PO icon. This icon is used to select a postoffice on which to run the
	diagnostics. This icon has a menu equivalence of choosing Open Postoffice from
	the File menu.
	
	The second icon is a folder being closed. This is the Close PO icon. This icon is
	used when the administrator has finished running the diagnostics on the
	postoffice that was opened. This icon has a menu equivalence of choosing Close
	Postoffice from the File menu.
	
	The third icon is a single person running. This is the Run Selected Tool icon.
	This icon will initially be unavailable (gray) when a postoffice is first
	opened. This icon will become accessible once you select one of the tools.
	Selecting this icon will bring up the preference dialog box for the selected
	tool. You can then run the tool by selecting either Check or Check & Fix.
	You can choose not to run the tool at this point and can select either Close or
	Cancel. The Close option saves the tool's preferences and closes the preference
	dialog box. The Cancel option cancels the check and does not save the tool's
	preferences.
	
	The fourth icon is two people running. This is the Run All Tools Listed icon.
	This icon will immediately begin running all of the tools listed without
	prompting you for any further input, provided that the AutoFix= statement in the
	[Microsoft Mail PO Diagnostics] section of the PODIAG.INI file is set to "No."
	If AutoFix=Yes, a dialog box will appear, warning that the postoffice must not
	be accessed by any programs while it is being checked and fixed. If AutoFix=No,
	all of the listed tools will be run in Check mode only.
	
	The fifth icon is a pair of eyeglasses. This is the View Current Log File icon.
	This icon displays the postoffice's PODIAG.LOG file. The default log viewer
	utility is NOTEPAD.EXE. However, you can set the log viewer to another
	application by setting the LogViewer= statement in the PODIAG.INI file to
	something other than NOTEPAD.EXE.
	
	The sixth icon is a star. This is the Re-Initialize Tools icon. This icon will
	reset the tool information that appears once the tool has been run. This
	information appears in bold letters to the right of each of the tool
	definitions. Examples of the information that will be cleared from the display
	are the number of warnings, number of errors, and the date and time the tool was
	last run.
	
	The seventh icon is a question mark. This icon is the Help On Selected Tool icon.
	This icon brings up the Help information on the selected tool or, if no tools
	are selected, it brings up general help for the utility.
	
	Additional query words: 3.20 grayed grey greyed
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbMailSearch kbMailPODiagnostic320
	Version           : :3.2
	
	=============================================================================
	
