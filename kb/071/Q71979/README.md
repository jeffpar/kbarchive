---
layout: page
title: "Q71979: DOCERR: MASM 6.0 Makefile SNAP.MAK Gives U1073 NMAKE Errors"
permalink: /kb/071/Q71979/
---

## Q71979: DOCERR: MASM 6.0 Makefile SNAP.MAK Gives U1073 NMAKE Errors

	Article: Q71979
	Product(s): Microsoft Macro Assembler
	Version(s): 6.0,6.0a,6.0b
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Macro Assembler (MASM), versions 6.0, 6.0a, 6.0b 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When NMAKE is run on the makefile SNAP.MAK included with the sample programs in
	the Microsoft Macro Assembler (MASM) version 6.00, the following errors are
	generated:
	
	  NMAKE : fatal error U1073: don't know how to make 'COMMON.ASM'
	
	  NMAKE : fatal error U1073: don't know how to make 'demo.inc'
	
	The errors occur because the makefile does not contain the correct directory
	specification for the files COMMON.ASM and DEMO.INC.
	
	To work around the U1073 errors, copy the files COMMON.ASM and DEMO.INC from the
	\SAMPLES\DEMOS subdirectory to the \SAMPLES\TSR subdirectory.
	
	MORE INFORMATION
	================
	
	By default, SNAP.MAK is installed in a subdirectory under MASM 6.00 called
	\SAMPLES\TSR. SNAP.MAK should assemble the files SNAP.ASM, INSTALL.ASM,
	COMMON.ASM, and HANDLERS.ASM. The makefile assumes that the files DEMO.INC and
	COMMON.ASM are in the current directory with the other .ASM files. The U1073
	errors are generated because the MASM 6.00 installation program actually places
	COMMON.ASM and DEMO.INC in the \SAMPLES\DEMOS subdirectory, and NMAKE cannot
	find them.
	
	Additional query words: 6.00 6.00a 6.00b
	
	======================================================================
	Keywords          :  
	Technology        : kbMASMsearch kbAudDeveloper kbMASM600 kbMASM600a kbMASM600b
	Version           : :6.0,6.0a,6.0b
	
	=============================================================================
	
