---
layout: page
title: "Q68821: Documentation Errors on Page 315 of APT Manual"
permalink: /kb/068/Q68821/
---

## Q68821: Documentation Errors on Page 315 of APT Manual

	Article: Q68821
	Product(s): See article
	Version(s): 6.00 6.00a | 6.00 6.00a
	Operating System(s): MS-DOS | OS/2
	Keyword(s): ENDUSER | docerr | mspl13_c
	Last Modified: 31-JAN-1991
	
	The following are several documentation errors in the mixed-language
	example on page 315 of the "Microsoft C Advanced Programming
	Techniques" shipped with C version 6.00:
	
	The line shown as
	
	   #pragma pack(2);
	
	should read as follows:
	
	   #pragma pack(2)
	
	The lines that read
	
	   block_hed-n = 1;
	   block_hed-x = 10.0;
	   block_hed-y = 20.0;
	
	should read as follows:
	
	   block_hed->n = 1;
	   block_hed->x = 10.0;
	   block_hed->y = 20.0;
