---
layout: page
title: "Q73368: BUG: H2INC 1.0 Does Not Support _syscall or _stdcall"
permalink: /kb/073/Q73368/
---

## Q73368: BUG: H2INC 1.0 Does Not Support _syscall or _stdcall

	Article: Q73368
	Product(s): Microsoft Macro Assembler
	Version(s): MS-DOS:6.0,6.0a,6.0b
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Macro Assembler (MASM), versions 6.0, 6.0a, 6.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Microsoft C to MASM Include file Translator (H2INC) version 1.0 that ships
	with the Microsoft Macro Assembler (MASM) version 6.0 does not support function
	prototypes using _syscall or _stdcall. The H2INC version 1.0 that ships with
	MASM version 6.0b supports _stdcall, but not _syscall.
	
	RESOLUTION
	==========
	
	Page 448 of the "Microsoft Macro Assembler Programmer's Guide" states that
	_syscall and _stdcall are accepted, but H2INC generates errors when it
	encounters prototypes containing these keywords. The _cdecl, _fortran, and
	_pascal language types are supported as documented.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in H2INC version 1.0. We are
	researching this problem and will post new information here as it becomes
	available.
	
	MORE INFORMATION
	================
	
	The following sample prototype demonstrates this problem:
	
	     void _syscall sysfunc(void);
	
	When this prototype is processed by H2INC, the following errors are generated:
	
	  warning HI4820: ignoring function definition : _syscall()
	  error HI2061: syntax error : identifier 'sysfunc'
	
	  -or-
	
	  error HI2143: syntax error: missing ';' before 'stdcall'
	
	Additional query words: 1.00 6.00 buglist6.00 s_utility buglist6.00a buglist6.00b
	
	======================================================================
	Keywords          :  
	Technology        : kbMASMsearch kbAudDeveloper kbMASM600 kbMASM600a kbMASM600b
	Version           : MS-DOS:6.0,6.0a,6.0b
	
	=============================================================================
	
