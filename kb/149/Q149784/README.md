---
layout: page
title: "Q149784: FIX: LNK2001 Incorrectly Generated for Static Data Member"
permalink: kb/149/Q149784/
---

## Q149784: FIX: LNK2001 Incorrectly Generated for Static Data Member

	Article: Q149784
	Product(s): Microsoft C Compiler
	Version(s): 4.00
	Operating System(s): 
	Keyword(s): kbCompiler kbCPPonly kbVCkbbuglist kbfixlist
	Last Modified: 30-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The C/C++ Compiler (CL.EXE), included with:
	   - Microsoft Visual C++, 32-bit Editions, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When declaring static members of C++ classes, you must initialize the static
	data member. Otherwise the linker generates an unresolved external error
	message. Visual C++ 4.0 incorrectly generates such an unresolved external error
	message if a storage-class specifier (such as __declspec(X)) is used on the
	initialization line of a static data member.
	
	CAUSE
	=====
	
	Storage-class specifiers, such as __declspec(), are only necessary for
	declarations. They are not needed (but are not wrong) otherwise.
	
	RESOLUTION
	==========
	
	Remove the storage-class specifier.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This problem has been corrected in Microsoft Visual
	C++ version 4.1.
	
	MORE INFORMATION
	================
	
	Earlier versions of Visual C++ generated the following error when a storage-
	class specifier is used on the initialization line:
	
	  
	
	  C:test.cpp('line') : error C2720: 'idata' : '' storage-class specifier
	                illegal on members
	
	where 'line' is the line of code where the initialization takes place, and
	'idata' is the name of the static data member. Visual C++ no longer generates
	the C2720 error (correctly so). The following sample code demonstrates the
	problem.
	
	Sample Code
	-----------
	
	  /* Compile options needed: none
	  */ 
	
	  #include <iostream.h>
	  #include <stdio.h>
	
	  class A
	  {
	    public:
	      static __declspec(thread) int idata;
	      void test(void);
	  };
	  __declspec(thread) int  A::idata = 2;  // remove this __declspec(thread) to
	                                         // eliminate unresolved external
	  error
	
	  void A::test(void)
	  {
	    cout<<idata;
	  }
	  void main(void)
	  {
	    A theA;
	    theA.test();
	  }
	
	Additional query words: 4.00 lnk2001 lnk1120 L2029 unresolved external LINK
	
	======================================================================
	Keywords          : kbCompiler kbCPPonly kbVC kbbuglist kbfixlist
	Technology        : kbVCsearch kbAudDeveloper kbCVCComp
	Version           : 4.00
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
