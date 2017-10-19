---
layout: page
title: "Q171923: Service Pack Installation May Replace File Permissions"
permalink: /kb/171/Q171923/
---

## Q171923: Service Pack Installation May Replace File Permissions

	Article: Q171923
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbnetwork kbsetup
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	After you install Service Pack 2 (SP2), all of the SP2 files that were installed
	had only the Everyone (Full Control) ACL applied. Pre-SP2 files that had tighter
	restrictions before SP2 no longer have any restrictions on them on NTFS
	partitions.
	
	CAUSE
	=====
	
	The Setup APIs that were being used by the Service Pack Update Routine did not
	retain the attributes or security of the files.
	
	RESOLUTION
	==========
	
	This problem has been resolved in Service Pack 3 and later.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. This
	problem was corrected in the latest Microsoft Windows NT 4.0 U.S. Service Pack.
	For information on obtaining the service pack, query on the following word in
	the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	======================================================================
	Keywords          : kbnetwork kbsetup 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	Hardware          : ALPHA PPC x86
	Issue type        : kbbug
	
	=============================================================================
	
