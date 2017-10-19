---
layout: page
title: "Q122145: Minimized Excel Workbooks Disappear When Resizing the Window"
permalink: /kb/122/Q122145/
---

## Q122145: Minimized Excel Workbooks Disappear When Resizing the Window

	Article: Q122145
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): win95 appscomp kbAppCompatibility
	Last Modified: 28-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Excel for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you resize a Microsoft Excel 5.0 window containing a minimized workbook (or
	more than one) to a shorter vertical height, the minimized workbook is hidden
	from view.
	
	CAUSE
	=====
	
	This problem occurs because Windows 95 uses a different method of icon control
	when sizing windows. This causes the minimized workbook icon to remain at the
	same x-y coordinate instead of being relocated to the bottom edge of the resized
	window.
	
	WORKAROUND
	==========
	
	To work around this problem, click Arrange Icons on the Window menu. This places
	the icons at the bottom edge of the window. And, they remain there when you
	resize the window again.
	
	Additional query words: 5.0c 5.00c
	
	======================================================================
	Keywords          : win95 appscomp kbAppCompatibility 
	Technology        : kbExcelSearch kbWin95search kbExcel500 kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	
