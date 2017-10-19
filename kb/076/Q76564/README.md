---
layout: page
title: "Q76564: Receiving a Physical COM Port from the Windows VCD"
permalink: /kb/076/Q76564/
---

## Q76564: Receiving a Physical COM Port from the Windows VCD

	Article: Q76564
	Product(s): Microsoft Windows Device Driver Kit
	Version(s): 3.0,3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Device Development Kit (DDK) for Windows, versions 3.0, 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In the enhanced mode of the Microsoft Windows graphical environment, the virtual
	communications device (VCD) assigns a physical communications (COM) port to a
	virtual machine (VM) only when certain events occur. The text below lists these
	events.
	
	MORE INFORMATION
	================
	
	In Windows enhanced mode, the VCD virtualizes and serializes the ownership of
	physical COM ports. When a program running in a VM directly accesses one of the
	I/O ports of a COM port (for example, COM1 corresponds to I/O ports 0x3F8
	through 0x3FE), that VM may not necessarily own the physical port. The VM
	communicates with a virtual COM port until the VCD assigns a physical port.
	
	Seven conditions that cause the VCD to assign a physical COM port to a particular
	VM are:
	
	1. When an application reads or writes the Receive/Transmit buffer with the
	  Divisor Latch Access Bit (80h) of the Line Control Register off.
	
	2. When an application reads the Line Status Register more than once.
	
	3. When an application reads the Modem Status Register more than once.
	
	4. When an application writes to the Modem Control Register with the Loopback
	  (10h) or Interrupt Enable (08h) bits on (simply changing the DTR or RTS line
	  states does not cause VCD to assign a physical COM port).
	
	5. When an application unmasks a COM port interrupt.
	
	6. When a COM port interrupt occurs for an unowned COM port.
	
	7. When the communications driver (COMM.DRV) instructs the VCD to assign a port
	  to the Windows (system) VM because an application called the OpenComm
	  function.
	
	Implementation details on COM port assignment can be found by examining the
	source code to VCD, which is available in the DDK. Some of the relevant
	procedures are:
	
	======================================================================
	VCD_Attach called by:   VCD_Set_Owner
	
	VCD_Detach called by:
	  VCD_Set_Owner
	
	VCD_Set_Owner called by:
	  VCD_Assign
	  VCD_Set_Port_Global
	  VCD_PM_Acquire_Port
	  VCD_PM_Free_Port
	  VCD_Set_Focus
	  VCD_Set_Owner_Event
	  VCD_Detach_If_Owner
	
	VCD_Assign called by:
	  VCD_PM_Steal_Port
	  VCD_Cant_Virtualize
	  VCD_Mask
	
	VCD_PM_Steal_Port called by:
	  Comm Driver KickTx/StealPort
	
	VCD_Cant_Virtualize called by:
	  VCD_Virt_In_Out_RxTxB   (Condition 1)
	  VCD_Virt_In_LSR      (Condition 2)
	  VCD_Virt_In_MSR      (Condition 3)
	  VCD_Virt_Out_MCR  (Condition 4)
	
	VCD_Mask called by:
	  VCD_handler (VPICD Mask_Change_Proc)   (Condition 5)
	
	VCD_PM_Acquire_Port called by:
	  Comm Driver GetCOMport386     (Condition 7)
	
	VCD_PM_Free_Port called by:
	  Comm Driver ReleaseCOMport386
	
	VCD_Set_Owner_Event called by:
	  VCD_Int        (Condition 6)
	
	VCD_Detach_If_Owner called by:
	  VCD_Destroy_VM
	
	Additional query words: 3.00 3.10 DDKCOMM
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbWinDDKSearch kbWinDDK300 kbWinDDK310
	Version           : :3.0,3.1
	
	=============================================================================
	
