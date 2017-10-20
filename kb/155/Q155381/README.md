---
layout: page
title: "Q155381: Error 53 When Connecting from NT to IBM LAN Server"
permalink: /kb/155/Q155381/
---

## Q155381: Error 53 When Connecting from NT to IBM LAN Server

{% raw %}

	Article: Q155381
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.5,3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to connect from an NT 3.51 Workstation or Standalone Server to an
	IBM LAN Server, a NET VIEW or NET USE command might return an ERROR 53, computer
	cannot be located, although the computers should be able to communicate.
	
	RESOLUTION
	==========
	
	Set the NT computer to use a WORKGROUP that has the same name as the LAN Server
	domain name. If this does not correct the problem, contact IBM Product Support
	to obtain the appropriate Corrective Service Disk for LAN Server connectivity.
	
	Additional query words: 3.5
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : winnt:3.5,3.51
	
	=============================================================================
	

{% endraw %}
