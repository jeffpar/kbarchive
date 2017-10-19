---
layout: page
title: "Q177431: FIX: C2065: Undeclared Identifier Creating a STL Function Object"
permalink: /kb/177/Q177431/
---

## Q177431: FIX: C2065: Undeclared Identifier Creating a STL Function Object

	Article: Q177431
	Product(s): Microsoft C Compiler
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): kbVC600fixkbbuglist
	Last Modified: 07-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	- Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Creating the STL function object "binder2nd" causes the compiler to generate the
	following error C2065:
	
	  'identifier' : undeclared identifier
	
	It is the std::multiples<int>(): line that causes the namespace to be lost.
	
	RESOLUTION
	==========
	
	Use one of the following methods to work around this problem:
	
	- Use the "using namespace" directive instead of qualifying the function
	  objects.
	
	- Pre-declare an instance of std::multiplies<int> to solve the problem.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft product listed at the
	beginning of this article. This problem was corrected in Visual C++ version 6.0
	for Windows.
	
	MORE INFORMATION
	================
	
	The following sample demonstrates the problem and the first workaround:
	
	     /*
	     * Compiler Options: /GX
	     */ 
	
	     #include <algorithm>
	     #include <functional>
	     #include <iostream>
	
	     #define BUG
	     //Workaround: Comment the line above.
	     //Uncomment the line below.
	     //#define WORKAROUND
	
	     #ifdef WORKAROUND
	     using namespace std ;
	     #endif
	
	     int main()
	     {
	
	     #ifdef BUG
	
	        std::binder2nd< std::multiplies<int> >
	                       times_two(std::multiplies<int>(), 2);
	     #endif
	     #ifdef WORKAROUND
	         binder2nd< multiplies<int> > times_two(multiplies<int>(), 2);
	     #endif
	
	        int n = times_two(4) ;
	        std::cout << "n = " << n << std::endl ;
	        return 0 ;
	     }
	
	The following sample demonstrates the problem and the second workaround:
	
	     /*
	     * Compiler Options: /GX
	     */ 
	
	     #include <algorithm>
	     #include <functional>
	     #include <iostream>
	
	     #define BUG
	     //Workaround: Comment the line above.
	     //Uncomment the line below.
	     //#define WORKAROUND
	
	     int main()
	     {
	
	     #ifdef BUG
	
	        std::binder2nd< std::multiplies<int> >
	                       times_two(std::multiplies<int>(), 2);
	
	     #endif
	
	     #ifdef WORKAROUND
	
	        std::multiplies<int> mi ;
	        std::binder2nd< std::multiplies<int> > times_two(mi, 2);
	
	     #endif
	
	        int n = times_two(4) ;
	        std::cout << "n = " << n << std::endl ;
	        return 0 ;
	     }
	
	Additional query words:
	
	======================================================================
	Keywords          : kbVC600fix kbbuglist
	Technology        : kbVCsearch kbAudDeveloper kbVC500 kbVC32bitSearch kbVC500Search
	Version           : :5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
