---
layout: page
title: "Q136817: How to Change Editor Settings"
permalink: /kb/136/Q136817/
---

## Q136817: How to Change Editor Settings

	Article: Q136817
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Editing preferences can be saved by clicking Options on the Tools menu and
	changing values in the Edit tab.
	
	MORE INFORMATION
	================
	
	To gain access to the editing preferences, click Options on the Tools menu. You
	must be using a resource file in order to use this option. If you have set
	resource off, the check box for "Save Preferences" and "Set as Default for .xxx
	Files" will be disabled. The "xxx" is the type of the file you are using, such
	as .prg or .txt.
	
	The Options Dialog box contains options for text manipulation and file saving.
	These settings are in effect when you edit text in the Code window or Editing
	window.
	
	When you click "Set As Default," Visual FoxPro saves all the options in all the
	tabs to the resource file. Again, this is only true if you are using a resource
	file.
	
	If the "Set as Default" check box and command button are disabled and the "Save
	Preferences" check box is enabled the reason is that you can only save the
	preferences for the currently-active editing window.
	
	For example, if you open a new program editing window, change some editing
	preferences, click the "Set as default" button, and then open a second program
	editing window, you will not have the default editing preferences that were set
	for the first window. Instead, you will have the editing preferences that were
	in effect when Visual FoxPro was started.
	
	If you exit Visual FoxPro and restart it, the settings you saved by clicking the
	"Set as Default" button will apply to all new program files you create.
	
	If the "Set as Default for .xxx files" check box is enabled, you will be able to
	set the default for all files that have the .xxx extension; that is, if you set
	as default for .prg files, all .prg files that are edited will have access to
	the same defaults.
	
	REFERENCES
	==========
	
	For more information on the Edit tab, please search for the "Edit Tab, Options
	Dialog Box" topic in the Visual FoxPro Help file.
	
	Additional query words: VFoxWin Edit Options
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
