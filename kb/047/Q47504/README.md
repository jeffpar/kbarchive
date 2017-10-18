---
layout: page
title: "Q47504: Some Instructions May Require Enabling of Instruction Set"
permalink: kb/047/Q47504/
---

## Q47504: Some Instructions May Require Enabling of Instruction Set

	Article: Q47504
	Product(s): Microsoft Macro Assembler
	Version(s): MS-DOS:5.0,5.1,5.1a,6.0,6.0a,6.0b
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Macro Assembler (MASM), versions 5.0, 5.1, 5.1a, 6.0, 6.0a, 6.0b 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Using an instruction that requires a 80186, 80286, or 80386 processor may cause
	the Microsoft Macro Assembler (MASM) 5.1 to generate the one of the following
	errors:
	
	  A2066: Must have instruction after prefix.
	
	  A2105: Expected: instruction, directive, or label
	
	and MASM 6.0 to generate the following error:
	
	  A2085: instruction or register not accepted in current CPU mode
	
	The error occurs because the default assembly mode is 8086. The .186, .286,
	.286p, .386, or .386p directive must be placed in the source code prior to any
	instructions that require those modes.
	
	In addition, MASM 6.0 supports 80486 instructions.
	
	MORE INFORMATION
	================
	
	The following information is taken from page 621 of the "Microsoft Macro
	Assembler Programmer's Guide" for MASM 6.0
	
	80186 Processor Instructions
	
	  BOUND        INSW         OUTSW
	  ENTER        LEAVE        POPA
	  INS          OUTS         PUSHA
	  INSB         OUTSB        PUSHW*
	
	80286 Processor Instructions
	
	  ARPL         SIDT         VERR
	  LAR          SLDT         VERW
	  LSL          SMSW
	  SGDT         STR
	
	80286 and 80386 Privileged-Mode Instructions
	
	  CLTS         LIDT         LMSW
	  LGDT         LLDT         LTR
	
	80386 Processor Instructions
	
	  BSF          LSS          SETNAE
	  BSR          MOVSD        SETNB
	  BT           MOVSX        SETNBE
	  BTC          MOVZX        SETNC
	  BTR          OUTSD        SETNE
	  BTS          POPAD        SETNG
	  CDQ          POPFD        SETNGE
	  CMPSD        PUSHAD       SETNL
	  CWDE         PUSHD*       SETNLE
	  INSD         PUSHFD       SETNO
	  IRETD        SCASD        SETNP
	  IRETDF*      SETA         SETNS
	  IRETF*       SETAE        SETNZ
	  JECXZ        SETB         SETO
	  LFS          SETBE        SETP
	  LGS          SETC         SETPE
	  LODSD        SETE         SETPO
	  LOOPD*       SETG         SETS
	  LOOPED*      SETGE        SETZ
	  LOOPNED*     SETL         SHLD
	  LOOPNZD*     SETLE        SHRD
	  LOOPZD*      SETNA        STOSD
	
	80486 Processor Instructions
	
	  BSWAP*       INVD*        WBINVD*
	  CMPXCHG*     INVLPG*      XADD*
	
	  * New to MASM 6.0
	
	Additional query words: kbinf 5.00 5.10 5.10a 6.00 6.00a 6.00b
	
	======================================================================
	Keywords          :  
	Technology        : kbMASMsearch kbAudDeveloper kbMASM510 kbMASM600 kbMASM500 kbMASM600a kbMASM510a kbMASM600b
	Version           : MS-DOS:5.0,5.1,5.1a,6.0,6.0a,6.0b
	
	=============================================================================
	
