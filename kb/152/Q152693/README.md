---
layout: page
title: "Q152693: BUG: Component Manager Closes Down When Invalid Date Entered"
permalink: /kb/152/Q152693/
---

## Q152693: BUG: Component Manager Closes Down When Invalid Date Entered

{% raw %}

	Article: Q152693
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:4.0
	Operating System(s): 
	Keyword(s): kbbuglist
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Enterprise Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If an invalid date is entered in the Visual Basic 4.0 Enterprise Edition
	Component Manager, and then a menu option is selected, the following error
	message occurs and the Component Manager closes down:
	
	  "Run-time error 5 - Invalid Procedure Call."
	
	STATUS
	======
	
	Microsoft has confirmed this to be an issue in the Microsoft products listed at
	the beginning of this article. Microsoft is researching this problem and will
	post new information here in the Microsoft Knowledge Base as it becomes
	available.
	
	WORKAROUND
	==========
	
	This problem can be avoided by ensuring that the dates are valid before choosing
	a menu option.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce the Problem
	------------------------------
	
	1. Start the Component Manager.
	
	2. In the Date field, delete the last character from the starting date.
	
	3. From the menu, choose View...User Options.
	
	The Component Manager returns a run-time error and closes down.
	
	This same behavior can be observed by accessing many other menu choice
	combinations after a Date has been made invalid.
	
	Additional query words: 4.00 vb4win vb4all
	
	======================================================================
	Keywords          :  kbbuglist
	Technology        : kbVBSearch kbAudDeveloper kbVB400Search kbVB400 kbVB16bitSearch
	Version           : WINDOWS:4.0
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
