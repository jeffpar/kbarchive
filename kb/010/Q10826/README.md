---
layout: page
title: "Q10826: Limitations on Writing Device Drivers in C"
permalink: /kb/010/Q10826/
---

## Q10826: Limitations on Writing Device Drivers in C

{% raw %}

	Article: Q10826
	Product(s): Microsoft Programming Utilities
	Version(s): 1.0,1.5,6.0,6.0a,6.0ax; MS-DOS:7.0
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft C for MS-DOS, versions 6.0, 6.0a, 6.0ax 
	- Microsoft C/C++ for MS-DOS, version 7.0 
	- Microsoft Visual C++, versions 1.0, 1.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	You cannot develop a complete device driver only in C or C++. You must write
	some assembly code and you cannot use the majority of functions in the C
	run-time library.
	
	The three major problems that occur when you develop a device driver in C are as
	follows:
	
	- The .EXE file loader is in COMMAND.COM which is not available when MS-DOS
	  loads a device driver. Therefore, a device driver must be the binary image of
	  a single-segment program. Microsoft C/C++ version 7.0 introduced the ability
	  to generate code in the tiny memory model in which the application stores its
	  code and data in one memory segment.
	
	- The C run-time initialization code requires an appropriate PSP (program
	  segment prefix) and requires MS-DOS to be available. Even though the source
	  code to the startup code is provided with the C compiler, most of the startup
	  code is in assembler and would require major modifications to be useful in a
	  driver.
	
	- The entry-exit sequences used by C functions are inappropriate for use in an
	  MS-DOS driver.
	
	You can work around some of these limitations by using the C compiler to generate
	assembly code. The -Fa switch directs the compiler to produce an assembly code
	listing that you can edit and use as part of the driver source code. Depending
	on the complexity of the MS-DOS device driver, you could write most of the
	driver in C and modify and maintain the code relatively easily.
	
	Additional query words: kbinf 6.00 6.00a 6.00ax 7.00 1.00 1.50
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbVCsearch kbAudDeveloper kbPTProdChange kbvc150 kbvc100 kbCCompSearch kbZNotKeyword3 kbCComp600DOS kbCComp600aDOS kbCComp600axDOS kbCVC700DOS
	Version           : :1.0,1.5,6.0,6.0a,6.0ax; MS-DOS:7.0
	
	=============================================================================
	

{% endraw %}
