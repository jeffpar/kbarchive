---
layout: page
title: "Q103376: Mixed OS/2 and Windows NT Domain: RAS and Passwords"
permalink: /kb/103/Q103376/
---

## Q103376: Mixed OS/2 and Windows NT Domain: RAS and Passwords

{% raw %}

	Article: Q103376
	Product(s): Microsoft Windows NT
	Version(s): 3.1
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Advanced Server, version 3.1 
	-------------------------------------------------------------------------------
	
	Following are two issues concerning the administration of a domain
	containing both Windows NT Advanced Server and OS/2 servers.
	
	RAS Administration
	------------------
	
	If you add a Windows NT Advanced Server computer to an existing
	Microsoft LAN Manager OS/2 domain with an OS/2 RAS server,
	administrators will no longer be able to administrate RAS from the
	OS/2 server or from any other OS/2 system. All RAS administration must
	be performed remotely, from a Windows NT computer (using RAS
	Administrator).
	
	Changing Administrative Passwords
	---------------------------------
	
	If you have an administrative account and want to change the password,
	make sure you use a Windows NT computer. If you change your password
	on an OS/2 machine, your administrative rights will be lost.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNT310Search
	Version           : 3.1
	
	=============================================================================
	

{% endraw %}
