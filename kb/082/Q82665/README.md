---
layout: page
title: "Q82665: Causes of System Integrity Errors in Windows 3.1"
permalink: kb/082/Q82665/
---

## Q82665: Causes of System Integrity Errors in Windows 3.1

	Article: Q82665
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 25-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	System Integrity errors are caused by unexpected CPU faults. The following
	information provides a general overview of CPU fault causes. For more
	information, refer to your Intel 80386 CPU manual or "The 80386 Book," by Ross
	P. Nelson (published by Microsoft Press).
	
	MORE INFORMATION
	================
	
	The following are some of the more common CPU faults:
	
	- Invalid opcode
	
	- Stack exception
	
	- General protection (GP) fault
	
	- Page fault
	
	NOTE: Not all occurrences of these faults are invalid. Valid, expected faults
	occur from all of the above except stack exceptions.
	
	Invalid Opcode
	--------------
	
	An invalid opcode fault occurs when an instruction that is not legal is executed.
	The most frequent cause of this invalid fault is executing a value that is not
	an instruction.
	
	Stack Exception
	---------------
	
	A stack exception fault occurs when an invalid stack operation is attempted. The
	most frequent cause of this invalid fault is trying to PUSH or POP a WORD or
	DWORD at an address that causes the operation to span across SP value 00000h or
	0FFFFh. For example, attempting to POP a WORD with SP=0FFFFh, is attempting to
	read one byte of the WORD at offset 0FFFFh and the other byte of the word at
	offset 00000h. The CPU does not support this operation.
	
	General Protection (GP) Fault
	-----------------------------
	
	Many things can cause a GP fault. As the name implies, this fault means something
	was attempted that is not allowed because it would violate the protection
	features built into the CPU. As with invalid opcode faults, a typical cause of
	this invalid fault is executing garbage, but unlike the invalid opcode, the
	instruction is legal; however, the particular form of the instruction is illegal
	at the time.
	
	Page Fault
	----------
	
	A page fault occurs when an access is made to memory that is not currently
	mapped, (not currently available). The most frequent causes of this invalid
	fault are wild pointer accesses to memory that is not legal to look at in the
	current time frame. This is often a manifestation of "protection." For example,
	a device wants to protect a piece of memory, always, or at the current time, so
	that only that particular device can use it. It makes the memory unavailable by
	using the paging features of the CPU so that any application that tries to read
	or write to this memory will be stopped by an invalid page fault. This helps
	prevent the wild pointer in the application from damaging critical information
	in memory.
	
	Additional query words: 3.00 3.00a 3.10 crash drwatson
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbWFWSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311 kbWFW310 kbWFW311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	
