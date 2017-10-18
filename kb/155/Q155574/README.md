---
layout: page
title: "Q155574: NFS Share Cannot Be Established from Windows NT Explorer"
permalink: kb/155/Q155574/
---

## Q155574: NFS Share Cannot Be Established from Windows NT Explorer

	Article: Q155574
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kb3rdparty kbnetwork kbui
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You are unable to create a shared volume with PC-NFS using Windows NT Explorer.
	
	CAUSE
	=====
	
	PC-NFS was designed to work with Windows NT 3.5x and is unaware of Windows NT
	Explorer.
	
	RESOLUTION
	==========
	
	You must use File Manager with this product to create the shared volume.
	
	MORE INFORMATION
	================
	
	The dialog box that provides for creating NFS shares in File Manager is not
	provided by Windows NT 4.0, but rather by PC-NFS. It does not appear in Windows
	NT Explorer because PC-NFS is unaware of Windows NT Explorer and is not designed
	to work with it.
	
	This information applies to users of Intergraph's (and SUN's) PC-NFS, but may
	also apply to other NFS redirectors.
	
	Intergraph and other vendors may make available versions of their products that
	work with Windows NT Explorer. Please contact your vendor for more information.
	
	The third-party products discussed here are manufactured by vendors independent
	of Microsoft; we make no warranty, implied or otherwise, regarding these
	products' performance or reliability.
	
	Additional query words: prodnt winnt
	
	======================================================================
	Keywords          : kb3rdparty kbnetwork kbui 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	
	=============================================================================
	
