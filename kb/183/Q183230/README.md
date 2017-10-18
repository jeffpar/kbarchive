---
layout: page
title: "Q183230: Stop:0x00000082 with InocuLAN 4.0"
permalink: kb/183/Q183230/
---

## Q183230: Stop:0x00000082 with InocuLAN 4.0

	Article: Q183230
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you access files on a Directory File System (Dfs) sharepoint, the system
	will crash with the following error:
	
	  Stop: 0x00000082 (0x00000000,0x00000000,0x00000000,0x00000000)
	  DFS_File_System
	
	CAUSE
	=====
	
	File sharing problems can occur when the InocuLAN driver scans a file at the
	same time as other applications are trying to access it. This is a problem with
	the driver INO_FLTR.SYS in InocuLAN 4.0.
	
	RESOLUTION
	==========
	
	Apply InocuLAN 4.0 Service Pack 2 when it becomes available or contact Cheyenne
	Technical Support.
	
	STATUS
	======
	
	At the time of publishing, this fix is in hotfix form. Contact Cheyenne Support
	for more information.
	
	The third-party products discussed here are manufactured by vendors independent
	of Microsoft; we make no warranty, implied or otherwise, regarding these
	products' performance or reliability.
	
	InocuLAN is manufactured by Cheyenne, a vendor independent of Microsoft; we make
	no warranty, implied or otherwise, regarding this product's performance or
	reliability.
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	Issue type        : kbprb
	
	=============================================================================
	
