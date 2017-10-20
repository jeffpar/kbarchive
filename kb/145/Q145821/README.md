---
layout: page
title: "Q145821: BUG: Format Specifications Give Incorrect Output"
permalink: /kb/145/Q145821/
---

## Q145821: BUG: Format Specifications Give Incorrect Output

{% raw %}

	Article: Q145821
	Product(s): Microsoft C Compiler
	Version(s): MACINTOSH:4.0
	Operating System(s): 
	Keyword(s): kbCRT kbVCkbbuglist
	Last Modified: 03-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, Macintosh Cross-Development Addon, version 4.0, on platform(s):
	   - the operating system: Mac OS (all) 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the C run-time functions such as sprintf when building a 68K
	Macintosh target, the format specification for long double (%ld, %le, %lg)
	yields incorrect output. This is not a problem with a Power Macintosh target.
	
	RESOLUTION
	==========
	
	Use other format specifications. Internally, do your calculations using long
	doubles. However, when it comes time to output final results, convert the result
	to a double, and use the corresponding format specification.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Code to Reproduce Problem
	-------------------------
	
	  /* Compile options needed: default
	  */ 
	
	  char buf[1000];
	  long double ldReturn  = 7.9718893639526417;
	
	  sprintf(buf,"ldReturn(%%ld)=%ld\n", ldReturn);
	
	  /* Instead, do the following
	  */ 
	
	  char buf[1000];
	  long double ldReturn  = 7.9718893639526417;
	
	  sprintf(buf,"ldReturn(%%d)=%ld\n", (double)ldReturn);
	
	Additional query words: 4.00 Windows 95 NT
	
	======================================================================
	Keywords          : kbCRT kbVC kbbuglist
	Technology        : kbVCsearch kbHWMAC kbOSMAC kbAudDeveloper
	Version           : MACINTOSH:4.0
	
	=============================================================================
	

{% endraw %}
