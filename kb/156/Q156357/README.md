---
layout: page
title: "Q156357: Windows NT Pauses During Startup with Adaptec 1542CP"
permalink: kb/156/Q156357/
---

## Q156357: Windows NT Pauses During Startup with Adaptec 1542CP

	Article: Q156357
	Product(s): Microsoft Windows NT
	Version(s): WinNT:3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): kbsetup
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use an Adaptec 1542CP in a computer running Windows NT Server or
	Workstation, Windows NT may pause during startup for up to 5 minutes. Event
	Viewer may indicate Event Id 9 - "Device\SCSIportX did not respond within the
	timeout period."
	
	CAUSE
	=====
	
	This error can be caused by a setting in the computer's BIOS.
	
	The setting in question may be First available interrupt and contain a numeric
	value. This setting determines what IRQs are available to the computer's PCI
	devices. Other BIOS manufacturers use Reserved by ISA to deny PCI devices access
	to those specified interrupts.
	
	With Plug and Play disabled on the Adaptec 1542CP (which is the desired setting
	when using this controller with Windows NT), the default interrupt chosen by the
	controller is IRQ 10. If any PCI devices attempt to use this IRQ (based on the
	BIOS setting for available interrupts), you may experience the above symptoms.
	
	RESOLUTION
	==========
	
	Ensure that any available interrupts are NOT equal to the IRQ setting of the
	Adaptec controller. If your BIOS uses the Reserved by ISA scheme of interrupt
	control, then ensure the BIOS has reserved the Adaptec's IRQ setting as Reserved
	by ISA.
	
	Additional query words: 1542 CP hang fail wait slow install installation SCSI controller add device port
	======================================================================
	Keywords          : kbsetup 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : WinNT:3.5,3.51,4.0
	
	=============================================================================
	
