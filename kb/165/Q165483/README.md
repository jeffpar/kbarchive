---
layout: page
title: "Q165483: RasEnumEntries() API Leaks Memory"
permalink: /kb/165/Q165483/
---

## Q165483: RasEnumEntries() API Leaks Memory

	Article: Q165483
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.51,4.0
	Operating System(s): 
	Keyword(s): kbnetwork kbAPI _IK12469 kbSDKPlatform kbGrpDSNetkbbuglist kbfixlist
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When an application repeatedly calls the RasEnumEntries() API, system
	performance slows down and disk activity increases.
	
	CAUSE
	=====
	
	The Win32 API RasEnumEntries() does not deallocate all of the memory it needs to
	process the phonebook. Any process repeatedly calling this API continues to
	grow. The amount of memory lost is related to the size of the phonebook and the
	frequency in which RasEnumEntries() is called. When the application terminates,
	all memory is released to the system.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. We are
	researching this problem and will post additional information here in the
	Microsoft Knowledge Base as it becomes available.
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. This
	problem was corrected in the latest Microsoft Windows NT 4.0 U.S. Service Pack.
	For information on obtaining the service pack, query on the following word in
	the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: prodnt remote access RAS
	
	======================================================================
	Keywords          : kbnetwork kbAPI _IK12469 kbSDKPlatform kbGrpDSNet kbbuglist kbfixlist
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT400search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search
	Version           : winnt:3.51,4.0
	Issue type        : kbbug
	
	=============================================================================
	
