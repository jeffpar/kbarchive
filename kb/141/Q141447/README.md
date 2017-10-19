---
layout: page
title: "Q141447: FIX: dbDao's CdbException Uses Private Constructor"
permalink: /kb/141/Q141447/
---

## Q141447: FIX: dbDao's CdbException Uses Private Constructor

	Article: Q141447
	Product(s): Microsoft C Compiler
	Version(s): 3.0,3.5,3.51,3.6
	Operating System(s): 
	Keyword(s): kbcode kbDAOsearch kbDatabase kbMFC kbVC
	Last Modified: 30-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The DAO SDK, versions 3.0, 3.5, 3.51, 3.6 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	It is difficult to explicitly throw a CdbException from the dbDAO class library.
	It is possible, depending on how the exception class is thrown, to generate this
	error:
	
	  C2248: 'CdbException::CdbException' : cannot access private member declared
	  in class 'CdbException'
	
	CAUSE
	=====
	
	This is because the constructor for the class is implicitly private. It does not
	inherit, nor are any classes inherited from CdbException, and it does not define
	any friends for the class.
	
	The dbDao classes, however, are successfully able to throw the exception, but
	only because of another bug within the Visual C++ 4.0 compiler that allows you
	to throw a temporary instance of a class with only a private constructor.
	
	RESOLUTION
	==========
	
	The error is generated if you declare an instance of CdbException and then
	attempt to throw it.
	
	     HRESULT hr;
	     CdbException myException( hr );
	     throw myException;          // Generates error C2248
	
	However, you can successfully throw the instance if you throw a temporary
	instance of CdbException.
	
	     HRESULT hr;
	     throw CdbException( hr );
	
	Now it is possible to catch this exception using C++ exception handling.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug was corrected in Visual C++ 32- bit Edition
	version 4.1.
	
	Additional query words: kbVC400bug 3.00 4.00 4.10 vcfixlist410
	
	======================================================================
	Keywords          : kbcode kbDAOsearch kbDatabase kbMFC kbVC 
	Technology        : kbAudDeveloper kbDAOsearch kbSDKDAOSearch kbSDKSearch kbSDKDAO300 kbSDKDAO350 kbSDKDAO360 kbSDKDAO351
	Version           : :3.0,3.5,3.51,3.6
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
