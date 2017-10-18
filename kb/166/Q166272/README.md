---
layout: page
title: "Q166272: WD97: Incorrect Total When Table Has More Than 85 Rows"
permalink: kb/166/Q166272/
---

## Q166272: WD97: Incorrect Total When Table Has More Than 85 Rows

	Article: Q166272
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbusage kbdta kbfield kbtablekbfaq
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you update a formula field in a table, the result is incorrect if the
	following are true:
	
	- The number of summed rows in the table is greater than 85.
	
	  -and-
	
	- The range specified in the formula is (ABOVE) or (BELOW).
	
	NOTE: The SUM and COUNT formulas can use the (ABOVE) and (BELOW) ranges.
	
	When you use a Visual Basic for Applications procedure that uses the AutoSum
	Method to insert the formula field, the following error appears in place of the
	formula field when the number of summed rows total more than 85:
	
	  !Unexpected End of Formula
	
	CAUSE
	=====
	
	This problem occurs when a finite length string is overrun because too many
	cells are referenced in the formula. The field =Sum(Above) is translated to
	=Sum(a1+b1+c1...) and eventually it gets too long for the string.
	
	
	WORKAROUND
	==========
	
	Use one of the following methods to workaround this problem:
	
	Method 1  - Specify a range cell reference in the formula
	---------------------------------------------------------
	
	1. On the Tools menu, click Options, and then click the View tab.
	
	2. Under Show, click to select the Field Codes check box.
	
	3. Click OK.
	
	  The formula field looks similar to the following:
	
	  {=Sum(Above)}
	
	4. Type a cell reference in the field. Change your field so that it looks
	  similar to the following:
	
	  {=Sum(A1:A87)}
	
	  where A1 and A87 represent the first and last cells in the range.
	
	5. Press F9.
	
	  The field updates.
	
	6. On the Tools menu, click Options, and then click the View tab.
	
	7. Under Show, click to clear the Field Codes check box.
	
	8. Click OK.
	
	Method 2
	--------
	
	Create subtotals, and then reference the subtotals to create a grand total.
	
	Method 3
	--------
	
	Use Excel to calculate totals.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	This problem was corrected in Word 2000.
	
	MORE INFORMATION
	================
	
	For additional information on the Formula field, please see the following
	article in the Microsoft Knowledge Base:
	
	  Q185400 WD97: How to Set Up a Table as a Spreadsheet in Word
	
	Additional query words: 8.0
	
	======================================================================
	Keywords          : kbusage kbdta kbfield kbtable kbfaq
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Hardware          : x86
	Issue type        : kbbug
	
	=============================================================================
	
