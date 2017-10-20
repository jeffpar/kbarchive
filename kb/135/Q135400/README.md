---
layout: page
title: "Q135400: FIX: Unallocated Handle When Deleting Zero Value of a Grid"
permalink: /kb/135/Q135400/
---

## Q135400: FIX: Unallocated Handle When Deleting Zero Value of a Grid

{% raw %}

	Article: Q135400
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
	
	Visual FoxPro produces a "Use of Unallocated Handle" error (an Application
	Error) or performs an illegal operation and has to be shut down when modifying a
	grid on a form.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. This problem was corrected in Visual FoxPro 3.0b
	for Windows.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Create a new form.
	
	2. Add a grid to the form.
	
	3. In the Property sheet, select the grid's Value property, and press the DELETE
	  key so that there is nothing listed for the Value property.
	
	4. Press ENTER, and you should see the error.
	
	Additional query words: 3.00 VFoxWin fixlist3.00b buglist3.00
	
	======================================================================
	Keywords          :  kbbuglist kbfixlist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
