---
layout: page
title: "Q146021: PRB: Double-Clicking a Check Box Does Not Change Its Value"
permalink: /kb/146/Q146021/
---

## Q146021: PRB: Double-Clicking a Check Box Does Not Change Its Value

{% raw %}

	Article: Q146021
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you double-click a check box, its value changes once. For example, if a
	check box is unchecked, double-clicking it marks it as checked. A double- click
	does not behave differently from a click. It was expected that double- clicking
	a check box would change the value twice, resulting in no change at all.
	
	CAUSE
	=====
	
	When you double-click the check box, the Click event is triggered after the
	first click. This is what changes the value of the check box. The DblClick is
	then triggered. Visual FoxPro does not modify the value of a check box when the
	DblClick event is triggered.
	
	WORKAROUND
	==========
	
	To change the value of a check box with a double-click, you can insert either of
	the following commands in the DblClick event handler:
	
	     KEYBOARD " "
	
	  -or-
	
	     MOUSE CLICK
	
	This will force the value to change when the DblClick event is activated.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new form, and place a check box on the form.
	
	2. Save the form, and run it. The check box is not checked.
	
	3. Double-click the check box. The check box is checked. Close the form.
	
	4. Modify the form. Insert the following command in the DblClick event:
	
	     MOUSE CLICK
	
	5. Save the form, and run it. When you double-click the check box, it remains
	  unchecked.
	
	Additional query words: double click
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b
	Version           : WINDOWS:3.0,3.0b
	
	=============================================================================
	

{% endraw %}
