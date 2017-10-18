---
layout: page
title: "Q62505: Common Mistakes Made when Modifying PROTOCOL.INI"
permalink: kb/062/Q62505/
---

## Q62505: Common Mistakes Made when Modifying PROTOCOL.INI

	Article: Q62505
	Product(s): Microsoft LAN Manager
	Version(s): 
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 30-JUL-2001
	
	SUMMARY
	=======
	
	If you use the defaults when installing OS/2 LAN Manager version 2.0, 2.1, 2.1a,
	or 2.2 with an EtherLink II card, the EtherLink II card may use Interrupt 3,
	which is the same interrupt that COM2 uses.
	
	If you need to use the COM2 port, edit PROTOCOL.INI to change the interrupt
	information; otherwise, there will be a conflict with the EtherLink II card.
	
	Remember to edit the version of PROTOCOL.INI that is in the subdirectory named in
	the following line in the CONFIG.SYS file:
	
	  device=c:\lanman\drivers\protman\protman.os2
	         /i:c:\lanman\drivers\protman
	
	Edit the copy of PROTOCOL.INI in the subdirectory pointed to by the
	/I:C:\LANMAN\DRIVERS\PROTMAN portion of the line listed above, NOT the copy in
	C:\LANMAN\DRIVERS\ELNKII.
	
	Finally, remember that you must restart the computer for any changes to
	PROTOCOL.INI to take effect.
	
	Additional query words: 2.00 2.0 2.1 2.10 2.10a 2.1a 2.2 2.20
	
	======================================================================
	Keywords          : kbnetwork 
	
	=============================================================================
	
