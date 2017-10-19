---
layout: page
title: "Q178166: FIX: GeoFacts Sample Causes Type Mismatch Error with Excel 97"
permalink: /kb/178/Q178166/
---

## Q178166: FIX: GeoFacts Sample Causes Type Mismatch Error with Excel 97

	Article: Q178166
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:5.0; :
	Operating System(s): 
	Keyword(s): kbAutomation kbVBp kbVBp500bug kbVBp600fix kbGrpDSVB kbExcel97
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, version 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	- Microsoft Excel 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The GeoFacts.vbp sample project that ships with Visual Basic 5.0 fails with the
	following run-time error when run on a machine that has Excel 97 for Windows
	installed:
	
	  Run-time error '13':
	  Type mismatch
	
	This error does not occur on a machine that has Excel 95 for Windows installed.
	
	CAUSE
	=====
	
	The Type Mismatch error occurs on the following line of code:
	
	     Set shtWorld = GetObject("world.xls")
	
	The GetObject function, when passing a workbook file argument, returns a
	Worksheet object when using Excel 95 but returns a Workbook object when using
	Excel 97. The Type Mismatch error occurs because the shtWorld variable is
	declared as Excel.Worksheet, which is not compatible with a Workbook object.
	
	RESOLUTION
	==========
	
	To make the project compatible with Excel 97 for Windows, you must change the
	following line of code (located in the General Declarations section of
	Module1):
	
	     Public shtWorld As Excel.Worksheet
	
	to:
	
	     Public shtWorld As Excel.Workbook
	
	  -or-
	
	     Public shtWorld As Object
	
	NOTE: Declaring the variable as Object allows the project to run with both Excel
	95 and Excel 97.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug has been fixed in Visual Basic 6.0.
	
	MORE INFORMATION
	================
	
	The GeoFacts.vbp sample project was designed for Excel 95. However, you can
	write your automation code so that it is compatible with both Microsoft Excel 95
	and Microsoft Excel 97. See the REFERENCES section below for more information.
	
	REFERENCES
	==========
	
	For more information regarding how to make automation code compatible with
	multiple versions of Excel please see the following articles in the Microsoft
	Knowledge Base:
	
	  Q143461 XL97: CreateObject and GetObject Work Differently
	
	  Q178167 GeoFacts Sample Causes Automation Error on NT
	
	Additional query words: Excel
	
	======================================================================
	Keywords          : kbAutomation kbVBp kbVBp500bug kbVBp600fix kbGrpDSVB kbExcel97 
	Technology        : kbVBSearch kbExcelSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVBA500 kbVB500 kbExcel97Search kbZNotKeyword3
	Version           : WINDOWS:5.0; :
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
