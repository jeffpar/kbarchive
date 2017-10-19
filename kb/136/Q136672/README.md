---
layout: page
title: "Q136672: PRB: Cannot Disable the System Menu While Running a Form"
permalink: /kb/136/Q136672/
---

## Q136672: PRB: Cannot Disable the System Menu While Running a Form

	Article: Q136672
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you issue the command SET SYSMENU OFF to turn off the system menus from,
	for example, the Load event of a form, the menu goes away for a short moment but
	then comes right back again.
	
	CAUSE
	=====
	
	When the program finishes executing, there are no more wait states. Even though
	the form is still up on the screen, control has transferred to the Command
	window. The system menu is automatically turned on when the Command window is
	active. That's why the menu comes back after loading the form.
	
	RESOLUTION
	==========
	
	Run the form from a program and include READ EVENTS after the DO FORM command.
	To turn the menus off, you can execute SET SYSMENU OFF before the DO FORM
	command in the program, or include it in the Load event of the form. This will
	keep the program active and hide the system menu until you use the CLEAR EVENTS
	or SET SYSMENU ON command.
	
	NOTE: This was called a Foundation READ in FoxPro version 2.x.
	
	STATUS
	======
	
	This behavior is by design.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
