---
layout: page
title: "Q136422: FIX:Visual FoxPro Hangs If Focus Set to TextBox in Grid Column"
permalink: /kb/136/Q136422/
---

## Q136422: FIX:Visual FoxPro Hangs If Focus Set to TextBox in Grid Column

{% raw %}

	Article: Q136422
	Product(s): Microsoft FoxPro
	Version(s): 3.00
	Operating System(s): 
	Keyword(s): kbbuglist kbfixlist
	Last Modified: 24-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Calling the SetFocus method of a text box in a grid's Column from a Valid event
	of another text box on a Form causes Visual FoxPro to hang (stop responding).
	
	WORKAROUND
	==========
	
	Call the SetFocus method from the LostFocus event instead of from the Valid
	event.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. This problem was corrected in Visual FoxPro 3.0b
	for Windows.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Place a grid and a text box on a form
	
	2. In the text box Valid event procedure, add the following line of code:
	
	     THIS.PARENT.GRID1.COLUMN1.TEXT1.SETFOCUS
	
	3. Save and Run the Form
	
	4. Move to the text box on the Form
	
	5. Press the ENTER Key to trigger the Valid event.
	
	Additional query words: VFoxWin fixlist3.00b buglist3.00
	
	======================================================================
	Keywords          :  kbbuglist kbfixlist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : 3.00
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
