---
layout: page
title: "Q165944: FIX: &amp;(&#42;variable) Causes C1001, trees.c line 6256"
permalink: /kb/165/Q165944/
---

## Q165944: FIX: &amp;(&#42;variable) Causes C1001, trees.c line 6256

{% raw %}

	Article: Q165944
	Product(s): Microsoft C Compiler
	Version(s): winnt:5.0
	Operating System(s): 
	Keyword(s): kbprogramming kbVC500bug kbVC600fixkbbuglist
	Last Modified: 04-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The C/C++ Compiler (CL.EXE), used with:
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The sample code below generates the following error when it is in a .c file:
	
	  fatal error C1001: INTERNAL COMPILER ERROR (compiler file '.\trees.c', line
	  6256) Please choose the Technical Support command on the Visual C++
	
	RESOLUTION
	==========
	
	Place the code in a file with a .cpp or .cxx extension.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.This problem was corrected in Microsoft
	Visual C++ version 6.0.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	     #include  <string.h>
	
	     void func(void)
	     {
	        typedef char test[10];
	        test *pstest;
	        memset(&(*pstest),'A',sizeof(test));
	     }
	
	Additional query words: ICE
	
	======================================================================
	Keywords          : kbprogramming kbVC500bug kbVC600fix kbbuglist
	Technology        : kbVCsearch kbAudDeveloper kbCVCComp
	Version           : winnt:5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
