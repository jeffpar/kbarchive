---
layout: page
title: "Q151673: FIX: Compiler Allocates Struct with Nested Struct Incorrectly"
permalink: /kb/151/Q151673/
---

## Q151673: FIX: Compiler Allocates Struct with Nested Struct Incorrectly

	Article: Q151673
	Product(s): Microsoft C Compiler
	Version(s): 4.0,4.1,4.2
	Operating System(s): 
	Keyword(s): kbCodeGen kbVC500fix
	Last Modified: 30-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, versions 4.0, 4.1, 4.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In the sample code below, the amount of space the compiler allocates for struct
	A is incorrect. It is influenced by adding a member with data type double to the
	nested struct in A even though A only declares a pointer to this nested struct
	and not an instance of the struct itself. If you uncomment the line with the
	double member, the code will produce different results. The size of struct A
	will be reported as being larger.
	
	Changing the size of the nested struct by adding a member of any data type other
	than double does not affect the size of struct A.
	
	RESOLUTION
	==========
	
	The problem is very specific to code similar to that below, so there are no
	generic workarounds. It may be necessary to change the data type of the member
	to something other than a double.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug was corrected in Visual C++ version 5.0.
	
	MORE INFORMATION
	================
	
	Sample Code
	-----------
	
	     /* Compile options needed: none
	     */ 
	
	     #include <stdio.h>
	
	     struct A
	     {
	         long l1;
	         long l2;
	
	         struct
	         {
	             int i1;
	             long l3;
	     //        double d1;
	         } *s1;
	     };
	
	     void main()
	     {
	         printf( "sizeof(struct A) should be 12\n" );
	         printf( "sizeof(struct A) = %d\n", sizeof(struct A) );
	     }
	
	Additional query words: kbVC400bug
	
	======================================================================
	Keywords          : kbCodeGen kbVC500fix 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper kbVC410 kbVC420
	Version           : :4.0,4.1,4.2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
