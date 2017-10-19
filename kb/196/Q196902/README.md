---
layout: page
title: "Q196902: BUG: UserControl Does Not Refresh the Menu"
permalink: /kb/196/Q196902/
---

## Q196902: BUG: UserControl Does Not Refresh the Menu

	Article: Q196902
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:5.0,6.0
	Operating System(s): 
	Keyword(s): kbcode kbCtrlCreate kbVBp500bug kbVBp600bug kbGrpDSVB kbCodeSam
	Last Modified: 24-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If a UserControl changes the menu at run time, the menu does not refresh.
	
	RESOLUTION
	==========
	
	You need to set the Enabled property of the UserControl to False, reset it to
	True, and then given it the focus to force a refresh of the menu.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Start a New ActiveX Control Project. UserControl1 is created by default.
	
	2. From the Tools menu, click the Menu Editor. Add the following three menu
	  items:
	
	   - 
	
	   - Caption : Menu1
	   - Name : Menu1
	   - NegotiatePosition = Left
	
	   - 
	
	   - Caption : SubMenu1
	   - Name : SubMenu1
	   - Click the Right Arrow button to make it a SubMenu.
	
	   - 
	
	   - Caption : Menu2
	   - Name : Menu2
	   - NegotiatePostion = Left
	
	3. Add a CommandButton (Command1) to the UserControl. Add the following code to
	  the General Declarations section of UserControl1:
	
	        Private Sub Command1_Click()
	           Menu1.Caption = "Modified"
	        End Sub
	
	4. Close all open windows on Project1.
	
	5. From the File menu, click Add Project to add a New Standard .exe Project.
	  Form1 is created by default.
	
	6. Place an instance of UserControl1 to Form1, and run the project.
	
	7. Click the CommandButton on the UserControl. The caption of Menu1 does not
	  change.
	
	8. To work around the problem replace the code in UserControl1 with the
	  following:
	
	        Private Sub Command1_Click()
	           Menu1.Caption = "Modified"
	           UserControl.Enabled = False
	           UserControl.Enabled = True
	           UserControl.SetFocus
	           DoEvents
	        End Sub
	
	9. Close Project1 and repeat Step 7. The menu caption is updated.
	
	Additional query words: UserControl Menu Refresh
	
	======================================================================
	Keywords          : kbcode kbCtrlCreate kbVBp500bug kbVBp600bug kbGrpDSVB kbCodeSam 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVB500 kbVB600
	Version           : WINDOWS:5.0,6.0
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
