---
layout: page
title: "Q122790: BUG: Character Constant with &#92;0 Not Stored Properly"
permalink: /kb/122/Q122790/
---

## Q122790: BUG: Character Constant with &#92;0 Not Stored Properly

{% raw %}

	Article: Q122790
	Product(s): Microsoft C Compiler
	Version(s): winnt:6.0
	Operating System(s): 
	Keyword(s): kbcode kbDebug kbide kbVC
	Last Modified: 07-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The C/C++ Compiler (CL.EXE), included with:
	   - Microsoft Visual C++ 32-bit Edition, versions 1.0, 2.0, 4.0, 4.1, 4.2 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Character constants containing the escape character "\0" (octal) may not be
	stored properly. The escape character may be swapped with the character that
	immediately preceeds or follows it in memory.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Run the following sample code to demonstrate the problem.
	
	Sample Code to Reproduce Problem
	--------------------------------
	
	  /* Compile options needed: none
	  */ 
	
	  #include <stdio.h>
	
	  void main(void)
	  {
	     printf("%08X", 'A\0H\0');
	  }
	
	  /* Output */ 
	
	  00410048
	
	  /* Expected Output */ 
	
	  41004800
	
	======================================================================
	Keywords          : kbcode kbDebug kbide kbVC 
	Technology        : kbVCsearch kbAudDeveloper kbCVCComp
	Version           : winnt:6.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
