---
layout: page
title: "Q123163: FIX: &#95;&#95;TIMESTAMP&#95;&#95; Reports Pacific Standard Time"
permalink: /kb/123/Q123163/
---

## Q123163: FIX: &#95;&#95;TIMESTAMP&#95;&#95; Reports Pacific Standard Time

{% raw %}

	Article: Q123163
	Product(s): Microsoft C Compiler
	Version(s): 
	Operating System(s): 
	Keyword(s): kbCompilerkbbuglist kbfixlist
	Last Modified: 30-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- 
	   - Microsoft C/C++ Compiler (CL.EXE) 
	   - *EDITOR Please do not choose this product*Microsoft Visual C++ 32-bit Edition* use 241, 265, 225, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The __TIMESTAMP__ predefined compiler macro always returns timestamp information
	in Pacific Standard time, regardless of the local time and time zone on the
	machine where CL.EXE is run.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the products listed at the beginning
	of this article. This bug was corrected in Visual C++, 32-bit Edition, version
	2.0.
	
	MORE INFORMATION
	================
	
	The following sample code can be used to demonstrate the problem. NOTE: You must
	change your time zone via the Date/Time Control Panel applet if you are under
	Pacific Standard Time to see the problem.
	
	Sample Code
	-----------
	
	  /* Compile options needed: none
	  */ 
	
	  #include <stdio.h>
	
	  void main()
	  {
	     printf( "The time is %s\n", __TIMESTAMP__ );
	  }
	
	Additional query words: 1.00 8.00 PST stamp local time
	
	======================================================================
	Keywords          : kbCompiler kbbuglist kbfixlist
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
