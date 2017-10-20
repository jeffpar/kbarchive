---
layout: page
title: "Q249046: XADM: Exchange Setup Doesn't Work; Error 0xC002041D"
permalink: /kb/249/Q249046/
---

## Q249046: XADM: Exchange Setup Doesn't Work; Error 0xC002041D

{% raw %}

	Article: Q249046
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:2000; winnt:5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 18-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	- the operating system: Microsoft Windows 2000 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Exchange Server Setup on a member server may not work and you may receive the
	following error message:
	
	  While attempting to start the Microsoft Exchange Event Service, the following
	  error was encountered:
	  The service did not respond to the start or control request in a timely
	  fashion
	  Microsoft Windows NT
	  ID no:0xc002041D
	
	The Windows 2000 or Windows NT Event Viewer may display the following Event ID:
	
	  Event ID: 4
	  Category: General
	  Source: MSexchangeES
	  Type: Error
	  Description: An unexpected OS error occurred. Error Returned was [5].
	  Access Denied
	
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
	
	Additional query words: windows 2000
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbwin2000Ssearch kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : WINDOWS:2000; winnt:5.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
