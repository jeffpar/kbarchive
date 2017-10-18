---
layout: page
title: "Q168078: FIX: C2784 Instantiating STL Objects with a UDT Parameter"
permalink: kb/168/Q168078/
---

## Q168078: FIX: C2784 Instantiating STL Objects with a UDT Parameter

	Article: Q168078
	Product(s): Microsoft C Compiler
	Version(s): winnt:5.0
	Operating System(s): 
	Keyword(s): kbtool kbVC500bug kbVC600fixkbbuglist
	Last Modified: 07-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	- Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to instantiate an STL component for a class, a C2784 error
	occurs, complaining that a relational operator (such as operator!= or
	operator>) is not defined. This in spite of including "using namespace
	std::rel_ops;", and defining operator< and operator== for the class.
	
	CAUSE
	=====
	
	The problem is caused by the nested namespace std::rel_ops. The compiler is
	unable to do a proper name lookup for the generic relational operators '!=',
	'<=', '>', '>=', which are defined in the namespace std::rel_ops and
	are referenced by several STL components.
	
	RESOLUTION
	==========
	
	The easiest workaround is to add a using declaration for the specific operator
	the compiler is complaining about. See the sections compiled conditionally upon
	WORKAROUND in the sample code below.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.This problem was corrected in Microsoft
	Visual C++ version 6.0.
	
	MORE INFORMATION
	================
	
	The following sample demonstrates the problem.
	
	Sample Code
	-----------
	
	     /*
	     Compile options: /GX
	     */ 
	     #include <list>
	
	     using namespace std ;
	     using namespace std::rel_ops ;
	
	     #ifdef WORKAROUND   // define WORKAROUND to get around the error
	     using std::rel_ops::operator!=;
	     using std::rel_ops::operator>;
	     #endif
	
	     class X {
	
	         int N;
	     public:
	         X(int n) : N(n) {}
	         bool operator==(const X& b) const
	         { return N == b.N; }
	         bool operator<(const X& b) const
	         { return N < b.N; }
	     };
	
	     list <X> xList;
	
	     int main()
	     {
	          return 0;
	     }
	
	Additional query words:
	
	======================================================================
	Keywords          : kbtool kbVC500bug kbVC600fix kbbuglist
	Technology        : kbVCsearch kbAudDeveloper kbVC500 kbVC32bitSearch kbVC500Search
	Version           : winnt:5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
