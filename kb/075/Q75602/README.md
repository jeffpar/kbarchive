---
layout: page
title: "Q75602: Initializing an Array of Structures in C"
permalink: /kb/075/Q75602/
---

## Q75602: Initializing an Array of Structures in C

{% raw %}

	Article: Q75602
	Product(s): Microsoft C Compiler
	Version(s): 1.0,1.5,2.0,4.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbcode kbfile kbLangC kbVC100 kbVC150 kbVC200 kbVC400 kbVC500 kbVC600
	Last Modified: 14-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft C/C++ compiler for MS-DOS 
	- Microsoft Visual C++, versions 1.0, 1.5, 2.0, 4.0 
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The code fragment below demonstrates how to initialize an array of structures
	within a Microsoft C program. Each element is grouped within brackets, and the
	elements are separated by commas. The initialization of the array rgttype shows
	how to initialize a structure within a structure within an array of structures.
	
	Sample Code
	-----------
	
	  /* Compile options needed:  none
	  */ 
	
	  struct stype {
	     int a;
	     int b;
	     int c;
	  };
	
	  struct ttype {
	     int alpha;
	     struct stype beta;
	  };
	
	                          /*   a,    b,   c  */ 
	  struct stype rgstype[2] = { {8,   9,   10}, \ 
	                              {15,  16,  17} };
	
	                          /*  alpha     beta     */ 
	  struct ttype rgttype[2] = { {{1},   {2,3,4}}, \ 
	                              {{5},   {6,7,8}}  };
	
	MORE INFORMATION
	================
	
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbcode kbfile kbLangC kbVC100 kbVC150 kbVC200 kbVC400 kbVC500 kbVC600 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper kbZNotKeyword8 kbvc150 kbvc100 kbZNotKeyword3 kbVC500 kbVC600 kbVC200 kbVC32bitSearch kbVC500Search
	Version           : :1.0,1.5,2.0,4.0,5.0,6.0
	
	=============================================================================
	

{% endraw %}
