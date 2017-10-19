---
layout: page
title: "Q163507: Trap 0x00000024 Occurs During the Autochk Sequence at Boot"
permalink: /kb/163/Q163507/
---

## Q163507: Trap 0x00000024 Occurs During the Autochk Sequence at Boot

	Article: Q163507
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbhw kbHardware
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You cannot boot with the removable media in a drive.
	
	CAUSE
	=====
	
	This problem occurs because an I/O Request Packet (IRP) is stuck in the
	Driver\Disk, causing disk corruption. The Class2.sys file relies on the I/O
	system to complete its synchronous requests. These requests may never finish if
	Asynchronous Procedure Calls (APCs) are blocked. This will only occur when
	removable media is present during the boot process.
	
	RESOLUTION
	==========
	
	Install the new Class2.sys driver, which no longer relies on the I/O system to
	complete its synchronous requests.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. This has
	been corrected in the latest U.S. Service Pack for Windows NT version 4.0. For
	information on obtaining the Service Pack, query on the following word in the
	Microsoft Knowledge Base (without spaces):
	
	  S E R V P A C K
	
	
	Additional query words: prodnt removable media
	
	======================================================================
	Keywords          : kbhw kbHardware 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	
	=============================================================================
	
