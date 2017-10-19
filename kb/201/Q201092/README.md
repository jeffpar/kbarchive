---
layout: page
title: "Q201092: FIX: Derived Structure Can Access Private Members of Base Class"
permalink: /kb/201/Q201092/
---

## Q201092: FIX: Derived Structure Can Access Private Members of Base Class

	Article: Q201092
	Product(s): Microsoft C Compiler
	Version(s): 4.2b,5.0,6.0
	Operating System(s): 
	Keyword(s): kberrmsg kbCompiler kbVC420bug kbVC500bug kbVC600bug kbNoUpdate
	Last Modified: 11-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 4.2b, 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 4.2b, 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	No compiler error or warning is generated when a struct derives publicly from a
	class and accesses a private nested structure belonging to the base class.
	
	CAUSE
	=====
	
	This problem is due to a bug in the compiler.
	
	RESOLUTION
	==========
	
	When accessing the nested structures of the base class in the derived class, use
	the full qualified name to get the compiler to generate an error if the access
	to the nested members of the base class is illegal.
	
	For example, the following code uses the full qualified name:
	
	  class Base
	  {
	      struct Nested
	      {
	          int i;
	      };
	  };
	
	  struct Derived : public Base
	  {
	      Base::Nested m_Nested;
	  };
	
	  void main(void)
	  {
	      Derived test;
	      test.m_Nested.i = 100; //Generates compile-time error.
	  }
	
	The error message displayed is:
	
	  mycode.cpp(323) : error C2248: 'Nested' : cannot access private struct
	  declared in class 'Base' mycode.cpp(316) : see declaration of 'Nested'
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	This problem was corrected in Microsoft Visual C++ .NET.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new console application.
	
	2. Add a new C++ source file into the project.
	
	3. Add the code below:
	
	  class Base
	  {
	      struct Nested
	      {
	          int i;
	      };
	  };
	
	  struct Derived : public Base
	  {
	      Nested m_Nested;
	  };
	
	  void main(void)
	  {
	      Derived test;
	      test.m_Nested.i = 100; //No compile-time error is generated.
	  }
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg kbCompiler kbVC420bug kbVC500bug kbVC600bug kbNoUpdate 
	Technology        : kbVCsearch kbAudDeveloper kbVC500 kbVC600 kbVC32bitSearch kbVC420b kbVC500Search
	Version           : :4.2b,5.0,6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
