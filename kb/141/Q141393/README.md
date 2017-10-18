---
layout: page
title: "Q141393: DOC: Developer's Guide Has Incorrect OLE Automation Syntax"
permalink: kb/141/Q141393/
---

## Q141393: DOC: Developer's Guide Has Incorrect OLE Automation Syntax

	Article: Q141393
	Product(s): Microsoft FoxPro
	Version(s): 3.00
	Operating System(s): 
	Keyword(s): kbdocfix
	Last Modified: 25-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Page 413 of the Visual FoxPro Developer's Guide contains a code error that
	prevents the graph from appearing in the Microsoft Excel spreadsheet.
	
	This documentation error has been fixed in Visual FoxPro 5.0 for Windows.
	
	MORE INFORMATION
	================
	
	The code example should run a SELECT statement, place the values in a Microsoft
	Excel spreadsheet, create a chart, open Word 6.0, and place the chart in the
	Word document. The code error prevents the chart from appearing in Microsoft
	Excel. The program simply halts execution.
	
	The incorrect line of code on page 413 reads:
	
	     oleSheet.ChartObjects(1).Chart.ChartWizard
	      (oleSheet.Range(oleSheet.Cells(1, 1),
	      oleSheet.Cells(10,2)),4100,4,1,0,1,1,"","","","")
	
	NOTE: These three lines of code are actually one line of code in the Developer's
	Guide example.
	
	The number 4100 in the example should read -4100 (negative 4100) to make the code
	example work correctly. The code on page 413 also appears in the Oleaut1.scx
	form, located in the \Sample\Ole directory. In the Click event of the Command1
	object, the example is correct.
	
	Additional query words: docerr VFoxWin 5.00
	
	======================================================================
	Keywords          : kbdocfix 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : 3.00
	
	=============================================================================
	
