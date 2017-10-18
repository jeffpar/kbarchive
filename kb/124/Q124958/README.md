---
layout: page
title: "Q124958: NTFS Integrity Problems with Large Stripe Sets"
permalink: kb/124/Q124958/
---

## Q124958: NTFS Integrity Problems with Large Stripe Sets

	Article: Q124958
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use a large hard disk drive (for example, a Seagate 9 GB) for a stripe
	set with or without parity on NTFS, you may experience file corruption and data
	integrity problems.
	
	CAUSE
	=====
	
	The fault tolerance (FT) driver stripe code calculates the row for I/O using
	64-bit math. However, when building the IRP for the I/O it calculates the byte
	offset from the "row" value using 32-bit math.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT Workstation and
	Windows NT Server version 3.5. This problem has been corrected in the latest
	U.S. Service Pack for Windows NT version 3.5. For information on obtaining the
	Service Pack, query on the following word in the Microsoft Knowledge Base
	(without the spaces):
	
	  S E R V P A C K
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	
	=============================================================================
	
