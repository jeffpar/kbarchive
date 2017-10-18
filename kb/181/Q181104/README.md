---
layout: page
title: "Q181104: WD97: Extend Mode (EXT) Is Unexpectedly Deactivated"
permalink: kb/181/Q181104/
---

## Q181104: WD97: Extend Mode (EXT) Is Unexpectedly Deactivated

	Article: Q181104
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbdtacode kbmacroexample word97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	After you activate the extend mode feature in Microsoft Word by pressing F8,
	extend mode may become deactivated if you do any of the following:
	
	- You switch to a different document window. (Extend mode is no longer active
	  when you return to the original document window.)
	
	  -or-
	
	- You run ExtendMode in a macro. ExtendMode is the functional version of the
	  WordBasic ExtendSelection macro command or the Visual Basic for Applications
	  ExtendMode/Expand methods.
	
	  -or-
	
	- You click any menu command and then click OK or Cancel.
	
	CAUSE
	=====
	
	This behavior is by design in Word. Word changes the status of the Extend
	command when a new command is chosen.
	
	MORE INFORMATION
	================
	
	When you activate the extend mode feature by pressing F8, the Word status bar
	displays EXT. While extend mode is active, Word selects text when you press
	directional keys.
	
	Selection.ExtendMode and Selection.Information(wdSelectionMode) are Visual Basic
	for Applications commands that return the status of the extend mode feature.
	
	In the following syntax examples, "x" equals 0 (zero) if extend mode is inactive,
	and "x" equals a non-zero number if extend mode is active:
	
	  x = Selection.ExtendMode
	  x = Selection.Information(wdSelectionMode)
	
	However, if you run these commands in a macro, Word always deactivates extend
	mode and sets the value of "x" to 0 (zero).
	
	NOTE: Both commands operate correctly, returning the actual status of the extend
	mode feature if you run the commands by choosing the Step button in the
	macro-editing window.
	
	Additional query words: extend selection extendselection execute turn off turned stop stopped inactive
	
	======================================================================
	Keywords          : kbdtacode kbmacroexample word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbprb
	
	=============================================================================
	
