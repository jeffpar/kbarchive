---
layout: page
title: "Q168377: PRB: STL string Class replace Function Does Not Work as Expected"
permalink: /kb/168/Q168377/
---

## Q168377: PRB: STL string Class replace Function Does Not Work as Expected

{% raw %}

	Article: Q168377
	Product(s): Microsoft C Compiler
	Version(s): 4.2 5.0
	Operating System(s): 
	Keyword(s): kbVC420 kbVC500 kbVC600
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
	
	The string::replace member function does not work as expected. This is because
	the same string object is used for modification and input. Many data
	manipulation routines do not check for overlapping or identical arguments,
	causing unexpected results.
	
	RESOLUTION
	==========
	
	Create a temporary copy of the string as shown below:
	
	  s1.replace (1,2,string("c"));
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	The sample code below demonstrates the behavior reported in the SYMPTOMS
	section.
	
	  #include <iostream>
	  #include <string>
	  using namespace std ;
	  void f1()
	   {
	    string s ("abcd");
	    s.replace (1,2,s,2,1);
	    cout << "s (should be 'acd'): " << s << endl << endl;
	   }
	  int main ()
	   {
	     f1();// prints "add" instead of "acd"
	     return 0 ;
	   }
	
	Additional query words:
	
	======================================================================
	Keywords          : kbVC420 kbVC500 kbVC600 
	Technology        : kbVCsearch kbAudDeveloper kbVCLibrary
	Version           : 4.2 5.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
