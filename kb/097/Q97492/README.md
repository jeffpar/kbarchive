---
layout: page
title: "Q97492: COMNDIS Command Can Keep Workstations from Hanging"
permalink: /kb/097/Q97492/
---

## Q97492: COMNDIS Command Can Keep Workstations from Hanging

	Article: Q97492
	Product(s): Microsoft LAN Manager
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-JUL-2001
	
	SUMMARY
	=======
	
	COMNDIS.COM is a terminate-and-stay-resident (TSR) program that helps keep your
	workstation from hanging during background network operations by preventing
	multiple processes from accessing the adapter card while the card is handling an
	MS-DOS command. COMNDIS.COM is on the LAN Manager 2.2 installation disks in the
	LANMAN.DOS\NETPROG subdirectory.
	
	COMNDIS.COM should be the last thing you load in AUTOEXEC.BAT, and you must start
	it before any LAN Manager commands except NETBIND are issued. Start it with a
	command in AUTOEXEC.BAT that you insert after the NETBIND command (if you are
	using NETBIND) but before any other LAN Manager commands. Use this form
	
	  comndis x
	
	where x is the interrupt number for the LAN Manager adapter. For example, if your
	card is set at IRQ 5, the command would be:
	
	  comndis 5
	
	Additional query words: 2.00 2.10 2.10a 2.20
	
	======================================================================
	Keywords          :  
	
	=============================================================================
	
