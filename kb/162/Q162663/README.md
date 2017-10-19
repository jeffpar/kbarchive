---
layout: page
title: "Q162663: Cabletron T20xx Adapter Does Not Work After Installing SP2"
permalink: /kb/162/Q162663/
---

## Q162663: Cabletron T20xx Adapter Does Not Work After Installing SP2

	Article: Q162663
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
	
	After installing Service Pack 2, the Cabletron T20xx Token Ring network adapter
	in your computer may no longer function properly.
	
	Removing Service Pack 2 does not correct the issue.
	
	RESOLUTION
	==========
	
	To work around this problem, manually enter the hardware address for the network
	adapter in the secondary address field in the driver configuration screen.
	
	To locate the hardware address for the network adapter, do the following:
	
	1. Reboot the computer to MS-DOS either from the Boot.ini menu or using a
	  bootable floppy disk.
	
	2. Run the setup utility for the adapter, it will display the correct hardware
	  address for the card. The number will start with 0000B8xxxxxx.
	
	The serial number is located on the mounting bracket of the adapter, but has no
	direct translation to the hardware address.
	
	The setup utility software is available from Cabletron's FTP site at the
	following URL:
	
	  ftp://ftp.ctron.com/pub/token.dri/rel_disks/r203.zip
	
	NOTE: The network adapter may work with incorrect or "dummy" numbers, but this
	may create other network problems.
	
	STATUS
	======
	
	Microsoft is researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	Additional query words: prodnt nic
	
	======================================================================
	Keywords          : kbhw kbnetwork kbHardware 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : 4.0
	
	=============================================================================
	
