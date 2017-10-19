---
layout: page
title: "Q48792: Include Filenames More Than Eight Characters Are Truncated"
permalink: /kb/048/Q48792/
---

## Q48792: Include Filenames More Than Eight Characters Are Truncated

	Article: Q48792
	Product(s): See article
	Version(s): 5.00 5.10 | 5.10
	Operating System(s): MS-DOS | OS/2
	Keyword(s): ENDUSER | S_QuickC S_QuickASM | mspl13_c
	Last Modified: 16-JAN-1990
	
	When given a filename that is more than eight characters, the file
	system under MS-DOS truncates the filename to eight characters.
	Because of this, the following include statement
	
	   #include <gefildefish.h>
	
	looks for the following header file to resolve the reference:
	
	   gefildef.h
	
	As long as the file gefildef.h is found on the disk, no error or
	warning message is displayed.
	
	Under OS/2 Version 1.10, however, the file system does not truncate
	names, but filenames with more than eight characters are not used.
	Therefore, the following fatal error message appears when specifying
	an include file with more than characters:
	
	   C1015: cannot open include file '<filename>'
	
	This problem also occurs in QuickC Versions 1.01, 2.00, 2.01 and
	QuickAssembler Version 2.01.
