---
layout: page
title: "Q135346: I/O Port or Memory Address Conflicts in Windows NT"
permalink: kb/135/Q135346/
---

## Q135346: I/O Port or Memory Address Conflicts in Windows NT

	Article: Q135346
	Product(s): Microsoft Windows NT
	Version(s): 3.5,3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.5, 3.51 
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you remove a driver for a PCI device, keep the device enabled in the
	computer BIOS, and add another PCI device, Windows NT may assign the same I/O
	port or memory address used by the previous device driver to the new PCI device
	driver.
	
	CAUSE
	=====
	
	When a new PCI device driver requests an I/O port or memory address, Windows NT
	does not check for unused addresses. The I/O port or memory address usage in
	Windows NT is registered through the device drivers.
	
	
	WORKAROUND
	==========
	
	To work around this problem, do one of the following before adding the new PCI
	device:
	
	- Disable the device using the same I/O port or memory address in the computer
	  BIOS.
	
	- Physically remove the device from the computer.
	
	- Add the device driver back (this registers the I/O port or memory address in
	  Windows NT).
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT versions 3.5 and
	3.51. We are researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	
	Additional query words: prodnt logon lock hang
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : :3.5,3.51
	
	=============================================================================
	
