---
layout: page
title: "Q34921: INFO: jmp_buf Pointer Type is &quot;void &#42;&quot;"
permalink: kb/034/Q34921/
---

## Q34921: INFO: jmp_buf Pointer Type is &quot;void &#42;&quot;

	Article: Q34921
	Product(s): Microsoft C Compiler
	Version(s): 1.0,1.5,2.0,2.1,4.0
	Operating System(s): 
	Keyword(s): kbCRT kbVC100 kbVC150 kbVC200 kbVC210 kbVC400 kbDSupport
	Last Modified: 22-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The C Run-Time (CRT), used with:
	   - Microsoft C for MS-DOS 
	   - Microsoft C/C++ for MS-DOS 
	   - Microsoft Visual C++ for Windows, 16-bit edition, versions 1.0, 1.5 
	   - Microsoft Visual C++, 32-bit Editions, versions 1.0, 2.0, 2.1, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The setjmp() and longjmp() functions accept a parameter of type jmp_buf. (The
	jmp_buf type is declared in SETJMP.H.) If you use the address of (&)
	operator with a variable of type jmp_buf and assign it to a jmp_buf pointer,
	Microsoft C 5.1 generates the following messages:
	
	  warning C4046: '&' on function/array, ignored
	  warning C4047: '=' : different levels of indirection
	
	If you omit the address of operator and assign the value to a pointer of type
	jmp_buf, the compilers listed in the banner above generate the following
	message:
	
	  warning C4047: '=' : different levels of indirection
	
	To address this situation, declare the pointer to have type "void *." Then assign
	the value to the pointer without using the ampersand, as the code example below
	demonstrates.
	
	MORE INFORMATION
	================
	
	Because the SETJMP.H header file declares the jmp_buf type as an array of
	integers, the compiler generates the messages above when you use the address of
	operator. SETJMP.H uses an array type instead of a structure to be compatible
	with common C coding practices; section 4.6 of the "Rationale for the ANSI C
	Standard" provides additional information.
	
	Basically, the setjmp() function changes the jmp_buf parameter to record the
	destination for the longjmp() function. Elsewhere, the standard defines setjmp()
	to accept a parameter of type jmp_buf, not of type "pointer to jmp_buf."
	Therefore, jmp_buf cannot be a structure; structures are passed by value and
	setjmp() could not make the necessary changes. Because an array is passed by
	reference (that is, by its address), setjmp() can make the necessary changes to
	an array parameter.
	
	The declaration for badptr in the code example below declares it to be of type
	"pointer to array of integer," not "pointer to integer." Performing an
	assignment between different pointer types generates the C4047 warning. (To
	succeed without warning, badptr must be a "pointer to integer," because that
	type is compatible with "array of integer.")
	
	Instead, the code uses goodptr, declared as a "pointer to void," which supports
	the assignment without generating a warning. The code that uses goodptr is
	portable. Note that void pointers to not support indirection or subscripting
	(another form of indirection).
	
	However, because your code does not know the contents of the jump buffer, this
	should not be a problem. (The contents of the jump buffer are implementation
	dependent and can vary between versions of the same compiler. Any code that
	directly manipulates the contents of a jump buffer is also implementation
	dependent and not portable.)
	
	Sample Code
	-----------
	
	  /*
	   * Compiler options needed: none
	   */ 
	
	  #include <setjmp.h>
	
	  jmp_buf buf;
	  jmp_buf *badptr;
	  void *goodptr;
	
	  void main()
	  {
	     badptr = &buf;
	        /*  C 5.1 warning C4046: '&' on function/array, ignored      */ 
	        /*  C 5.1 warning C4047: '=' different levels of indirection */ 
	
	     badptr = buf;
	        /*  warning C4047: '=' : different levels of indirection */ 
	
	     goodptr = buf;
	  }
	
	Additional query words:
	
	======================================================================
	Keywords          : kbCRT kbVC100 kbVC150 kbVC200 kbVC210 kbVC400 kbDSupport 
	Technology        : kbVCsearch kbAudDeveloper kbCRT
	Version           : :1.0,1.5,2.0,2.1,4.0
	Issue type        : kbinfo
	
	=============================================================================
	
