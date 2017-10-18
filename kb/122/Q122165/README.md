---
layout: page
title: "Q122165: Xircom PCMCIA Ethernet Card Fails to Initialize in WFWG"
permalink: kb/122/Q122165/
---

## Q122165: Xircom PCMCIA Ethernet Card Fails to Initialize in WFWG

	Article: Q122165
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 01-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Xircom Ethernet or Ethernet+Fax cards on some PCMCIA-equipped devices do not
	work correctly with Windows for Workgroups. Although the drivers appear to load
	successfully, the card fails to initialize and therefore you cannot communicate
	with the network.
	
	CAUSE
	=====
	
	This problem occurs when the Netcard= setting in the [Network Drivers] section
	of your SYSTEM.INI file points to either CECFG.EXE (for the Ethernet card) or
	CEMCFG.EXE (for the Ethernet+Modem card)or CE2CFG.EXE (for the Xircom Credit
	Card Ethernet Adaptor IIps). The Xircom card will fail the NET DIAG test with
	these drivers present. If you are using these files and cannot access your
	network, it means the PCMCIA controller hardware and the card and socket service
	software are incompatible under Windows for Workgroups.
	
	This problem does not affect all hardware and software combinations under Windows
	for Workgroups, so the problem does not occur with all Xircom PCMCIA products.
	
	WORKAROUND
	==========
	
	To work around this problem, remove the CECFG.EXE, CE2CFG.EXE, or CEMCFG.EXE
	filename from the Netcard= line in the [Network Drivers] section of your
	SYSTEM.INI file.
	
	Additional query words: 3rdparty won't run 3.10 3.11 access can't drivers
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310 kbWFW311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
