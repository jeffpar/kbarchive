---
layout: page
title: "Q196503: WD97: Word Link to Microsoft Excel Shows Unexpected Information"
permalink: /kb/196/Q196503/
---

## Q196503: WD97: Word Link to Microsoft Excel Shows Unexpected Information

{% raw %}

	Article: Q196503
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbfield winword word97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If you link information from Microsoft Excel into Word, and then you insert rows
	or columns in or near the linked area in Excel, Word may not show the expected
	results.
	
	For example, if you copy the following material from Excel:
	
	  a    b    c
	  d    e    f
	  g    h    i
	
	and you link it into a Word document, Word shows the expected text.
	
	However, if you insert a row above the copied area in Excel, so that the
	information in Excel looks like this:
	
	  new text
	  a    b    c
	  d    e    f
	  g    h    i
	
	then Word shows the new row but not the last row:
	
	  new text
	  a    b    c
	  d    e    f
	
	CAUSE
	=====
	
	By design, a Word link always refers to the same area in Excel. If the cell
	range you originally linked from Excel includes cells B2 through F5, Word always
	refers to this same range, regardless of where you add rows or columns. You can
	see which part of the worksheet Word is referring to by choosing Links from the
	Edit menu.
	
	WORKAROUND
	==========
	
	If you want to add rows above or below the linked area, or if you want to add a
	column to either side, you must redo the link from Excel to Word.
	
	However, if you want to add rows or columns inside the linked area in Excel, you
	can work around this problem by using a range name in Excel. A range in Excel
	expands if rows or columns are added inside its boundaries. To name a range in
	Excel, follow these steps:
	
	1. Select the cells that you want to link.
	
	2. On the Insert menu, click Name.
	
	3. Click Define.
	
	4. In the Names In Workbook area, type the name you want to give this area, such
	  as "Sales" or "Earnings" (without the quotation marks).
	
	5. Click OK.
	
	When you copy this area and link it in Word, Word always shows any new rows or
	columns that have been added inside the boundaries of the named range.
	
	Additional query words: paste
	
	======================================================================
	Keywords          : kbfield winword word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
