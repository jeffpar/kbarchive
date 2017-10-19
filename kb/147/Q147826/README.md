---
layout: page
title: "Q147826: 3c595 Adapter Auto-Detects Wrong Media Speed"
permalink: /kb/147/Q147826/
---

## Q147826: 3c595 Adapter Auto-Detects Wrong Media Speed

	Article: Q147826
	Product(s): Microsoft Windows NT
	Version(s): 3.5 3.51
	Operating System(s): 
	Keyword(s): kb3rdparty kbnetwork
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a Windows NT system with a 3Com 3c595 Fast Ethernet adapter starts its
	network services, other Windows NT systems with 3c59x cards and located on the
	local network segment lock up.
	
	CAUSE
	=====
	
	The 3c595 Ethernet adapter, which is compatible with both 10 MB/s and 100 MB/s
	Ethernet segments, is improperly detecting the 10 MB/s Ethernet segment as a 100
	MB/S Ethernet segment.
	
	
	RESOLUTION
	==========
	
	Use the 3Com adapter configuration utility for the 3c595 NIC to force the media
	type setting to 10 MB/s. To do this, use the following procedure:
	
	1. Boot the Windows NT system with an DOS-bootable disk (the configuration disk
	  is NOT bootable by default).
	
	2. From the root of the floppy disk, type 3C59XCFG.EXE and press ENTER.
	
	3. From the menu, select "Install" and "Configure Adapter".
	
	4. From the "Adapter Configuration" window, select "Media Type".
	
	5. From the "Media Type" window, select "10 base-T (RJ-45) (10 Mbits)".
	
	6. Click "OK." The specified settings will now be saved to the adapter.
	
	7. Remove the floppy disk from the drive and reboot the system.
	
	======================================================================
	Keywords          : kb3rdparty kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.5 3.51
	Issue type        : kbprb
	
	=============================================================================
	
