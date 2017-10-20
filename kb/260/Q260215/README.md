---
layout: page
title: "Q260215: XADM: Setup Fails on Windows 2000 Cluster"
permalink: /kb/260/Q260215/
---

## Q260215: XADM: Setup Fails on Windows 2000 Cluster

{% raw %}

	Article: Q260215
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 22-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5, on platform(s):
	   - the operating system: Microsoft Windows 2000 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to install Exchange Server 5.5 on a Microsoft Windows 2000
	cluster server, Setup fails when it attempts to start services and you receive
	the following error message:
	
	  Overlapped I/O operation is in progress.
	
	  ID no: 0xc00203e5
	
	CAUSE
	=====
	
	The Exchange Server service account does not have the required permissions.
	
	RESOLUTION
	==========
	
	To resolve this problem, add the Exchange Server service account to the local
	Power Users group or local Administrators group on a member server. On a domain
	controller, add the account to the built-in Administrators group.
	
	MORE INFORMATION
	================
	
	The minimum rights necessary for the Exchange Server service account on a member
	server are Power Users rights. However, if installation problems occur when you
	use the local Power Users group, add the Exchange Server service account to the
	local Administrators group. Also, if the local Power Users group is not
	available because of the type of installation that was performed, use the local
	Administrators group.
	
	Additional query words: XMRP
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
