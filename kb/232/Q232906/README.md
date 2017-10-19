---
layout: page
title: "Q232906: WRQ NFS Client Cannot Connect to NFS File System Using UNC"
permalink: /kb/232/Q232906/
---

## Q232906: WRQ NFS Client Cannot Connect to NFS File System Using UNC

	Article: Q232906
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:95
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Windows 98 
	- Microsoft Windows 98 Second Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to connect to a network resource using a UNC path, you may
	receive an error message stating that the network path was not found, and the
	name of the missing file is the name of the shared folder.pif file.
	
	CAUSE
	=====
	
	This issue can occur if you are using WRQ Reflections NFS Client 7.0, and the
	network resource that you are connecting to is using an NFS file system that was
	exported using complex syntax, and a directory delimiter appears in the export
	name.
	
	RESOLUTION
	==========
	
	To resolve this problem, contact the administrator of the NFS server and see if
	the administrator can export the file system using simple syntax, or you can
	browse to the NFS server you want using Network Neighborhood, and then map a
	drive letter.
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbWin98search kbWin98SEsearch kbZNotKeyword3 kbWin98 kbWin98SE
	Version           : WINDOWS:95
	Issue type        : kbprb
	
	=============================================================================
	
