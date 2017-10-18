---
layout: page
title: "Q240862: FIX: C2555 On Virtual Functions with Covariant Return Types"
permalink: kb/240/Q240862/
---

## Q240862: FIX: C2555 On Virtual Functions with Covariant Return Types

	Article: Q240862
	Product(s): Microsoft C Compiler
	Version(s): 5.0,6.0
	Operating System(s): 
	Keyword(s): kbCompiler kbCPPonly kbVC kbVC500 kbVC500bug kbVC600 kbVC600bug kbNoUpdate
	Last Modified: 11-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The C/C++ Compiler (CL.EXE), used with:
	   - Microsoft Visual C++, 32-bit Enterprise Edition, versions 5.0, 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, versions 5.0, 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You can receive the following error message if you try to override a virtual
	function with a covariant return type:
	
	  error C2555: 'B::function' : overriding virtual function differs
	  from'A::function' only by return type or calling convention
	
	Please refer to the sample code in the "More Information" section for details.
	
	CAUSE
	=====
	
	The compiler does not support virtual functions with covariant return types as
	specified in the C++ Standard, section 10.3, which is quoted below:
	
	  5- The return type of an overriding function shall be either identical to the
	  return type of the overridden function or covariant with the classes of the
	  functions. If a function D::f overrides a function B::f, the return types of
	  the functions are covariant if they satisfy the following criteria:
	
	- both are pointers to classes or references to classes
	
	- the class in the return type of B::f is the same class as the class in the
	  return type of D::f or, is an unambiguous direct or indirect base class of
	  the class in the return type of D::f and is accessible in D
	
	- both pointers or references have the same cv-qualification and the class type
	  in the return type of D::f has the same cv-qualification as or less
	  cv-qualification than the class type in the return type of B::f.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	This problem was corrected in Microsoft Visual C++ .NET.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	The following sample code demonstrates the error:
	
	  //test.cpp
	  // compiler option needed: none
	
	  #include "stdafx.h"
	
	  class A
	       {
	        public:
	  	virtual A* function();
	       };
	  	
	  class B : public A
	       {
	        public:
	  	 B* function();
	       };
	
	Additional query words:
	
	======================================================================
	Keywords          : kbCompiler kbCPPonly kbVC kbVC500 kbVC500bug kbVC600 kbVC600bug kbNoUpdate 
	Technology        : kbVCsearch kbAudDeveloper kbCVCComp
	Version           : :5.0,6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
