---
layout: page
title: "Q192207: BUG: Setting Visible Property Fails on Menu for ActiveX Control"
permalink: /kb/192/Q192207/
---

## Q192207: BUG: Setting Visible Property Fails on Menu for ActiveX Control

	Article: Q192207
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:5.0,6.0
	Operating System(s): 
	Keyword(s): kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Trying to set the Visible property of a UserControl menu fails. There is no
	error message but the visible state does not changes.
	
	RESOLUTION
	==========
	
	Currently, there is no known workaround for this bug.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Start a new Standard EXE project in Visual Basic. Form1 is created by
	  default.
	
	2. From the File menu, add an ActiveX Control project. UserControl1 is created
	  by default.
	
	3. Bring up UserControl1 in the Visual Basic IDE. Select "Menu Editor" from the
	  Tools menu.
	
	4. Add the following menu structure to UserControl1, making sure to uncheck the
	  Visible CheckBox on the Menu Editor:
	
	        Menu1
	        ---Sub1
	        Menu2   (Visible = False)
	        ---Sub2
	
	5. In the Menu Editor, set the NegotiatePosition property to Left for Menu1 and
	  Menu2 (top-level menus).
	
	6. Close the UserControl1 design window, and add an instance of UserControl1 to
	  Form1 of the Standard EXE project.
	
	7. Add the following code to the Form1 module:
	
	        Private Sub Sub1_Click()
	           Menu1.Visible = False
	           Menu2.Visible = True
	        End Sub
	
	        Private Sub Sub2_Click()
	           Menu2.Visible = False
	           Menu1.Visible = True
	        End Sub
	
	8. Save the Project group and run it. Select "Sub1" from the "Menu1" menu. Note
	  that Menu2 does not become visible, nor does Menu1 disappear.
	
	Additional query words: kbDSupport kbDSD kbVBp kbCtrl kbVBp600bug kbVBp500bug kbMenu
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600
	Version           : WINDOWS:5.0,6.0
	Issue type        : kbbug
	
	=============================================================================
	
