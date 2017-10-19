---
layout: page
title: "Q141385: Cogent EM110 PCI and MS-DOS client 3.0"
permalink: /kb/141/Q141385/
---

## Q141385: Cogent EM110 PCI and MS-DOS client 3.0

	Article: Q141385
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): MS-DOS:3.0; winnt:3.5,3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.5, 3.51 
	- Microsoft MS-DOS operating system version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you use the MS-DOS client 3.0 with the Cogent EM110 PCI network card,
	TCPIP, NWLINK or NetBEUI does not work. However, the network interface card
	(NIC) works fine with Windows NT.
	
	MORE INFORMATION
	================
	
	The Drvlib (currently Windows NT 3.51) does not have a driver for the Cogent
	EM110 PCI network card. The one off the distribution disk that was shipped with
	the Lan card must be used for the MS-DOS client. When using the three protocols
	listed above, you will see the following symptoms:
	
	  NetBEUI - Binds and loads, but is not be able to connect to anyone
	
	  NWLink - Same symptoms as NetBEUI
	
	  TCPIP - Hangs when loading TCPTSR.EXE.
	
	WORKAROUND
	==========
	
	Cogent Tech support has a new NDIS2 driver on their BBS and CompuServe forum (GO
	Cogent) that fixes this problem with their NDIS2 driver.
	
	EM110 is manufactured by and is a trademark of Cogent Corporation, a vendor
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	this product's performance or reliability.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT350search kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search kbMSDOSSearch kbMSDOS300
	Version           : MS-DOS:3.0; winnt:3.5,3.51
	
	=============================================================================
	
