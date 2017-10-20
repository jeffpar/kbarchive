---
layout: page
title: "Q139874: How to Disable a Button &amp; Move the Focus to a Specified Object"
permalink: /kb/139/Q139874/
---

## Q139874: How to Disable a Button &amp; Move the Focus to a Specified Object

{% raw %}

	Article: Q139874
	Product(s): Microsoft FoxPro
	Version(s): 3.00
	Operating System(s): 
	Keyword(s): kbcode
	Last Modified: 25-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When using a command button to set the focus to another object, you may
	sometimes want to disable the command button and move the focus to another
	object until another event occurs or a value is entered in a field. This article
	shows by example how to do it.
	
	MORE INFORMATION
	================
	
	The most obvious solution, doesn't work. You can't use the SetFocus method
	followed by "Enabled=.F." in the Click event of a command button. When the Click
	event of the command button is activated, the command button becomes disabled,
	but the focus is not moved to the specified control. The focus moves to the next
	object in the Tab Order instead of to the specified object.
	
	This occurs because the Default event processing occurs after user-defined code
	is run. When the default event procedure for the Click event is run, it
	discovers that the control is no longer enabled and defaults to setting the
	focus to the next object in the Tab order, so the user-specified SetFocus method
	is nullified.
	
	To move the focus to the object specified in the Click event of the command
	button, you need to use the NoDefault clause. This results in the focus being
	moved to the correct object.
	
	Step-by-Step Example
	--------------------
	
	1. Create a form, and add three command buttons to the form. Label the buttons
	  Button 1, Button 2, and Button 3.
	
	2. In the Click event of Button 1, add this code:
	
	     ThisForm.Command3.SetFocus
	     ThisForm.Command1.Enabled=.F.
	
	3. Run the form.
	
	4. Click Button 1, and you will see it become disabled. However, the focus is
	  set to Button 2 (the next item in the tab order). Close the form.
	
	5. Modify the form to add NoDefault to the first line of the Button 1 Click
	  event:
	
	     NoDefault
	     ThisForm.Command3.SetFocus
	     ThisForm.Command1.Enabled=.F.
	
	6. Rerun the form, and click Button 1. The focus should now be on Button 3.
	
	REFERENCES
	==========
	
	For additional information on the use of the NODEFAULT command, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q131095 How to Control the Occurrence of a Default Event
	
	For additional information on SetFocus behavior, please see the following article
	in the Microsoft Knowledge Base:
	
	  Q130525 PRB: SetFocus Doesn't Work When Called in the Valid Event
	
	Additional query words: VFoxWin got disable commandbutton
	
	======================================================================
	Keywords          : kbcode 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : 3.00
	
	=============================================================================
	

{% endraw %}
