---
layout: page
title: "Q139839: OpCode Values for x86 Based Computers"
permalink: /kb/139/Q139839/
---

## Q139839: OpCode Values for x86 Based Computers

	Article: Q139839
	Product(s): Microsoft Windows NT
	Version(s): 3.10 3.50 3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	X86 Based machines may display STOP errors because of Opcode exceptions
	from the CPU. An error of this type usually causes STOP 0x7F. In the case
	of a STOP 0x7F, the first parameter contains the OpCode that caused the
	fault. The following is a list of the current Opcode exceptions which are
	reported by x86 CPUs.
	
	0x00000000               Divide by Zero Error
	0x00000001               Debugger Interrupt
	0x00000002               Nonmaskable Interrupt
	0x00000003               Breakpoint
	0x00000004               Interrupt on overflow (INTO)
	0x00000005               Array boundary violation (BOUND)
	0x00000006               Invalid Opcode
	0x00000007               Coprocessor Not Available
	0x00000008               Double Fault
	0x00000009               Coprocessor Segment Overrun (reserved on 486)
	0x0000000A               Invalid TSS
	0x0000000B               Segment Not Present
	0x0000000C               StackException
	0x0000000D               General Protection
	0x0000000E               Page Fault
	0x0000000F               (RESERVED)
	0x00000010                Coprocessor Error
	0x00000011               Alignment check (486 only)
	0x00000012-0x0000001F    (RESERVED)
	0x00000020-0x000000FF    Available for External Interrupts via INTR Pin
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTW310 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS351search kbWinNTS350search kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : 3.10 3.50 3.51
	
	=============================================================================
	
