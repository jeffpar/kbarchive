---
layout: page
title: "Q137779: Dell Latitude: Installing both Xircom TR and Ethernet PCMCIA"
permalink: /kb/137/Q137779/
---

## Q137779: Dell Latitude: Installing both Xircom TR and Ethernet PCMCIA

	Article: Q137779
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article explains how to run both the Xircom CreditCard Ethernet IIps and
	the Xircom CreditCard Token Ring network cards simultaneously on a Dell Latitude
	XP4100 running Windows NT Workstation 3.51.
	
	MORE INFORMATION
	================
	
	This article assumes you need to have the Advanced Port Replicator (APR)
	attached to the computer. Because the APR has both a SCSI interface and a
	built-in Ethernet port, you must use the settings displayed below to get this
	combination of hardware initialized under Windows NT Workstation 3.51.
	
	Before you follow the two procedures below, install both cards, turn on the
	computer, and start Windows NT.
	
	Xircom CreditCard Ethernet IIPS Configuration
	---------------------------------------------
	
	1. Run Control Panel, choose Network, choose Add Adapter, select "<Other>
	  Requires disk from manufacturer," and then choose OK.
	
	2. When Setup prompts for a floppy disk, type the following:
	
	  <drive>:\DRVLIB\NETCARD\X86\XCE10
	
	  where <drive> is the drive letter of your CD-ROM drive.
	
	3. Select the Xircom CreditCard Ethernet IIps from the Select OEM Option window
	  and choose OK.
	
	4. From the Xircom CreditCard Ethernet IIps V1.17 Dialog Box, configure the card
	  as follows:
	
	     I/O Port Address:    0x220
	     Memory Address:      0xD4000
	     Interrupt:           3
	     Full Duplex:         No
	     Mode:                I/O Mode
	     Early Transmit:      On
	     Link Integrity:      Enabled
	     Cable Type:          Auto Detect
	
	5. Choose OK.
	
	Xircom CreditCard Token Ring Configuration
	------------------------------------------
	
	IMPORTANT: Make sure that the Token Ring adapter is connected to a Multi-Station
	Access Unit (MSAU/MAU) on a live Token Ring network before proceeding. If it is
	not connected to a live Token Ring network, the network card will not
	initialize.
	
	1. Run Control Panel, choose Network, choose Add Adapter, select "<Other>
	  Requires disk from manufacturer," and then choose OK.
	
	2. When Setup prompts for a floppy disk, type the following:
	
	  <drive>:\DRVLIB\NETCARD\X86\XCE10
	
	  where <drive> is the drive letter of your CD-ROM drive.
	
	3. Select the Xircom CreditCard TokenRing from the Select OEM Option window and
	  choose OK.
	
	4. From the Xircom CreditCard Token Ring V1.17 Dialog Box, configure the card as
	  follows:
	
	    I/O Port Address:    0x380
	    Memory Address:      0xD6000
	    Interrupt:           15
	    Line Speed:          EEPROM
	
	  NOTE: An I/O Port address of 0x300, the default, will not work with the port
	  replicator attached to Dell Latitude XP4100/CX
	
	5. Choose OK and then Restart Windows NT.
	
	The Dell Latitude will be connected to both the Ethernet network and the Token
	Ring network.
	
	Additional query words: prodnt pcmcia
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351
	
	=============================================================================
	
