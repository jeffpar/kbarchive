---
layout: page
title: "Q93005: FIX: /Z Switch Gives &quot;Unknown Option&quot; Error in MASM 6.0b"
permalink: /kb/093/Q93005/
---

## Q93005: FIX: /Z Switch Gives &quot;Unknown Option&quot; Error in MASM 6.0b

{% raw %}

	Article: Q93005
	Product(s): Microsoft Macro Assembler
	Version(s): MS-DOS:6.0b
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Macro Assembler (MASM), version 6.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When the MASM compatibility driver provided with version 6.0b of the Microsoft
	Macro Assembler is called with the /Z command line switch, the following error
	occurs:
	
	  Unknown option: z. Use /help for list of options
	
	RESOLUTION
	==========
	
	Omit the /Z switch from the command line. The /Z switch has no effect.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in MASM version 6.0b. This problem
	was corrected in MASM for MS-DOS version 6.1.
	
	MORE INFORMATION
	================
	
	The ML driver invokes the Microsoft Macro Assembler (MASM) versions 6.x. MASM
	includes the MASM.EXE compatibility driver for backward compatibility with
	makefiles written for the MASM driver used in versions 5.x and earlier.
	
	In MASM versions 5.x, the /Z switch displays on the screen the source file lines
	that contain errors. In MASM versions 6.0 and 6.0a, the /Z option is correctly
	ignored. However, in version 6.0b, MASM generates an error in response to this
	option switch and does not assemble the file.
	
	Additional query words: 6.00b buglist6.00b fixlist6.10
	
	======================================================================
	Keywords          :  
	Technology        : kbMASMsearch kbAudDeveloper kbMASM600b
	Version           : MS-DOS:6.0b
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
