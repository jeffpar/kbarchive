---
layout: page
title: "Q104677: BUG: H2INC Versions 1.0 and 1.1 Do Not Support _syscall"
permalink: /kb/104/Q104677/
---

## Q104677: BUG: H2INC Versions 1.0 and 1.1 Do Not Support _syscall

{% raw %}

	Article: Q104677
	Product(s): Microsoft C Compiler
	Version(s): OS/2:1.0; winnt:1.0,1.1,1.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Macro Assembler (MASM), versions 1.0, 1.1, 1.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Microsoft C to MASM include file translator (H2INC) does not support
	function prototypes using _syscall. When the sample below is translated, H2INC
	produces:
	
	  warning HI4820: ignoring function definition : _syscall()
	  error HI2061: syntax error : identifier 'func1'
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in H2INC versions 1.0, 1.1, and
	1.11. We are researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Page 448 of the "Microsoft Macro Assembler Programmer's Guide" manual for MASM
	6.0 and page 649 of the "Environment and Tools" manual for MASM 6.1 state that
	_syscall is accepted; however, H2INC generates errors when it encounters
	prototypes containing these keywords.
	
	Sample Code
	-----------
	
	  /* Command line options needed: none
	  */ 
	  int _syscall func1 (int x);
	
	Additional query words: 6.00 6.00a 6.00b 6.10 1.00 1.10 buglist1.00 buglist1.10 buglist1.11
	
	======================================================================
	Keywords          :  
	Technology        : kbMASMsearch kbAudDeveloper kbMASM100
	Version           : OS/2:1.0; winnt:1.0,1.1,1.11
	
	=============================================================================
	

{% endraw %}
