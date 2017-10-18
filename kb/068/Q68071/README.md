---
layout: page
title: "Q68071: FIX: MASM Aligns on 4-Byte Boundary After Offset 8000h"
permalink: kb/068/Q68071/
---

## Q68071: FIX: MASM Aligns on 4-Byte Boundary After Offset 8000h

	Article: Q68071
	Product(s): Microsoft Macro Assembler
	Version(s): 5.1,5.1a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Macro Assembler (MASM), versions 5.1, 5.1a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The module below demonstrates a problem with the Microsoft Macro Assembler
	(MASM) versions 5.1 and 5.1a. If an EVEN directive is used after an offset of
	8000h within a segment, the assembler will try to align the next instruction or
	data element on a 4-byte boundary. In other words, more bytes for padding will
	be added than are necessary to achieve even alignment.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in MASM versions 5.1 and 5.1a. This
	problem was corrected in MASM version 6.0.
	
	MORE INFORMATION
	================
	
	The following is the assembly listing that is generated for the example below.
	
	Assembly Listing
	----------------
	
	Code Generated   Source
	--------------   ------
	
	F8               clc
	90               EVEN
	F8               clc
	                ORG 8000h
	F8               clc
	87 DB 90         EVEN
	F8               clc
	
	Sample Code
	-----------
	
	  ; Assemble options needed: none
	
	  _TEXT SEGMENT PARA PUBLIC 'CODE'
	  ASSUME CS:_TEXT
	  start:
	      clc
	      EVEN
	      clc
	      ORG 8000h
	      clc
	      EVEN
	      clc
	  _TEXT ENDS
	
	  END start
	
	Additional query words: 5.10 5.10a buglist5.10 buglist5.10a fixlist6.00
	
	======================================================================
	Keywords          :  
	Technology        : kbMASMsearch kbAudDeveloper kbMASM510 kbMASM510a
	Version           : :5.1,5.1a
	Solution Type     : kbfix
	
	=============================================================================
	
