---
layout: page
title: "Q168376: PRB: STL string Class insert Function Does Not Work as Expected"
permalink: /kb/168/Q168376/
---

## Q168376: PRB: STL string Class insert Function Does Not Work as Expected

	Article: Q168376
	Product(s): Microsoft C Compiler
	Version(s): 4.2 5.0
	Operating System(s): 
	Keyword(s): kbprogramming kbVC420 kbVC500 kbVC600
	Last Modified: 17-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Standard C++ Library, included with:
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 4.2 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 4.2 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The string::insert member function does not work as expected. This is because
	the same string object is used for modification and input. Many data
	manipulation routines do not check for overlapping or identical arguments,
	causing unexpected results.
	
	RESOLUTION
	==========
	
	Create a temporary copy of the string as shown below:
	
	  s.insert(0, string("b"), 1);
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	  #include <iostream>
	  #include <string>
	  using namespace std ;
	
	  void f1()
	   {
	    string s ("abc");
	    s.insert (0, s, 1, 1);
	    cout << "s (should be 'babc'): " << s << endl << endl;
	   }
	
	  int main ()
	    {
	      f1();// prints "aabc" instead of "babc"
	      return 0 ;
	    }
	
	Additional query words:
	
	======================================================================
	Keywords          : kbprogramming kbVC420 kbVC500 kbVC600 
	Technology        : kbVCsearch kbAudDeveloper kbVCLibrary
	Version           : 4.2 5.0
	Issue type        : kbprb
	
	=============================================================================
	
