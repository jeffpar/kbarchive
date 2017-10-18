---
layout: page
title: "Q151876: Windows 95 Remote Boot Setup Crashes during Adapter"
permalink: kb/151/Q151876/
---

## Q151876: Windows 95 Remote Boot Setup Crashes during Adapter

	Article: Q151876
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): WINDOWS:95; winnt:3.5,3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.5, 3.51 
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	This article applies to the BETA release of Windows 95
	Remoteboot.
	
	SYMPTOMS
	========
	
	During the auto-detection of the network adapter, a Windows 95 remoteboot system
	may stop responding (hang) or crash. This is a known problem with NE2000 and
	Intel EtherExpress Pro network adapters.
	
	RESOLUTION
	==========
	
	Retry Windows 95 Setup, and when you trim the list of devices to be detected,
	remove all network adapters. Add the adapter manually if detection misses the
	network adapter. Set the IRQ and I/O address settings for the adapter, and be
	sure to add the NetBEUI protocol.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT350search kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search kbWin95search kbZNotKeyword3
	Version           : WINDOWS:95; winnt:3.5,3.51
	Issue type        : kbprb
	
	=============================================================================
	
