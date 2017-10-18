---
layout: page
title: "Q159066: A Client Crash May Prevent an NTFS Volume Dismount"
permalink: kb/159/Q159066/
---

## Q159066: A Client Crash May Prevent an NTFS Volume Dismount

	Article: Q159066
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
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
	
	It is possible to be unable to dismount an NTFS volume on a Windows NT system,
	if a client connecting to that system did not close its connection gracefully.
	For example, the client machine crashed. This could manifest itself as not being
	able to delete the volume in question.
	
	CAUSE
	=====
	
	NTFS is not returning an error when a request is made to access a file object
	that does not have a valid handle. NTFS processes this request, and the cache
	manager will have references to the object that was never closed. This will
	prevent the volume from being dismounted.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Windows NT version
	4.0. This problem was corrected in the latest Microsoft Windows NT 4.0 U.S.
	Service Pack. For information on obtaining the service pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbenv 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	
	=============================================================================
	
