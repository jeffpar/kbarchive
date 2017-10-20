---
layout: page
title: "Q71980: DOCERR: MASM 6.0 Makefile BELL.MAK Gives C1024 Compiler Error"
permalink: /kb/071/Q71980/
---

## Q71980: DOCERR: MASM 6.0 Makefile BELL.MAK Gives C1024 Compiler Error

{% raw %}

	Article: Q71980
	Product(s): Microsoft Macro Assembler
	Version(s): 6.0,6.0a,6.0b
	Operating System(s): 
	Keyword(s): 
	Last Modified: 31-JAN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Macro Assembler (MASM), versions 6.0, 6.0a, 6.0b 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When NMAKE is run on the makefile BELL.MAK included with the sample programs in
	the Microsoft Macro Assembler (MASM) version 6.0, the following error is
	generated:
	
	  BELL.c(31): fatal error C1024: cannot open include file 'demo.h'
	
	This error occurs because the makefile does not contain the correct directory
	location for the file DEMO.H.
	
	Any of the following methods can be used to work around the C1024 error:
	
	1. Copy the file DEMO.H from the \SAMPLES\DEMOS subdirectory to the \SAMPLES\TSR
	  subdirectory.
	
	-or-
	
	2. Copy the file DEMO.H from the \SAMPLES\DEMOS subdirectory to a directory
	  specified by your INCLUDE environment variable.
	
	-or-
	
	3. Use the /I assembler switch to specify the \SAMPLES\DEMO directory as an
	  additional directory to search for include files. This can be done from
	  inside the Programmer's WorkBench as follows:
	
	  a. Choose the Set Program List option from the Make menu.
	
	  b. Select BELL.MAK from the list of available files.
	
	  c. Choose C Compiler Options from the Options menu.
	
	  d. In the Additional Options field, enter the /I option with the path to the
	     directory containing DEMO.H. For example:
	
	  " /IC:\MASM\SAMPLES\DEMOS " (without the quotation marks)
	
	MORE INFORMATION
	================
	
	By default, BELL.MAK is installed in a subdirectory under MASM 6.00 called
	\SAMPLES\TSR. BELL.MAK should compile the file BELL.C and assemble the files
	INSTALL.ASM and HANDLERS.ASM. BELL.C includes the file DEMO.H, which is located
	in the \SAMPLES\DEMO subdirectory.
	
	The C1024 error occurs because the compiler cannot find DEMO.H, since the
	compiler searches for include files only in the current directory or in the
	directory(s) pointed to by the INCLUDE environment variable.
	
	Additional query words: 6.00
	
	======================================================================
	Keywords          :  
	Technology        : kbMASMsearch kbAudDeveloper kbMASM600 kbMASM600a kbMASM600b
	Version           : :6.0,6.0a,6.0b
	
	=============================================================================
	

{% endraw %}
