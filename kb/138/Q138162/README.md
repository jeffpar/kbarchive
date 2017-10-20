---
layout: page
title: "Q138162: How to Resize a Form When the Application Window Is Resized"
permalink: /kb/138/Q138162/
---

## Q138162: How to Resize a Form When the Application Window Is Resized

{% raw %}

	Article: Q138162
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you resize an application's window, a form in the application window is not
	resized accordingly. To resize a form relative to the size of the application
	window, you can use a timer control.
	
	MORE INFORMATION
	================
	
	
	Step-by-Step Example
	--------------------
	
	1. Create a new form.
	
	2. Add two new properties called OldWidth and OldHeight. To do this, on the Form
	  menu, click New Property.
	
	3. In the Init event of the form, place this code:
	
	     THISFORM.oldwidth  =  _SCREEN.width
	     THISFORM.oldheight =  _SCREEN.height
	
	4. Add a timer control to the form.
	
	5. In the Timer event of the Timer control, place this code:
	
	     x=_SCREEN.width
	     y=_SCREEN.height
	     IF ((x!=THISFORM.oldwidth) or (y!=THISFORM.oldheight))
	        THIS.parent.width=_SCREEN.width-25
	        THIS.parent.height=_SCREEN.height-25
	        THISFORM.oldwidth  =  _SCREEN.width
	        THISFORM.oldheight =  _SCREEN.height
	        THISFORM.AutoCenter=.t.
	        THISFORM.Refresh
	     ENDIF
	
	6. Change the Interval property of the Timer control to 100.
	
	7. Run the form. Notice how when you resize the main application window, the
	  form is automatically resized.
	
	Additional query words: VFoxWin form window resize timer
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	

{% endraw %}
