---
layout: page
title: "Q163143: STOP: 0x0000001E with Status C000009A"
permalink: kb/163/Q163143/
---

## Q163143: STOP: 0x0000001E with Status C000009A

	Article: Q163143
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.51,4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.51, 4.0 
	- Microsoft Windows NT Workstation versions 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run some programs, you may receive the following error message:
	
	  STOP: 0x0000001E : (0xC000009A, xxxxxxxx, xxxxxxxx, xxxxxxxx)
	  KMODE_EXCEPTION_NOT_HANDLED
	
	CAUSE
	=====
	
	This behavior can occur when you run a program that puts a high number of locks
	on a file. To hold locks, the file system allocates memory from the
	NonPagedPool. If the NonPagedPool is exhausted, critical allocations requested
	by other system components cannot be satisfied, generating the STOP error
	message.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. We are
	researching this problem and will post new information here as it becomes
	available.
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. This
	problem was corrected in the latest Microsoft Windows NT 4.0 U.S. Service Pack.
	For information on obtaining the service pack, query on the following word in
	the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	MORE INFORMATION
	================
	
	The size of the NonPagedPool is calculated in proportion to the amount of
	physical RAM in the computer. The number of possible locks is directly related
	to the size of the NonPagedPool. For example, on a computer with 32 MB of RAM,
	this behavior has been noted after more than 160,000 locks are set.
	
	To correct this problem, Windows NT now reports an error to the program that is
	issuing the locks.
	
	Additional query words: 3.51 4.00 0x1e
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT400search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search
	Version           : winnt:3.51,4.0
	
	=============================================================================
	
