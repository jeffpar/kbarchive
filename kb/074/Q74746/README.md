---
layout: page
title: "Q74746: FIX: ORG Following ORG Statement with &#36; May Fail in 6.0"
permalink: /kb/074/Q74746/
---

## Q74746: FIX: ORG Following ORG Statement with &#36; May Fail in 6.0

	Article: Q74746
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
	
	The Microsoft Macro Assembler (MASM) version 6.0 may generate an incorrect
	offset when using the ORG directive following a previous ORG statement that uses
	the current-address operator ($). For example, incorrect code will be generated
	if the statement "ORG $+1" is placed anywhere before another ORG statement.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in MASM version 6.0. This problem
	was corrected in MASM version 6.0a.
	
	MORE INFORMATION
	================
	
	The sample code below demonstrates this problem. You can see in the source
	listing that the label "wrongoffset" has an incorrect offset. Instead of having
	an offset of 200h, wrongoffset is placed at offset 304h, which is 104h plus the
	200h specified in the last ORG statement. Rather than assigning the location to
	200h, the assembler added 200h to the current location.
	
	Sample Code
	-----------
	
	  ; Assemble options needed: none
	
	  _text SEGMENT
	  one   BYTE ?
	        ORG 100h
	  two   BYTE ?
	        ORG $+2
	  three BYTE ?
	        ORG 200h
	  wrongoffset LABEL word
	  _text ENDS
	  END
	
	Source Listing
	--------------
	
	  0000               _text SEGMENT
	  0000 00            one   BYTE ?
	                       ORG 100h
	  0100 00            two   BYTE ?
	                       ORG $+2
	  0103 00            three BYTE ?
	                       ORG 200h
	  0304               wrongoffset LABEL word
	  0304               _text ENDS
	                 END
	
	Additional query words: 6.00 buglist6.00 fixlist6.00a
	
	======================================================================
	Keywords          :  
	Technology        : kbMASMsearch kbAudDeveloper kbMASM600
	Version           : MS-DOS:6.0
	Solution Type     : kbfix
	
	=============================================================================
	
