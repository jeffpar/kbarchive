---
layout: page
title: "Q116487: BUG: No Compiler Error for Ambiguous C++ Conversion"
permalink: /kb/116/Q116487/
---

## Q116487: BUG: No Compiler Error for Ambiguous C++ Conversion

	Article: Q116487
	Product(s): Microsoft C Compiler
	Version(s): 1.0,1.5,2.0,4.0,4.1,4.2,5.0,6.0
	Operating System(s): 
	Keyword(s): kbCompiler kbCPPonly kbVC kbVC100bug kbVC151bug kbVC200bug kbVC400bug kbVC410bug kbVC42
	Last Modified: 11-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The C/C++ Compiler (CL.EXE), used with:
	   - Microsoft C/C++ for MS-DOS 
	   - Microsoft Visual C++ for Windows, 16-bit edition, versions 1.0, 1.5 
	   - Microsoft Visual C++, 32-bit Editions, versions 1.0, 2.0, 4.0, 4.1, 4.2, 5.0, 6.0 
	   - Microsoft Visual C++.NET (2002) 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Class A has a member function that converts an instance of class B to an
	instance of class A. Class B also has a member function that converts an
	instance of class B to an instance of class A. Therefore, when you assign an
	instance of class B to an instance of class A, the compiler could use both
	conversion methods, resulting in an ambiguity. However, the C/C++ compiler does
	not generate an error message in this situation, as demonstrated by the sample
	code in the "MORE INFORMATION" section, below.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	You can use the following sample code to reproduce this problem:
	
	Sample Code
	-----------
	
	  /* Compile options needed: none
	  */ 
	
	  #include <iostream.h>
	
	  class B;
	
	  class A
	  {
	  public:
	      // This is the function the compiler
	      // chooses to call.
	       A(B&) { cout << "called A::A(B&)" << endl; }
	  };
	
	  class B
	  {
	  public:
	       operator A()  // This function does not get called.
	       {
	            B b;
	            cout << "called operator B::A()" << endl;
	            return b;
	       }
	  };
	
	  void main()
	  {
	          B b;
	          A a = b; // A(b) or b.operator A()?
	                   // The compiler should issue an
	                   // error here but instead chooses
	                   // to call A::A(B&).
	
	          cout << "failed: should not compile- see ARM 12.3.2" << endl;
	  }
	
	REFERENCES
	==========
	
	"The Annotated C++ Reference Manual" (ARM), Ellis and Stroustrup, Section
	12.3.2, "Conversion Functions."
	
	Additional query words: kbVC400bug 8.00 8.00c 9.00
	
	======================================================================
	Keywords          : kbCompiler kbCPPonly kbVC kbVC100bug kbVC151bug kbVC200bug kbVC400bug kbVC410bug kbVC420bug kbVC500bug kbVC600bug 
	Technology        : kbVCsearch kbAudDeveloper kbCVCComp
	Version           : :1.0,1.5,2.0,4.0,4.1,4.2,5.0,6.0
	Issue type        : kbbug
	
	=============================================================================
	
