---
layout: page
title: "Q112337: PRB: /MD Causes C4273 Warning When Replacing _matherr"
permalink: /kb/112/Q112337/
---

## Q112337: PRB: /MD Causes C4273 Warning When Replacing _matherr

	Article: Q112337
	Product(s): Microsoft C Compiler
	Version(s): 1.0,2.0
	Operating System(s): 
	Keyword(s): kbCRT kbVC
	Last Modified: 27-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The C Run-Time (CRT), included with:
	   - Microsoft Visual C++, 32-bit Editions, versions 1.0, 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Attempting to replace the default _matherr function with a user-defined version
	and then linking with the C run-time dynamic-linked library (DLL) causes the
	compiler to issue the following warning:
	
	  warning C4273: '_matherr' : inconsistent dll linkage. dllexport assumed.
	
	Running the resultant executable causes the default _matherr to be used rather
	than the user-defined version.
	
	CAUSE
	=====
	
	The compiler issues the C4273 warning because of the way the _matherr function
	is prototyped in the MATH.H header file. _matherr has the following prototype:
	
	     _CRTIMP int __cdecl _matherr(struct _exception *);
	
	When code is being compiled to be used with the C run-time DLL, _CRTIMP is
	defined to be the following:
	
	     __declspec(dllimport)
	
	When code is being compiled to be used with one of the statically linked C
	run-time libraries, _CRTIMP is defined to be nothing.
	
	The C4273 warning is generated because the compiler has detected a redefinition
	of _matherr after already seeing a prototype that specifies that _matherr is
	being imported.
	
	RESOLUTION
	==========
	
	It is not possible to replace the default version of _matherr when using the
	dynamically linked version of the C run-time library.
	
	The README.WRI file supplied with Visual C++, 32-bit Edition, version 1.0, gives
	the following information:
	
	  Using _matherr with CRTDLL.DLL
	
	  If you use the dynamically linked version of the C run-time
	  library (CRTDLL.DLL), you cannot replace the default _matherr
	  routine with a user-defined version. You can only install a
	  custom _matherr routine if you use one of the statically linked C
	  run-time libraries.
	
	CRTDLL.DLL is the name of the C Run-time DLL that is supplied with Windows NT.
	The C Run-time DLL supplied with version 1.0 of Visual C++, 32-bit Edition, is
	called MSVCRT10.DLL and the name of the C Run-time DLL supplied with version 2.0
	of Visual C++, 32-bit Edition is MSVCRT20.DLL. The limitation of not being able
	to replace _matherr pertains only to using MSVCRT*.DLL.
	
	MORE INFORMATION
	================
	
	The following sample code can be used to demonstrate the problem.
	
	Sample Code
	-----------
	
	     /* Compile options needed: /MD
	     */ 
	     #include <math.h>
	     #include <string.h>
	     #include <stdio.h>
	     void main()
	     {
	         // Do a math operation that causes an error
	         printf( "log( -2.0 ) = %e\n", log( -2.0 ) );
	     }
	     int _matherr( struct _exception *except )
	     {
	         /* Handle _DOMAIN errors for log */ 
	         if( except->type == _DOMAIN )
	         {
	             if( strcmp( except->name, "log" ) == 0 )
	             {
	                 except->retval = log( -(except->arg1) );
	                 printf( "Special: using absolute value: %s: _DOMAIN "
	                         "error\n", except->name );
	                 return 1;
	             }
	         }
	         else
	         {
	             printf( "Normal: " );
	             return 0;    /* Else use the default actions */ 
	         }
	         return 0;
	     }
	
	REFERENCE
	---------
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q112297 INFO: User Defined CRT Function Causes Unresolved External
	
	Additional query words: _matherrl
	
	======================================================================
	Keywords          : kbCRT kbVC 
	Technology        : kbVCsearch kbAudDeveloper kbCRT
	Version           : :1.0,2.0
	Issue type        : kbprb
	
	=============================================================================
	
