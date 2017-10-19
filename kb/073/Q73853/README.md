---
layout: page
title: "Q73853: INFO: Sorting Structures with the C qsort() Function"
permalink: /kb/073/Q73853/
---

## Q73853: INFO: Sorting Structures with the C qsort() Function

	Article: Q73853
	Product(s): Microsoft C Compiler
	Version(s): MS-DOS:5.1,6.0,6.00a,6.00ax,7.0 WINDOWS:1.0,1.5,1.51,1.52; WINDOWS NT:1.0,2.0,2.1,4.0,5
	Operating System(s): 
	Keyword(s): kbcode kbCRT kbVC kbVC100 kbVC150 kbVC151 kbVC152 kbVC200 kbVC210 kbVC400 kbVC500
	Last Modified: 26-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The C Run-Time (CRT), included with:
	   - Microsoft C for MS-DOS, versions 5.1, 6.0, 6.0a, 6.0ax 
	   - Microsoft C for OS/2, versions 5.1, 6.0, 6.0a 
	   - Microsoft C/C++ for MS-DOS, version 7.0 
	   - Microsoft Visual C++ for Windows, 16-bit edition, versions 1.0, 1.5, 1.51, 1.52 
	   - Microsoft Visual C++, 32-bit Editions, versions 1.0, 2.0, 2.1, 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Microsoft C and QuickC run-time library function qsort() is useful for
	sorting data; however, it is necessary to provide qsort() a compare function for
	the type of data being sorted. This sometimes causes confusion when that type is
	a structure. The sample program below illustrates how to use qsort() to sort an
	array of structures.
	
	MORE INFORMATION
	================
	
	In the sample code, the animal structure contains both an integer, which is the
	key to be sorted on, and an array of char that contains the animal's name. The
	compare() function receives two pointers to type struct animal and returns -1,
	1, or 0 (zero) if the first element is less than, greater than, or equal to the
	first element, respectively.
	
	Sample Code
	-----------
	
	  /* Compile options needed: none
	   *
	   * This example program uses the C run-time library function qsort()
	   * to sort an array of structures.
	   */ 
	
	  #include <stdio.h>
	  #include <stdlib.h>
	
	  typedef int (*compfn)(const void*, const void*);
	
	  struct animal { int  number;
	                  char name[15];
	                };
	
	  struct animal array[10]  = { {  1, "Anaconda"    },
	                               {  5, "Elephant"    },
	                               {  8, "Hummingbird" },
	                               {  4, "Dalmatian"   },
	                               {  3, "Canary"      },
	                               {  9, "Llama"       },
	                               {  2, "Buffalo"     },
	                               {  6, "Flatfish"    },
	                               { 10, "Zebra"       },
	                               {  7, "Giraffe"     }  };
	
	  void printarray(void);
	  int  compare(struct animal *, struct animal *);
	
	  void main(void)
	  {
	     printf("List before sorting:\n");
	     printarray();
	
	     qsort((void *) &array,              // Beginning address of array
	     10,                                 // Number of elements in array
	     sizeof(struct animal),              // Size of each element
	     (compfn)compare );                  // Pointer to compare function
	
	     printf("\nList after sorting:\n");
	     printarray();
	  }
	
	  int compare(struct animal *elem1, struct animal *elem2)
	  {
	     if ( elem1->number < elem2->number)
	        return -1;
	
	     else if (elem1->number > elem2->number)
	        return 1;
	
	     else
	        return 0;
	  }
	
	  void printarray(void)
	  {
	     int i;
	
	     for (i = 0; i < 10; i++)
	        printf("%d:  Number %d is a %s\n",
	                 i+1, array[i].number, array[i].name);
	  }
	
	Additional query words:
	
	======================================================================
	Keywords          : kbcode kbCRT kbVC kbVC100 kbVC150 kbVC151 kbVC152 kbVC200 kbVC210 kbVC400 kbVC500 
	Technology        : kbVCsearch kbAudDeveloper kbCRT
	Version           : MS-DOS:5.1,6.0,6.00a,6.00ax,7.0 WINDOWS:1.0,1.5,1.51,1.52; WINDOWS NT:1.0,2.0,2.1,4.0,5.0
	Issue type        : kbinfo
	
	=============================================================================
	
