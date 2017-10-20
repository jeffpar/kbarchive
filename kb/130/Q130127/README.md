---
layout: page
title: "Q130127: How to Change the Background Color of a Tab"
permalink: /kb/130/Q130127/
---

## Q130127: How to Change the Background Color of a Tab

{% raw %}

	Article: Q130127
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to design a page frame that has tabs of different
	colors.
	
	MORE INFORMATION
	================
	
	Visual FoxPro does not provide a way to manipulate tabs of a page frame
	independently. It is however possible to display a page frame where pages have a
	different color than their corresponding tabs.
	
	One way to do it is to place a square shape as a control of a page, size it so
	that it fits the entire page. Change the color of the shape, and send the shape
	to the back. Modify the backcolor property of the page to the color you want for
	the tab. All other controls placed on the page will be in front of the shape and
	the background color of the box will simulate the background color of the page.
	
	Step-by-Step Procedure
	----------------------
	
	The following steps use the Form Designer to illustrate this method.
	
	1. Create a form.
	
	2. Select the PageFrame control, and place a page frame on the form.
	
	3. Right-click the page frame, and select Edit from the shortcut menu. A hatched
	  border is drawn around the page frame.
	
	4. Select Page1, and change the value of the Backcolor property to value for
	  red. The entire page should now be red.
	
	5. Select the Shape control and place it on Page1. Size the control so that it
	  fits the rectangular part of the page beneath the tab. Select the Backcolor
	  property of the Shape, and change it to dark gray - the default color of a
	  page.
	
	6. While the Shape is selected, choose Send to Back from the Format menu.
	
	7. Save and run the form.
	
	The first page now appears as gray with a red tab.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	

{% endraw %}
