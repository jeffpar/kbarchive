---
layout: page
title: "Q242192: BUG: uncaught_exception() Always Returns False"
permalink: /kb/242/Q242192/
---

## Q242192: BUG: uncaught_exception() Always Returns False

{% raw %}

	Article: Q242192
	Product(s): Microsoft C Compiler
	Version(s): winnt:6.0
	Operating System(s): 
	Keyword(s): kbCRT kbVC kbVC600 kbVC600bug kbDSupport
	Last Modified: 03-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The C Run-Time (CRT), included with:
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The C run-time (CRT) function uncaught_exception should return true if an
	exception is being processed. However, the function always returns false.
	
	CAUSE
	=====
	
	The uncaught_exception function is not correctly implemented as specified in the
	C++ Standard (section 18.6.4). The function is implemented as a stub function,
	which always returns false. Please refer to the Uncaught.cpp file shipped with
	the CRT source.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbCRT kbVC kbVC600 kbVC600bug kbDSupport 
	Technology        : kbVCsearch kbAudDeveloper kbCRT
	Version           : winnt:6.0
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
