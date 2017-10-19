---
layout: page
title: "Q131312: FIX: Manipulator Causes C1001 IC Error in MSC1.CPP Line 1056"
permalink: /kb/131/Q131312/
---

## Q131312: FIX: Manipulator Causes C1001 IC Error in MSC1.CPP Line 1056

	Article: Q131312
	Product(s): Microsoft C Compiler
	Version(s): 2.0,2.1
	Operating System(s): 
	Keyword(s): kbbuglist kbfixlist
	Last Modified: 29-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft C/C++ Compiler (CL.EXE), included with:
	   - *EDITOR Please do not choose this product*Microsoft Visual C++ 32-bit Edition* use 241, 265, 225, versions 2.0, 2.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The compiler generates the following compiler error:
	
	  fatal error C1001: INTERNAL COMPILER ERROR ( compiler file 'msc1.cpp', line
	  1056 )
	
	This occurs when the code meets both of these conditions:
	
	- It contains a function template that overwrites the << operator
	  (insertion operator) or the >> operator (extraction operator) for class
	  ostream. For example:
	
	        template <class T> ostream& operator<<( ostream&, T& ); //or
	        template <class T> istream& operator>>( istream&, T& );
	
	- It contains an expression of the form:
	
	        iostream_specifier insertion/extraction_operator manipulator
	
	  For example:
	
	        cout << endl;  // fails if template operator << was defined
	        cout << flush; // fails if template operator << was defined
	        cin >> ws;     // fails if template operator >> was defined
	
	RESOLUTION
	==========
	
	The problem does not occur if an identifier of any type is inserted into the
	expression. For example, if 'a' is a variable (of any type):
	
	     cout << a << endl;     // does not fail
	     cout << '\n' << flush; // does not fail
	     cin >> a >> ws;        // does not fail
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This problem was fixed in Microsoft Visual C++,
	32-bit Edition, version 4.0.
	
	MORE INFORMATION
	================
	
	To demonstrate the workaround, change the lines marked "internal compiler error"
	into comments.
	
	Sample Code to Demonstrate Problem
	----------------------------------
	
	  /* Compile options needed: none
	  */ 
	
	  #include <iostream.h>
	  #include <strstrea.h>
	
	  template <class T> ostream& operator<< ( ostream&, T& );
	  template <class T> istream& operator>> ( istream&, T& );
	
	  void x(ostrstream &ot)
	  {
	     int a;
	
	     cout << endl;  // internal compiler error
	     ot << flush;   // internal compiler error
	     cin >> ws;     // internal compiler error
	     cout << "test" << endl;  // no error
	     ot << '\n' << flush;     // no error
	     cin >> a >> ws;          // no error
	
	  }
	
	Additional query words: 9.00 9.0 2.00 2.10 9.10 9.1
	
	======================================================================
	Keywords          :  kbbuglist kbfixlist
	Technology        : kbVCsearch kbAudDeveloper kbCVCComp
	Version           : :2.0,2.1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
