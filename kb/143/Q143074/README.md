---
layout: page
title: "Q143074: How to Highlight a Menu Option or Menu Item Programmatically"
permalink: kb/143/Q143074/
---

## Q143074: How to Highlight a Menu Option or Menu Item Programmatically

	Article: Q143074
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b
	Operating System(s): 
	Keyword(s): kbcode
	Last Modified: 11-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Upon startup of an application, you may want to have a specific menu or menu
	option highlighted by default so that the user need only press the ENTER key to
	carry out the associated command. This article presents a simple way to do it.
	
	MORE INFORMATION
	================
	
	This method, which depends on the KEYBOARD command, can be used with either
	FoxPro for Windows or Visual FoxPro.
	
	1. Create a program, name it MAINMENU, and put the following code in it:
	
	     SET SYSMENU OFF
	     DO testmenu.mpr
	     READ EVENTS
	     SET SYSMENU TO DEFAULT
	
	2. Create another program, name it CALLMENU, and put the following code in it:
	
	     Keyboard "{F10}"
	     Keyboard "{Rightarrow}"
	     Keyboard "{Enter}"
	     Keyboard "{dnarrow}"
	     Keyboard "{dnarrow}"
	     Keyboard "{dnarrow}"
	
	3. Create a new menu named testmenu, and give it the following structure and
	  prompts:
	
	  Prompt         Command
	  -----------------------------------
	  QUIT           CLEAR EVENTS
	  FORMS          Submenu
	    |
	    +---Form 1   Wait Window "Form 1"
	    +---Form 2   DO FORM FORM2
	
	4. In Visual FoxPro, on the View menu, choose General Options, and select
	  Cleanup. In FoxPro for Windows, on the Menu menu, choose General options, and
	  select Cleanup.
	
	5. In the Cleanup code, type:
	
	  " DO CALLMENU " (without the quotation marks)
	
	6. Save and generate the menu.
	
	7. Create a new form, name it FORM2, and place a command button on it. Put the
	  following code in the command button's Click event:
	
	     THISFORM.RELEASE
	     DO CALLMENU
	
	8. Run the MAINMENU program.
	
	This should cause the menu prompt 'Form 2' to be highlighted. Pressing the ENTER
	runs the form, and clicking the command button closes the form and cycles the
	menu back to the 'Form 2' prompt.
	
	This method can be called an unlimited number of times without running into the
	'Do nesting too deep' error message you may encounter if you use the ACTIVATE
	MENU command. The other significant advantage is that the use of the KEYBOARD
	command allows you to drill down to a specific menu option (in this case, Form
	2). The disadvantage to this method is that there is a flicker as the keyboard
	commands are executed.
	
	For information about how to do this with FoxPro 2.x, please see the following
	article in the Microsoft Knowledge Base:
	
	  Q110909 How to Highlight a Menu Bar and Popup Programmatically
	
	Additional query words: VFoxWin bar
	
	======================================================================
	Keywords          : kbcode 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b
	Version           : WINDOWS:3.0,3.0b
	
	=============================================================================
	
