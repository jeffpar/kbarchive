---
layout: page
title: "Q145922: XADM: Configuring Permissions for Windows NT Accounts"
permalink: /kb/145/Q145922/
---

## Q145922: XADM: Configuring Permissions for Windows NT Accounts

	Article: Q145922
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): kbusage exc4 exc5 exc55
	Last Modified: 07-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article contains information on configuring permissions for Windows NT
	accounts in the Administrator program of Microsoft Exchange Server, version 4.0.
	
	MORE INFORMATION
	================
	
	Use the Permissions property page to specify the rights that users or groups
	have on the Configuration container.
	
	Permissions that you set on the Configuration container are inherited by all
	objects and containers within the Configuration container. For example, a user
	with Modify Permissions rights on the Configuration container is able to modify
	permissions on all subordinate containers and objects of the Configuration
	container.
	
	If permissions are set on the Site container, they are only inherited by the
	recipients container. This is useful for allocating permissions for Admin
	Operators who are only required to add/modify user mailboxes and not change any
	of the Connectors, Directory Replication, and Server configurations.
	
	Additional query words: faq
	
	======================================================================
	Keywords          : kbusage exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbinfo
	
	=============================================================================
	
