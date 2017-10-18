---
layout: page
title: "Q105639: WD97: Formula in Table Includes Number from Heading Row"
permalink: kb/105/Q105639/
---

## Q105639: WD97: Formula in Table Includes Number from Heading Row

	Article: Q105639
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbualink97 winword word97 kbtable
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	In Word 97 for Windows, if you have a table that contains a row marked as
	Headings, the formula =SUM(Above) or =AVERAGE(Above) incorrectly includes the
	value from the heading row cell from the first page into the calculation.
	
	This occurs even if the cell in the heading row of the table contains text and a
	number.
	
	CAUSE
	=====
	
	Word includes values from the heading row in the calculation.
	
	MORE INFORMATION
	================
	
	When Word searches for contiguous cells, it starts at the formula cell and
	continues up until it finds the first cell containing a number. It then
	calculates up until it encounters a blank cell, a cell containing text only, or
	a cell containing mixed text and numbers above the last cell that contains a
	number only.
	
	The following are some examples where the formula results are incorrect and
	others where the results are correct.
	
	Sample Table with Formulas
	--------------------------
	
	  ---------------------------------------------------------
	  |      1      |     Two     |    No. 3    |      4      |
	  ---------------------------------------------------------
	  |      2      |      2      |      2      |             |
	  ---------------------------------------------------------
	  |      3      |      3      |   row 3     |      3      |
	  ---------------------------------------------------------
	  |{=SUM(Above)}|{=SUM(Above)}|{=SUM(Above)}|{=SUM(Above)}|
	  ---------------------------------------------------------
	
	Sample Table with Results
	-------------------------
	
	  ---------------------------------------------------------
	  |      1      |     Two     |    No. 3    |      4      |
	  ---------------------------------------------------------
	  |      2      |      2      |      2      |             |
	  ---------------------------------------------------------
	  |      3      |      3      |  row  3     |      3      |
	  ---------------------------------------------------------
	  |      6      |      5      |      8      |      3      |
	  ---------------------------------------------------------
	
	Row 1 of the sample table is formatted as a heading row (select the row and click
	Headings on the Table menu).
	
	Result of row 4, column 1:
	
	- The result of the formula includes the numeric value of the heading for that
	  column.
	
	Result of row 4, column 2:
	
	- The result of the formula includes the set of contiguous cells that contain
	  numeric values.
	
	Result of row 4, column 3:
	
	- The result of the formula includes the numeric value of the heading and the
	  value of row 3, column 3.
	
	  NOTE: The value in a cell containing a numeric value mixed with text is only
	  included with the formula result if Word encounters it before the first cell
	  containing only a number (Word calculates from the formula upwards).
	
	Result of row 4, column 4:
	
	- The result of the formula does not include the heading for that column
	  because there is a blank cell above the last cell containing only numbers.
	
	Additional query words: sum total calculate 8.0 8.00
	
	======================================================================
	Keywords          : kbualink97 winword word97 kbtable 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	
	=============================================================================
	
