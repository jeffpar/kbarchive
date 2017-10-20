---
layout: page
title: "Q122308: BUG: Some RC Warnings and Errors Go to stderr, Not stdout"
permalink: /kb/122/Q122308/
---

## Q122308: BUG: Some RC Warnings and Errors Go to stderr, Not stdout

{% raw %}

	Article: Q122308
	Product(s): Microsoft C Compiler
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 2.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 2.0 
	- Microsoft Visual C++, 32-bit Professional Edition, version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Certain warnings and error messages issued by the resource compiler are sent to
	stderr instead of stdout.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	This behavior can cause problems only if you are redirecting output to a file.
	The messages that are sent to stderr will not be put into the file.
	
	Additional query words: 2.00 3.50 buglist2.00
	
	======================================================================
	Keywords          :  
	Technology        : kbVCsearch kbAudDeveloper kbVC200 kbVC32bitSearch
	Version           : :2.0
	
	=============================================================================
	

{% endraw %}
