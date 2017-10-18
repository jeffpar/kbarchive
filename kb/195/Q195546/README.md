---
layout: page
title: "Q195546: Removal of Multimedia Device May Cause Resource Conflict"
permalink: kb/195/Q195546/
---

## Q195546: Removal of Multimedia Device May Cause Resource Conflict

	Article: Q195546
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:95
	Operating System(s): 
	Keyword(s): kbenv kbui osr2 win95
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 OEM Service Release, version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you remove a peripheral component interconnect-based (PCI) multimedia
	device (such as a sound card) from Device Manager, you may be prompted to
	install a new multimedia hardware device, and this may occur even if you have
	not installed a new multimedia hardware device. If you then press Refresh in
	Device Manager, the device you originally removed may reappear in Device Manager
	with an exclamation point in a yellow circle next to it.
	
	CAUSE
	=====
	
	This problem can occur if IRQ Steering is enabled on your computer.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Windows 95 OEM Service
	Release version 2.0. This problem has been resolve in Microsoft Windows 98.
	
	Additional query words: 95 2.00
	
	======================================================================
	Keywords          : kbenv kbui osr2 win95 
	Technology        : kbWin95search kbOPKSearch
	Version           : WINDOWS:95
	Issue type        : kbprb
	
	=============================================================================
	
