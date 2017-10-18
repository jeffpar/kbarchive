---
layout: page
title: "Q185866: BUG: Combo Box Valid Event Fires Before GotFocus in Page Frame"
permalink: kb/185/Q185866/
---

## Q185866: BUG: Combo Box Valid Event Fires Before GotFocus in Page Frame

	Article: Q185866
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Valid event of a combo box object in a page frame fires before the Gotfocus
	event after accessing the combo box multiple times.
	
	CAUSE
	=====
	
	As shown in the example below, do not use any object on the page frame to set
	the focus to another page. Move the "Click me - back to page 1" button to the
	form level instead.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this bug and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a form and add a two page Page frame. In the second page of the page
	  frame, add a command button and then add a combo box object. (In that order.)
	
	2. Set the following properties and events of the command button:
	
	        Caption ="Click me - Back to page 1"
	        Click= thisform.pageframe1.activepage=1
	
	3. Set the following properties and events of the combo box:
	
	        RowSource = 1,2,3,4,5
	        RowSourceType=1-value
	        Valid event= =Messagebox("Valid Fired")
	        GotFocus event= =Messagebox("GotFocus Fired")
	
	4. Run the form.
	
	  Click Page two of the page frame. Next, click the drop-down combo box and
	  select any number. Note that the GotFocus event fires before the Valid event.
	  Click the "Click me - Back to Page 1" button on the second page. Now, repeat
	  these steps noting that the Valid event fires before the GotFocus event this
	  time.
	
	Additional query words: kbDSupport KBDSE VFP600REL kbvfp500 kbvfp600
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:5.0,5.0a,6.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
