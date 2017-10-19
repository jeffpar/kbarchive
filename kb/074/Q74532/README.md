---
layout: page
title: "Q74532: FIX: Near Call Between Segments Within a Group May Fail"
permalink: /kb/074/Q74532/
---

## Q74532: FIX: Near Call Between Segments Within a Group May Fail

	Article: Q74532
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
	
	The Microsoft Macro Assembler (MASM) version 6.0 may generate incorrect code
	when a near call is made to a procedure in another segment. When a call is made
	from an offset greater that 0FDh in the calling segment to a procedure declared
	in the same source file, the call is made to an incorrect offset.
	
	RESOLUTION
	==========
	
	To work around this problem, code the procedure in another module and declare it
	as external in the problem module.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in MASM version 6.0. This problem
	was corrected in MASM version 6.0a.
	
	MORE INFORMATION
	================
	
	The sample program below illustrates this problem. It defines two segments that
	are defined in the same group. Calls are being made from different offsets in
	the file. All calls after offset 0FDh are made to incorrect addresses rather
	than being set up as relocatable calls.
	
	The following is incorrect code generated for the procedure called Generic:
	
	   00F8                           Generic proc    near
	   00F8  E8 0000 R                        call    Simple
	   00FB  E8 0000 R                        call    Simple
	   00FE  E8 11B2                          call    Simple
	   0101  E8 5200                          call    Simple
	   0104  E8 11B2                          call    Simple
	   0107  E8 11B2                          call    Simple
	   010A  E8 0854                          call    Simple
	   010D                           Generic endp
	
	The correct code that should be generated would appear as follows:
	
	   00F8                           Generic proc    near
	   00F8  E8 0000 R                        call    Simple
	   00FB  E8 0000 R                        call    Simple
	   00FE  E8 0000 R                        call    Simple
	   0101  E8 0000 R                        call    Simple
	   0104  E8 0000 R                        call    Simple
	   0107  E8 0000 R                        call    Simple
	   010A  E8 0000 R                        call    Simple
	   010D                           Generic endp
	
	Sample Code
	-----------
	
	  ; Assemble options needed: none
	  ;
	
	  CGroup  group   Init, Code
	
	  ASSUME CS:CGroup
	
	  Code    segment para public 'CODE'
	
	  Simple  proc    near
	          ret
	  Simple  endp
	
	  Code    ends
	
	  Init    segment para public 'CODE'
	          ORG     0F8h
	
	  Generic proc    near
	          call    Simple
	          call    Simple
	          call    Simple
	          call    Simple
	          call    Simple
	          call    Simple
	          call    Simple
	  Generic endp
	
	  Init    ends
	
	  END
	
	Additional query words: 6.00 buglist6.00 fixlist6.00a
	
	======================================================================
	Keywords          :  
	Technology        : kbMASMsearch kbAudDeveloper kbMASM600
	Version           : MS-DOS:6.0
	Solution Type     : kbfix
	
	=============================================================================
	
