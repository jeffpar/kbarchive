---
layout: page
title: "Q186429: HOWTO: Create Scrollable Viewports"
permalink: kb/186/Q186429/
---

## Q186429: HOWTO: Create Scrollable Viewports

	Article: Q186429
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:4.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbCtrl kbVBp400 kbVBp500 kbDSupport
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article demonstrates how you can create a scrollable viewport by using the
	properties of two picture box controls. You can use this information to display
	pictures that are larger than your default form size.
	
	MORE INFORMATION
	================
	
	This article assumes that you are familiar with using the picture box control.
	To create a scrollable viewport, you will need a picture box control inside
	another picture box control. The outside picture box control acts as a
	stationary parent picture box control. The inside picture box becomes the
	movable child picture box control within the boundaries of the parent picture
	box.
	
	When you move the child picture box control during run-time, a clipping effect
	bound by the parent picture control is created.
	
	The next section shows you how to create a sample project that demonstrates how
	to create a movable viewport. The sample requires a picture image, such as the
	bitmap files stored in the following directory:
	
	  c:\Program Files\DevStudio\VB\samples\PGuide\Optimize
	
	Steps to Create Sample Project
	------------------------------
	
	1. Start a new Standard EXE project in Visual Basic. Form1 is created by
	  default.
	
	2. Add two Picture boxes to Form1. Make sure that Picture2 is sited inside
	  Picture1.
	
	3. Add a horizontal scroll bar and a vertical scroll bar to Form1.
	
	4. Copy the following code to the Code window of Form1.
	
	  NOTE: Add the path and filename to your picture file in the appropriate
	  section of the Form_Load event:
	
	        Option Explicit
	
	        Private Sub Form_Load()
	
	           Picture1.Move 0, 0, ScaleWidth - VScroll1.Width, _
	                                ScaleHeight - HScroll1.Height
	
	           With Picture2
	              ' Expand the boundaries of Picture2 picture box to the size
	              ' of the actual bitmap.
	              .AutoSize = True
	
	              ' Enter the path and file name as the argument to the
	              ' LoadPicture method.
	              .Picture = LoadPicture("splash.bmp")
	
	              ' Initialize location of both pictures.
	              .Move 0, 0
	           End With
	
	           ' Position the horizontal scroll bar.
	           With HScroll1
	              .Top = Picture1.Height
	              .Left = 0
	              .Width = Picture1.Width
	           End With
	
	           ' Position the vertical scroll bar.
	           With VScroll1
	              .Top = 0
	              .Left = Picture1.Width
	              .Height = Picture1.Height
	           End With
	
	           ' Set the Max value for the scroll bars.
	           HScroll1.Max = Picture2.Width - Picture1.Width
	           VScroll1.Max = Picture2.Height - Picture1.Height
	           HScroll1.LargeChange = HScroll1.Max / 10
	           VScroll1.LargeChange = VScroll1.Max / 10
	           HScroll1.SmallChange = HScroll1.Max / 25
	           VScroll1.SmallChange = VScroll1.Max / 25
	
	           ' Determine if child picture will fill up screen.
	           ' If so, then there is no need to use scroll bars.
	
	           VScroll1.Visible = (Picture1.Height < Picture2.Height)
	           HScroll1.Visible = (Picture1.Width < Picture2.Width)
	        End Sub
	
	        Private Sub HScroll1_Change()
	          ' Picture2.Left is set to the negative of the value because
	          ' as you scroll the scroll bar to the right, the display
	          ' should move to the Left, showing more of the right
	          ' of the display, and vice-versa when scrolling to the
	          ' left.
	
	           Picture2.Left = -HScroll1.Value
	
	        End Sub
	
	        Private Sub VScroll1_Change()
	          ' Picture2.Top is set to the negative of the value because
	          ' as you scroll the scroll bar down, the display
	          ' should move up, showing more of the bottom
	          ' of the display, and vice-versa when scrolling up.
	
	          Picture2.Top = -VScroll1.Value
	
	        End Sub
	
	        Private Sub Form_Resize()
	           ' The Picture1 picture box dimensions are changed when the form
	           ' size is changed.
	           With Picture1
	              .Height = Form1.Height
	              .Width = Form1.Width
	           End With
	
	           ' Re-Initializes picture positions & scroll bars.
	           Picture1.Move 0, 0, ScaleWidth - VScroll1.Width, _
	                             ScaleHeight - HScroll1.Height
	           Picture2.Move 0, 0
	
	           With HScroll1
	              .Top = Picture1.Height
	              .Left = 0
	              .Width = Picture1.Width
	              .Max = Picture2.Width - Picture1.Width
	           End With
	
	           With VScroll1
	              .Top = 0
	              .Left = Picture1.Width
	              .Height = Picture1.Height
	              .Max = Picture2.Height - Picture1.Height
	           End With
	
	           ' Checks to see if scroll bars are needed
	           VScroll1.Visible = (Picture1.Height < Picture2.Height)
	           HScroll1.Visible = (Picture1.Width < Picture2.Width)
	        End Sub
	
	5. On the Run menu, click Start or press the F5 key to start the program. If you
	  do not see any scroll bars, reduce the size of the form until you see the
	  scroll bars.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbCtrl kbVBp400 kbVBp500 kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600 kbVB400Search kbVB400 kbVB16bitSearch
	Version           : WINDOWS:4.0,5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
