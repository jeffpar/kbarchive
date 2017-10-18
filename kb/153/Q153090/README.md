---
layout: page
title: "Q153090: HOWTO: Pass a Visual Basic Array to an Excel Worksheet"
permalink: kb/153/Q153090/
---

## Q153090: HOWTO: Pass a Visual Basic Array to an Excel Worksheet

	Article: Q153090
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:4.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbinterop kbVBp kbVBp400 kbVBp500 kbVBp600 kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	- Microsoft Visual Basic Control Creation Edition for Windows, version 5.0 
	- Microsoft Visual Basic Learning Edition for Windows, version 5.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	One of the enhancements of Visual Basic is the ability to pass an array of
	values to a Microsoft Excel spreadsheet with a single command. This is done by a
	simple assignment of an array to a Microsoft Excel range.
	
	MORE INFORMATION
	================
	
	Step-by-Step Example
	--------------------
	
	Method 1:
	
	1. Start a new project. Form1 is created by default.
	
	2. Place a Command button on the form.
	
	3. Add the following code to the Form1 code window:
	
	        Option Explicit
	
	        Private Sub Command1_Click()
	          Dim o As Object
	          Dim i As Integer
	          Dim iNumbers(1 To 10) As Integer
	          For i = LBound(iNumbers) To UBound(iNumbers)
	            iNumbers(i) = Int(Rnd * 100) + 1
	          Next i
	          Set o = CreateObject("excel.application")
	          o.Visible = True
	          o.Workbooks.Add
	          o.sheets("sheet1").Range("A1:J1").Value = iNumbers
	        End Sub
	
	4. Press the F5 key or select Start from the Run menu to start the program. You
	  should see a new instance of Microsoft Excel created with the first row of
	  the sheet populated with random numbers.
	
	Method 2:
	
	The code sample above uses a hard-coded range. You can change the UBound of the
	Array making your code more flexible so you can specify the Starting column and
	Row for output on the spreadsheet. The array will then be entered irrespective
	of its size. Instead of simply using the range object, you incorporate the cells
	object to build up the relevant strings. To implement this behavior, use the
	following code:
	
	     Private Sub Command1_Click()
	       Dim o As Object
	       Dim i As Integer
	       Dim iNumbers(1 To 10) As Integer
	       Dim iStartRow As Integer
	       Dim iStartCol As Integer
	       iStartRow = 1
	       iStartCol = 1
	       For i = LBound(iNumbers) To UBound(iNumbers)
	         iNumbers(i) = Int(Rnd * 100) + 1
	       Next i
	       Set o = CreateObject("excel.application")
	       o.Visible = True
	       o.Workbooks.Add
	       o.sheets("sheet1").range(o.cells(iStartRow, iStartCol).address, _
	         o.cells(iStartRow, ((iStartCol - 1) + _
	         UBound(iNumbers))).address).Value = iNumbers
	     End Sub
	
	Additional query words:
	
	======================================================================
	Keywords          : kbinterop kbVBp kbVBp400 kbVBp500 kbVBp600 kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500Search kbVBA500 kbVBA600 kbVB500 kbVB600 kbVB400Search kbVB400 kbZNotKeyword3 kbVB16bitSearch
	Version           : WINDOWS:4.0,5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
