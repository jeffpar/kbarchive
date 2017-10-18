---
layout: page
title: "Q243351: BUG: /Za Compiler Option Causes C2248 Compiler Error"
permalink: kb/243/Q243351/
---

## Q243351: BUG: /Za Compiler Option Causes C2248 Compiler Error

	Article: Q243351
	Product(s): Microsoft C Compiler
	Version(s): winnt:6.0
	Operating System(s): 
	Keyword(s): kbCompiler kbCPPonly kbVC600 kbVC600bug
	Last Modified: 03-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The C/C++ Compiler (CL.EXE), included with:
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When compiling code with the /Za compiler option (Disable Microsoft Language
	extensions) you may get the following error:
	
	  error C2248: 'member' : cannot access private 'member' declared in class
	  'class'
	
	For details, please look in the "More Information" section.
	
	CAUSE
	=====
	
	The compiler is unable to defer the access checking until it determines the use
	of a private member as a return type. The C++ Standard, Section 11 Paragraph 5
	states the following:
	
	"The access control for names used in the definition of a class member that
	appears outside of the member's class definition is done as if the entire member
	definition appeared in the scope of the member's class. In particular, access
	controls apply as usual to member names accessed as part of a function return
	type, even though it is not possible to determine the access privileges of that
	use without first parsing the rest of the function declarator."
	
	RESOLUTION
	==========
	
	There are two workarounds for this problem.
	
	1. Define the private function within the class definition itself.
	
	2. Define a public typedef for the return type.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	To reproduce the problem, compile the following piece of code with the /Za
	option.
	
	  //compiler options : cl /Za
	
	  // #define WORKAROUND 
	  // Uncomment the above line for workaround 2.
	
	  class A
	  {
	  private :
	  	struct inner {};
	  	inner PrivFunc();
	
	  public:
	      A(){}
	
	  #ifdef WORKAROUND
	  		typedef inner INNER; 
	  #endif
	  		
	
	  };
	
	  #ifndef WORKAROUND
	  A::inner A::PrivFunc()
	  {
	  	return inner();
	  }
	  #else
	  A::INNER A::PrivFunc()
	  {
	  	return INNER();
	  }
	  #endif
	
	  void main(void)
	  {
	
	  }
	
	The use of A::inner is well formed here because A::inner is a member of class A.
	This implies that the access checking for the first use of A::inner must be
	deferred until it is determined that this use of A::inner is as the return type
	of a member of class A.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbCompiler kbCPPonly kbVC600 kbVC600bug 
	Technology        : kbVCsearch kbAudDeveloper kbCVCComp
	Version           : winnt:6.0
	Issue type        : kbbug
	
	=============================================================================
	
