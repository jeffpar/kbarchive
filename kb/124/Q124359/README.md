---
layout: page
title: "Q124359: No Xircom Ethernet Adapter Choices Available During Setup"
permalink: kb/124/Q124359/
---

## Q124359: No Xircom Ethernet Adapter Choices Available During Setup

	Article: Q124359
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you install Windows NT version 3.5 from floppy disks there are no Xircom
	Ethernet network adapters listed. If you install Windows NT version 3.5 from a
	compact disc, the Xircom Ethernet network adapter choices are available.
	
	RESOLUTION
	==========
	
	To add the Xircom network adapter drivers on a machine that does not have a
	CD-ROM drive:
	
	1. Obtain the Windows NT version 3.5 compact disc.
	
	2. Using a machine with a CD-ROM drive, copy all of the files for your network
	  adapter from the correct subdirectory on the Windows NT version 3.5 compact
	  disc to a floppy disk.
	
	  Location                    File Name     Description
	  ---------------------------------------------------------------------
	  \DRVLIB\NETCARD\X86\XCE10   CENDIS3.SYS   Xircom Corporate Series
	                                            CreditCard Ethernet Adapter
	  \DRVLIB\NETCARD\X86\XPE2    XCSPE2.SYS    Xircom Pocket Ethernet II
	                                            Adapter
	  \DRVLIB\NETCARD\X86\XPE3    XCSPE3.SYS    Xircom Pocket Ethernet III
	                                            Adapter
	
	3. On the machine without a CD-ROM drive, run Control Panel and choose Network.
	
	4. In the Network Settings dialog box choose Add Adapter.
	
	5. In the Network Adapter Card list select "<Other> Requires disk from
	  manufacturer" and then choose Continue.
	
	6. Insert the floppy disk with the network adapter driver and specify the
	  correct location.
	
	Additional query words: prodnt nic mac credit card
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	
	=============================================================================
	
