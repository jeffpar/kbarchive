---
layout: page
title: "Q142628: Stop 0x23 Errors in Fastfat.sys"
permalink: kb/142/Q142628/
---

## Q142628: Stop 0x23 Errors in Fastfat.sys

	Article: Q142628
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.51
	Operating System(s): 
	Keyword(s): kbother
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	A STOP 0x00000023 FAT_FILE_SYSTEM error message occurs when a floppy disk is
	inserted or removed while Windows NT 3.51 is in the process of shutting down.
	
	CAUSE
	=====
	
	The version of Fastfat.sys distributed with Windows NT 3.51 has the potential of
	showing the above symptom. There is a very small window of time while Windows NT
	is mounting a FAT volume, such as a floppy disk, during which a request to
	determine whether or not it is safe to unmount the same volume may cause the
	above error.
	
	WORKAROUND
	==========
	
	Install Service Pack 5 or later for Windows NT 3.51.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. This
	problem was corrected in the latest Windows NT 3.51 U.S. Service Pack. For
	information on obtaining the Service Pack, query on the following word in the
	Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbother 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : winnt:3.51
	
	=============================================================================
	
