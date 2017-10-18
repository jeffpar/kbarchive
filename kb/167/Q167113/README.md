---
layout: page
title: "Q167113: FIX: C2734, C2166: Caused by Template Function with const ref"
permalink: kb/167/Q167113/
---

## Q167113: FIX: C2734, C2166: Caused by Template Function with const ref

	Article: Q167113
	Product(s): Microsoft C Compiler
	Version(s): winnt:4.2,4.2b,5.0
	Operating System(s): 
	Keyword(s): kbtool kbVC500bug kbVC600fix
	Last Modified: 04-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The C/C++ Compiler (CL.EXE), used with:
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 4.2 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 4.2 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 4.2b 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 4.2b 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The compiler generates the compiler error C2734 and C2166, when compiling a
	template function with a const reference of class T as an argument, where class
	T is a template parameter.
	
	  C2734: 'identifier' : const object must be initialized if not extern C2166:
	  l-value specifies const object
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This problem was corrected in Visual C++ version 6.0
	for Windows.
	
	MORE INFORMATION
	================
	
	The following sample demonstrates the problem and the workaround.
	
	Sample Code
	-----------
	
	      /* Compiler Options: None
	      */ 
	      //#define WORKAROUND1 // uncomment this line for workaround1
	      //#define WORKAROUND2 // uncomment this line for workaround2
	
	      template <class T>
	      T Test (const T& arg1)
	
	     {
	
	      #ifndef WORKAROUND1
	          T x ;
	        x = arg1;
	      #else
	         T x = arg1 ; // WORKAROUND 1
	      #endif
	
	          return x;
	
	     }
	
	      int main()
	     {
	      #ifndef WORKAROUND2
	          int testValue = Test ( 7 );
	     #else
	         int testValue = Test <int> ( 7 ); // WORKAROUND 2
	     #endif
	
	      return 0;
	     }
	
	Additional query words:
	
	======================================================================
	Keywords          : kbtool kbVC500bug kbVC600fix 
	Technology        : kbVCsearch kbAudDeveloper kbCVCComp
	Version           : winnt:4.2,4.2b,5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
