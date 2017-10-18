---
layout: page
title: "Q161838: Programs That Lock 0 Bytes at Byte 0 Lock Entire File"
permalink: kb/161/Q161838/
---

## Q161838: Programs That Lock 0 Bytes at Byte 0 Lock Entire File

	Article: Q161838
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The client program opens a file on the server and locks 0 bytes at position (0).
	After this "lock_0_bytes_at_position_0," the same client cannot lock any other
	byte_range of that file (lock_i_bytes_at position_j, with i>0, j>0).
	
	CAUSE
	=====
	
	The locking mechanism incorrectly calculated the lock to be the entire file,
	instead of 0.
	
	
	RESOLUTION
	==========
	
	Run a different application that can lock a byte range other than 0 bytes at
	location byte 0 before running the application that will lock 0 bytes at byte 0.
	This will then cause the 0 byte locking application to function correctly.
	
	-or-
	
	Apply the hotfix for Windows NT 4.0.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. This
	problem was corrected in the latest Microsoft Windows NT 4.0 U.S. Service Pack.
	For information on obtaining the service pack, query on the following word in
	the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: prodnt NTFS
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	
	=============================================================================
	
