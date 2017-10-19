---
layout: page
title: "Q139458: FIX: Ambiguous C2966 Error with Nested Template Classes"
permalink: /kb/139/Q139458/
---

## Q139458: FIX: Ambiguous C2966 Error with Nested Template Classes

	Article: Q139458
	Product(s): Microsoft C Compiler
	Version(s): 
	Operating System(s): 
	Keyword(s): kbLangCPP kbVC kbVC500fix
	Last Modified: 30-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Compiler included with Microsoft Visual C++, 32-bit Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An ambiguous C2966 error is generated if any members of a nested template class
	are defined externally. The sample code shown in the "More Information" section
	of this article reproduces this problem and gives the following error message:
	
	  error C2966: '<Unknown>' : adding member function of same name as
	  existing static data member for template class 'Outer'
	
	RESOLUTION
	==========
	
	Define members of a nested template class inline only.
	
	NOTE: external definitions with the inline keyword will still generate the
	ambiguous C2966 error.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug was corrected in Visual C++ version 5.0.
	
	MORE INFORMATION
	================
	
	Sample Code to Reproduce Problem
	--------------------------------
	
	     // Compile option needed: none
	
	     template<class T> class Outer {
	       public:
	           class Inner {
	           public:
	               static T sobj;
	               static T smfunc(T arg);
	      };
	
	       };
	
	       //Initialize nested class static object
	
	       template <class T> T Outer<T>::Inner::sobj = T();
	
	       // Out-of-line definition of nested class static member function
	       // Moving this definition inside class resolves the error
	      template <class T> T Outer<T>::Inner::smfunc(T arg)
	      {
	         return arg + sobj;
	      }
	
	Additional query words: kbVC400bug 10.00 10.10 10.20
	
	======================================================================
	Keywords          : kbLangCPP kbVC kbVC500fix 
	Technology        : kbVCsearch kbAudDeveloper
	Version           : :
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
