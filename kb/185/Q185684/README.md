---
layout: page
title: "Q185684: WD97: Wrong Calculation Result with Bookmarks in Table"
permalink: /kb/185/Q185684/
---

## Q185684: WD97: Wrong Calculation Result with Bookmarks in Table

	Article: Q185684
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbdta kbfield word97 kbtable
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A formula in Word may show an incorrect result if the calculation refers to a
	bookmark in a table when the bookmark includes the entire cell.
	
	For example, the following table has two cells, with a bookmark applied to the
	first cell:
	
	          --------------------
	         |    4     |    6    |
	          --------------------
	         ^--test1---^
	
	The next paragraph contains a field that multiplies the bookmark:
	
	  {=test1*3 }
	
	The result of the field is 30, but it should be 12.
	
	CAUSE
	=====
	
	When you create a bookmark for a table cell, the bookmark refers to the entire
	table. Therefore, when you use the bookmark as part of a Formula field, the
	values stored in the table are summed and are used by Word as the value of the
	bookmark.
	
	WORKAROUND
	==========
	
	To work around this problem, use either of the following methods.
	
	Method 1
	--------
	
	Apply the bookmark only to the contents of a cell, not to the entire cell. This
	method is best when you expect that the contents of the cells won't change, or
	if you only reference one cell from the table.
	
	Method 2
	--------
	
	Use the following procedure to refer to individual cells of the table by applying
	a bookmark to the entire table. This method is most efficient when you need to
	use several cells from the table. To use this method, follow these steps:
	
	1. Place the insertion point somewhere in the table. For example, move the
	  insertion point to cell A1.
	
	2. On the Table menu, click Select Table.
	
	3. On the Insert menu, click Bookmark.
	
	4. Type a name for the bookmark, such as "Table1" (without the quotation marks).
	
	5. Move the insertion point to the place where you want the formula.
	
	6. Press CTRL+F9 to type the field brackets and then type the reference to the
	  cell in the following format:
	
	  { =SUM(bookmarkname[cellreference]) }
	
	  In the above example, the formula would look like this:
	
	  { =SUM(Table1 A1)*3 }
	
	  To add two cells from the same table, use a formula such as the following:
	
	  { =SUM(Table1 A1) + SUM(Table1 B1) }
	
	Additional query words:
	
	======================================================================
	Keywords          : kbdta kbfield word97 kbtable 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbprb
	
	=============================================================================
	
