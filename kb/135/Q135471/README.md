---
layout: page
title: "Q135471: Cannot Reconnect to OS/2 Name Space Resources on NetWare Server"
permalink: /kb/135/Q135471/
---

## Q135471: Cannot Reconnect to OS/2 Name Space Resources on NetWare Server

{% raw %}

	Article: Q135471
	Product(s): Microsoft Windows NT
	Version(s): 3.51
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If you use Client Services for NetWare (CSNW) to connect to a NetWare server
	that has the OS/2 Name Space installed, and the connection is somehow
	disconnected, you cannot reestablish the connection.
	
	For example, if you press the F5 key to refresh a File Manager drive window
	focused on a disconnected drive on the NetWare server, the message The Specified
	Path Is Invalid appears in the right-hand pane of the drive window. The window
	is not refreshed, and the connection to the NetWare server is not
	reestablished.
	
	This problem does not occur if the OS/2 Name Space is not installed on the
	NetWare server.
	
	CAUSE
	=====
	
	There is a problem in the reconnection code for OS/2 Name Space resources.
	
	RESOLUTION
	==========
	
	To correct this problem, install the latest U.S. Service Pack for Windows NT
	version 3.51.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. This
	problem has been corrected in the latest U.S. Service Pack for Windows NT
	version 3.51. For information on obtaining the Service Pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: prodnt CSNW GSNW NWGS
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : 3.51
	
	=============================================================================
	

{% endraw %}
