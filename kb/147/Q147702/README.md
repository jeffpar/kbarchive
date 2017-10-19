---
layout: page
title: "Q147702: XADM: Permissions Required to Install Microsoft Exchange Server"
permalink: /kb/147/Q147702/
---

## Q147702: XADM: Permissions Required to Install Microsoft Exchange Server

	Article: Q147702
	Product(s): Microsoft Exchange
	Version(s): 4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): kberrmsg kbsetup exc4 exc5 exc55
	Last Modified: 30-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to run Setup on an Exchange Server computer, you may receive
	the following Setup error message:
	
	  You must be a member of the Administrator group to run Microsoft Exchange
	  Server Setup.
	
	  Microsoft Exchange Server Setup
	  ID no: c1032670
	
	NOTE: You also receive the above error if you try to perform a Service Pack
	update.
	
	CAUSE
	=====
	
	You must be logged on to the Microsoft Windows NT domain as a member of the
	Local Administrator group at the Exchange Server computer to successfully run
	Setup.
	
	MORE INFORMATION
	================
	
	To add a user to the Local Administrator group:
	
	1. Log on to the Windows NT domain as the Administrator at the computer where
	  you want to set up or upgrade Exchange Server.
	
	2. Start the Windows NT User Manager for Domains.
	
	3. In the Groups list, double-click the Local Administrator group.
	
	4. Click Add, and select the service account or user account that you will use
	  to set up or upgrade Exchange Server.
	
	5. Log off the computer, and then log on using the service account or the user
	  account that you added to complete Exchange Server Setup.
	
	
	Additional query words: faq
	
	======================================================================
	Keywords          : kberrmsg kbsetup exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : :4.0,5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	
