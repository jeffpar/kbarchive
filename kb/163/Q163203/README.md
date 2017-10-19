---
layout: page
title: "Q163203: Dial-Up Networking Autodial Manager Fails For Subsequent Logons"
permalink: /kb/163/Q163203/
---

## Q163203: Dial-Up Networking Autodial Manager Fails For Subsequent Logons

	Article: Q163203
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbnetworkkbbuglist kbfixlist
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If a second or subsequent user logs into a Windows NT computer and makes use of
	an application, which should trigger the Remote Access Autodial Manager to
	automatically make a Dial-Up Networking connection, it may not autodial as
	configured.
	
	CAUSE
	=====
	
	The Remote Access Autodial Manager does not cycle the user context correctly
	between user logons.
	
	RESOLUTION
	==========
	
	Microsoft has confirmed this to be a problem in Microsoft Windows NT version
	4.0. This problem was corrected in the latest Microsoft Windows NT 4.0 U.S.
	Service Pack. For information on obtaining the service pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: 4.00 prodnt dun ras
	
	======================================================================
	Keywords          : kbnetwork kbbuglist kbfixlist
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbbug
	
	=============================================================================
	
