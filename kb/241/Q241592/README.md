---
layout: page
title: "Q241592: BUG: Compiling with the In-Line Function Expansion Optimizations"
permalink: /kb/241/Q241592/
---

## Q241592: BUG: Compiling with the In-Line Function Expansion Optimizations

	Article: Q241592
	Product(s): Microsoft C Compiler
	Version(s): WINDOWS:6.0; winnt:6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Visual C++ compiler fails to generate a C4716 error message when compiling a
	nonvoid member function without a return statement with the /Ob1 or /Ob2
	optimization.
	
	Note that this problem happens only when the class member function is defined
	within the class definition. Placing the nonvoid member function outside the
	class definition and marking it with the __inline keyword also fails to generate
	the error message.
	
	RESOLUTION
	==========
	
	To resolve this problem, use one of the following two resolutions:
	
	- Do not use the compiler optimizations __inline(/Ob1) or Any Suitable(/Ob2).
	
	- Place the member function definition outside the class definition.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	The following code demonstrates the problem:
	
	  class A
	  {
	  public:
	       A( void )
	       {
	          m_i = 0;
	       }
	       int increment(void);
	
	  private:
	       int m_i;
	  };
	
	  __inline int A::increment( void )
	  {
	          m_i++;
	  }
	
	  void main(void)
	  {
	      int i = 0;
	      A a;
	      i = a.increment();
	  }
	
	Compile the code with Only __inline(/Ob1) or Any Suitable(/Ob2) optimizations.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbVCsearch kbAudDeveloper kbVC600 kbVC32bitSearch
	Version           : WINDOWS:6.0; winnt:6.0
	Issue type        : kbbug
	
	=============================================================================
	
