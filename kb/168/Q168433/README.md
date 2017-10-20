---
layout: page
title: "Q168433: FIX: Error Using _ttoi64 with Non-Unicode Applications"
permalink: /kb/168/Q168433/
---

## Q168433: FIX: Error Using _ttoi64 with Non-Unicode Applications

{% raw %}

	Article: Q168433
	Product(s): Microsoft C Compiler
	Version(s): winnt:5.0
	Operating System(s): 
	Keyword(s): kbVC500bug kbVC600fixkbbuglist
	Last Modified: 07-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	- Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	_ttoi64 is incorrectly defined in TCHAR.H in Visual C/C++ 5.0.
	
	RESOLUTION
	==========
	
	Undefine _ttoi64 and redefine it correctly. For the complete solution, see the
	MORE INFORMATION section of this article.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This problem was corrected in Visual C++ version 6.0
	for Windows.
	
	MORE INFORMATION
	================
	
	_ttoi64 is a define that substitutes _atoi64 (if _UNICODE is not defined) or
	_wtoi64 if _UNICODE is defined. On line 481 of TCHAR.H is the following:
	
	     #define _ttoi64     atoi64
	
	this should be:
	
	     #define _ttoi64     _atoi64
	
	You may add the following code to your source file to correct the problem:
	
	     // _ttoi64 is incorrectly defined in TCHAR.H, so you need to undefine
	     // it and redefine it correctly to avoid a compile error when
	     // building a non-Unicode version of your application.
	
	        #ifdef _UNICODE
	          #ifdef  _ttoi64
	            #undef  _ttoi64
	            #define _ttoi64 _wtoi64
	          #endif
	        #else
	          #ifdef  _ttoi64
	            #undef  _ttoi64
	            #define _ttoi64 _atoi64
	          #endif
	        #endif
	
	Additional query words:
	
	======================================================================
	Keywords          : kbVC500bug kbVC600fix kbbuglist
	Technology        : kbVCsearch kbAudDeveloper kbVC500 kbVC32bitSearch kbVC500Search
	Version           : winnt:5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
