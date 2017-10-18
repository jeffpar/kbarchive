---
layout: page
title: "Q142679: Windows NT Fails to Locate the NE2000 Compatible Drivers"
permalink: kb/142/Q142679/
---

## Q142679: Windows NT Fails to Locate the NE2000 Compatible Drivers

	Article: Q142679
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kb3rdparty kbhw kbHardware
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you attempt to install an NE2000 compatible network adapter from the
	Microsoft Windows NT Server version 4.0 compact disc, you are prompted to insert
	the Microsoft Windows NT Workstation version 4.0 compact disc.
	
	CAUSE
	=====
	
	The Oemsetup.inf in the Drvlib\Netcard\X86\Ne2k.isa has been hard-coded to refer
	to the source media as below:
	
	[Source Media Descriptions]
	
	  1 = "Windows NT Workstation DRVLIB"
	  2 = "Windows NT Workstation CD-ROM" , TAGFILE = cdrom.w
	
	The following adapter cards are affected by this problem:
	
	  IBM ISA Ethernet Adapter
	  D-Link DE-220 ISA Ethernet Adapter
	  Linksys Ether16 LAN Card
	  Any other ISA NE2000 Compatible Adapter
	
	RESOLUTION
	==========
	
	Use the following steps to work around the problem.
	
	1. Copy the files from \DRVLIB\NETCARD\X86\NE2K.ISA to a floppy.
	
	2. Remove the Read-only attributes of the files on the floppy.
	
	3. Edit the OEMSETUP.INF file on the floppy.
	
	4. Change the following lines:
	
	  [Files-NE2000]
	  2, NE2000.SYS , SIZE=999
	
	  to read:
	
	  [Files-NE2000]
	  1, NE2000.SYS , SIZE=999
	
	5. From the Network Control Panel, add the adapter driver again, this time
	  choosing the "Have Disk" option.
	
	The driver should install normally now.
	
	
	Additional query words: prodnt IBM ISA D-Link DE-220
	======================================================================
	Keywords          : kb3rdparty kbhw kbHardware 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : 4.0
	
	=============================================================================
	
