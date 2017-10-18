---
layout: page
title: "Q181359: BUG: Pop-up Menu Click Event Does Not Execute in an MDI Program"
permalink: kb/181/Q181359/
---

## Q181359: BUG: Pop-up Menu Click Event Does Not Execute in an MDI Program

	Article: Q181359
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:5.0
	Operating System(s): 
	Keyword(s): kbVBp500 kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 5.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An active child menu displays a top-level menu from the MDI form using the
	Popupmenu method. When you click the top-level menu item from the MDI form, the
	click event does not execute.
	
	RESOLUTION
	==========
	
	Use a second, invisible form to store the menu. Use the Popupmenu method to show
	the menu items from the invisible form. The MORE INFORMATION section in this
	article shows how to create a sample project that demonstrates this workaround.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this bug and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	
	MORE INFORMATION
	================
	
	The following section shows how to create a sample project that demonstrates
	this behavior and the workaround. The sample project contains two forms and one
	MDI form.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Start a new Standard EXE project in Visual Basic. Form1 is created by
	  default.
	
	2. Set the Form1 form MDIChild property to True. Use the Menu Editor to add one
	  top-level menu containing two sub-menus to the Form1 form. Set the menu
	  properties to the following:
	
	     Menu Type     Name            Caption
	     ---------------------------------------------------------
	     Top Level     mnuForm1        MDI Child Form Menu
	     Sub Menu      mnuForm1Sub1    Bug Behavior
	     Sub Menu      mnuForm1Sub2    Workaround Behavior
	
	3. Add an MDI Form to the project. MDIForm1 is created by default. Use the Menu
	  Editor to add one top-level menu containing one sub-menu to the MDIForm1
	  form. Set the menu properties to the following:
	
	     Menu Type     Name            Caption
	     ----------------------------------------------------------
	     Top Level     mnuMDIForm      MDI Menu
	     Sub Menu      mnuMDIFormSub1  Display MDI SubMenu1 Message
	
	4. Add a second form to the project. Form2 is created by default. Set the Form2
	  Visible property to False. Use the Menu Editor to add one top- level menu
	  containing one sub-menu to the Form2 form. Set the menu properties to the
	  following:
	
	     Menu Type     Name            Caption
	     --------------------------------------------------
	     Top Level     mnuForm2        Hidden Form Menu
	     Sub menu      mnuForm2Sub1    Display Hidden Form SubMenu
	
	5. Copy the following code to the Code window of the Form1 form:
	
	        Private Sub mnuForm1Sub1_Click()
	           MDIForm1.PopupMenu MDIForm1.mnuMDIForm
	        End Sub
	
	        Private Sub mnuForm1Sub2_Click()
	           MDIForm1.PopupMenu Form2.mnuForm2
	        End Sub
	
	6. Copy the following code to the Code window of the Form2 form:
	
	        Private Sub mnuForm2Sub1_Click()
	           MsgBox "This is from the Hidden form sub menu."
	        End Sub
	
	7. Copy the following code to the Code window of the MDIForm1 form:
	
	        Private Sub mnuMDIFormSub1_Click()
	           MsgBox "This is from SubMenu1 of the MDI Form"
	        End Sub
	
	8. On the Run menu, click Start or press the F5 key to start the program. The
	  Form1 menu appears in the menu bar of the MDI form. From the ChildMenu menu,
	  click Bug Behavior. The menu from the MDI form displays as a pop-up menu.
	  Click Display MDI SubMenu1 Message.
	
	  BUG: The click event does not execute. The expected behavior is that a message
	  box should appear.
	
	  To see the workaround, click the Workaround Behavior from the ChildMenu menu.
	  The menu from the Form2 form displays as a pop-up menu. Click Display Hidden
	  Form SubMenu. A message box appears.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbVBp500 kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVBA500 kbVB500
	Version           : WINDOWS:5.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
