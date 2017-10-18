---
layout: page
title: "Q122370: BUG: C2248 When Access Protected Nested Class in Derived Class"
permalink: kb/122/Q122370/
---

## Q122370: BUG: C2248 When Access Protected Nested Class in Derived Class

	Article: Q122370
	Product(s): Microsoft C Compiler
	Version(s): 1.0,2.0,2.1,4.0,4.1,4.2,5.0,6.0
	Operating System(s): 
	Keyword(s): kbCompiler kbCPPonly kbVC kbVC500bug
	Last Modified: 14-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The C/C++ Compiler (CL.EXE), used with:
	   - Microsoft C/C++ for MS-DOS 
	   - Microsoft Visual C++, 32-bit Editions, versions 1.0, 2.0, 2.1, 4.0, 4.1 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, versions 4.2, 5.0, 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, versions 4.2, 5.0, 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In the sample code in this article, class C2 is derived from C1, and contains
	nested class S2, which is derived from nested class S1, declared in class C1.
	Compiling the sample code results in the following compiler error:
	
	  error C2248: 'S1' : cannot access protected class declared in class 'C1'
	
	RESOLUTION
	==========
	
	Declare nested class C1::S1 as public.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Referencing nested class S1 inside of the class C2 declaration does not create a
	problem, but deriving from it does. Also note that you have to include the base
	class name for the declaration of the derived nested class (C1::S1). That should
	not be required, but omitting to do so prevents the compiler from recognizing
	the nested class from the base class as a valid class name.
	
	Sample Code
	-----------
	
	  /* Compile options needed: none
	  */ 
	
	  class C1
	  {
	  protected:
	    class S1
	    {
	    };
	  };
	
	  class C2 : public C1
	  {
	    S1 s1;
	
	    class S2 : public C1::S1    // this line generates C2248 error
	    {
	    };
	  };
	
	Additional query words: kbVC400bug 8.00 8.00c 9.00 10.00 10.10 10.20 buglist1.00 buglist1.50 buglist1.51 buglist2.00 buglist7.00
	
	======================================================================
	Keywords          : kbCompiler kbCPPonly kbVC kbVC500bug 
	Technology        : kbVCsearch kbAudDeveloper kbCVCComp
	Version           : :1.0,2.0,2.1,4.0,4.1,4.2,5.0,6.0
	Issue type        : kbbug
	
	=============================================================================
	
