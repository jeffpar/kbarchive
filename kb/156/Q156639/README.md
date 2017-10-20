---
layout: page
title: "Q156639: PRB: Using Date Function Code in @...GET Does Not Work"
permalink: /kb/156/Q156639/
---

## Q156639: PRB: Using Date Function Code in @...GET Does Not Work

{% raw %}

	Article: Q156639
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0,6.0
	Operating System(s): 
	Keyword(s): kbvfp500 kbvfp600
	Last Modified: 14-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In Visual FoxPro 3.0, you are allowed to use the Date function code ("D") in the
	@...GET statement to input a date. However, in Visual FoxPro 5.0, the Date
	function code is not working any longer.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	Execute the following program:
	
	     dDate = DATE()
	     @ 1,1 GET dDate PICTURE "D"
	     READ
	
	NOTE: The date will show up in a GET field, but you are only allowed to type in
	the first character in the date field. If you try to type in the second
	character, you will receive an "Invalid Date" error.
	
	Additional query words: kbdse VFoxWin
	
	======================================================================
	Keywords          : kbvfp500 kbvfp600 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600
	Version           : WINDOWS:5.0,6.0
	
	=============================================================================
	

{% endraw %}
