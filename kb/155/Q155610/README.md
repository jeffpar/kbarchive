---
layout: page
title: "Q155610: Network Neighborhood Cannot Open NFS Folders"
permalink: kb/155/Q155610/
---

## Q155610: Network Neighborhood Cannot Open NFS Folders

	Article: Q155610
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbnetwork kbui
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are attempting to view a folder on a remote computer using an NFS
	client using Network Neighborhood, you may receive the following error message:
	
	  The filename, directory name or volume label syntax is incorrect
	
	CAUSE
	=====
	
	Windows NT Explorer cannot connect to some NFS volumes.
	
	Some versions of NFS redirectors do not support deviceless connections, which is
	how the Windows NT Explorer implements opening folders.
	
	RESOLUTION
	==========
	
	You can work around this problem by mapping the NFS volume directly to a drive
	letter using either File Manager or the command line. The exact syntax and
	method will vary according to the NFS vendor. Please consult your documentation
	or vendor for the necessary syntax information.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbnetwork kbui 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	
	=============================================================================
	
