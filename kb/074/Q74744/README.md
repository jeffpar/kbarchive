---
layout: page
title: "Q74744: FIX: Bad Code Produced When Using Location Arithmetic"
permalink: kb/074/Q74744/
---

## Q74744: FIX: Bad Code Produced When Using Location Arithmetic

	Article: Q74744
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
	
	Microsoft Macro Assembler (MASM) version 6.0 may generate incorrect code when
	more than one label is used to calculate a relative offset.
	
	RESOLUTION
	==========
	
	Use another method to calculate offsets. For example, the sample program in this
	article generates the correct code by using structures to calculate the offsets.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in MASM version 6.0. This problem
	was corrected in MASM version 6.0a.
	
	MORE INFORMATION
	================
	
	The sample program below illustrates this problem. The code actually generated
	by the assembler is included as comments within the source. As you can see from
	generated code, the address to place the value is calculated correctly in all
	cases. However, if location arithmetic is used, the assembler changes the first
	byte from hex 30 to hex 00. The result is independent of the format used for the
	constant ('0' behaves the same as 30h).
	
	Sample Code
	-----------
	
	  ; Assemble options needed: none
	  ;
	  ; This program should display "Six Zeros -> 000000" on the screen.
	  ;        Instead, it displays "Six Zeros ->  0  0 ".
	  ;
	  ; To work around this problem, uncomment the code involving
	  ; structures and remove the code using location arithmetic.
	
	  .MODEL small
	  .STACK 4096
	  .DATA
	
	  VOLCANOS STRUCT
	  RAINER   BYTE    "Six"
	  BAKER    BYTE    "Zeros ->"
	  ADAMS    BYTE    6 DUP(01H)
	  STHELENS BYTE    '$'
	  VOLCANOS ENDS
	
	  MOUNTAINS     LABEL BYTE
	  MACKENZIE     BYTE  "Six "
	  FUJI          BYTE  "Zeros -> "
	  GODWIN_AUSTEN BYTE  6 DUP(01H)
	  KILIMANJARO   BYTE  '$'
	
	  .CODE
	  main:
	           mov    ax, @DATA
	           mov    ds, ax
	           mov    di, OFFSET MOUNTAINS
	
	  ;Offsets calculated using structures
	
	  ;         mov    BYTE PTR VOLCANOS.ADAMS+2 [DI], '0'
	  ;         mov    WORD PTR VOLCANOS.ADAMS   [DI], '00'
	  ;
	  ;3750:0008 C6450F30       MOV       Byte Ptr [DI+0F],30
	  ;3750:000C C7450D3030     MOV       Word Ptr [DI+0D],3030
	  ;
	  ;         mov    BYTE PTR VOLCANOS.ADAMS+5 [DI], 30h
	  ;         mov    WORD PTR VOLCANOS.ADAMS+3 [DI], 3030h
	  ;
	  ;3750:0011 C6451230       MOV       Byte Ptr [DI+12],30
	  ;3750:0015 C745103030     MOV       Word Ptr [DI+10],3030
	
	  ; Offsets calculated using location arithmetic
	
	           mov    BYTE PTR [GODWIN_AUSTEN+2-MOUNTAINS+DI], '0'
	           mov    WORD PTR [GODWIN_AUSTEN-MOUNTAINS+DI], '00'
	
	  ;3750:001A C6450F00       MOV       Byte Ptr [DI+0F],00
	  ;3750:001E C7450D0030     MOV       Word Ptr [DI+0D],3000
	
	           mov    BYTE PTR [GODWIN_AUSTEN+5-MOUNTAINS+DI], 30H
	           mov    WORD PTR [GODWIN_AUSTEN+3-MOUNTAINS+DI], 3030H
	
	  ;3750:0023 C6451200       MOV       Byte Ptr [DI+12],00
	  ;3750:0027 C745100030     MOV       Word Ptr [DI+10],3000
	
	  ; Output
	           mov    dx, OFFSET MOUNTAINS  ; Load DX with offset of
	                               ;  MOUNTAINS (segment already in DS)
	           mov    ax, 09h
	           int    21h          ; Display String to stdout
	
	           mov    ax, 4C00h    ; Exit functions with 0 in AL
	           int    21h          ; Exit Program with Return Code
	
	           END    main
	
	Additional query words: 6.00 EQU buglist6.00 fixlist6.00a
	
	======================================================================
	Keywords          :  
	Technology        : kbMASMsearch kbAudDeveloper kbMASM600
	Version           : MS-DOS:6.0
	Solution Type     : kbfix
	
	=============================================================================
	
