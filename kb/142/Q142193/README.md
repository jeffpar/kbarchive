---
layout: page
title: "Q142193: HOWTO: Use OLE Automation to Add Data to Excel Sheet"
permalink: /kb/142/Q142193/
---

## Q142193: HOWTO: Use OLE Automation to Add Data to Excel Sheet

	Article: Q142193
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b,5.0,6.0
	Operating System(s): 
	Keyword(s): kbcode kbinterop kbExcel kbvfp300 kbvfp500 kbvfp600
	Last Modified: 20-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	OLE Automation provides a way for Visual FoxPro for Windows to interact with
	other OLE-compliant applications. Using OLE, the Visual FoxPro program can start
	a Microsoft Excel session, open a workbook, select a worksheet from the
	workbook, place data into a cell or range of cells, print a worksheet, save the
	updated workbook, and close the Microsoft Excel session. This article shows by
	example how to do just that.
	
	MORE INFORMATION
	================
	
	Step-by-Step Example
	--------------------
	
	1. Open a new workbook in Microsoft Excel 5.0 or Microsoft Excel 7.0 (part of
	  Office 95) or Microsoft Excel 97 (part of Office 97), so that the program
	  example in this article will work.
	
	2. Select sheet 3 by clicking the tab at the bottom of the worksheet, and enter
	  the following data into the spreadsheet:
	
	     Enter         In Cells
	     ----------------------------
	     Part #        A1
	     Sales YTD     B1
	     1             A2 through A4
	     2             A5 through A7
	     3             B2 through B7
	
	3. On the Microsoft Excel Data menu, click Subtotal. The resulting dialog box
	  should show that at each change in Part #, the function 'SUM' adds the
	  subtotal to 'Sales YTD' and display that summary below the data. If so, click
	  OK.
	
	4. Click the tab at the bottom of the worksheet for Sheet 1 to restore the
	  workbook's default page to Sheet 1.
	
	5. Save the workbook. Then close the workbook, and exit from Microsoft Excel.
	  For the following example code, the workbook has been saved as
	
	     C:\XLSheets\Testbook.xls.
	
	6. In Microsoft Visual FoxPro for Windows, create the following program named
	  oleExcel.prg:
	
	  *** Program oleExcel.prg *****
	  #DEFINE xlLandscape 2
	  #DEFINE xlDoNotSaveChanges 2
	
	  DIMENSION laDemoData(4)      && For some Visual FoxPro users, data
	  laDemoData(1)= 1024          && could come from table or view
	  laDemoData(2)= 2048
	  laDemoData(3)= 5120
	  laDemoData(4)= "The Sample Message"
	
	  loExcel = CREATEOBJECT("Excel.application") 
	
	  WITH loExcel
	     .Application.Workbooks.Open("C:\XLSheets\testbook.xls")
	     .Application.Worksheets("Sheet3").Activate  && Select sheet
	     
	     .Range("b2").Value = 14444          && constants as data
	     .Range("b3").Value = 25555
	     .Range("b4").Value = 30001
	
	     .Range("b6").Value = laDemoData(1)  && variables as data
	     .Range("b7").Value = laDemoData(2)
	     .Range("b8").Value = laDemoData(3)
	     .Range("a12").Value = laDemoData(4)
	
	     .Worksheets("Sheet3").PageSetup.Orientation = xlLandscape
	     .ActiveSheet.PrintOut  && Example of printing the worksheet
	
	     .Visible = .t. && See the results
	     =MESSAGEBOX("Click OK to close Excel.") && Keep the program running, 
	                                             && so Excel isn't stranded
	
	     .ActiveWindow.Close(xlDoNotSaveChanges)
	     .Quit()
	  ENDwith
	
	REFERENCES
	==========
	
	Examine the Microsoft Excel Help topic "Application Object" and the many topics
	that are introduced in the Properties and Methods lists of that topic.
	
	For more information about many of the concepts in the example program, please
	see the following articles in the Microsoft Knowledge Base:
	
	  Q139051 HOWTO: Select Cells in Microsoft Excel by Using OLE Automation
	
	  Q132535 PRB: Releasing Object Variable Does Not Close Microsoft Excel
	
	  Q138398 PRB: Release may not Remove OLE Objects from Memory
	
	  Q130809 INFO: KB List: OCX, OLE, ODBC, & 3rd-party Interoperability
	
	Additional query words: Interoperability printing
	
	======================================================================
	Keywords          : kbcode kbinterop kbExcel kbvfp300 kbvfp500 kbvfp600 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP600
	Version           : WINDOWS:3.0,3.0b,5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
