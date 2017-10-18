---
layout: page
title: "Q160377: File Size Data Does Not Remain Consistent After Defrag on NTFS"
permalink: kb/160/Q160377/
---

## Q160377: File Size Data Does Not Remain Consistent After Defrag on NTFS

	Article: Q160377
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbenv
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	On an NTFS volume, the allocation size in the directory entry and in the file
	table can get out of sync after the NTFS auto defrag routine has been run on an
	uncompressed file.
	
	WORKAROUND
	==========
	
	This problem has been fixed in Ntfs.sys in Service Pack 2 or later.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.00. This
	problem has been corrected in the latest U.S. Service Pack for Windows NT
	version 4.00. For information on obtaining the Service Pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: prodnt ntfs ntfs.sys size
	
	======================================================================
	Keywords          : kbenv 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : 4.0
	
	=============================================================================
	
