---
layout: page
title: "Q165946: RasEnumEntries Return Incorrect Number of Phonebook Entries"
permalink: /kb/165/Q165946/
---

## Q165946: RasEnumEntries Return Incorrect Number of Phonebook Entries

	Article: Q165946
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbnetwork kbAPI _IK12469 kbSDKPlatform kbGrpDSNetkbbuglist kbfixlist
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The Win32 API, RasEnumEntries() may return an incorrect number of phonebook
	entries.
	
	CAUSE
	=====
	
	One of the parameters returned in RasEnumEntries() is the number of entries for
	the specified phonebook. When one or more processes, or threads within the same
	process are executing and concurrently calling other Remote Access APIs that
	update the specified phonebook, they may temporarily block RasEnumEntries from
	reading the complete phonebook.
	
	
	RESOLUTION
	==========
	
	Obtain the hotfix mentioned below.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. This
	problem was corrected in the latest Microsoft Windows NT 4.0 U.S. Service Pack.
	For information on obtaining the service pack, query on the following word in
	the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: prodnt Remote Access RAS
	
	======================================================================
	Keywords          : kbnetwork kbAPI _IK12469 kbSDKPlatform kbGrpDSNet kbbuglist kbfixlist
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbbug
	
	=============================================================================
	
