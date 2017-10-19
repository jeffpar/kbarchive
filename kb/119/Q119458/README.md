---
layout: page
title: "Q119458: Result of _fpreset() Is Not _CW_DEFAULT"
permalink: /kb/119/Q119458/
---

## Q119458: Result of _fpreset() Is Not _CW_DEFAULT

	Article: Q119458
	Product(s): Microsoft C Compiler
	Version(s): winnt:
	Operating System(s): 
	Keyword(s): kbCRT kbVC
	Last Modified: 29-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The C Run-Time (CRT), included with:
	   - Microsoft Visual C++, versions 1.0, 1.50 
	   - *EDITOR Please do not choose this product*Microsoft Visual C++ 32-bit Edition* use 241, 265, 225, versions 1.0, 2.0, 2.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Calling _fpreset() reinitializes the floating-point math package. The header
	file FLOAT.H contains the following definition of _CW_DEFAULT:
	
	      /* initial Control Word value */ 
	
	     #ifdef  _M_IX86
	
	     #define _CW_DEFAULT ( _RC_NEAR + _PC_64 + _EM_INVALID + _EM_ZERODIVIDE +
	        _EM_OVERFLOW + _EM_UNDERFLOW + _EM_INEXACT )
	
	     #endif
	
	You might expect that if you call _fpreset() and then call _controlfp(0,0) to get
	the control word, that the control word will be _CW_DEFAULT; however, that is
	not the case. _CW_DEFAULT does not actually correspond to the default value of
	the x87 control word. The difference is that _CW_DEFAULT does not mask the
	denormal exception. The _fpreset() routine masks all exceptions, including
	denormal.
	
	The denormal exception does not belong to the set of floating-point exceptions
	specified by the IEEE Standard. You cannot mask or unmask the exception using
	_controlfp(). The abstract control word used by the C run- time reserves the
	upper bits for machine-specific features. Therefore, you should not compare full
	control-word encodings; instead, you should compare the bits that you are
	interested in.
	
	Additional query words: kbinf 1.00 1.50 2.00 2.10
	
	======================================================================
	Keywords          : kbCRT kbVC 
	Technology        : kbVCsearch kbAudDeveloper kbCRT
	Version           : winnt:
	
	=============================================================================
	
