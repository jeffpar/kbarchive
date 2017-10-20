---
layout: page
title: "Q94586: EXE2BIN Error Messages"
permalink: /kb/094/Q94586/
---

## Q94586: EXE2BIN Error Messages

{% raw %}

	Article: Q94586
	Product(s): Microsoft Macro Assembler
	Version(s): 5.0,5.1,5.1a,6.0,6.0a,6.0b,6.1,6.11,6.1a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Macro Assembler (MASM), versions 5.0, 5.1, 5.1a, 6.0, 6.0a, 6.0b, 6.1, 6.1a, 6.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following table of EXE2BIN errors is adapted from "The MS-DOS Encyclopedia"
	(Microsoft Press). Even though EXE2BIN is provided with MS-DOS, it is often used
	during the process of building an application with the Microsoft Macro Assembler
	(MASM).
	
	  Error: File cannot be converted
	
	Cause: The program to be converted has one of the following problems:
	
	- The program has an origin of 0100h but a different entry point.
	
	- The program requires segment fixups.
	
	- The program code and data are larger than 64 KB.
	
	- The program has more than one declared segment
	
	- The file is not a valid .EXE-format file.
	
	  Error: File creation error
	
	Cause: EXE2BIN cannot create the output file for one of the following reasons:
	
	- A read-only file with the same name already exists
	
	- The specified directory is full
	
	- The specified disk is full, write-protected, or unreadable.
	
	  Error: File not found
	
	Cause: The file does not exist or the incorrect path was given.
	
	  Error: Fixups needed - base segment (hex):
	
	Cause: The .EXE-format file contains segment references that would ordinarily be
	relocated by the .EXE file loader. Specify the absolute segment address at which
	the converted module will be executed.
	
	  Error: Incorrect DOS version
	
	Cause: The version of EXE2BIN is not compatible with the version of MS-DOS that
	is running.
	
	  Error: Insufficient disk space
	
	Cause: The destination disk has insufficient space to create the memory-image
	output file.
	
	  Error: Insufficient memory
	
	Cause: Not enough memory is available to run EXE2BIN.
	
	  Error: WARNING - Read error in EXE file. Amount read less than size in
	  header.
	
	Cause: The file size given in the .EXE header is inconsistent with the actual
	size of the file.
	
	Additional query words: kbinf 5.00 5.10 5.10A 6.00 6.00A 6.00B 6.10
	
	======================================================================
	Keywords          :  
	Technology        : kbMASMsearch kbAudDeveloper kbMASM510 kbMASM600 kbMASM610 kbMASM611 kbMASM610a kbMASM500 kbMASM600a kbMASM510a kbMASM600b
	Version           : :5.0,5.1,5.1a,6.0,6.0a,6.0b,6.1,6.11,6.1a
	
	=============================================================================
	

{% endraw %}
