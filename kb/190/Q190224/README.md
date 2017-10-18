---
layout: page
title: "Q190224: HOWTO: Set a Minimum and Maximum Size for a UserControl"
permalink: kb/190/Q190224/
---

## Q190224: HOWTO: Set a Minimum and Maximum Size for a UserControl

	Article: Q190224
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:5.0
	Operating System(s): 
	Keyword(s): kbcode kbCtrlCreate kbVBp500 kbVBp600 kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you create UserControls in Visual Basic, you may want to limit the size of
	your UserControl. This article shows how to set a minimum and maximum size for
	your UserControl so that a developer who uses the control can't size the control
	past the preset minimum or maximum.
	
	MORE INFORMATION
	================
	
	This example uses a UserControl that is inside a Standard EXE project. You can
	use the same technique for a UserControl in an ActiveX Control project. When the
	ActiveX control is built, anyone using the ActiveX control will not be able to
	size it any larger or smaller then the limits you set inside the UserControl
	itself.
	
	NOTE: This is only intended to work within Visual Basic applications and may not
	work in other containers, such as Microsoft Word or Excel.
	
	Steps to Create Sample Project
	------------------------------
	
	1. Create a new Standard EXE project. Form1 is created by default.
	
	2. Add a UserControl to the Project by clicking Add UserControl on the Projects
	  menu and then clicking Open.
	
	3. Change the BackColor property of the UserControl to a different color, such
	  as red.
	
	4. Add two labels to the UserControl.
	
	5. Add the following code to the code window for the UserControl:
	
	        Private Sub UserControl_Resize()
	        ' Check to see if the control is larger or smaller than the preset
	        ' minimum or maximum size.
	        ' If it is larger or smaller, set the size of the control.
	           Select Case Height
	             Case Is < 2400
	               Height = 2400
	             Case Is > 3600
	               Height = 3600
	           End Select
	
	           Select Case Width
	             Case Is < 2400
	               Width = 2400
	             Case Is > 3600
	               Width = 3600
	           End Select
	          ' The label reports the height and width of the control in
	          ' twips even if the container has a different scalemode.
	          Label1.Caption = "Height: " & Height
	          Label2.Caption = "Width: " & Width
	        End Sub
	
	6. Close the UserControl and it appears in the ToolBox. Place it on Form1.
	
	7. Try resizing the UserControl. If you try to make the control larger or
	  smaller then the limit you set in the Resize event of the UserControl, the
	  control returns to the maximum or minimum size.
	
	(c) Microsoft Corporation 1998, All Rights Reserved. Contributions by Brian
	Combs, Microsoft Corporation
	
	
	======================================================================
	Keywords          : kbcode kbCtrlCreate kbVBp500 kbVBp600 kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600
	Version           : WINDOWS:5.0
	Issue type        : kbhowto
	
	=============================================================================
	
