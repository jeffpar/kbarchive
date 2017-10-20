---
layout: page
title: "Q134214: PRB: Form Won't Scroll When Selecting Item Beyond Design Area"
permalink: /kb/134/Q134214/
---

## Q134214: PRB: Form Won't Scroll When Selecting Item Beyond Design Area

{% raw %}

	Article: Q134214
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
	
	When working in the Form Designer, it may be necessary to reduce the size of the
	form design area to create space for other items on the screen, such as the
	properties sheet. If the screen is densely populated, some of the form objects
	will not be visible.
	
	When trying to select all objects on the form by dragging the object selection
	outline over the objects, the outline will stop at the edge of the visible
	design area. The expected behavior is that the outline should automatically
	scroll down to the area occupied by objecs on the non-visible part of the
	screen, which is the functionality that exists in FoxPro version 2.x.
	
	WORKAROUND
	==========
	
	To select all the objects on the screen, hold down the SHIFT key and click each
	screen object one by one, or on the Edit menu, click Select All.
	
	STATUS
	======
	
	Microsoft is researching this behavior and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new form.
	
	2. Add a table to the Data environment, and place several text objects at
	  various places on the form - that is, at the top, bottom, and sides of the
	  form.
	
	3. Reduce the visible working area of the Form Designer, making some of the
	  objects invisible.
	
	4. Starting at the top of the form, try to select all objects on the form by
	  using the outline. Note that the field selection outline cannot go beyond the
	  visible design area.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	

{% endraw %}
