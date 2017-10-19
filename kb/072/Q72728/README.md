---
layout: page
title: "Q72728: FIX: BIND Generates Multiply Defined Symbols with API.LIB"
permalink: /kb/072/Q72728/
---

## Q72728: FIX: BIND Generates Multiply Defined Symbols with API.LIB

	Article: Q72728
	Product(s): Microsoft Macro Assembler
	Version(s): MS-DOS:6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Macro Assembler (MASM), version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When binding an OS/2 protected mode application that was assembled or compiled
	under compact or large memory model, it is necessary to specify the module
	APILMR.OBJ on the BIND command line. Using the version of API.LIB included with
	the Microsoft Macro Assembler (MASM) version 6.0 package in conjunction with
	APILMR.OBJ will result in the following error:
	
	  API.LIB(i_apilmr.asm): error L2044: API_MEMREP: symbol multiply defined, use
	  /NOE
	
	Binding with the /NOE switch causes the error to be suppressed, but the program
	will not work correctly.
	
	RESOLUTION
	==========
	
	There are two workarounds for this error:
	
	1. Delete I_APILMR.OBJ from API.LIB. This is done with the LIB utility as
	  follows:
	
	  LIB API.LIB-I_APILMR;
	
	-or-
	
	2. Replace I_APILMR.OBJ in API.LIB with the APILMR.OBJ from the MASM LIB
	  subdirectory:
	
	  LIB API.LIB-I_APILMR+APILMR;
	
	  If APILMR.OBJ is replaced in API.LIB, it is no longer necessary to specify
	  APILMR.OBJ on the BIND command line.
	
	Note that both of these workarounds create a version of API.LIB that can only be
	used when binding a compact or large model program.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in MASM version 6.0. This problem
	was corrected in MASM version 6.0a.
	
	MORE INFORMATION
	================
	
	It is necessary to BIND with the file APILMR.OBJ in order for programs compiled
	under the large or compact memory model to correctly access the near heap. For
	more information, see the online help index for BIND and select the link to
	either APILMR.OBJ or Command Line Syntax.
	
	Additional query words: 6.00 buglist6.00 fixlist6.00a s_bind
	
	======================================================================
	Keywords          :  
	Technology        : kbMASMsearch kbAudDeveloper kbMASM600
	Version           : MS-DOS:6.0
	Solution Type     : kbfix
	
	=============================================================================
	
