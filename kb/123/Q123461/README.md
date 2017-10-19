---
layout: page
title: "Q123461: PRB: const char&#42; not same as const CPTR where #typedef char&#42; C"
permalink: /kb/123/Q123461/
---

## Q123461: PRB: const char&#42; not same as const CPTR where #typedef char&#42; C

	Article: Q123461
	Product(s): Microsoft C Compiler
	Version(s): 2.0,2.1,4.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbCompiler kbVC200 kbVC210 kbVC400 kbVC500 kbVC600
	Last Modified: 25-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The C/C++ Compiler (CL.EXE), included with:
	   - Microsoft Visual C++, 32-bit Editions, versions 2.0, 2.1, 4.0 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The following program compiles, but one of the following warnings appears:
	
	  C4090: 'initializing' : different 'const' qualifiers:
	
	-or-
	
	  C2440: 'initializing' : cannot convert from 'const char *' to 'char *'
	                          Conversion loses qualifiers
	
	  const char *ReturnConstantPtr()
	  {
	     const char *p = "can't touch this";
	     return p;
	  }
	
	  void main()
	  {
	      char *p = ReturnConstantPtr();
	  }
	
	However, the above program will compile without exception if a type definition is
	used for char* as follows:
	
	     typedef char* CPTR;
	
	     const CPTR ReturnConstantPtr()
	     {
	         const CPTR p = "can't touch this";
	         return p;
	     }
	
	     void main()
	     {
	         CPTR p = ReturnConstantPtr();
	     }
	
	CAUSE
	=====
	
	This occurs for two reasons. First, typedefs are not macros, so modifiers like
	const or volatile apply to the whole construct. When the following are used
	
	     #typedef  char*  CPTR
	     const  CPTR  cPtr;
	
	they are equivalent to "char* const cPtr;" not "const char* cPtr;."
	
	Second, since "char* const cPtr;" declares cPtr as a constant pointer to
	character data and "const char* cPtr;" declares cPtr as a pointer to constant
	character data, the two declarations are quite different.
	
	Thus, a "different const qualifier" warning is generated for
	
	     char *p = ReturnConstantPtr();
	
	because it is trying to set p equal to a pointer that points to a constant
	character whose value *p could try to change. Alternatively, no warning is
	generated for
	
	     CPTR p = ReturnConstantPtr();
	
	because it is setting p equal to a constant pointer that points to a character
	whose value *p may freely change.
	
	REFERENCES
	==========
	
	For more information on the const keyword, search the online documentation
	provided with Visual C++, 32-bit edition, for "const" or "constant values." For
	more information on the typedef keyword, search the online documentation for
	"#typedef" or "typedef specifier."
	
	Additional query words: 9.00
	
	======================================================================
	Keywords          : kbCompiler kbVC200 kbVC210 kbVC400 kbVC500 kbVC600 
	Technology        : kbVCsearch kbAudDeveloper kbCVCComp
	Version           : :2.0,2.1,4.0,5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	
