---
layout: page
title: "Q80380: BUG: H2INC Doesn't Allow Multiple Files to Be Specified"
permalink: /kb/080/Q80380/
---

## Q80380: BUG: H2INC Doesn't Allow Multiple Files to Be Specified

	Article: Q80380
	Product(s): Microsoft C Compiler
	Version(s): OS/2:1.0; winnt:1.0,1.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Macro Assembler (MASM), version 1.11 
	- Microsoft Macro Assembler (MASM), version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The H2INC utility provided with the Microsoft Macro Assembler (MASM) version
	6.0, 6.0a, and 6.0b does not allow multiple files to be specified. Page 435 of
	the "Microsoft Macro Assembler Programmer's Guide" provided with MASM 6.0 states
	that multiple files may be specified on the H2INC command line separated by
	spaces. If multiple files are specified, only the first file is translated and
	the rest are ignored.
	
	The H2INC utility provided with MASM 6.11 will generate the error
	
	  DOSXNT : fatal error DX1020: unhandled exception:
	  General protection fault
	
	  contact Microsoft Support Services
	
	when trying to translate multiple files.
	
	RESOLUTION
	==========
	
	The H2INC utility should be invoked separately for each file to be translated.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in H2INC versions 1.0, and 1.11.
	This problem was corrected in H2INC for MS-DOS version 1.1 which is included
	with MASM for MS-DOS version 6.1, but this is a problem in H2INC for MS-DOS 1.11
	which is included with MASM for MS-DOS version 6.11. We are researching this
	problem and will post new information here in the Microsoft Knowledge Base as it
	becomes available.
	
	Additional query words: 6.00 6.00a 6.00b 1.00 buglist1.00 fixlist1.10 buglist1.11
	
	======================================================================
	Keywords          :  
	Technology        : kbMASMsearch kbAudDeveloper kbMASM100
	Version           : OS/2:1.0; winnt:1.0,1.11
	
	=============================================================================
	
