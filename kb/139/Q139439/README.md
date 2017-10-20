---
layout: page
title: "Q139439: Bookshelf 95: Copy to Excel Command Does not Work"
permalink: /kb/139/Q139439/
---

## Q139439: Bookshelf 95: Copy to Excel Command Does not Work

{% raw %}

	Article: Q139439
	Product(s): Microsoft Home Multimedia Titles
	Version(s): WINDOWS:; Win95:7.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Bookshelf '95 for Windows 95 
	- Microsoft Excel for Windows 95, version 7.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Copy To Excel command in Bookshelf does not work if there is a cell being
	edited in Excel.
	
	When you click Copy To Excel on the Bookshelf Edit menu, you are returned to
	Excel and the Copy to Excel dialog box is not displayed, and the copy operation
	is not completed.
	
	
	CAUSE
	=====
	
	When the Copy To Excel command is selected in Bookshelf, Excel is in native mode
	(called a modal state). In this mode, Excel does not realize Bookshelf has
	requested integration services to copy data into a cell. The Paste portion of
	the command is not completed.
	
	RESOLUTION
	==========
	
	Select an empty cell in Excel, but do not try to edit the cell contents.
	
	When you use the Copy to Excel command in Bookshelf, you are returned to Excel
	and the Copy to Excel dialog box is displayed.
	
	Additional query words: 1995, 32-bit version multi media multimedia multi-media mmtitles kbmm not copied working 7.0 excel o.l.e. object-linking-embedding linking linked link embedded embed object
	
	======================================================================
	Keywords          :  
	Technology        : kbExcelSearch kbHomeMMsearch kbExcel700 kbBookshelfSearch kbExcel95Search kbBookShelf1995
	Version           : WINDOWS:; Win95:7.0
	
	=============================================================================
	

{% endraw %}
