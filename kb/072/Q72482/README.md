---
layout: page
title: "Q72482: FIX: MASM 6.0 May Generate A2103 Error When Assembling with /Zi"
permalink: /kb/072/Q72482/
---

## Q72482: FIX: MASM 6.0 May Generate A2103 Error When Assembling with /Zi

	Article: Q72482
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
	
	The Microsoft Macro Assembler (MASM) versions 6.0, 6.0a, and 6.0b may generate
	the following error if a large module is assembled with /Zi to generate CodeView
	symbolic information:
	
	  error A2103: segment exceeds 64K limit
	
	CAUSE
	=====
	
	If you are not near the 64K limit in code or data, it is possible that the
	$$SYMBOL segment created for CodeView's symbolic information has grown too
	large.
	
	RESOLUTION
	==========
	
	If you require full symbolic information, the only workaround is to split the
	module up into smaller files and reassemble. If you only need line numbers to
	debug this module, you can use the /Zd (generate line numbers) switch as a
	workaround.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in MASM versions 6.0, 6.0a, and
	6.0b. This problem was corrected in MASM for MS-DOS version 6.1.
	
	MORE INFORMATION
	================
	
	Note that the A2103 error may occur even when your source module is defined with
	the ".386" and ".MODEL flat" directives because MASM version 6.0 always defines
	the $$SYMBOL segment as a 16-bit segment.
	
	Additional query words: 6.00 6.00a 6.00b buglist6.00 buglist6.00a buglist6.00b fixlist6.10
	
	======================================================================
	Keywords          :  
	Technology        : kbMASMsearch kbAudDeveloper kbMASM600 kbMASM600a kbMASM600b
	Version           : :6.0,6.0a,6.0b
	Solution Type     : kbfix
	
	=============================================================================
	
