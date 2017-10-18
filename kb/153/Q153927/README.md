---
layout: page
title: "Q153927: HOWTO: Create Pie Charts Using the Circle Method in VB"
permalink: kb/153/Q153927/
---

## Q153927: HOWTO: Create Pie Charts Using the Circle Method in VB

	Article: Q153927
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:4.0
	Operating System(s): 
	Keyword(s): kbgraphic kbprogramming kbVBp400
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Pinnacle-BPS Graph control shipping with Visual Basic gives users the
	ability to create pie charts. The Pinnacle-BPS is a relatively large control and
	uses a large amount of disk space on distribution disks. Therefore, the custom
	effects available are limited to the features of the control. The Circle method
	in the VBA language provides functionality to draw arcs and segments. By drawing
	segments, you can easily create a pie chart and add custom features as you
	require. Below is a code sample demonstrating how to do this.
	
	MORE INFORMATION
	================
	
	1. Start a new Visual Basic project. Form1 is created by default.
	
	2. Place a Command button on the form.
	
	3. Place a 200x200 pixel Picture box on the form.
	
	4. Add the following code to the Form1 code window:
	
	        Option Explicit
	
	        Public Sub DrawPiePiece(lColor As Long, fStart As Double, fEnd As
	        Double)
	          Const PI As Double = 3.14159265359
	          Const CircleEnd As Double = -2 * PI
	          Dim dStart As Double
	          Dim dEnd As Double
	          Picture1.FillColor = lColor
	          Picture1.FillStyle = 0
	          dStart = fStart * (CircleEnd / 100)
	          dEnd = fEnd * (CircleEnd / 100)
	          Picture1.Circle (100, 100), 60, , dStart, dEnd
	        End Sub
	
	        Private Sub Command1_Click()
	          Picture1.ScaleMode = vbPixels
	          Call DrawPiePiece(QBColor(1), 0.001, 36)
	          Call DrawPiePiece(QBColor(2), 36, 55)
	          Call DrawPiePiece(QBColor(3), 55, 75)
	          Call DrawPiePiece(QBColor(4), 75, 99.999)
	        End Sub
	
	5. Press the F5 key to run the project. You should see a pie chart being drawn
	  with four sections mirroring the four times that the DrawPiece routine was
	  called in the Command1_Click event.
	
	
	REFERENCES
	==========
	
	For more information, please see the following articles in the Microsoft
	Knowledge Base:
	
	  Q83906 How to Draw an Ellipse with Circle Statement in VB
	
	  Q73280 Overflow in VB Drawing Circle Segment w/ Radius of Zero
	
	Instead of using the Circle method in the VBA language, you can also use the
	Win16/Win32 API Call to achieve the same result.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbgraphic kbprogramming kbVBp400 
	Technology        : kbVBSearch kbAudDeveloper kbVB400Search kbVB400 kbVB16bitSearch
	Version           : WINDOWS:4.0
	Issue type        : kbhowto
	
	=============================================================================
	
