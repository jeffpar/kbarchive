---
layout: page
title: "Q166964: Incorrect File Listing on NetWare Server with DIR /TC Command"
permalink: /kb/166/Q166964/
---

## Q166964: Incorrect File Listing on NetWare Server with DIR /TC Command

{% raw %}

	Article: Q166964
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
	
	When you use the DIR /TC command to list files on a network drive on a Novell
	NetWare server, you may get inconsistent results. The DIR /TC command should
	list files along with their creation time.
	
	CAUSE
	=====
	
	If a file has a short file name (standard 8.3 naming), Windows NT uses a "Search
	File NCP" command for files as if they are stored on a drive using the FAT (File
	Allocation Table) file system, which does not return a creation time. If a file
	has a long file name, the correct creation time is returned.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. This
	problem was corrected in the latest Microsoft Windows NT 4.0 U.S. Service Pack.
	For information on obtaining the service pack, query on the following word in
	the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: lfn create date modify modified nw
	
	======================================================================
	Keywords          : kbnetwork kbbuglist kbfixlist
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
