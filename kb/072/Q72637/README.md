---
layout: page
title: "Q72637: Sharing IRQs with the Windows 3.0 Communications Driver"
permalink: kb/072/Q72637/
---

## Q72637: Sharing IRQs with the Windows 3.0 Communications Driver

	Article: Q72637
	Product(s): Microsoft Windows Device Driver Kit
	Version(s): 3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 03-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Device Development Kit (DDK) for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The communications driver shipped with version 3.0 of the Microsoft Windows
	graphical environment runs in enhanced mode, it can share serial communication
	IRQ between COM ports if the hardware is compliant. This can occur on equipment
	with the Industry Standard Architecture (ISA), the Extended Industry Standard
	Architecture (EISA), or the Micro-Channel Architecture (MCA).
	
	MORE INFORMATION
	================
	
	The communications driver supplied with Windows 3.0, COMM.DRV, can share IRQs
	between two serial communication boards when Windows runs in enhanced mode.
	However, this ability is very dependent on the hardware and may not work in all
	cases.
	
	In the default configuration, COM1 and COM3 are placed on IRQ 4; COM2 and COM4
	are placed on IRQ 3. To use COM2 and COM4 at the same time, for example, the two
	ports must successfully share IRQ 3. To accomplish this, when the COMM.DRV
	receives an interrupt, it checks each COM port that is currently open on the IRQ
	to determine if the port requires service. After COMM.DRV services the interrupt
	for one port, it checks any other ports connected to that IRQ until it
	determines that no ports require service. Then COMM.DRV executes an EOI
	instruction and an IRET instruction.
	
	IRQ sharing works correctly only if the COM adapters cooperate with each other.
	Some adapters mask the interrupt request such that other adapters on the same
	IRQ line cannot send an interrupt request to the interrupt controller. By
	default, the COMM.DRV supports IRQ sharing on an EISA or an MCA machine because
	the COM ports probably share an IRQ with each other or with another device in
	the system. On an ISA machine, where the chances of IRQ sharing are much lower,
	the user can enable IRQ sharing by setting the ComIRQSharing flag in the
	[386Enh] section of the SYSTEM.INI initialization file. For more information,
	see the documentation for the ComIRQSharing flag in the SYSINI2.TXT file that
	the Windows setup program places in the Windows directory (by default,
	C:\WINDOWS).
	
	Note that all the extra processing required to share IRQs creates overhead. On a
	system where a the COM ports do not share an IRQ with any other device,
	disabling IRQ sharing with the ComIRQSharing switch provides a minor performance
	improvement.
	
	Additional query words: 3.00 DDKVCD
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbWinDDKSearch kbWinDDK300
	Version           : :3.0
	
	=============================================================================
	
