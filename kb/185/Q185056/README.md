---
layout: page
title: "Q185056: WD97: Incorrect Formula Results Using ABOVE, BELOW, LEFT, RIGHT"
permalink: kb/185/Q185056/
---

## Q185056: WD97: Incorrect Formula Results Using ABOVE, BELOW, LEFT, RIGHT

	Article: Q185056
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbdta kbformula word97 kbtable
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use a formula field in a table, the result is incorrect if the
	following are true:
	
	- You use ABOVE, BELOW, LEFT, or RIGHT as an argument for the field.
	
	  -and-
	
	- The defined range contains noncontiguous values (one or more blank cells
	  between two values).
	
	For example, the formula in cell A6 of the following table shows a result of 7
	instead of 12:
	
	  |------------------|
	  |               3  | <(Cell A1)
	  |------------------|
	  |                  | <(Cell A2)
	  |------------------|
	  |               4  | <(Cell A3)
	  |------------------|
	  |                  | <(Cell A4)
	  |------------------|
	  |               5  | <(Cell A5)
	  |------------------|
	  |   {=SUM(ABOVE)}  | <(Cell A6)
	  |------------------|
	
	CAUSE
	=====
	
	Word calculates all values correctly up to and including the first cell after an
	empty table cell, and then stops.
	
	WORKAROUND
	==========
	
	To work around this problem, use either of the following methods.
	
	Method 1: Type Zero (0) in Any Blank Cells
	------------------------------------------
	
	Type zero (0) in any blank cells included within the calculation range, for
	example:
	
	  |------------------|
	  |               3  | <(Cell A1)
	  |------------------|
	  |               0  | <(Cell A2)
	  |------------------|
	  |               4  | <(Cell A3)
	  |------------------|
	  |               0  | <(Cell A4)
	  |------------------|
	  |               5  | <(Cell A5)
	  |------------------|
	  |   {=SUM(ABOVE)}  | <(Cell A6)
	  |------------------|
	
	Method 2: Use Cell References
	-----------------------------
	
	For a range that contains one or more blank cells, use cell references to define
	the range instead of ABOVE, BELOW, LEFT, or RIGHT. For example, use the
	following formula field to obtain a correct result:
	
	  |------------------|
	  |               3  | <(Cell A1)
	  |------------------|
	  |                  | <(Cell A2)
	  |------------------|
	  |               4  | <(Cell A3)
	  |------------------|
	  |                  | <(Cell A4)
	  |------------------|
	  |               5  | <(Cell A5)
	  |------------------|
	  |   {=SUM(A1:A5)}  | <(Cell A6)
	  |------------------|
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	For additional information, please see the following articles in the Microsoft
	Knowledge Base:
	
	  Q118521 WD: SUM Formula Does Not Update Correctly
	
	  Q105639 WD: Table Formula SUM(Above) Adds Number from Heading Row
	
	  Q113980 WD: Wrong Calculation Result with Bookmarks in Table
	
	Additional query words:
	
	======================================================================
	Keywords          : kbdta kbformula word97 kbtable 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
