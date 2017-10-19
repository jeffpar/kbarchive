---
layout: page
title: "Q165882: WD97: Bottom Table Row Is Not Resized with Mouse"
permalink: /kb/165/Q165882/
---

## Q165882: WD97: Bottom Table Row Is Not Resized with Mouse

	Article: Q165882
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbusage winword word97 kbtable
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You cannot use your mouse to change the height of the last row in a table when
	all of the following are true:
	
	- You are in online layout view.
	
	  -and-
	
	- Using your mouse, you have resized the bottom border table row indicator to
	  the bottom of the online layout page.
	
	  -and-
	
	- You have resized one of the other rows enough to force the bottom row to a
	  second page.
	
	CAUSE
	=====
	
	This behavior is by design. When you are in online layout view, the page size is
	set to be the height of the window. If the table row at the bottom of the page
	does not fit onto the first page, it is moved to the second page.
	
	NOTE: You cannot see the table row that breaks to the second page in online
	layout view.
	
	WORKAROUND
	==========
	
	Method 1: Change the Row Height of a Particular Row in Online View
	------------------------------------------------------------------
	
	1. Place the insertion point in the row that you want to change.
	
	2. On the Table menu, click Select Row.
	
	3. On the Table menu, click Cell Height and Width.
	
	4. On the Row tab, change the "Height of row <n>" and At to the settings
	  that you want, and then click OK.
	
	Method 2: Change the View to Page Layout
	----------------------------------------
	
	On the View menu, click Page Layout. After you do this, you should be able to use
	your mouse to adjust the table rows.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage winword word97 kbtable 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	
	=============================================================================
	
