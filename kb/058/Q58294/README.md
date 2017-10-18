---
layout: page
title: "Q58294: Windows Drops to MS-DOS When MSNet Server Disconnected"
permalink: kb/058/Q58294/
---

## Q58294: Windows Drops to MS-DOS When MSNet Server Disconnected

	Article: Q58294
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If your network administrator disconnects you from an MSNet server, or the
	server is rebooted while you are connected, Microsoft Windows 3.0 enhanced mode
	drops to the MS-DOS command prompt when you access the disconnected network
	resource.
	
	CAUSE
	=====
	
	This is not a Windows problem; it occurs in a similar manner at the MS-DOS
	command prompt outside of Windows. If you access the disconnected net drive from
	MS-DOS, your system will stop responding (hang). This is an inherent problem in
	most MSNet-redirector-based networks.
	
	This problem does not occur in Microsoft LAN Manager or Novell NetWare.
	
	Additional query words: 3.00 3.0 3.0a 3.00a
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	
