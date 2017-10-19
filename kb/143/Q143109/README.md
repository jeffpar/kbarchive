---
layout: page
title: "Q143109: BUG: Debugger Shows Incorrect &quot;this&quot; Pointer"
permalink: /kb/143/Q143109/
---

## Q143109: BUG: Debugger Shows Incorrect &quot;this&quot; Pointer

	Article: Q143109
	Product(s): Microsoft C Compiler
	Version(s): 4.0,4.1,4.2,5.0,6.0
	Operating System(s): 
	Keyword(s): kbCompiler kbDebug kbide kbVC500bug kbVC600bug
	Last Modified: 07-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The C/C++ Compiler (CL.EXE), used with:
	   - Microsoft Visual C++, 32-bit Editions, versions 4.0, 4.1 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, versions 4.2, 5.0, 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, versions 4.2, 5.0, 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	   - Microsoft Visual C++.NET (2002) 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In Visual C++ 4.0, when you debug a class that uses multiple inheritance, the
	"this" pointer for any of the base classes that reside at an offset in the class
	are displayed incorrectly. Data for derived classes is not displayed correctly
	either because the debugger attempts to reference the data by using the invalid
	"this" pointer.
	
	In Visual C++ 4.1 or 4.2, only the value of "this" pointer is not shown
	correctly. All the members are displayed correctly.
	
	CAUSE
	=====
	
	The compiler produces incorrect debugging information causing a display error in
	the debugger only. The vtable entries themselves are correct, and programmatic
	access to the data produces the proper values.
	
	RESOLUTION
	==========
	
	The only way to work around this problem is to output the addresses to an output
	device. You may use a TRACE statement or cout() as shown in the sample code
	below.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	
	MORE INFORMATION
	================
	
	Sample Code to Demonstrate Problem
	----------------------------------
	
	  /* This code demonstrates the problem.
	     Compile options needed: none
	  */ 
	
	  #include <iostream.h>
	
	  // Class definitions
	  class A
	  {
	  protected:
	     int aint;
	  public:
	      virtual void fA(void) = 0;
	  };
	
	  class B
	  {
	  protected:
	     int bint;
	  public:
	      virtual void fB(void) = 0;
	  };
	
	  class AB : public A, public B
	  {
	  protected:
	     int abint;
	  public:
	      virtual void fAB(void);
	  };
	
	  class DAB : public AB
	  {
	  protected:
	     int dabint;
	  public:
	     DAB() {aint = 1; bint = 2; abint = 3; dabint = 4;}
	      void fA(void)
	      {
	          cout << "DAB::fA - this=" << this << endl;
	      }
	      void fB(void)
	      {
	     // The "this" pointer will be displayed incorrectly in the
	     // locals window during the execution of this function. The
	     // address displayed in the output window will still be correct.
	
	          cout << "DAB::fB - this=" << this << endl;
	
	     // The base class member variables "aint" and "bint" will be
	     // displayed incorrectly in the locals window, but the derived
	     // class member variables "abint" and "dabint" will be
	     // incorrect.  All will show correct values in the final output.
	
	        cout << "aint: " << aint << " bint: " << bint
	           << " abint: " << abint << " dabint: " << dabint <<
	   endl;
	      }
	  };
	
	  void AB::fAB(void)
	  {
	      cout << "AB::fAB - this=" << hex << this << endl;
	      fA();
	      fB();
	  }
	
	  void main()
	  {
	      DAB dab;
	      dab.fAB();
	  }
	
	Additional query words: kbVC400bug
	
	======================================================================
	Keywords          : kbCompiler kbDebug kbide kbVC500bug kbVC600bug 
	Technology        : kbVCsearch kbAudDeveloper kbCVCComp
	Version           : :4.0,4.1,4.2,5.0,6.0
	Issue type        : kbbug
	
	=============================================================================
	
