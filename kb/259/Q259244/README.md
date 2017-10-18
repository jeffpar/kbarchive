---
layout: page
title: "Q259244: BUG: Internal Compiler Error C1001 When You Call &#95;&#95;assume()"
permalink: kb/259/Q259244/
---

## Q259244: BUG: Internal Compiler Error C1001 When You Call &#95;&#95;assume()

	Article: Q259244
	Product(s): Microsoft C Compiler
	Version(s): winnt:6.0
	Operating System(s): 
	Keyword(s): kbVC600bug kbDSupport
	Last Modified: 07-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The C/C++ Compiler (CL.EXE) 
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a function that expects STL::string as a reference is passed as an input
	argument to the __assume function, you may get the following error message:
	
	  repro.cpp(18): fatal error C1001: INTERNAL COMPILER ERROR
	
	  (compiler file 'E:\8447\vc98\p2\src\P2\main.c', line 494)
	
	  Please choose the Technical Support command on the Visual C++ Help menu, or
	  open the Technical Support help file for more information.
	
	Please refer to the "More Information" section for the sample code that
	reproduces the problem.
	
	RESOLUTION
	==========
	
	Use one of the following two methods to work around this problem:
	
	- Construct a temporary STL::string object and pass this object as a reference
	  to the function (see workaround 1 in the sample code).
	
	- Introduce a temporary variable to store the return value of the function,
	  which expects STL::string as reference (see workaround 2 in the sample code).
	
	STATUS
	======
	
	Microsoft has confirmed that this is a bug in the Microsoft products that are
	listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	The following sample code, when compiled, reproduces the problem. Uncomment the
	#define statements depending upon which workaround you choose:
	
	  // repro.cpp
	  // cl /Gx /c repro.cpp
	  #include <string>
	
	  //#define WORK_AROUND_1
	  //#define WORK_AROUND_2
	
	  using namespace std;
	
	  int MyFunc(string &m_str)
	  {
	  	return 1;
	  }
	
	  int main()
	  {
	  	string	str ;
	  	int	temp;
	  	
	  	__assume(MyFunc(string())); // This line generates C1001 error.
	  	
	  	// Workaround 1: Call the function with a temporary STL string object.
	  	#ifdef WORK_AROUND_1 
	  	   __assume(MyFunc(str));
	  	#endif
	      
	  	// Workaround 2: Store the return value of function in a temporary variable
	  	#ifdef WORK_AROUND_2
	  	   temp = MyFunc(string());
	  	   __assume(temp);
	  	#endif
	  	return 1;
	  }
	
	Additional query words:
	
	======================================================================
	Keywords          : kbVC600bug kbDSupport 
	Technology        : kbVCsearch kbAudDeveloper kbCVCComp kbVC600 kbVC32bitSearch
	Version           : winnt:6.0
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
