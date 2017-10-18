---
layout: page
title: "Q140157: How to Right-Click by Using the Keyboard in Visual FoxPro"
permalink: kb/140/Q140157/
---

## Q140157: How to Right-Click by Using the Keyboard in Visual FoxPro

	Article: Q140157
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	There are several mouse enhancement utilities for the Windows environment that
	allow the right mouse button to be reassigned to another function, such as a
	double-click event. While enabling this feature may greatly improve
	productivity, it also prevents the right mouse button from invoking the context
	menus found throughout the Visual FoxPro user interface.
	
	Although one solution is to purchase a three button mouse and assign the
	double-click functionality to the middle button, you can avoid this by using the
	ON KEY LABEL and MOUSE commands. The following command, placed in Vfpstart.prg
	program or at the beginning of an application defines a specific keyboard
	combination to mimic a right-click in order to bring up the appropriate menu for
	each object.
	
	MORE INFORMATION
	================
	
	Visual FoxPro now provides the ability to perform mouse actions programmatically
	by using the MOUSE command. The desired action is specified by CLICK, DBLCLICK,
	or DRAG TO clauses while the button to press is indicated by LEFT, MIDDLE, or
	RIGHT clauses.
	
	In this example, the key combination of CTRL+SPACEBAR is used as a surrogate
	right-click, and the ON KEY LABEL command is initiated within VFPSTART so that
	it is available throughout the development session.
	
	Step-by-Step Example
	--------------------
	
	1. Open the Vfpstart.prg program file found in the Vfp directory.
	
	2. Insert a new line following the #define lines, and add this line:
	
	     ON KEY LABEL ctrl+spacebar MOUSE CLICK RIGHT
	
	3. Save the program
	
	Note that the command will not take effect until VFPSTART is recompiled and run.
	To put the command in effect immediately, run VFPSTART or repeat the command in
	the Command window.
	
	Additional query words: VFoxWin redefine alternate
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
