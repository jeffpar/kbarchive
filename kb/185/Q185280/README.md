---
layout: page
title: "Q185280: FIX: Printf Gives Unexpected Results for Doubles on WinCE"
permalink: /kb/185/Q185280/
---

## Q185280: FIX: Printf Gives Unexpected Results for Doubles on WinCE

{% raw %}

	Article: Q185280
	Product(s): Microsoft C Compiler
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): kbfix
	Last Modified: 10-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++ for Windows CE, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use any of the printf C run-time routines (printf, _vstprintf,
	_stprintf, and so on) with the "%f" format specifier, you get unexpected
	results. The printf C run-time routines return the floating-point format
	specifier without the leading '%' instead of the text representation of the
	number. For example, the following code gives the result "f" instead of
	"1.23456789":
	
	     _stprintf(pBuffer, TEXT("%f"), 1.23456789);
	
	CAUSE
	=====
	
	This is a bug in the printf C run-time routines. The printf routines for Windows
	CE do not support floating-point numbers.
	
	RESOLUTION
	==========
	
	This has been fixed in version 2.0 of Visual C++ for Windows CE. To work around
	this problem in version 1.0, you must manually convert the floating- point
	number. You can use the _gcvt function to convert the floating-point number to
	an ANSI string, and then use the "%S" format specifier in a printf routine to
	convert the ANSI string to UNICODE.
	
	For example, replace the following code:
	
	     _stprintf(pBuffer, TEXT("%f"), 1.23456789);
	
	with:
	
	     char pTemp[256];
	     _gcvt(1.23456789,9,pTemp);
	     _stprintf(pBuffer, TEXT("%S"), pTemp);
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug has been corrected in Visual C++ for Windows
	CE, 2.0.
	
	Additional query words: kbnokeyword kbwince100fix
	
	======================================================================
	Keywords          : kbfix 
	Technology        : kbVCsearch kbAudDeveloper kbZNotKeyword3 kbVC100WinCE
	Version           : WINDOWS:1.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
