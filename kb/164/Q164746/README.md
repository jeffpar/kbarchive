---
layout: page
title: "Q164746: SMC 9332 EtherPower 10/100 Driver Does Not Load"
permalink: kb/164/Q164746/
---

## Q164746: SMC 9332 EtherPower 10/100 Driver Does Not Load

	Article: Q164746
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbhw kbnetwork kbHardware
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The SMC 9332 EtherPower 10/100 PCI Fast Ethernet network adapter driver may not
	load if it is manually selected in the Select Network Adapter list.
	
	This problem also occurs with the driver in the Drvlib\Netcard\Smcpci folder on
	the Windows NT 4.0 CD-ROM.
	
	CAUSE
	=====
	
	The SMC 9332 EtherPower 10/100 PCI Fast Ethernet adapter has a Digital Equipment
	Corporation 21140 chip on it. Windows NT detects this adapter as a DEC PCI
	FastEthernet DECchip 21140 adapter.
	
	RESOLUTION
	==========
	
	If it is the only network adapter in the computer, remove the driver for the SMC
	9332 adapter and let Windows NT detect it as a DEC PCI FastEthernet DECchip
	21140 adapter. Or, install the driver from the disk included with the adapter.
	
	If there is more than one network adapter in the computer, remove the SMC 9332
	driver and manually select the DEC PCI FastEthernet DECchip 21140 driver in the
	Select Network Adapter list. Or, install the driver from the disk included with
	the adapter.
	
	======================================================================
	Keywords          : kbhw kbnetwork kbHardware 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : 4.0
	
	=============================================================================
	
