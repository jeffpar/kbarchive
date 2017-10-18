---
layout: page
title: "Q79835: FIX: MASM 6.0 May Generate Wrong Listing for CMPXCHG"
permalink: kb/079/Q79835/
---

## Q79835: FIX: MASM 6.0 May Generate Wrong Listing for CMPXCHG

	Article: Q79835
	Product(s): Microsoft Macro Assembler
	Version(s): 6.0,6.0a,6.0b,6.10,6.10a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Macro Assembler (MASM), versions 6.0, 6.0a, 6.0b, 6.10, 6.10a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When using the Microsoft Macro Assembler (MASM) to generate a listing file for
	an assembler source file that contains a CMPXCHG instruction, errors may occur
	in that listing. A colon is appended to bytes of values 26h, 2Eh, 36h, and 3Eh
	when they appear in an instruction. For example, the following are generated:
	
	  0000  0F B0 26: 00 00              cmpxchg data1, ah
	  0005  0F B0 2E: 00 00              cmpxchg data1, ch
	  000A  0F B0 36: 00 00              cmpxchg data1, dh
	  000F  0F B0 3E: 00 00              cmpxchg data1, bh
	
	instead of the following:
	
	  0000  0F B0 26 0000  R             cmpxchg data1, ah
	  0005  0F B0 2E 0000  R             cmpxchg data1, ch
	  000A  0F B0 36 0000  R             cmpxchg data1, dh
	  000F  0F B0 3E 0000  R             cmpxchg data1, bh
	
	In addition, the address of a memory location is not always shown; instead, a
	series of disjoint zero bytes appear. For example, the following is generated:
	
	  0014  0F B0 16 00 00               cmpxchg data2, dl
	
	instead of the following:
	
	  0014  0F B0 16 0100  R             cmpxchg data2, dl
	
	Note that this also occurs in the first example. Finally, extra trailing bytes
	may be placed in the listing file. For example, the following is generated:
	
	  0019  67& 0F B1 94 73 00000200  R  cmpxchg data3[ebx+2*esi],dx
	        00 00 00 09
	
	instead of the following:
	
	  0019  67& 0F B1 94 73 00000200  R  cmpxchg data3[ebx+2*esi],dx
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in MASM versions 6.0, 6.0a, 6.0b,
	6.1, and 6.1a. This problem was corrected in MASM for MS-DOS version 6.11.
	
	Sample Code
	-----------
	
	  ; Assemble options needed: /c /Fl
	
	  .MODEL small
	  .486
	  .STACK 4096
	
	  .DATA
	  data1 DB 100h DUP ('x')
	  data2 DB 100h DUP ('y')
	  data3 DW 100h DUP (1)
	
	  .CODE
	  start:
	       cmpxchg data1, ah
	       cmpxchg data1, ch
	       cmpxchg data1, dh
	       cmpxchg data1, bh
	       cmpxchg data2, dl
	       cmpxchg data3[ebx+2*esi],dx
	  END start
	
	Additional query words: 6.00 6.00a 6.00b 6.10 6.10a buglist6.00a buglist6.00b buglist6.10 buglist6.10a fixlist6.11
	
	======================================================================
	Keywords          :  
	Technology        : kbMASMsearch kbAudDeveloper kbMASM600 kbMASM600a kbMASM600b
	Version           : :6.0,6.0a,6.0b,6.10,6.10a
	Solution Type     : kbfix
	
	=============================================================================
	
