---
layout: page
title: "Q80117: PRB: ml /D?WIN and CMACROS.INC Produce A2016 and A2008"
permalink: /kb/080/Q80117/
---

## Q80117: PRB: ml /D?WIN and CMACROS.INC Produce A2016 and A2008

	Article: Q80117
	Product(s): Microsoft Macro Assembler
	Version(s): 6.0,6.0a,6.0b
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Macro Assembler (MASM), versions 6.0, 6.0a, 6.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In the Microsoft Macro Assembler (MASM) version 6.0, when defining ?WIN on the
	command line and including CMACROS.INC, the following errors are generated:
	
	  cmacros.inc(77): error A2016: expression expected
	  cmacros.inc(118): error A2008: syntax error: ,
	
	CAUSE
	=====
	
	The command-line switch /D?WIN=1 is equivalent to ?WIN TEXTEQU <1>.
	CMACROS.INC is expecting that ?WIN = 1 will be used to indicate that Windows
	support is needed.
	
	RESOLUTION
	==========
	
	To correctly define ?WIN, do not assemble with /D?WIN=1 as a command line
	option; instead, use "?WIN = 1" in the source file before including CMACROS.INC.
	
	MORE INFORMATION
	================
	
	The following examples demonstrate the incorrect and then the correct way to
	define ?WIN for use with CMACROS.INC.
	
	Sample Code 1: Incorrect
	------------------------
	
	  ; Assemble options needed: /D?WIN=1
	
	    INCLUDE CMACROS.INC
	
	    END
	
	Sample Code 2: Correct
	----------------------
	
	  ; Assemble options needed: none
	
	     ?WIN  =  1              ; ?WIN must be defined before the include.
	     INCLUDE CMACROS.INC
	
	     END
	
	Additional query words: 6.00
	
	======================================================================
	Keywords          :  
	Technology        : kbMASMsearch kbAudDeveloper kbMASM600 kbMASM600a kbMASM600b
	Version           : :6.0,6.0a,6.0b
	
	=============================================================================
	
