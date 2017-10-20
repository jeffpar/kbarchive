---
layout: page
title: "Q132312: PRB: Can't Find Grid Property to Specify Record for Top Row"
permalink: /kb/132/Q132312/
---

## Q132312: PRB: Can't Find Grid Property to Specify Record for Top Row

{% raw %}

	Article: Q132312
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You need a grid method or property to tell the grid which row of the
	RecordSource to display in the top row of the visible area of a grid. For
	example, you might have a 500-record table and a 15-row grid and at run time,
	you want to tell the grid to jump to record 430; in other words, you want the
	grid to display record 430 in the top row of the visible area of the grid, not
	just anywhere in the visible area. A property like the following would work
	well:
	
	- GRID1.FirstRecord = 430
	
	-or-
	
	- GRID1.DoScroll(1,430)
	
	A filter cannot be used because you want to access all the records in the
	RecordSource.
	
	CAUSE
	=====
	
	There is no grid property that allows you to specify a row to be displayed as
	the first row of the visible area of the grid.
	
	WORKAROUND
	==========
	
	You can use the RelativeRow property in conjunction with DoScroll method to move
	a selected record to the top of the visible area of the grid as in this code:
	
	     thisform.grid1.setfocus
	     goto <your recno>
	     thisform.refresh
	
	     thisform.lockscreen = .t.
	     do while thisform.grid1.relativerow > 1
	        thisform.grid1.doscroll(1)
	     enddo
	     thisform.lockscreen = .f.
	
	STATUS
	======
	
	This behavior is by design.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	

{% endraw %}
