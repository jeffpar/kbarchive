---
layout: page
title: "Q67083: DOC: Online Help Lists Wrong Warning Level for C4127 &amp; C4135"
permalink: /kb/067/Q67083/
---

## Q67083: DOC: Online Help Lists Wrong Warning Level for C4127 &amp; C4135

{% raw %}

	Article: Q67083
	Product(s): Microsoft C Compiler
	Version(s): 1.0,2.0,2.1,6.0,6.0a,6.0ax
	Operating System(s): 
	Keyword(s): kbdocfix kbCompiler
	Last Modified: 22-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft C/C++ Compiler (CL.EXE), included with:
	   - Microsoft C for MS-DOS, versions 6.0, 6.0a, 6.0ax 
	   - Microsoft C/C++ for MS-DOS, version 7.0 
	   - Microsoft Visual C++, version 1.0 
	   - *EDITOR Please do not choose this product*Microsoft Visual C++ 32-bit Edition* use 241, 265, 225, versions 1.0, 2.0, 2.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The online Help system for Microsoft C versions 6.0, 6.0a, and 6.0ax lists the
	wrong warning level for compiler warnings C4127 and C4135. The help system
	states that both of these are level 4 warnings; however, they actually appear
	when compiling at warning level 3 (/W3).
	
	The online Help systems for Microsoft C/C++ versions 7.0 and Visual C++ for
	Windows version 1.0 incorrectly list the warning level for C4127, but lists the
	correct warning level for the compiler warning C4135.
	
	The online Help systems for Microsoft Visual C++ 32-bit Edition versions 1.0 and
	2.0 correctly list the warning level for C4127 as 4.
	
	The online Help system for Microsoft Visual C++ for Windows version 1.5 correctly
	lists the warning levels for both C4127 and C4135.
	
	Additional query words: 6.00 6.00a 7.00 8.00 9.00 1.00 1.50 2.00 2.10
	
	======================================================================
	Keywords          : kbdocfix kbCompiler 
	Technology        : kbVCsearch kbAudDeveloper kbCVCComp
	Version           : :1.0,2.0,2.1,6.0,6.0a,6.0ax
	
	=============================================================================
	

{% endraw %}
