---
layout: page
title: "Q130414: PRB: &quot;Member Column&lt;n&gt; is a class member&quot; Error Message"
permalink: kb/130/Q130414/
---

## Q130414: PRB: &quot;Member Column&lt;n&gt; is a class member&quot; Error Message

	Article: Q130414
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): kberrmsg
	Last Modified: 11-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Changing the ColumnCount property of a grid class, subclassed onto a form, to a
	value less than the one already set for the grid class when it was created
	results in this error:
	
	  Member COLUMN<n> is a class member.
	
	CAUSE
	=====
	
	You cannot delete members from an instantiated object that are members of the
	base class.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	When you insert a Grid class into a form, you cannot change the ColumnCount
	property to a value less than the one that was set when the Grid class was
	created. If you do so, the "Member COLUMN<n> is a class member" error
	message is displayed. In this error, <n> is a number that is one greater
	than the ColumnCount value you are trying to set for the Grid class in the
	form.
	
	For example if ColumnCount for the Grid class was set to 3 when it was created,
	and you change it to 2, 1, or 0 when placed in a form, then the value of
	<n> in the error message will be 3, 2, or 1 respectively.
	
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a Grid class with three columns.
	
	2. Create a form.
	
	3. Drop an instance of the Grid class onto the form, and populate the
	  three-column grid.
	
	4. Save and run the form. Everything works as expected.
	
	5. Modify the form.
	
	6. Change ColumnCount for the grid to 2. The error "Member COLUMN3 is a class
	  member" is displayed.
	
	NOTE: If the ColumnCount is changed to 1, the error message is "Member COLUMN2 is
	a class member."
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          : kberrmsg 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
