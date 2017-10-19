---
layout: page
title: "Q73401: FIX: Value of @FileName Truncated If File Has Short Extension"
permalink: /kb/073/Q73401/
---

## Q73401: FIX: Value of @FileName Truncated If File Has Short Extension

	Article: Q73401
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
	
	The predefined symbol @FileName is designed to represent the base name of the
	current assembly file. However, if you use the /Ta command-line option with the
	Microsoft Macro Assembler (MASM) version 6.0 to assemble a file that does not
	have a three letter extension, then the value of @FileName will not be the
	complete base name of the file.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in MASM version 6.0. This problem
	was corrected in MASM version 6.0a.
	
	MORE INFORMATION
	================
	
	The assembler normally requires all files to have a .ASM extension. This can be
	changed with the /Ta option that allows any file to be assembled, regardless of
	its extension. A side-effect of using /Ta is that if the filename does not have
	a three letter extension, then the value of the @FileName predefined equate will
	be truncated by one character for each character less than three in the
	extension.
	
	The sample code below may be used to illustrate this problem. If you save the
	file as TEST.ASM and assemble with just /c, then the assembler correctly echoes
	TEST as the base name of the file. If you change the name to TEST.AS and
	assemble with /c and /Ta TEST.AS, the value of @FileName that is echoed is just
	TES. Similarly, renaming the file to TEST.A results in only TE being echoed.
	
	Sample Code
	-----------
	
	  ; Assemble options needed: /c /Ta TEST.AS
	
	  .MODEL small
	
	  .CODE
	  %   echo  @FileName
	  END
	
	Additional query words: 6.00 buglist6.00 fixlist6.00a
	
	======================================================================
	Keywords          :  
	Technology        : kbMASMsearch kbAudDeveloper kbMASM600
	Version           : MS-DOS:6.0
	Solution Type     : kbfix
	
	=============================================================================
	
