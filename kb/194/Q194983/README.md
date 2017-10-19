---
layout: page
title: "Q194983: PRB: Round Function Different in VBA 6 and Excel Spreadsheet"
permalink: /kb/194/Q194983/
---

## Q194983: PRB: Round Function Different in VBA 6 and Excel Spreadsheet

	Article: Q194983
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:6.0,97
	Operating System(s): 
	Keyword(s): kbVBp600 kbGrpDSVBDB kbExcel97 kbVBA600
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	- Microsoft Excel 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When using the Round() function in Visual Basic 6.0, a different result may be
	returned than when using it in a cell formula of an Excel spreadsheet.
	
	CAUSE
	=====
	
	The VBA Round() function uses Banker's rounding while the spreadsheet cell
	function uses arithmetic rounding.
	
	RESOLUTION
	==========
	
	Write a custom function to get the desired results.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	The Round() function in an Excel spreadsheet uses Arithmetic rounding, which
	always rounds .5 up (away from 0). The Round() function in Visual Basic for
	Applications 6, uses Banker's rounding, which rounds .5 either up or down,
	whichever will result in an even number.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. In Excel, open a new spreadsheet and type the following formula into one of
	  the cells:
	
	         =Round(2.5, 0)
	
	2. The result is 3.
	
	3. In Visual Basic 6.0 or other applications using VBA 6, open a new project and
	  type the following expression into the Debug or Immediate window:
	
	        ? Round(2.5, 0)
	
	4. The result is 2.
	
	REFERENCES
	==========
	
	For additional information on rounding, click the article number below to view
	the article in the Microsoft Knowledge Base:
	
	  Q196652 HOWTO: Implement Custom Rounding Procedures
	
	(c) Microsoft Corporation 1998, All Rights Reserved.
	Contributions by Malcolm Stewart, Microsoft Corporation
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbVBp600 kbGrpDSVBDB kbExcel97 kbVBA600 
	Technology        : kbVBSearch kbExcelSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVBA600 kbVB600 kbExcel97Search kbZNotKeyword3
	Version           : WINDOWS:6.0,97
	Issue type        : kbprb
	
	=============================================================================
	
