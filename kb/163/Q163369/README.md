---
layout: page
title: "Q163369: FIX: LDd Suppresses Implicit Definition of _DEBUG"
permalink: /kb/163/Q163369/
---

## Q163369: FIX: LDd Suppresses Implicit Definition of _DEBUG

{% raw %}

	Article: Q163369
	Product(s): Microsoft C Compiler
	Version(s): 4.0,4.1,4.2,5.0,6.0
	Operating System(s): 
	Keyword(s): kbtool kbCompiler kbVC400bug kbVC410bug kbVC420bug kbVC500bug kbVC600bug kbNoUpdate
	Last Modified: 11-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, versions 4.0, 4.1 
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 4.2, 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 4.2, 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When compiler option /LDd follows /MTd, /MDd or /MLd, _DEBUG is not defined.
	This happens only if it is compiled from the command line. The IDE adds this
	definition by default in the project settings for debug build.
	
	RESOLUTION
	==========
	
	Specify /LDd before /MTd, /MDd or /MLd.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	This problem was corrected in Microsoft Visual C++ .NET.
	
	MORE INFORMATION
	================
	
	When you use one of the compiler options /MTd, /MDd or /MLd, the symbol _DEBUG
	is automatically defined. However, if /LDd follows any of these options on the
	compiler command line, then _DEBUG is not defined automatically.
	
	Steps to Reproduce Behavior
	---------------------------
	
	      // x.cpp or x.c
	      // Compile options needed to reproduce: /c /MTd /LDd
	      // Compile options for workaround: /c /LDd /MTd
	      #ifdef _DEBUG
	      #  pragma message("_DEBUG is defined")
	      #else
	      #  pragma message("_DEBUG is not defined")
	      #endif
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbtool kbCompiler kbVC400bug kbVC410bug kbVC420bug kbVC500bug kbVC600bug kbNoUpdate 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper kbVC410 kbVC420 kbVC500 kbVC600 kbVC32bitSearch kbVC500Search
	Version           : :4.0,4.1,4.2,5.0,6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
