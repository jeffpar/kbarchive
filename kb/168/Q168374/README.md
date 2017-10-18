---
layout: page
title: "Q168374: FIX: C1001 file 'msc1.cpp', line 1188, Using Recursive Namespace"
permalink: kb/168/Q168374/
---

## Q168374: FIX: C1001 file 'msc1.cpp', line 1188, Using Recursive Namespace

	Article: Q168374
	Product(s): Microsoft C Compiler
	Version(s): 5.0,6.0
	Operating System(s): 
	Keyword(s): kbcode kberrmsg kbtool kbVC500bug kbVC600bug kbNoUpdatekbbuglist
	Last Modified: 10-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Using namespace names recursively causes the compiler to generate the following
	error message:
	
	  fatal error C1001: INTERNAL COMPILER ERROR (compiler file 'msc1.cpp', line
	  1188)
	
	RESOLUTION
	==========
	
	Use the "using" directive instead of the "using namespace" directive. Please see
	the sample in the MORE INFORMATION section of this article for a workaround.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	This problem was corrected in Microsoft Visual C++ .NET.
	
	MORE INFORMATION
	================
	
	The following sample code demonstrates the problem and a workaround:
	
	Sample Code
	-----------
	
	     /*
	     Compile Options: /GX
	     */ 
	     #include <iostream>
	
	     namespace A
	     {
	     }
	
	     namespace B
	     {
	
	        using namespace A;
	
	     }
	
	     namespace A
	     {
	
	        int Ai ;
	        using namespace B;
	     }
	
	     int f(void)
	     {
	        using namespace A ; //C1001 here
	        //Workaround: Comment the above line
	        //Uncomment the line below
	        //using A::Ai ;
	        Ai = 100 ;
	        return Ai ;
	     }
	
	     void main()
	     {
	        std::cout << "A::Ai = " << f() << std::endl ;
	     }
	
	Additional query words:
	
	======================================================================
	Keywords          : kbcode kberrmsg kbtool kbVC500bug kbVC600bug kbNoUpdate kbbuglist
	Technology        : kbVCsearch kbAudDeveloper kbVC500 kbVC600 kbVC32bitSearch kbVC500Search
	Version           : :5.0,6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
