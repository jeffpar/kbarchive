---
layout: page
title: "Q102113: FIX: &quot;Out of Virtual Memory&quot; Message may be Caused by chdir()"
permalink: /kb/102/Q102113/
---

## Q102113: FIX: &quot;Out of Virtual Memory&quot; Message may be Caused by chdir()

{% raw %}

	Article: Q102113
	Product(s): Microsoft C Compiler
	Version(s): 1.00 2.00
	Operating System(s): 
	Keyword(s): kbCRT kbVCkbbuglist
	Last Modified: 26-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, versions 1.0, 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run an application that calls the chdir() function many times, an "Out
	of Virtual Memory" error may occur. You may also notice that the page file grows
	continuously as the application executes.
	
	CAUSE
	=====
	
	The chdir() function allocates a small amount of memory each time it is called.
	When the function successfully completes execution, it does not free the memory
	and causes a small memory leak. Because no application accesses the memory, it
	is eventually swapped into the page file. The "Out of Virtual Memory" error
	occurs when the page file cannot grow any larger.
	
	RESOLUTION
	==========
	
	An application developed for the Win32 or Win32s operating systems can avoid the
	memory leak by using the SetCurrentDirectory() function. SetCurrentDirectory()
	changes the current directory for the current process.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug was corrected in Visual C++ version 2.1.
	
	Additional query words: 1.00 2.00 8.00 9.00
	
	======================================================================
	Keywords          : kbCRT kbVC kbbuglist
	Technology        : kbVCsearch kbAudDeveloper kbvc100 kbVC200
	Version           : 1.00 2.00
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
