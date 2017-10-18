---
layout: page
title: "Q248725: XADM: Installing Exchange 5.5 on Windows 2000 May Not Work"
permalink: kb/248/Q248725/
---

## Q248725: XADM: Installing Exchange 5.5 on Windows 2000 May Not Work

	Article: Q248725
	Product(s): Microsoft Exchange
	Version(s): 2000,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-FEB-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5, on platform(s):
	   - Microsoft Windows 2000 Server 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you try to install Exchange Server 5.5 on a computer running Windows 2000
	Server and the Exchange Server service account is not part of the Domain
	Administrator group, the installation does not work. All of the registry entries
	are present and the Exchsrvr folder is populated.
	
	CAUSE
	=====
	
	This problem can occur if the Exchange Server service account does not have the
	required permissions.
	
	RESOLUTION
	==========
	
	To resolve this problem, add the Exchange Server service account to the local
	Power Users group or local Administrators group on a member server. On a domain
	controller, add the account to the built-in Administrators group.
	
	MORE INFORMATION
	================
	
	The minimum rights that are necessary for the Exchange Server service account on
	a member server are Power Users rights. However, if installation problems occur
	when you use the local Power Users group, add the Exchange Server service
	account to the local Administrators group. Also, if the local Power Users group
	is not available due to the type of installation that was performed, use the
	local Administrators group.
	
	Additional query words: c1031668
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbZNotKeyword2
	Version           : :2000,5.5
	Issue type        : kbprb
	
	=============================================================================
	
