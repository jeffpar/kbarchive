---
layout: page
title: "Q260556: Can't Associate NT Accounts with Exchange Mailboxes with LDAP MA"
permalink: /kb/260/Q260556/
---

## Q260556: Can't Associate NT Accounts with Exchange Mailboxes with LDAP MA

	Article: Q260556
	Product(s): Microsoft Windows NT
	Version(s): 2.1
	Operating System(s): 
	Keyword(s): kberrmsg kbtool
	Last Modified: 26-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Metadirectory Services, version 2.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to associate a Microsoft Windows NT 4.0 account with a
	Microsoft Exchange mailbox by means of the Lightweight Directory Access Protocol
	(LDAP) Management Agent (MA), a mailbox is created and the Assoc-NT-Account
	attribute is populated. However, the mailbox is not created correctly. When you
	try to view the mailbox properties, the following error message is displayed on
	your computer screen:
	
	  The parameter is incorrect. Microsoft Windows NT ID no. 0xc0020057.
	
	CAUSE
	=====
	
	This behavior may occur because the Exchange LDAP Management Agent does not have
	the built-in option that can associate an Exchange mailbox with a Windows NT
	account. This feature is only available for the MAPI Management Agent.
	
	RESOLUTION
	==========
	
	To resolve this behavior, use the Exchange MAPI Management Agent instead of the
	Exchange LDAP Management Agent.
	
	
	Additional query words: 0xc0020057 MMS Metadirectory
	
	======================================================================
	Keywords          : kberrmsg kbtool 
	Technology        : kbMMSSearch kbMMS210
	Version           : :2.1
	Hardware          : x86
	Issue type        : kbprb
	Solution Type     : kbfix
	
	=============================================================================
	
