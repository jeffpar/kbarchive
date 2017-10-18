---
layout: page
title: "Q192648: FIX: Frame Disappears With Transparent Windowless Control"
permalink: kb/192/Q192648/
---

## Q192648: FIX: Frame Disappears With Transparent Windowless Control

	Article: Q192648
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbCtrlCreate kbVBp kbVBp600bug kbGrpDSVB kbVS600sp3fix
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When adding a transparent, windowless UserControl to a standard Frame control in
	Visual Basic 6.0, the border and caption of the Frame control might disappear in
	both the IDE and at run-time.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	This bug was corrected in Visual Studio 6.0 Service Pack 3.
	
	For more information about Visual Studio service packs, please see the following
	articles in the Microsoft Knowledge Base:
	
	Q194022 INFO: Visual Studio 6.0 Service Packs, What, Where, Why
	
	Q194295 HOWTO: Tell That Visual Studio 6.0 Service Packs Are Installed
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new Standard EXE project. Form1 is created by default.
	
	2. Add a new UserControl from the Project menu. Set the BackStyle property to
	  Transparent and the Windowless property to True.
	
	3. Place a Shape control on the UserControl, then add the following code to the
	  UserControl's code window:
	
	        Private Sub UserControl_Initialize()
	           Shape1.BackStyle = 1 'Opaque
	           Shape1.Shape = 2 'Oval
	        End Sub
	
	        Private Sub UserControl_Resize()
	           Shape1.Move 0, 0, UserControl.Width, UserControl.Height
	        End Sub
	
	4. Close the UserControl designer.
	
	5. Add a Frame control to Form1.
	
	6. Add your UserControl to Frame1.
	
	7. Press the F5 key to run the program and note that the border and caption of
	  the frame control disappear.
	
	REFERENCES
	==========
	
	For additional information, please see the following articles in the Microsoft
	Knowledge Base:
	
	Q188234 PRB: Cannot Move Windowless Controls on Form
	
	Q188544 BUG: Transparent Windowless UserControl Cannot Be Dragged
	
	Additional query words:
	
	======================================================================
	Keywords          : kbCtrlCreate kbVBp kbVBp600bug kbGrpDSVB kbVS600sp3fix 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVBA600 kbVB600
	Version           : WINDOWS:6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
