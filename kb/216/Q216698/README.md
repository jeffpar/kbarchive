---
layout: page
title: "Q216698: Cannot Connect to Network Drive While Backing Up"
permalink: /kb/216/Q216698/
---

## Q216698: Cannot Connect to Network Drive While Backing Up

{% raw %}

	Article: Q216698
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0,4.0 SP3
	Operating System(s): 
	Keyword(s): kberrmsg kbtool
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 4.0, 4.0 SP3 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Users with all the required rights may have problems backing up files to a
	server on the network. When this occurs, the error message in the backup log
	reads:
	
	  Unable to connect to network drive. Logon type not granted
	
	CAUSE
	=====
	
	This behavior can occur if the Everyone group on the destination server does not
	have "Access this computer from network" rights.
	
	RESOLUTION
	==========
	
	Check to make sure the "Access this computer from network" right is granted to
	the Everyone group on the destination server. You can use the User Manager for
	Domains tool to do this.
	
	The Backup Operators group cannot gain access to the resource on the server if
	this right is not granted to the Everyone group.
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg kbtool 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400sp3 kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0,4.0 SP3
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
