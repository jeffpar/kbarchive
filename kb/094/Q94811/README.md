---
layout: page
title: "Q94811: Common Causes of &quot;Feature Not Available&quot; Error"
permalink: /kb/094/Q94811/
---

## Q94811: Common Causes of &quot;Feature Not Available&quot; Error

	Article: Q94811
	Product(s): Microsoft FoxPro
	Version(s): 2.00 2.5x 2.6x | 2.5x 2.6x 3.00
	Operating System(s): 
	Keyword(s): kberrmsg
	Last Modified: 12-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	- Microsoft FoxPro for MS-DOS, versions 2.0, 2.5x, 2.6x 
	- Microsoft FoxPro for Windows, versions 2.5x, 2.6x 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The error message "Feature not available" indicates that the feature attempted
	is not supported in the version of FoxPro that is currently being used. This
	error is most often seen in the FoxPro Distribution Kit.
	
	MORE INFORMATION
	================
	
	The main causes for the "Feature not available" error message are listed below:
	
	1. Use of commands that require the execution and compilation of source code.
	  These commands require the development version of FoxPro and therefore are
	  not available in a distributed .APP or .EXE file.
	
	  Examples of these types of commands are BUILD APP, BUILD EXE, BUILD PROJECT,
	  COMPILE, FILER, CREATE/MODIFY MENU, CREATE/MODIFY QUERY, CREATE/MODIFY
	  SCREEN, SET VIEW ON, and SUSPEND.
	
	2. Features specific to the interactive development environment of FoxPro, such
	  as the Trace, Debug, Command, and View windows.
	
	3. FoxPro menu commands available only in the development version. For the
	  reasons mentioned above, many of the original FoxPro menu commands are not
	  available for distribution. In addition, since there is no Command window in
	  the Distribution Kit, any menu command that is echoed to the Command window
	  is not available.
	
	  Menu commands that ARE available in a distributed .FXP, .APP, or .EXE file are
	  listed below. This information can also be found in the "Features Not
	  Available" section of the FoxPro Distribution Kit manual.
	
	     Menu       Available commands
	     -----------------------------------------------------------
	
	     System     About, Help, Calculator, Calendar/Diary,
	                Special Characters, ASCII Chart, Capture, Puzzle
	
	     File       Close, Save, Save As, Revert
	
	     Edit       All menu commands
	
	     Window     Hide, Hide All, Show All, Clear, Move, Size,
	                Zoom, Cycle, and all the names of open windows
	
	  NOTE: For more information about how to list the names of open windows, please
	  see the following article in the Microsoft Knowledge Base:
	
	  Q97635 How to List the Currently Active Windows in a Menu No other menu
	  options are available.
	
	4. Commands containing macro substitution for the command verb in a stand- alone
	  .EXE file. When a stand-alone .EXE file is being built, the programs are
	  scanned for FoxPro commands. When commands are found, the code to execute
	  these commands is built into the .EXE file. However, if there is macro
	  substitution for the command verb in a line of code, that entire line is
	  skipped, resulting in the code to execute that command not being built into
	  the .EXE file. For example:
	
	  x="REPORT FORM test.frx"
	        &x PREVIEW
	
	  In this instance, the REPORT FORM... command would be skipped and the code to
	  execute a REPORT FORM command would not be built into the .EXE file. To
	  resolve this, include a "dummy" program in the project that never gets
	  called, containing the following:
	
	  REPORT FORM test PREVIEW
	
	  This command contains no macro substitution; therefore, the code to execute
	  the REPORT FORM command would be built into the .EXE file.
	
	For more information about about this, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q133358 PRB: Feature Not Available: Macro Substitution & Command Verbs
	
	Additional query words: VFoxWin FoxDos FoxWin 2.50 2.50a 2.50b 2.60 2.60a errmsg err msg menu grayed greyed dimmed unavailable
	
	======================================================================
	Keywords          : kberrmsg 
	Technology        : kbVFPsearch kbAudDeveloper kbFoxproSearch kbZNotKeyword3 kbFoxPro200DOS kbVFP300
	Version           : 2.00 2.5x 2.6x | 2.5x 2.6x 3.00
	
	=============================================================================
	
