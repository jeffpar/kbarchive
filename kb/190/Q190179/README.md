---
layout: page
title: "Q190179: HOWTO: Change ProgressBar Orientation at Run-Time"
permalink: /kb/190/Q190179/
---

## Q190179: HOWTO: Change ProgressBar Orientation at Run-Time

	Article: Q190179
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When changing the Orientation property of a ProgressBar, the bar changes
	position on the form. If this Orientation is changed at run-time, it could
	overlap other controls or be displayed off the visible portion of the form. This
	article describes how to change the Orientation and keep the control in the same
	position.
	
	MORE INFORMATION
	================
	
	Step-by-Step Example
	--------------------
	
	1. Start a new Visual Basic project. Form1 is created by default.
	
	2. Select Components from the Project menu. Check "Microsoft Windows Common
	  Controls 6.0" and click OK.
	
	3. Add a Progress Bar, ProgessBar1, to Form1.
	
	4. Add a CommandButton, Command1, to Form1.
	
	5. Add the following code to Form1's code window:
	
	        Private Sub Command1_Click()
	           Dim iWidth As Integer
	           Dim iHeight As Integer
	           Dim iLeft As Integer
	           Dim iTop As Integer
	
	           ' Store the current position
	           iWidth = ProgressBar1.Width
	           iHeight = ProgressBar1.Height
	           iLeft = ProgressBar1.Left
	           iTop = ProgressBar1.Top
	
	           ' This only works with Smooth Scrolling
	           ProgressBar1.Scrolling = ccScrollingSmooth
	
	           ' Change the Orientation to the opposite
	           If ProgressBar1.Orientation = ccOrientationVertical Then
	               ProgressBar1.Orientation = ccOrientationHorizontal
	           Else
	               ProgressBar1.Orientation = ccOrientationVertical
	           End If
	
	           ' Reset the new position with the old position
	           ProgressBar1.Width = iWidth
	           ProgressBar1.Height = iHeight
	           ProgressBar1.Left = iLeft
	           ProgressBar1.Top = iTop
	
	           DoEvents
	           Form1.Refresh
	           ProgressBar1.Value = 0
	           ProgressBar1.Max = 1000
	           For i = 1 To 1000
	               ProgressBar1.Value = i
	           Next i
	        End Sub
	
	6. Run the Project and click Command1 multiple times to see vertical and
	  horizontal scrolling.
	
	Additional query words: kbControl kbVBp kbdsd kbDSupport kbVBp600
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVBA600 kbVB600
	Version           : WINDOWS:6.0
	Issue type        : kbhowto
	
	=============================================================================
	
