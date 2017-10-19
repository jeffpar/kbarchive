---
layout: page
title: "Q97633: PRB: Alias Problems with Table Name Starting with Number"
permalink: /kb/097/Q97633/
---

## Q97633: PRB: Alias Problems with Table Name Starting with Number

	Article: Q97633
	Product(s): Microsoft FoxPro
	Version(s): MS-DOS:2.6; WINDOWS:2.6,3.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbnokeyword kbvfp300 kbvfp500 kbvfp600
	Last Modified: 03-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 5.0, 6.0 
	- Microsoft FoxPro for MS-DOS, version 2.6 
	- Microsoft FoxPro for Windows, version 2.6 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Giving a table a filename that starts with a number causes a character to appear
	in the selected work area instead of the table name when the table is opened.
	This behavior could cause problems if you use an alias with screens and
	reports.
	
	Below is an example that illustrates how to work around this problem.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Create a new table with two fields.
	
	2. Save the table with the name 2TEST.DBF.
	
	3. In the Command window, type the following and press ENTER:
	
	  "CLOSE ALL" (without the quotation marks)
	
	4. In the Command window, type the following and press ENTER:
	
	  "USE 2TEST" (without the quotation marks)
	
	5. In the Command window, type the following and press ENTER:
	
	  "SET" (without the quotation marks)
	
	The selected work area contains a letter, such as A, for work area 1 instead of
	the table name.
	
	WORKAROUND
	==========
	
	The following procedure causes 2TEST.DBF to be opened with the alias TEST
	instead of a character in the current work area:
	
	1. In the Command window, type the following and press ENTER:
	
	  "fyl=GETFILE('dbf','choose')" (without the quotation marks)
	
	2. Choose the table 2TEST.
	
	3. In the Command window, type the following and press ENTER:
	
	  "USE (fyl) ALIAS test" (without the quotation marks)
	
	Additional query words: alias workarea numeric
	
	======================================================================
	Keywords          : kbnokeyword kbvfp300 kbvfp500 kbvfp600 
	Technology        : kbVFPsearch kbAudDeveloper kbFoxproSearch kbZNotKeyword3 kbFoxPro260DOS kbFoxPro260 kbVFP300 kbVFP500 kbVFP600
	Version           : MS-DOS:2.6; WINDOWS:2.6,3.0,5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	
