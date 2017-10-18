---
layout: page
title: "Q177740: FIX: Scale Method Results in a Number of Blank Pages Printed"
permalink: kb/177/Q177740/
---

## Q177740: FIX: Scale Method Results in a Number of Blank Pages Printed

	Article: Q177740
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 5.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Scale method of the Printer object prints a number of blank pages when the
	Scale values are set so that the first Y-coordinate value is greater than the
	second Y-coordinate value.
	
	RESOLUTION
	==========
	
	To work around this bug, set Y-coordinate values in the Scale method so the
	first Y-coordinate is less than the second Y-coordinate.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug has been fixed in Visual Basic 6.0.
	
	MORE INFORMATION
	================
	
	This section shows you how to reproduce this bug.
	
	NOTE: Set your default printer to print to a file if you want to reproduce this
	bug. Sending the output to a printer may result in many blank pages.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Start a new Standard EXE project in Visual Basic. Form1 is created by
	  default.
	
	2. Add two CommandButtons to Form1.
	
	3. Copy the following code to the Code window of Form1:
	
	        Option Explicit
	
	        Dim intCounter As Integer
	
	        Private Sub Form_Load()
	           Command1.Caption = "Demonstrate the Problem"
	           Command2.Caption = "Demonstrate the Expected Behavior"
	        End Sub
	
	        Private Sub Command1_Click()
	        'This button demonstrates the problem.
	
	           Printer.Scale (0, 250)-(140, 0)  'Y-Coordinate is descending
	           Printer.Print " "
	
	           For intCounter = 1 To 100
	              Printer.Print "Item #" & intCounter
	           Next intCounter
	
	           MsgBox "# Pages : " & Printer.Page
	
	           Printer.EndDoc
	
	        End Sub
	
	        Private Sub Command2_Click()
	        'This button demonstrates the expected behavior
	
	           Printer.Scale (0, 0)-(140, 250)  'Y-Coordinate is ascending
	           Printer.Print " "
	
	           For intCounter = 1 To 100
	              Printer.Print "Item #" & intCounter
	           Next intCounter
	
	           MsgBox "# Pages : " & Printer.Page
	
	           Printer.EndDoc
	
	        End Sub
	
	4. Press the F5 key to run the program. Click Expected Behavior to determine how
	  many pages are printed. Click Bug Behavior and note that the number of pages
	  printed exceed that of the Expected Behavior button.
	
	Additional query words: print job blank pages kbVBp500bug kbVBp600fix kbVBp kbdsd kbDSupport kbPrinting (c) Microsoft Corporation 1997, All Rights Reserved. Contributions by Arsenio Locsin, Microsoft Corporation
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVBA500 kbVB500
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
