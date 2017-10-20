---
layout: page
title: "Q195738: FIX: C1001 When Template Class Is Included in Precompiled Header"
permalink: /kb/195/Q195738/
---

## Q195738: FIX: C1001 When Template Class Is Included in Precompiled Header

{% raw %}

	Article: Q195738
	Product(s): Microsoft C Compiler
	Version(s): 5.0sp3,6.0
	Operating System(s): 
	Keyword(s): kbCompiler kbLangCPP kbVC600bug kbVC500SP3bug kbNoUpdate
	Last Modified: 11-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 5.0sp3, 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 5.0sp3, 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When template classes or template class header files are included in a
	precompiled header file, the compiler may generate the following error for files
	that use the precompiled header:
	
	  fatal error C1001: INTERNAL COMPILER ERROR
	  (compiler file 'msc1.cpp', line 1786)
	
	  -or-
	
	  fatal error C1001: INTERNAL COMPILER ERROR
	  (compiler file 'msc1.cpp', line 1188)
	
	This error occurs only on machines with the Windows 95 or Windows 98 operating
	system.
	
	CAUSE
	=====
	
	The compiler exceeds the allocated memory limit.
	
	RESOLUTION
	==========
	
	Use one of the following three suggested workarounds:
	
	- Use compiler switch /Zm#nn to increase the compiler's heap memory allocation
	  limit. The default value of #nn is 100 and the maximum value is 2000.
	  Manually add this switch in Developer Studio: under the Project menu, click
	  Setting, the click C/C++, then Project Options. Usually, a value of 1000
	  works.
	
	  NOTE: You may need to increase the system virtual memory to accommodate the
	  increased #nn for /Zm.
	
	  -or-
	
	- Remove the template class header files from the precompiled header file.
	
	  -or-
	
	- Use "Automatic use of precompiled headers" (/YX switch), or, "Not using
	  precompiled header."
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	This problem was corrected in Microsoft Visual C++ .NET.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbCompiler kbLangCPP kbVC600bug kbVC500SP3bug kbNoUpdate 
	Technology        : kbVCsearch kbAudDeveloper kbVC600 kbVC32bitSearch kbVC500SP3 kbVC500Search
	Version           : :5.0sp3,6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
