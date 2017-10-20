---
layout: page
title: "Q168602: NetWatch May Not Show User Logged On After Applying SP2"
permalink: /kb/168/Q168602/
---

## Q168602: NetWatch May Not Show User Logged On After Applying SP2

{% raw %}

	Article: Q168602
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbnetworkkbbuglist kbfixlist
	Last Modified: 25-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	After you apply Service Pack 2 for Windows NT 4.0, the User Logged On may show
	up as blank when viewing the properties of a user connected to a share in
	NetWatch. NetWatch.exe ships with the Windows NT version 4.0 Resource Kit.
	
	CAUSE
	=====
	
	Windows NT version 4.0 creates a NULL session as one of the first steps
	completed in creating a session with a remote computer running Windows NT
	Workstation or Server. This NULL user will be returned as the user name in
	NetWatch. There may be times that the username appears, but this may only happen
	after the session has been established over a period of time.
	
	
	RESOLUTION
	==========
	
	NetWatch now shows the User Logged On and the file that fixes this behavior is
	included in the latest Windows NT version 4.0 U.S. Service Pack.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. This
	problem was corrected in the latest U.S. Service Pack for Windows NT and Windows
	NT Server version 4.0. For information on obtaining the Service Pack, query on
	the following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: 4.00 prodnt nt4sp3fea
	
	======================================================================
	Keywords          : kbnetwork kbbuglist kbfixlist
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : :4.0
	Hardware          : x86
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
