---
layout: page
title: "Q114473: Intel Privileged and Sensitive Instructions"
permalink: kb/114/Q114473/
---

## Q114473: Intel Privileged and Sensitive Instructions

	Article: Q114473
	Product(s): Microsoft Windows Software Development Kit
	Version(s): 3.1
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 01-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Intel architecture defines "privileged" instructions and "sensitive"
	instructions. The privileged instructions may only be executed when the Current
	Privilege Level is zero (CPL = 0). Attempting to execute a privileged
	instruction when CPL != 0 will generate a general protection (GP) exception.
	Windows traps GP exceptions caused by executing privileged instructions and
	usually generates an application error.
	
	The sensitive instructions (also called IOPL-sensitive) may only be executed when
	CPL <= IOPL (I/O Privilege Level). Attempting to execute a sensitive
	instruction when CPL > IOPL will generate a GP exception. This should usually
	not cause a fatal error. The Windows Virtual Machine Manager (VMM) traps GP
	exceptions caused by executing sensitive instructions and (depending on the
	instruction) either simulates the instruction's behavior in the VM in which the
	instruction was executed, or dispaches it to a virtual device driver, which
	simulates the instruction's behavior.
	
	The Virtual Machine Manager (VMM), which is in WIN386 along with the core Virtual
	Device Drivers (VxDs), runs at CPL = 0. By Intel hardware definition, Virtual
	8086 (V86) mode always runs at CPL = 3. In enhanced mode, the machine can be
	either in IOPL = 0 or IOPL = 3.
	
	MORE INFORMATION
	================
	
	The privileged instructions include:
	
	   CLTS - Clear Task-Switched Flag    LMSW    - Load Machine Status
	   HLT  - Halt Processor              LTR     - Load Task Register
	   LGDT - Load GDT Register           MOV CRn - Move Control Register
	   LIDT - Load IDT Register           MOV DRn - Move Debug Register
	   LLDT - Load LDT Register           MOV TRn - Move Test Register
	
	The sensitive instructions in protected mode include:
	
	   IN  - Input           OUTS - Output String
	   INS - Input String    CLI  - Clear Interrupt-Enable Flag (IF)
	   OUT - Output          STI  - Set IF
	
	The instruction POPF is both IOPL and CPL sensitive. IOPL will only be changed by
	POPF when executed at CPL = 0. The interrupt flag (IF) will only be changed by
	POPF if executed with CPL <= IOPL. If POPF does not change IOPL or the
	interrupt flag due to lack of privilege, no exception is generated.
	
	The sensitive instructions V86 mode include:
	
	   CLI   - Clear IF      POPF  - Pop Flags
	   STI   - Set IF        INT n - Software Interrupt
	   PUSHF - Push Flags    IRET  - Interrupt Return
	
	The CPL = 3 by definition in V86 mode. If IOPL < 3, attempting to execute V86
	mode sensitive instructions will generate a GP exception. The Windows VMM will
	trap the GP exception and emulate the instruction in the VM in which it was
	originally executed.
	
	I/O instructions are special in that they are sensitive not only to IOPL, but
	also to the IO permission bitmap in the Task State Segment (TSS). If CPL <=
	IOPL, then the I/O operation will proceed without checking the I/O permission
	bitmap. If CPL > IOPL, or if in V86 mode, then the I/O permission bitmap is
	consulted. If the bits corresponding to the I/O port are clear, the I/O
	operation proceeds, otherwise, a GP exception is generated. In response to this
	GP exception, the VMM gets control and dispatches control to the VxD that traps
	the port.
	
	REFERENCES
	==========
	
	For additional information, please see the following article(s) in the Microsoft
	Knowledge Base:
	
	  Q100947 Port Trapping in Windows 3.0/3.1
	
	  Q112298 DOCERR: Port I/O with inp() and outp() Fails on Windows NT
	
	
	Also see the Intel "i486(TM) Microprocessor Programmer's Reference Manual" and
	the section "The Effect of Priviledge Levels" in the article "The Tao of
	Interrupts" on the Microsoft Developer Network (MSDN) Development Library CD.
	
	Additional query words: 3.10
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : :3.1
	
	=============================================================================
	
