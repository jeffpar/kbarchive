---
layout: page
title: "Q168373: FIX: C2065 When Default Constructor of a Nested Class Called"
permalink: kb/168/Q168373/
---

## Q168373: FIX: C2065 When Default Constructor of a Nested Class Called

	Article: Q168373
	Product(s): Microsoft C Compiler
	Version(s): winnt:5.0
	Operating System(s): 
	Keyword(s): kbcode kberrmsg kbtool kbVC500bug kbVC600fixkbbuglist
	Last Modified: 07-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	- Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When the default constructor of a nested class gets called, it causes the C2065
	compiler error:
	
	  'identifier' : undeclared identifier
	
	RESOLUTION
	==========
	
	Please see the MORE INFORMATION section for a workaround.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.This problem was corrected in Microsoft
	Visual C++ version 6.0.
	
	MORE INFORMATION
	================
	
	NOTE: Because constructors do not have names, they are never found during name
	lookup; however an explicit type conversion using the functional notation causes
	a constructor to be called to initialize an object. (This information came from
	the C++ Working Paper.)
	
	The following sample code demonstrates the problem and the workaround.
	
	Sample Code
	-----------
	
	     /*
	     Compile options: None
	     */ 
	
	     class Base
	     {
	     public:
	
	         class Common
	         {
	         public:
	            Common(){};
	         };
	         class Derived : public Common
	         {
	         public:
	            Derived() {}
	            Derived(int n) {}
	         };
	         Base( const Common &theCommon) {}
	     };
	
	     int main(void)
	     {
	         Base B1(Base::Derived());  //C2065 here
	
	         // Workaround: Comment the above line
	         // Uncomment the following lines
	         // Base::Derived D ;
	         // Base B1(D) ;
	         return 0;
	     }
	
	Additional query words:
	
	======================================================================
	Keywords          : kbcode kberrmsg kbtool kbVC500bug kbVC600fix kbbuglist
	Technology        : kbVCsearch kbAudDeveloper kbVC500 kbVC32bitSearch kbVC500Search
	Version           : winnt:5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
