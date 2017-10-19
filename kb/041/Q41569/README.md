---
layout: page
title: "Q41569: QuickC 2.00 README.DOC: Example Program PARRAY.C"
permalink: /kb/041/Q41569/
---

## Q41569: QuickC 2.00 README.DOC: Example Program PARRAY.C

	Article: Q41569
	Product(s): See article
	Version(s): 2.00
	Operating System(s): MS-DOS
	Keyword(s): ENDUSER | docerr | mspl13_c
	Last Modified: 28-FEB-1989
	
	The information below is taken from the QuickC Version 2.00 README.DOC
	file, Part 2, "Notes on 'C for Yourself.'" The following notes refer
	to specific pages in "C for Yourself":
	
	Page 105  Example Program PARRAY.C
	
	Change the line
	
	    printf("array[%d] = %d", count, *ptr);
	
	to
	
	    printf("i_array[%d] = %d\n", count, *ptr);
	
	The PARRAY.C program in on-line help already contains the correction,
	but you may want to correct the printed listing, also.
