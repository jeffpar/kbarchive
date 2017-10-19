---
layout: page
title: "Q172609: FIX: /GX May Cause C1001 When Using Base Class' Operator Delete"
permalink: /kb/172/Q172609/
---

## Q172609: FIX: /GX May Cause C1001 When Using Base Class' Operator Delete

	Article: Q172609
	Product(s): Microsoft C Compiler
	Version(s): winnt:5.0
	Operating System(s): 
	Keyword(s): kbcode kberrmsg kbCompiler kbCPPonly kbVC kbVC500bug kbVS97sp3fix
	Last Modified: 17-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The C/C++ Compiler (CL.EXE), included with:
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When attempting to use a base class' operator delete, and using the /GX switch
	to enable Visual C++ Exception Handling, the following error may be generated:
	
	  
	
	  fatal error C1001: INTERNAL COMPILER ERROR
	      (compiler file 'msc1.cpp', line 1188)
	
	CAUSE
	=====
	
	This error will be generated if the base class has a virtual function, the
	derived class uses the base class operator delete via a using declaration or an
	access declaration, and the derived class has a function prototyped to return a
	pointer to a base class, but actually returns a pointer to the derived class. An
	example can be found in the sample code below.
	
	RESOLUTION
	==========
	
	Do not use the /GX switch when attempting to use the base class operator
	delete.
	
	  -or-
	
	Implement an operator delete in the derived class that calls the base class
	operator delete.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug has been fixed in Visual Studio 97 Service
	Pack 3.
	
	For more information, please see the following article in the Microsoft Knowledge
	Base:
	
	  Q170365 INFO: Visual Studio 97 Service Packs - What, Where, and Why
	
	MORE INFORMATION
	================
	
	The following two samples cause an internal compiler error when built with the
	compiler's /GX switch. The second sample shows how this can occur when using
	MFC.
	
	Sample 1
	--------
	
	     // compile options: /GX /c
	     class A
	     {
	     public:
	         virtual MyFunction();
	         void operator delete(void* p);
	     };
	     class B : public A
	     {
	     public:
	         A::operator delete;
	         // using A::operator delete;
	         A* func();
	     };
	     A* B::func()
	     {
	         return new B;
	     }
	
	Sample 2
	--------
	
	     // compile options: /GX /c
	     #include "afxcoll.h"
	     class C : public CObArray
	     {
	     public:
	          CObArray::operator delete;
	          // using CObArray::operator delete;
	          DECLARE_SERIAL( C );
	     };
	     IMPLEMENT_SERIAL ( C, CObArray, 1 )
	
	Additional query words: ICE
	
	======================================================================
	Keywords          : kbcode kberrmsg kbCompiler kbCPPonly kbVC kbVC500bug kbVS97sp3fix 
	Technology        : kbVCsearch kbAudDeveloper kbCVCComp
	Version           : winnt:5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
