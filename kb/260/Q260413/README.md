---
layout: page
title: "Q260413: Logoff May Not Finish If User Profile Is Stored on AS/400"
permalink: /kb/260/Q260413/
---

## Q260413: Logoff May Not Finish If User Profile Is Stored on AS/400

{% raw %}

	Article: Q260413
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbenv
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you log off, the logoff process begins but may stop responding (hang). When
	this occurs, the client workstation is fully accessible from the network; you
	can access the workstation by using the ping or net use command. However,
	pressing CTRL+ALT+DELETE on the workstation does not display the Security dialog
	box. You must reboot the workstation to log on again.
	
	CAUSE
	=====
	
	This behavior can occur if the user profiles are stored on an AS/400 system
	(which is a Server Message Block, or SMB, server), and the MAXMUX value is set
	to 1 on the AS/400 SMB server. In Windows NT, the MAXMUX value is listed as the
	Max MPX Requests setting. The workstation's redirector is blocked from running
	several threads until a resource that is currently in a deadlocked state is
	released. This may be the result of a race condition among several threads.
	
	RESOLUTION
	==========
	
	Increase the value on the server to a higher number, or possibly slow down the
	workstation's redirector to avoid the race condition.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
