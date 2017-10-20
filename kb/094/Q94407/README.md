---
layout: page
title: "Q94407: FIX: ML DX1020 Error With Several Source Files In Directory"
permalink: /kb/094/Q94407/
---

## Q94407: FIX: ML DX1020 Error With Several Source Files In Directory

{% raw %}

	Article: Q94407
	Product(s): Microsoft Macro Assembler
	Version(s): 6.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Macro Assembler (MASM), version 6.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When the Microsoft Macro Assembler (MASM) assembles multiple source files in the
	current directory using a command such as the following:
	
	  ml *.asm
	
	the following error may occur:
	
	  DOSXNT : fatal error DX1020: unhandled exception:
	
	  Stack fault;
	
	  contact Microsoft Support Services
	
	When MASM assembles multiple source files from a directory other than the current
	directory, the following error may occur:
	
	  DOSXNT : fatal error DX1020: unhandled exception:
	
	  General protection fault;
	
	  contact Microsoft Support Services
	
	RESOLUTION
	==========
	
	To work around this problem, build each file separately and not in a batch. The
	other option is to rename the source files to make the names shorter.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in MASM version 6.1 for MS- DOS.
	This problem was corrected in MASM version 6.10a for MS-DOS.
	
	MORE INFORMATION
	================
	
	This error occurs when an filename buffer in MASM becomes full. When files have
	long names, fewer files are required to fill the buffer and cause the error.
	
	This error does not depend on the contents of the source files.
	
	
	Additional query words: 6.10 buglist6.10 fixlist6.10a
	
	======================================================================
	Keywords          :  
	Technology        : kbMASMsearch kbAudDeveloper kbMASM610
	Version           : :6.1
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
