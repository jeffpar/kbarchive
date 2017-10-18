---
layout: page
title: "Q125495: BUG: Enum in Function Template Causes C2065 Compiler Error"
permalink: kb/125/Q125495/
---

## Q125495: BUG: Enum in Function Template Causes C2065 Compiler Error

	Article: Q125495
	Product(s): Microsoft C Compiler
	Version(s): 2.0,2.1
	Operating System(s): 
	Keyword(s): kbCompiler kbCPPonly kbVCkbbuglist
	Last Modified: 29-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, versions 2.0, 2.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When an enum type is used as a return type of a function template, the compiler
	generates the following error as the function template is instantiated:
	
	  Error C2065 : 'FunctionName' : undeclared identifier
	  Error C2064 : term does not evaluate to a function
	
	This error happens only when the function template takes arguments that involve a
	user-defined class template. For more information, please see the "Sample Code"
	section in this article.
	
	RESOLUTION
	==========
	
	To work around the problem, use a typedef to define the enum type, and use it as
	the return type for the function template.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	The sample code below can be used to demonstrate both the problem and its
	solution.
	
	Sample Code
	-----------
	
	  /* Compile options needed: none
	     Use /DFIX to work around the problem
	  */ 
	
	  template <class Type>
	  class TestClass
	  {
	    Type t;
	  };
	
	  enum EnumType { E1, E2, E3 };
	
	  #ifndef FIX        // Used to reproduce the problem
	
	     template <class Type>
	     EnumType EnumReturnDoesntWork( const TestClass<Type> &a )
	     {
	       return E1;
	     }
	
	  #else              // Used to work around the problem
	
	     typedef EnumType MyType;
	
	     template <class Type>
	     MyType EnumReturnDoesntWork( const TestClass<Type> &a )
	     {
	       return E1;
	     }
	
	  #endif
	
	  void main(void)
	  {
	     TestClass<int> a;
	
	     EnumReturnDoesntWork( a );   // C2065
	  }
	
	Additional query words: 2.00 2.10 9.00 9.10 noupdate
	
	======================================================================
	Keywords          : kbCompiler kbCPPonly kbVC kbbuglist
	Technology        : kbVCsearch kbAudDeveloper kbVC200 kbVC210
	Version           : :2.0,2.1
	Issue type        : kbbug
	
	=============================================================================
	
