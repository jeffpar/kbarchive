---
layout: page
title: "Q136042: BUG: SET TOPIC Overwritten by SET MESSAGE"
permalink: /kb/136/Q136042/
---

## Q136042: BUG: SET TOPIC Overwritten by SET MESSAGE

{% raw %}

	Article: Q136042
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b,5.0,5.0a
	Operating System(s): 
	Keyword(s): kbvfp kbvfp300bBUG kbvfp500aBUG kbvfp500bugkbbuglist
	Last Modified: 15-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If the length of the string assigned to x with the x=replicate("X",105) command
	is less than or equal to 88, then ?set('topic') returns a blank. Note that
	set('topic') returns values only when the length of the string assigned to x is
	longer than 88 characters in an incremental fashion. For example, if you use
	x=replicate("X",89), set('topic') returns 1(one) x. If you use
	x=replicate("X",98), set('topic') returns 10 x. So, the value returned by
	set('topic')=(LEN(x)-88).
	
	WORKAROUND
	==========
	
	Do not use messages greater than 88 characters.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	Run this code:
	
	  set topic to
	  ?set('topic') && clear the topic
	  x=replicate("X",105)
	  set message to (x)
	  ?set('topic')
	
	Additional query words:
	
	======================================================================
	Keywords          : kbvfp kbvfp300bBUG kbvfp500aBUG kbvfp500bug kbbuglist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP500a
	Version           : WINDOWS:3.0,3.0b,5.0,5.0a
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
