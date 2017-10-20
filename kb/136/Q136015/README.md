---
layout: page
title: "Q136015: FIX: Spinner Name Doesn't Move with Spinner in a PageFrame"
permalink: /kb/136/Q136015/
---

## Q136015: FIX: Spinner Name Doesn't Move with Spinner in a PageFrame

{% raw %}

	Article: Q136015
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): kbbuglist kbfixlist
	Last Modified: 24-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a Spinner control is placed in the page of a PageFrame control and you move
	the spinner from its original location, the name within the spinner (the
	caption) doesn't move with it. However, if you move the spinner back to or near
	its original location in the pageframe, the name or a portion of the name
	becomes visible.
	
	WORKAROUND
	==========
	
	Place the spinner at the desired location. Then exit and save the form. The next
	time that the form is modified, the name of the spinner will be visible.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. This problem was corrected in Visual FoxPro 3.0b
	for Windows.
	
	MORE INFORMATION
	================
	
	This problem does not produce an adverse affect in the finished form.
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Create a new form.
	
	2. Place a pageframe on the form.
	
	3. Edit the pageframe, and place a spinner in a page.
	
	4. Move the spinner, using the mouse or the arrow keys, away from its original
	  location.
	
	Additional query words: VFoxWin fixlist3.00b buglist3.00 refresh
	
	======================================================================
	Keywords          :  kbbuglist kbfixlist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
