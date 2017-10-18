---
layout: page
title: "Q164595: Duplicate Route Not Removed After Second Redirection"
permalink: kb/164/Q164595/
---

## Q164595: Duplicate Route Not Removed After Second Redirection

	Article: Q164595
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbnetworkkbbuglist kbfixlist
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When a computer running Windows NT 4.0 is connected through a router to another
	device on a remote network, and that router exchanges multiple ICMP REDIRECT
	messages with another router (which provides a new path for the computer running
	Windows NT to get the remote device), the route table on the computer running
	Windows 4.0 may grow unnecessarily.
	
	
	CAUSE
	=====
	
	This problem is caused by a problem with TCP/IP in Windows NT 4.0: TCP/IP would
	add the information about the new path to the route table, but did not delete
	the previous route, causing the route table to grow unnecessarily.
	
	RESOLUTION
	==========
	
	A new version of Tcpip.sys is available that corrects this problem and deletes
	unnecessary routes that are updated by redirect messages received from the
	router.
	
	To resolve this problem, obtain the hotfix mentioned below.
	
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
	
