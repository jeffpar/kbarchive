---
layout: page
title: "Q50694: INFO: Evaluation Order of Expression and Function Args Undefined"
permalink: /kb/050/Q50694/
---

## Q50694: INFO: Evaluation Order of Expression and Function Args Undefined

{% raw %}

	Article: Q50694
	Product(s): Microsoft C Compiler
	Version(s): 1.0,1.5,2.0,4.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbLangC kbVC100 kbVC150 kbVC200 kbVC400 kbVC500 kbVC600
	Last Modified: 12-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, versions 1.0, 1.5, 2.0, 4.0 
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Side effect operators (++, --, =, +=, -=, *=, /=, %=, &=, |=, ^=, <<=,
	and >>=) may cause unexpected results if they are used on the same
	variable or memory location more than once in the same expression. The order in
	which side effects occur within an expression is not specified.
	
	Do NOT expect any specific order of evaluation to take place. The discretion is
	left to the compiler to determine how it implements the evaluation order. The
	evaluation order could be affected by machine architecture and code
	optimization. Although such code may work sometimes, it is not guaranteed to
	work, and is therefore unsafe.
	
	NOTE: Kernighan and Ritchie do an excellent job explaining the ANSI C Standard
	for the evaluation order of expressions in Section 2.12 of "The C Programming
	Language - 2nd Edition" by Kernighan and Ritchie.
	
	MORE INFORMATION
	================
	
	It is easy to accidentally write nonportable code with the C language. Below are
	some other common examples of statements that can cause side effects during run
	time:
	
	     printf("%d %d \n", ++n, power(2, n));   /* WRONG */ 
	
	The above statement can produce different results with different compilers,
	depending on whether "n" is incremented before "power" is called. The correct
	code is as follows:
	
	     n++;                                  /* CORRECT */ 
	     printf("%d %d \n", n, power(2, n));
	
	Another common pitfall is the following:
	
	     a[i] = i++;     /* WRONG */ 
	
	The question is whether the subscript of "a" is the old value of "i" or the new
	value. The correct code is as follows:
	
	     a[i] = a[i+1];    /* CORRECT */ 
	     i++;
	
	Another example is as follows:
	
	     int x[10], *p = x;
	
	     *p++ = *p++ = 0;  /* WRONG */ 
	
	The compiler is allowed to "p" twice at the end after doing the two assignments,
	if it so chooses. To ensure correct code generation, you must code as follows:
	
	     *p++ = 0;  *p++ = 0;   /* CORRECT */ 
	
	In general, any object may have its stored value modified at most once in a
	single expression; in addition, the prior value shall be accessed only to
	determine the value to be stored. Therefore,
	
	     i = i + 1;    /* OK */ 
	
	is allowed because "i" is modified only once, and "i" is accessed only to
	determine what to store in "i", but
	
	     i = ++i + 1;  /* UNDEFINED */ 
	
	is undefined because "i" is modified more than once in the course of the
	evaluation of the expression. Instead, the following pair of statements is
	correct:
	
	     ++i;
	     i = i + 1;    /* OK */ 
	
	The statement:
	
	     a[i] = i++;  /* UNDEFINED */ 
	
	is undefined, because, although "i" is only modified once, it is accessed both to
	determine the value to be stored in "i" by the ++ operator and as a subscript.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbLangC kbVC100 kbVC150 kbVC200 kbVC400 kbVC500 kbVC600 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper kbvc150 kbvc100 kbVC500 kbVC600 kbVC200 kbVC32bitSearch kbVC500Search
	Version           : :1.0,1.5,2.0,4.0,5.0,6.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
