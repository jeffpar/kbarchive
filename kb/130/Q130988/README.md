---
layout: page
title: "Q130988: PRB: Objects Stack Up When You Center Group of Objects in Form"
permalink: /kb/130/Q130988/
---

## Q130988: PRB: Objects Stack Up When You Center Group of Objects in Form

{% raw %}

	Article: Q130988
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
	
	In Visual FoxPro, you must be careful when centering a group of objects in a
	form using the layout toolbox. The objects may end up stacked, one on top of the
	other.
	
	WORKAROUND
	==========
	
	Save the objects as a Class, and then move the class as a group instead of using
	the layout toolbox.
	
	STATUS
	======
	
	This behavior is by design because of the technique used to determine the
	center.
	
	MORE INFORMATION
	================
	
	The ability to center horizontally was a feature available in FoxPro version 2.x
	for Windows by choosing Center from the Object menu. In Visual FoxPro, you can
	now center both horizontally and vertically.
	
	Individual objects can be centered horizontally, but if there are two or more
	objects on the same line, the objects are stacked. The same behavior occurs if
	the objects are vertically aligned when the objects are not on the same line.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new form.
	
	2. Add two text objects to the form.
	
	3. From the View menu, choose Toolbars.
	
	4. Choose the Layout toolbox.
	
	5. On the form, select both objects.
	
	6. Choose Horizontal Center from the Layout toolbox. If the objects are on the
	  same row, they will be stacked.
	
	7. Choose the Vertical Center from the Layout toolbox. If the objects were
	  vertically aligned, they will now be stacked.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	

{% endraw %}
