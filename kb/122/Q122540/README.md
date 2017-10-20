---
layout: page
title: "Q122540: FIX: 'char &#42;' Passed to 'const char &#42; &amp;' Violates Type Safety"
permalink: /kb/122/Q122540/
---

## Q122540: FIX: 'char &#42;' Passed to 'const char &#42; &amp;' Violates Type Safety

{% raw %}

	Article: Q122540
	Product(s): Microsoft C Compiler
	Version(s): 1.0,1.5,1.52,2.0,2.1,4.0,4.1,4.2,5.0
	Operating System(s): 
	Keyword(s): kbVC150bug kbVC152bug kbVC200bug kbVC210bug kbVC400bug kbVC410bug kbVC420bug kbVC500bug
	Last Modified: 11-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The C/C++ Compiler (CL.EXE), used with:
	   - Microsoft Visual C++, 32-bit Editions, versions 1.0, 2.0, 2.1, 4.0, 4.1 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, versions 4.2, 5.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, versions 4.2, 5.0 
	   - Microsoft Visual C++ for Windows, 16-bit edition, versions 1.5, 1.52 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Visual C++ incorrectly allows a pointer to be passed to a function that takes a
	non-const reference to a pointer to a const. This breaks C++ type safety and
	allows the const data assigned to the reference to be modified by the pointer
	after the function has returned.
	
	RESOLUTION
	==========
	
	To protect the const data, the reference should be a reference to a const
	pointer to a const, that is: const char * const &.
	
	STATUS
	======
	
	This bug was corrected in Microsoft Visual C++, version 6.0.
	
	MORE INFORMATION
	================
	
	A reference may only be initialized with an lvalue expression of the same type
	or a class derived from that type. If this is not the case, the reference must
	be declared const.
	
	The following sample includes a non-const reference of type const char*, which is
	being initialized with an expression of type char*. The compiler should, but
	does not, generate an error. The program prints this string:
	
	  const_ptr = Xhis is a 'const char *'
	
	Sample Code
	-----------
	
	  /* Compile options needed: none
	  */ 
	
	  #include <iostream.h>
	
	  onst char * const_ptr = "This is a 'const char *'";
	
	  void func ( const char* & reference) {
	     reference = const_ptr;
	  }
	
	  void main() {
	  //  char *non_const_ptr = const_ptr;  // Not allowed.
	     char *non_const_ptr;
	
	  //  *const_ptr = 'X';      // Not allowed.
	
	     func( non_const_ptr );
	     // 
	     //  'const char *' is violated now.
	     // 
	     *non_const_ptr = 'X';    // Mess up first letter of string
	
	     cout << "const_ptr = " << const_ptr << endl;
	
	  }
	
	Additional query words: 8.0c 8.00c 9.0 9.00 10.00 10.10 10.20
	
	======================================================================
	Keywords          : kbVC150bug kbVC152bug kbVC200bug kbVC210bug kbVC400bug kbVC410bug kbVC420bug kbVC500bug kbVC600fix 
	Technology        : kbVCsearch kbAudDeveloper kbCVCComp
	Version           : :1.0,1.5,1.52,2.0,2.1,4.0,4.1,4.2,5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
