---
layout: page
title: "Q102515: Can't Remove Network Components and Reinstall Advanced Server"
permalink: /kb/102/Q102515/
---

## Q102515: Can't Remove Network Components and Reinstall Advanced Server

{% raw %}

	Article: Q102515
	Product(s): Microsoft Windows NT
	Version(s): 3.1
	Operating System(s): 
	Keyword(s): kbother
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Advanced Server, version 3.1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Removing all software components and all network adapters, then trying to
	reinstall them when Windows NT comes back up does not work. While reinstalling
	network software, you must specify the domain's name and then reboot. When you
	try to log back on, you get a message that says: "The system cannot log you on
	(C00000DF). Please try again or consult your system administrator."
	
	CAUSE
	=====
	
	Installing an Advanced Server requires creating a new security database;
	however, for security reasons, you can't do this on a system that already has a
	security database--essentially any machine that has already been installed. This
	is the same reason you can't move an Advanced Server from one domain to another
	without completely reinstalling.
	
	WORKAROUND
	==========
	
	There is no valid reason to remove all network components and then try to
	reinstall an Advanced Server, so the process is not supported in version 3.1.
	Instead, you should save your security database then do a complete reinstall.
	Future versions may prevent removal of the workstation or server components on
	Advanced Servers because these components are required for proper operation.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbother 
	Technology        : kbWinNTsearch kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNT310Search
	Version           : :3.1
	
	=============================================================================
	

{% endraw %}
