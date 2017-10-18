---
layout: page
title: "Q98409: INFO: Using a Structure with an Empty Array Member"
permalink: kb/098/Q98409/
---

## Q98409: INFO: Using a Structure with an Empty Array Member

	Article: Q98409
	Product(s): Microsoft C Compiler
	Version(s): 1.0,1.5,1.51,1.52,2.0,2.1,4.0,4.1,5.0,6.0
	Operating System(s): 
	Keyword(s): kbcode kbCompiler kbVC100 kbVC150 kbVC151 kbVC152 kbVC200 kbVC210 kbVC400 kbVC410 kbVC5
	Last Modified: 22-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft C/C++ Compiler (CL.EXE), used with:
	   - Microsoft Visual C++, 32-bit Editions, versions 1.0, 2.0, 2.1, 4.0, 4.1, 5.0, 6.0 
	   - Microsoft Visual C++ for Windows, 16-bit edition, versions 1.0, 1.5, 1.51, 1.52 
	   - Microsoft C/C++ for MS-DOS 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	The information below is derived from the Microsoft C/C++ version 7.0 online
	help file. To view the topic that corresponds to this article, search for the
	word "struct" and choose the "Unsized Arrays in Structures" topic.
	
	In the C language, an application can define structure that contains an unsized
	array as one of its fields. However, an application cannot define an array of
	structures when the structure contains an unsized array because the structure
	declaration does not allocate any memory for the unsized array.
	
	MORE INFORMATION
	================
	
	Background
	----------
	
	The following structure declaration includes an unsized array field:
	
	  struct test
	  {
	     int x, y, z;
	     char empty[];
	  }
	
	The code example below demonstrates how the compiler processes the structure
	declaration. The sizeof macro returns the size of the structure, but does not
	include the unsized array. For the structure sample above, the sizeof macro
	returns the value of 6 bytes for the 16-bit compiler and 12 bytes for the 32-bit
	compiler.
	
	Declaring Structures with Unsized Array Fields
	----------------------------------------------
	
	An application can declare an instance of a structure type that includes an
	unsized array field, but the behavior of the compiler is unpredictable.
	
	  struct test x;
	
	In the declaration above, the compiler allocates six bytes for x and the address
	of the empty field is set to six bytes beyond the address of x. This may present
	a problem because empty is a character array. If the application interprets
	empty as a string, the string has no length and ends only when a null
	terminating character (zero value) appears in memory.
	
	An attempt to create an array of structures (for example, with a struct text
	x[10] declaration) fails and the compiler generates the following messages:
	
	  warning C4001: nonstandard extension 'zero sized array in struct/union' was
	  used
	
	  error C2087: 'x' : missing subscript
	
	The compiler that is included with Visual C++ versions 5.0 and 6.0 generates the
	following error:
	
	  error C2233: '<Unknown>' : arrays of objects containing zero-size
	  arrays are illegal
	
	An application can initialize an instance of a type that contains an unsized
	array field using the following syntax:
	
	  struct test x={1, 2, 3, "Test String");
	
	In this example the empty field in x points to the 'T' in "Test String" and the
	string is correctly terminated with a null terminating character after the 'g'.
	
	An application can declare a pointer to a structure that contains an unsized
	array field. The application must allocate memory for to store the contents of
	the array. Given the structure declaration above, the following code declares a
	pointer to structure and allocates memory to store an instance of the
	structure:
	
	  struct test *right;
	  right = malloc(sizeof(struct test) + stringlength + 1);
	
	The stringlength variable contains the length of the string stored in the
	structure and the constant 1 provides space to store the terminating null
	character. Even though the application allocates memory to store the string, the
	sizeof macro returns the size of the elements in the structure except for the
	unsized array element.
	
	Using this technique, an application can use malloc() to declare an array of
	structures that contain unsized array fields; however, the application must
	correctly calculate the proper amount of memory to allocate to store the
	structures and the strings and it must correctly implement pointers to access
	elements of the array. Because the size of the structure does not include the
	storage required by the unsized array element, the value (ptr+1) points to the
	sixth (or twelfth) byte of the allocated array which is not necessarily the
	first field of the second element.
	
	An attempt to allocate an array of structures produces the C4001 warning
	described above. The C2087 error does not occur because the size of the array is
	not specified.
	
	Sample Code
	-----------
	
	  /*
	   * Compile options needed: /W4
	   */ 
	
	  #include <stdio.h>
	
	  struct test
	  {
	     int x, y, z;
	     char str[];
	  };
	
	  struct test trythis;
	
	  void main(void)
	  {
	     printf("the size of test is %d bytes\n",sizeof(struct test));
	  }
	
	  /* Output */ 
	
	  /* 16-bit compiler output */ 
	
	  the size of test is 6 bytes
	
	  /* 32-bit compiler output */ 
	
	  the size of test is 12 bytes
	
	Additional query words: 8.00 8.00c
	
	======================================================================
	Keywords          : kbcode kbCompiler kbVC100 kbVC150 kbVC151 kbVC152 kbVC200 kbVC210 kbVC400 kbVC410 kbVC500 kbVC600 
	Technology        : kbVCsearch kbAudDeveloper kbCVCComp
	Version           : :1.0,1.5,1.51,1.52,2.0,2.1,4.0,4.1,5.0,6.0
	Issue type        : kbinfo
	
	=============================================================================
	
