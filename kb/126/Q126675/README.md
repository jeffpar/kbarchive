---
layout: page
title: "Q126675: BUG: Menu Lost if Caption Changed on Menu with Only WindowList"
permalink: /kb/126/Q126675/
---

## Q126675: BUG: Menu Lost if Caption Changed on Menu with Only WindowList

	Article: Q126675
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 02-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Standard Edition for Windows, version 3.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a top-level menu has its WindowList property set to True and the top- level
	menu does not contain any sub-menus, after changing the menu's caption the
	top-level menu will no longer display the list of MDI child windows and you will
	not receive any click events.
	
	RESOLUTION
	==========
	
	In order to work around the problem, make sure the top-level menu item that has
	the WindowList property set to True has at least 1 sub-menu item.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	In the example below, a menu on the MDI form contains nothing but a WindowList.
	A command button is placed on the MDI child form with code behind it to change
	the caption of the menu containing the WindowList. As long as you do not click
	on the command button, the Window menu will display a list the MDI child
	windows. Once you click on the command button, the Window menu caption is
	changed to "Test" and it no longer keeps track of the MDI child windows and it
	no longer receives click events.
	
	NOTE: Issuing the command "Print MDIForm1.mnuwindow.Windowlist" (without the
	quotes) from the immediate window will return -1 (True). However, the Window
	list is not displayed.
	
	Steps To Recreate The Problem
	-----------------------------
	
	1. Start a new project in Visual Basic (ALT, F, N). Form1 is created by default.
	
	2. From the Property Window, set MDIChild equal to True for Form1.
	
	3. Add a Command button (Command1) to Form1 and add the following code to the
	  Click event.
	
	        Sub Command1_Click ()
	           MDIForm1.mnuWindow.Caption = "Test"
	        End Sub
	
	4. From the File menu, select New MDI Form. MDIForm1 is created by default.
	
	5. From the Window menu, choose Menu Design.
	
	6. Create a menu for the MDI Form with the following properties:
	
	  Caption   Name        Indented   WindowList
	  -------------------------------------------
	  File      mnuFile     No         Unchecked
	  New       mnuNew      Once       Unchecked
	  Window    mnuWindow   No         Checked
	
	7. Choose Done to exit the Menu Design Window. You now have two top-level menus.
	
	8. Add the following code to the Click event of mnuNew menu on MDIForm1.
	
	        Sub mnuNew_Click ()
	          Dim f As New Form1
	          f.Show
	        End Sub
	
	9. Press F5 to run the program.
	
	10. The Window menu will keep track of all the MDIChild windows as long as you
	  do not click Command1 contained in the MDIChild. Once you click on the
	  command button, the Window menu's caption has changed to "Test" and it will
	  no longer list any of the MDIChild windows and you will not receive any
	  click events.
	
	Additional query words: 3.00 buglist3.00
	
	======================================================================
	Keywords          :  
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB300Search kbVB300
	Version           : :3.0
	Issue type        : kbbug
	
	=============================================================================
	
