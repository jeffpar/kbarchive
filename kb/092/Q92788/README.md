---
layout: page
title: "Q92788: 3Com EtherLink III (3C509) in EISA Machines"
permalink: kb/092/Q92788/
---

## Q92788: 3Com EtherLink III (3C509) in EISA Machines

	Article: Q92788
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 29-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If the 3Com EtherLink III (3C509) network card is configured in EISA mode and is
	in an EISA machine, the driver (ELNK3.DOS) fails to load when you start the
	system.
	
	CAUSE
	=====
	
	This problem occurs on any EISA bus machine that has only one EISA 3Com
	EtherLink III card because Windows for Workgroups version 3.1 Setup adds an
	IOADDRESS= parameter to the PROTOCOL.INI file.
	
	NOTE: This problem does not occur in later versions of Windows for Workgroups.
	
	WORKAROUND
	==========
	
	Remove the IOADDRESS= line from the appropriate section of the PROTOCOL.INI
	file.
	
	MORE INFORMATION
	================
	
	The EISA mode of the 3Com EtherLink III card forces the card to an I/O address
	that cannot be set from Control Panel. Later, when the machine is restarted, the
	driver (ELNK3.DOS) double-checks to see that a driver is present at the
	IOADDRESS= location. In the EISA case, this is not true so the driver reports an
	error, and does not load.
	
	Because the ELNK3.DOS driver can find the EtherLink III card in either an ISA bus
	or an EISA bus machine, it does not need the IOADDRESS= or SLOT= parameter in
	the PROTOCOL.INI file. These settings should only be used if there is more than
	one EtherLink III card in the machine.
	
	Additional query words: 3.10 ether link set up boot 3C579
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310 kbWFW311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
