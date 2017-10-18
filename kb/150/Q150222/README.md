---
layout: page
title: "Q150222: BUG: Graph Control Does Not Print When DrawMode Is Set to 5"
permalink: kb/150/Q150222/
---

## Q150222: BUG: Graph Control Does Not Print When DrawMode Is Set to 5

	Article: Q150222
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbVBp400bug kbVBp500bug
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Control Creation Edition for Windows, version 5.0 
	- Microsoft Visual Basic Learning Edition for Windows, version 5.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If the DrawMode property of the Graph control is set to 5 when an application is
	running on Windows 95, nothing is printed. Under Windows NT, printing is not
	reliable either.
	
	RESOLUTION
	==========
	
	Use the PaintPicture method to print out the graph. The following code enables
	the graph to print out consistently:
	
	     Printer.PaintPicture Graph1.Picture, Printer.Width / 4, _
	      Printer.Height / 4, Printer.Width / 2, Printer.Height / 2
	     Printer.EndDoc
	
	With the code above, the upper left-hand corner of the graph is positioned a
	quarter of the width of the paper across and down from the upper-left hand
	corner of the paper. The graph is made half as high and half as tall as the
	paper.
	
	For additional options, please see the online Help for the PaintPicture method.
	
	STATUS
	======
	
	Microsoft has confirmed this to be an issue in the Microsoft products listed at
	the beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Start a new project in Visual Basic. Form1 is created by default.
	
	2. Place a Graph control on Form1.
	
	3. Place a Command button on Form1, and in the Click event for the Command
	  button, place the following code:
	
	        Private Sub Command1_Click()
	           Graph1.DrawMode = 5
	        End Sub
	
	Run the program by pressing the F5 key and press the Command button to print out
	the graph. The graph on the screen changes shading temporarily, but there is no
	print-out.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbVBp400bug kbVBp500bug 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVBA500Search kbVBA500 kbVB500 kbVB400Search kbVB400 kbZNotKeyword3
	Version           : 4.0
	Issue type        : kbbug
	
	=============================================================================
	
