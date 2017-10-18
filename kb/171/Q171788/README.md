---
layout: page
title: "Q171788: Windows NT SP2 Replaces NTFS File Permissions on SP2 Files"
permalink: kb/171/Q171788/
---

## Q171788: Windows NT SP2 Replaces NTFS File Permissions on SP2 Files

	Article: Q171788
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.00
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	After the installation of Windows NT Service Pack 2 (SP2), all of the SP2 files
	that were installed only have the Everyone (Full Control) ACL applied.
	
	The original pre-SP2 files that had tighter restrictions before SP2 no longer
	have any restrictions on them if located on NTFS partitions.
	
	CAUSE
	=====
	
	The Setup APIs that were being used by the Service Pack Update routine did not
	retain the attributes or security of the files.
	
	RESOLUTION
	==========
	
	This problem has been resolved in Service Pack 3 or later.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. This
	problem was corrected in the latest Microsoft Windows NT 4.0 U.S. Service Pack.
	For information on obtaining the service pack, query on the following word in
	the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.00
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
