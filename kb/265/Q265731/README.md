---
layout: page
title: "Q265731: HOWTO: Automate Excel 2000 Subtotals Function in Visual FoxPro"
permalink: kb/265/Q265731/
---

## Q265731: HOWTO: Automate Excel 2000 Subtotals Function in Visual FoxPro

	Article: Q265731
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:2000,6.0
	Operating System(s): 
	Keyword(s): kbole kbExcel kbvfp600 kbGrpDSFox kbDSupport kbexcel2000 kbCodeSnippet
	Last Modified: 12-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft Excel provides a useful function called Subtotals, which you may
	automate with Microsoft Visual FoxPro. The Subtotals function allows you to
	choose groups and columns to subtotal. The following example shows how to
	automate the Excel 2000 Subtotals function.
	
	MORE INFORMATION
	================
	
	Follow these steps to run the example:
	
	1. Create a new Visual FoxPro program.
	
	2. Paste the following sample code into the Visual FoxPro program created in
	  step 1:
	
	  #DEFINE xlsum -4157
	
	  *!* Create a reference to an Excel OLE object
	  oExcel = CREATEOBJECT("Excel.application")  
	
	  With oExcel
	  *!* Add a new workbook
	  	.application.workbooks.Add
	
	  *!* Make Excel visible
	      .Visible = .T.
	
	  *!* Add records to workbook
	  	.Range("A1").Value = "Company"
	  	.Range("B1").Value = "Number Sold"
	  	.Range("C1").Value = "Paid 30+"
	  	.Range("D1").Value = "Paid 60+"
	
	  	.Range("A2").Value = "AAA"
	  	.Range("B2").Value = "1"
	  	.Range("C2").Value = "1"
	  	.Range("D2").Value = "0"
	  		
	  	.Range("A3").Value = "AAA"
	  	.Range("B3").Value = "2"
	  	.Range("C3").Value = "0"
	  	.Range("D3").Value = "1"
	  		
	  	.Range("A4").Value = "BBB"
	  	.Range("B4").Value = "3"
	  	.Range("C4").Value = "1"
	  	.Range("D4").Value = "0"
	  		
	  	.Range("A5").Value = "BBB"
	  	.Range("B5").Value = "4"
	  	.Range("C5").Value = "1"
	  	.Range("D5").Value = "0"
	
	  *!*	Select cells 	
	  	.Range("A1:D5").Select  
	
	  	oSelected = .Selection
	
	  EndWith
	
	  *!* Insure array is 1 based
	  COMARRAY(oSelected, 11) 
	
	  *!* Create a FoxPro array to hold columns to be subtotaled
	  *!* Choose columns two and four to subtotal
	  LOCAL ARRAY laArray(2) 
	  laArray(1) = 2
	  laArray(2) = 4
	
	  *!* Call the subtotal function
	  oSelected.Subtotal(1, xlsum, @laArray, .T., .F., .T.)  
	
	3. Save and run the program.
	
	Results
	
	You will note the following:
	
	- An Excel worksheet is created.
	
	- The worksheet is populated with data.
	
	- Visual FoxPro creates an array and fills it with the columns you want to
	  subtotal.
	
	- The Subtotal function runs, which sums columns two and four.
	
	REFERENCES
	==========
	
	For additional information about Office Automation, click the article numbers
	below to view the articles in the Microsoft Knowledge Base:
	
	  Q222101 HOWTO: Find and Use Office Object Model Documentation
	
	  Q148474 Ole_samp.exe to Microsoft Excel, Word, & PowerPoint
	
	  Q252615 OLE Examples for Taking Control of Excel from Visual FoxPro
	
	Additional query words: office excel automation
	
	======================================================================
	Keywords          : kbole kbExcel kbvfp600 kbGrpDSFox kbDSupport kbexcel2000 kbCodeSnippet 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : WINDOWS:2000,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
