---
layout: page
title: "Q99629: Values Returned by UDFs Cannot Be Centered in a Report"
permalink: /kb/099/Q99629/
---

## Q99629: Values Returned by UDFs Cannot Be Centered in a Report

	Article: Q99629
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:2.5,2.5a,3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	- Microsoft FoxPro for Windows, versions 2.5, 2.5a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	A user-defined function (UDF) can be used to return values to a report in FoxPro
	for Windows. A UDF function call is implemented in a report as a field
	expression. Because it is a field expression, the function call can be formatted
	using normal formatting procedures. However, a UDF call cannot be centered
	within a field in a report created with the Report Writer in FoxPro for Windows
	unless you choose Text Alignment, then Center, from the Object menu.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	A UDF function call can appear as a field expression within a report. However,
	the results returned by the function call cannot be centered like field
	expressions can. For example, do the following:
	
	1. Use the INVOICES database in the TUTORIAL subdirectory of FoxPro for Windows.
	
	2. Create a quick report based on this database.
	
	3. Place a 25-character-wide field within the report with the UDF call TEST() as
	  the field expression.
	
	4. Under FORMAT for the field choose CENTER from the Editing options.
	
	5. Save and close the report.
	
	6. Create a program called TEST in this same directory. The only line in this
	  program will be:
	
	  RETURN "HELLO WORLD!"
	
	7. Now print or preview the report.
	
	  The field will be left-justified within the field expression even though the
	  Center format was chosen.
	
	To center this UDF call within the report, do the following:
	
	1. Select the UDF expression within the report.
	
	2. From the Object menu, choose Text Alignment, then choose Center.
	
	When the report is printed or previewed, the UDF return value will be centered
	within the field expression instead of being left-justified.
	
	Additional query words: VFoxWin FoxWin 2.50 CENTER UDF RWriter
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbFoxproSearch kbFoxPro250 kbFoxPro250a kbVFP300
	Version           : WINDOWS:2.5,2.5a,3.0
	
	=============================================================================
	
