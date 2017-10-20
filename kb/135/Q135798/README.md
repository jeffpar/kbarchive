---
layout: page
title: "Q135798: How to Prevent a User from Changing the Row Height of a Grid"
permalink: /kb/135/Q135798/
---

## Q135798: How to Prevent a User from Changing the Row Height of a Grid

{% raw %}

	Article: Q135798
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft Visual FoxPro version 3.0 does not provide a property that you can use
	to prevent the user from re-sizing the row height of a grid at run time. The
	only way to prevent this is to trap for that event, and reset the value back to
	its original value when the user attempts to change it.
	
	MORE INFORMATION
	================
	
	Step-by-Step Example
	--------------------
	
	The following steps demonstrates how to prevent the user from being able to
	change the row height of a grid. It uses the MouseMove event of the grid to trap
	for that event.
	
	1. Add a custom property to the Form called nRowHeight.
	
	2. Add the following code to the form's Init event procedure:
	
	     ThisForm.nRowHeight = ThisForm.Grid1.RowHeight
	
	3. Add the following code to the grid's MouseMove event procedure:
	
	     ThisForm.Grid1.RowHeight = ThisForm.nRowHeight
	
	Additional query words: 3.00 VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	

{% endraw %}
