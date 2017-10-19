---
layout: page
title: "Q249712: XADM: Setup Stops When Installing Exchange 5.5 on Windows 2000"
permalink: /kb/249/Q249712/
---

## Q249712: XADM: Setup Stops When Installing Exchange 5.5 on Windows 2000

	Article: Q249712
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
	
	When you install Exchange Server version 5.5 on a computer running Windows 2000
	Advanced Server and join an existing Exchange Server 5.5 site, setup may stop
	responding during directory replication. The following event may be displayed in
	the Windows 2000 Event Viewer:
	
	  Event ID: 1005
	  Type: Error
	  Microsoft Exchange Directory ID: c1010aae
	  Unexpected error 0xc0040000. The object cannot be found in the directory. This
	  may be because replication has not completed.
	
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
	
	Additional query words: 0xc0040000, event id: 1005, c1010aae
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbwin2000AdvServSearch kbwin2000Ssearch kbExchangeSearch kbExchange550 kbZNotKeyword2 kbWinAdvServSearch
	Version           : WINDOWS:2000; winnt:5.5
	Issue type        : kbprb
	
	=============================================================================
	
