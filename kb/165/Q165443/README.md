---
layout: page
title: "Q165443: NDS Login Script Fails When Checking &quot;If Member Of&quot;"
permalink: kb/165/Q165443/
---

## Q165443: NDS Login Script Fails When Checking &quot;If Member Of&quot;

	Article: Q165443
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbnetworkkbbuglist kbfixlist
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When a Novell NetWare Client computer logs on to a NetWare 4.x server, the login
	script could fail to map certain drive mappings that are preceded by IF MEMBER
	OF. This condition will mainly happen when the user is a member of enough NDS
	groups such that the group list is bigger than 2048 bytes.
	
	CAUSE
	=====
	
	A buffer was not initialized to a size large enough to contain the entire group
	list.
	
	
	RESOLUTION
	==========
	
	Apply the hotfix mentioned below.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. This
	problem was corrected in the latest Microsoft Windows NT 4.0 U.S. Service Pack.
	For information on obtaining the service pack, query on the following word in
	the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbnetwork kbbuglist kbfixlist
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbbug
	
	=============================================================================
	
