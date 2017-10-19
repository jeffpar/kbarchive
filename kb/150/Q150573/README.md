---
layout: page
title: "Q150573: FIX: C2084 When Template Class Constructor Has No Body"
permalink: /kb/150/Q150573/
---

## Q150573: FIX: C2084 When Template Class Constructor Has No Body

	Article: Q150573
	Product(s): Microsoft C Compiler
	Version(s): 4.1 4.2
	Operating System(s): 
	Keyword(s): kbCompiler kbCPPonly kbVC kbVC500fix
	Last Modified: 03-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The C/C++ Compiler (CL.EXE), included with:
	   - Microsoft Visual C++, 32-bit Editions, version 4.1 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 4.2 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 4.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The following error occurs when a template class is explicitly instantiated and
	it has more than one constructor, at least one of which does not have a body
	defined and at least one of which is defined outside of the class:
	
	  error C2084: function '<function name>' already has a body
	
	WORKAROUND
	==========
	
	This is the preferred workaround. Give every constructor a body. The body is
	defined inside or outside the template class.
	
	-or-
	
	- Place all the existing constructor bodies inside the template class
	  definition.
	
	  NOTE: You get the following warning associated with the explicit instantiation
	  request:
	
	  warning C4661: <symbol> : no suitable definition provided for explicit
	  instantiation request
	
	  This warning is issued when a template class does not have all its members
	  defined and an explicit instantiation request is made. This warning also
	  causes the compiler to ignore the instantiation request.
	
	-or-
	
	- Instantiate the template class implicitly rather than explicitly. In this
	  case, the instantiation occurs when declaring an object using the template
	  class, but the C2084 does not.
	
	NOTE: the sample code in this article gives examples of explicit versus implicit
	template instantiation.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug was corrected in Visual C++ version 5.0.
	
	MORE INFORMATION
	================
	
	Sample Code
	-----------
	
	     /* Compile options needed: /c
	     */ 
	
	     template <class T>
	     class A {
	     public:
	         A();             // give this ctor a body for workaround 1
	         A(const T&);
	     };
	
	     template <class T> A<T>::A(const T&) {}; // move this ctor body
	                                              // inside the class
	                                              // definition for
	                                              // workaround 2
	
	     template A<int>;     // this is an explicit instantiation -
	                          // comment this line out and uncomment the
	                          // next line for workaround 3
	     // A<int> x = 3;     // this is an implicit instantiation
	
	Additional query words: kbVC400bug
	
	======================================================================
	Keywords          : kbCompiler kbCPPonly kbVC kbVC500fix 
	Technology        : kbVCsearch kbAudDeveloper kbCVCComp
	Version           : 4.1 4.2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
