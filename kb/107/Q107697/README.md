---
layout: page
title: "Q107697: BUG: Sharing IRQ with COM1 Causes System to Reboot"
permalink: /kb/107/Q107697/
---

## Q107697: BUG: Sharing IRQ with COM1 Causes System to Reboot

{% raw %}

	Article: Q107697
	Product(s): Microsoft Windows Device Driver Kit
	Version(s): 3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 03-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Device Development Kit (DDK) for Windows, version 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When COM1 and another communications (COM) port are active and share the same
	IRQ using the Windows 3.1 COMM.DRV, the system hangs or reboots.
	
	CAUSE
	=====
	
	When two or more COM ports share an IRQ, COMM.DRV creates a linked list of these
	ports using the NextDEB field of the ComDEB structure that the COMM.DRV
	maintains for each port. When an interrupt occurs that has been hooked by
	COMM.DRV, the COMM.DRV interrupt handler walks the list of COM ports that are
	sharing the IRQ. For each port in the list, the COMM.DRV interrupt handler
	checks for and services any interrupts that are pending from the port. The
	COMM.DRV interrupt handler knows when it has reached the end of the list of
	ports that are sharing an IRQ when it reaches a ComDEB structure in which the
	NextDEB field is zero.
	
	If another port is sharing an IRQ with COM1 and it is opened after COM1, the
	NextDEB field in the ComDEB structure for the other port will point to the
	ComDEB structure for COM1. However, in the COMM.DRV included with Windows 3.1,
	the offset to COM1's ComDEB structure happens to be zero. The list of COM ports
	sharing an IRQ with COM1 will appear to end with the port on the list before
	COM1. This will cause the COMM.DRV interrupt handler to skip the interrupt
	servicing for COM1, and its interrupt will never be cleared. If the interrupt is
	level-triggered and it is not cleared, the COMM.DRV interrupt handler will be
	immediately called again as soon as interrupts are reenabled. This will cause
	the machine to hang or reboot.
	
	RESOLUTION
	==========
	
	The following are resolutions:
	
	- Don't share an IRQ with COM1.
	
	- Modify COMM.DRV as described below by adding a dummy variable before space is
	  allocated for the ComDEB structures in IBMSETUP.ASM. This will ensure that
	  the offset of the ComDEB structure for COM1 is not zero.
	
	  Fragment from the DDK \286\COMM directory, source file IBMSETUP.ASM:
	
	        ;;; Add the line below, approximately line 142
	        Dummy   dw      0         ; make sure offset of COM1 is not 0!
	
	        ??portnum = 1
	        REPT MAXCOM+1
	                DefineCommX %??portnum
	        ??portnum = ??portnum+1
	        ENDM
	
	STATUS
	======
	
	This bug is fixed in version 3.11 of Windows for Workgroups.
	
	Additional query words: 3.10 buglist3.10
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbWinDDKSearch kbWinDDK310
	Version           : :3.1
	
	=============================================================================
	

{% endraw %}
