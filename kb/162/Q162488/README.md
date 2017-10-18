---
layout: page
title: "Q162488: Err Msg: You Cannot Copy &quot;File Name&quot; Onto the Shared Disk..."
permalink: kb/162/Q162488/
---

## Q162488: Err Msg: You Cannot Copy &quot;File Name&quot; Onto the Shared Disk...

	Article: Q162488
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After setting up Services for Macintosh, users can mount the Microsoft User
	Authentication Module (UAM) volume on the Macintosh clients. However, attempts
	to copy a file on to the UAM volume result in the following message on the
	Macintosh client:
	
	  You cannot copy "file name" onto the shared disk "Microsoft UAM Volume",
	  because the disk is locked.
	
	The NTFS and Macintosh file permissions look fine.
	
	CAUSE
	=====
	
	By default, the UAM volume is read-only.
	
	RESOLUTION
	==========
	
	To resolve this problem, make the UAM volume read/write. To do so, follow these
	steps:
	
	Windows NT Server 3.51
	----------------------
	
	1. Start File Manager.
	
	2. On the MacFile menu, click View/Modify Volumes.
	
	3. Click to clear the "This Volume is read-only" check box.
	
	NOTE: When you install the Services for Macintosh on Windows NT Server 4.0, File
	Manager is added to the Administrative Tools menu.
	
	MORE INFORMATION
	================
	
	Only the UAM volume is read-only by default; any other Macintosh volumes that
	are created will not be read-only. Note that it is recommended that you leave
	the UAM volume read-only because leaving it read-only prevents any user from
	modifying the UAM files.
	
	The third-party products discussed here are manufactured by vendors independent
	of Microsoft; we make no warranty, implied or otherwise, regarding these
	products' performance or reliability.
	
	Additional query words: prodnt sfm Mac
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : winnt:3.5,3.51,4.0
	Issue type        : kbprb
	
	=============================================================================
	
