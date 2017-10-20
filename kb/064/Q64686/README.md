---
layout: page
title: "Q64686: PRB: Nested Nameless Structs Can Cause C2020 Error in C"
permalink: /kb/064/Q64686/
---

## Q64686: PRB: Nested Nameless Structs Can Cause C2020 Error in C

{% raw %}

	Article: Q64686
	Product(s): Microsoft C Compiler
	Version(s): 1.0,1.5,2.0,4.0,4.1,4.2,5.0,6.0
	Operating System(s): 
	Keyword(s): kbcode kbCompiler kbVC100 kbVC150 kbVC200 kbVC400 kbVC410 kbVC420 kbVC500 kbVC600
	Last Modified: 27-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft C for MS-DOS 
	- Microsoft C for OS/2 
	- Microsoft C/C++ for MS-DOS 
	- Microsoft Visual C++ for Windows, 16-bit edition, versions 1.0, 1.5 
	- Microsoft Visual C++, 32-bit Editions, versions 1.0, 2.0, 4.0, 4.1, 4.2, 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In Microsoft C, using a nameless structure as a member of a structure causes a
	compiler error if the two structures both have members with the same name. C
	versions 6.x generate the error:
	
	  C2030: 'varname': struct/union member redefinition.
	
	In C/C++ versions 7.0 and later, the error is:
	
	  error C2020: 'varname' : 'struct' member redefinition
	
	The code sample below, when built as a C source file, reproduces the error. The
	same sample, built as a C++ source file, will not display this behavior.
	
	CAUSE
	=====
	
	This is expected behavior, not a bug. When a nameless structure is used within
	another structure, the members of the nameless structure become members of the
	new structure. In the C language, the member names must be unique.
	
	MORE INFORMATION
	================
	
	Sample Code
	-----------
	
	  /* compile options needed: none /Tc */ 
	
	  void main(void)
	  {
	
	    struct s1
	      {
	        int a,b,c;
	      };
	
	    struct s2
	      {
	        struct s1;  /* nameless struct */ 
	        float z;
	        char a[10];  /* error occurs here */ 
	      } *p_s2;
	  }
	
	The second structure (s2) is effectively the following:
	
	  struct s2
	    {
	      int a,b,c;  /* Was nameless struct s1 */ 
	      float z;
	      char a[10];  /* Error occurs here */ 
	    } *p_s2;
	
	This illustrates that the member variable "a" is being redefined. Correctly used
	nameless structures can provide a good technique for building structures with
	similar data structure without having the complexity of truly nested structures.
	
	Additional query words: 8.0 8.0c 9.0 10.0 11.0 /Tp
	
	======================================================================
	Keywords          : kbcode kbCompiler kbVC100 kbVC150 kbVC200 kbVC400 kbVC410 kbVC420 kbVC500 kbVC600 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper kbZNotKeyword8 kbvc150 kbvc100 kbCCompSearch kbZNotKeyword3 kbVC410 kbVC420 kbVC500 kbVC600 kbVC200 kbVC32bitSearch kbVC16bitSearch kbVC500Search
	Version           : :1.0,1.5,2.0,4.0,4.1,4.2,5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
