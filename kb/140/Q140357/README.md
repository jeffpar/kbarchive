---
layout: page
title: "Q140357: BUG: No Warning Using Extern &quot;C&quot; in a Namespace"
permalink: kb/140/Q140357/
---

## Q140357: BUG: No Warning Using Extern &quot;C&quot; in a Namespace

	Article: Q140357
	Product(s): Microsoft C Compiler
	Version(s): 4.0,4.1,5.0,6.0
	Operating System(s): 
	Keyword(s): kbProgramming kbCompiler kbCPPonly kbVC kbVC400bug kbVC410bug kbVC500bug kbVC600bug
	Last Modified: 07-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The C/C++ Compiler (CL.EXE), used with:
	   - Microsoft Visual C++, 32-bit Editions, versions 4.0, 4.1 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, versions 5.0, 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, versions 5.0, 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	   - Microsoft Visual C++.NET (2002) 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Unexpected behavior can occur when you use extern "C" in a namespace.
	
	CAUSE
	=====
	
	Among other things, extern "C" directs the compiler not to decorate the names of
	symbols. But a symbol name is not recognized as part of a namespace outside of a
	translation unit unless the namespace name is part of the decorated name for the
	symbol.
	
	The compiler should generate a warning when using extern "C" in a namespace, but
	it does not.
	
	RESOLUTION
	==========
	
	Don't use extern "C" linkage in a namespace. If you have to use extern "C"
	linkage, use it outside of a namespace.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	The following sample programs (Test1.cpp and Test2.cpp) demonstrate two cases of
	this.
	
	Sample Code to Reproduce Problem
	--------------------------------
	
	  /test1.cpp
	  /* Compile options needed: -W4
	  */ 
	  namespace A{
	     extern "C" void printf(int);
	  }
	
	  void main(){
	     A::printf(1); // actually resolves to CRT printf
	                   // which causes an access violation
	  }
	  //end of test1.cpp
	
	  //test2.cpp
	
	  /* Compile options needed: -W4
	  */ 
	
	  #include <iostream.h>
	
	  namespace A{
	     extern "C" void  function(void){cout <<"namespace A" <<endl;};
	
	  }
	
	  namespace B{
	     extern "C" void function(void){cout <<"namespace B" <<endl;};
	
	  }
	
	  void main(){
	      A::function();
	     B::function();
	
	  }
	  // end of test2.cpp
	
	The compiler names both the functions as just "_function" resulting in the
	following link errors:
	
	  error LNK2005: _function already defined in test2.obj.
	
	  LNK1169: one or more multiply defined symbols found.
	
	  -or-
	
	  LNK1179 : invalid or corrupt file: duplicate comdat "_function"
	
	Additional query words: 10.00 10.10 LNK2005 LNK1169
	
	======================================================================
	Keywords          : kbProgramming kbCompiler kbCPPonly kbVC kbVC400bug kbVC410bug kbVC500bug kbVC600bug 
	Technology        : kbVCsearch kbAudDeveloper kbCVCComp
	Version           : :4.0,4.1,5.0,6.0
	Issue type        : kbbug
	
	=============================================================================
	
