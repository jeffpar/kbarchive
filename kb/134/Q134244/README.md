---
layout: page
title: "Q134244: FIX: Get Displays 0 When ENTER Key Used to Move to Next Get"
permalink: /kb/134/Q134244/
---

## Q134244: FIX: Get Displays 0 When ENTER Key Used to Move to Next Get

{% raw %}

	Article: Q134244
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): kbcode
	Last Modified: 24-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An @...GET whose source contains a numeric value, changes from that numeric
	value to zero when you press the ENTER key to move to the next GET. This problem
	doesn't occur if you press the TAB key or use the mouse to move to the next GET.
	This happens only the first time the program is run after Visual FoxPro is
	opened.
	
	WORKAROUND
	==========
	
	Use a VALID clause that does a REFRESH for the @...GET. (See the "Code to Work
	Around Behavior" section in this article for an example.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. This problem was corrected in Visual FoxPro 3.0b
	for Windows.
	
	MORE INFORMATION
	================
	
	Code to Reproduce Problem
	-------------------------
	
	  CLEAR
	  lc_char    = SPACE(4)
	  ln_number  = 2
	  ln_num2    = 1.0
	  @ 3, 57 GET m.ln_number
	  @ 5, 57 GET ln_num2
	  @ 7, 57 GET m.lc_char
	  READ
	
	Code to Work Around Problem
	---------------------------
	
	  CLEAR
	  lc_char    = SPACE(4)
	  ln_number  = 2
	  ln_num2    = 1.0
	  @ 3, 57 GET m.ln_number VALID GetRefresh(Thisform.ActiveControl)
	  @ 5, 57 GET ln_num2 VALID GetRefresh(Thisform.ActiveControl)
	  @ 7, 57 GET m.lc_char VALID GetRefresh(Thisform.ActiveControl)
	  READ
	   
	  PROCEDURE GetRefresh
	  PARAMETERS x
	     x.REFRESH()
	
	Additional query words: VFoxWin fixlist3.00b buglist3.00 3.00
	
	======================================================================
	Keywords          : kbcode 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
