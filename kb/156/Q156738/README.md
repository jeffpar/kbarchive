---
layout: page
title: "Q156738: PRB: Copy, Paste Shortcuts Work Only When Edit Menu Present"
permalink: /kb/156/Q156738/
---

## Q156738: PRB: Copy, Paste Shortcuts Work Only When Edit Menu Present

	Article: Q156738
	Product(s): Microsoft FoxPro
	Version(s): 3.00 3.00b 5.00
	Operating System(s): 
	Keyword(s): kbvfp300 kbvfp500 kbvfp600
	Last Modified: 26-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a program replaces the Visual FoxPro System Menu bar with a menu bar that
	does not contain an Edit menu pad, the shortcut keys to cut, copy, and paste
	(CTRL+X, CTRL+C and CTRL+V) no longer perform those functions.
	
	CAUSE
	=====
	
	Because the current system menu has no Edit pad, there will be no edit functions
	for the application at the time.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Shortcut keys are defined within a menu and enabled when that menu is loaded.
	While the CTRL+X, CTRL+C, and CTRL+V are used by most Windows applications as
	the shortcuts to cut, copy, and paste, they accomplish those functions only as
	menu pop-up bar shortcuts. If the system menu has no Edit pad or other edit
	functionality, those shortcut keys will not be available.
	
	Steps to Reproduce Behavior
	---------------------------
	
	In the Visual FoxPro for Windows Help file topic for [ASCII 147]Activate
	Popup,[ASCII 148] there is a sample program named Actipop.prg that modifies the
	default menu and demonstrates that the editing shortcut functionality no longer
	functions.
	
	1. Copy the code for the Actipop.prg file from the Help file example.
	
	2. Paste the code in a program file of the same name. Set the default path to
	  the directory where this file is saved.
	
	3. Run it with the program file visible and note that the system menu changes.
	
	4. Click any text shown in the program editing window.
	
	5. Try to use the clipboard features (CTRL+C,X,V) by cutting or copying the
	  selected text from one part of the open window to another.
	
	6. To restore your system menu, type the following commands in the Command
	  window:
	
	        SET SYSMENU NOSAVE
	        SET SYSMENU TO DEFAULT
	
	Additional query words: kbdsd VFoxWin
	
	======================================================================
	Keywords          : kbvfp300 kbvfp500 kbvfp600 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP600
	Version           : 3.00 3.00b 5.00
	
	=============================================================================
	
