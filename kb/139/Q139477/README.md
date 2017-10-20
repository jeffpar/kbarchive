---
layout: page
title: "Q139477: FIX: Insufficient Disk Space Causes Visual C++ to Fail"
permalink: /kb/139/Q139477/
---

## Q139477: FIX: Insufficient Disk Space Causes Visual C++ to Fail

{% raw %}

	Article: Q139477
	Product(s): Microsoft C Compiler
	Version(s): 4.0 4.1 4.2
	Operating System(s): 
	Keyword(s): kbenv kbCompiler kbVC500fix
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, versions 4.0, 4.1 
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 4.2 
	- Microsoft Visual C++, 32-bit Professional Edition, version 4.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	During a project build you see one of the following three messages;
	
	  
	
	  fatal error C1001: INTERNAL COMPILER ERROR
	  (compiler file 'MyFile.cpp', line 99)
	  Please choose the Technical Support command on the Visual C++ Help
	  menu, or open the Technical Support help file for more information
	
	-or-
	
	  
	
	  LINK : fatal error LNK1000: unknown error; consult documentation
	  for technical support options
	
	-or-
	
	  
	
	  Error: Could not generate command line for the 32-bit C/C++ Compiler
	  for 80x86 tool.
	
	CAUSE
	=====
	
	One cause of these messages is that Visual C++ has run out of disk space while
	writing intermediate files.
	
	RESOLUTION
	==========
	
	Free up enough space to allow the build to complete.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug was corrected in Visual C++ version 5.0.
	
	Additional query words: kbVC400bug
	
	======================================================================
	Keywords          : kbenv kbCompiler kbVC500fix 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper kbVC410 kbVC420 kbVC32bitSearch
	Version           : 4.0 4.1 4.2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
