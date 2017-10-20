---
layout: page
title: "Q138446: FIX: Inlined Templated Member Functions Cannot Be Specialized"
permalink: /kb/138/Q138446/
---

## Q138446: FIX: Inlined Templated Member Functions Cannot Be Specialized

{% raw %}

	Article: Q138446
	Product(s): Microsoft C Compiler
	Version(s): 2.0 2.1 2.2 4.0 4.1 4.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The C/C++ Compiler (CL.EXE), included with:
	   - Microsoft Visual C++, 32-bit Editions, versions 2.0, 2.1, 2.2, 4.0, 4.1 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 4.2 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 4.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When specializing a member function that is defined inside the class template,
	the specialized member function never gets called although there is no compiler
	error or linker error reported.
	
	RESOLUTION
	==========
	
	Do not define the member function in the class template. See the Sample Code
	below for an example.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug was corrected in Visual C++ version 5.0.
	
	MORE INFORMATION
	================
	
	Sample Code to Reproduce Problem
	--------------------------------
	
	     /* Compile options needed: Default
	     */ 
	     # include <iostream.h>
	     template<class T>
	     struct TempStruct
	     {
	      void bar() { cout << "Template generated" << endl; }
	      // Change the previous line into a comment and execute the following
	      // line to work around the problem:
	      // void bar();
	     };
	     // Execute the following lines to work around the problem:
	     // template <class T>
	     // inline void TempStruct<T>::bar()
	     // {
	     //   cout << "Template generated" << endl;
	     // }
	     void TempStruct<float>::bar()
	     {
	        cout << "Template specialized" << endl;
	     }
	     void main()
	     {
	         TempStruct<int> F1;
	         TempStruct<float> F2;
	         F1.bar();
	         F2.bar();
	     }
	     // The output from the program is:
	        Template generated
	        Template generated
	     // The output should be:
	        Template generated
	        Template specialized
	
	Additional query words: 9.0 9.00 10.0 10.00 10.10 10.20
	
	======================================================================
	Keywords          :  
	Technology        : kbVCsearch kbAudDeveloper kbCVCComp
	Version           : 2.0 2.1 2.2 4.0 4.1 4.2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
