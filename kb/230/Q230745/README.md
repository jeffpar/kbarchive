---
layout: page
title: "Q230745: XADM: Event 1333 Anonymous LDAP and MAPI Search Requests Denied"
permalink: /kb/230/Q230745/
---

## Q230745: XADM: Event 1333 Anonymous LDAP and MAPI Search Requests Denied

	Article: Q230745
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 30-JUN-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You may receive the following error message during startup of the Microsoft
	Exchange Directory service:
	
	  Event ID: 1333
	  Source: MSExchangeDS
	  Type: Error
	  Category: Security
	  Description: The Microsoft Exchange Directory service could not log on to the
	  Anonymous account. All anonymous LDAP and MAPI search requests will be
	  denied. Verify that the anonymous account password is valid in the DS Site
	  Configuration properties page.
	
	CAUSE
	=====
	
	The Windows NT account that is specified as the directory Anonymous account may
	have the "User Must Change Password at Next Logon" option enabled in User
	Manager.
	
	RESOLUTION
	==========
	
	To identify the Windows NT account being used as the directory Anonymous
	account:
	
	1. Use the Exchange Server Administrator Program to connect to the Exchange
	  Server computer receiving the event 1333.
	
	2. Select the Configuration container for the site that this server belongs to.
	
	3. Select DS Site Configuration and on the File menu, click Properties.
	
	4. The account used for the directory Anonymous account is located under the
	  Anonymous Access section on the General Property page.
	
	  Locate this account in User Manager for Domains. Clear the "User Must Change
	  Password at Next Logon" check box.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbprb
	
	=============================================================================
	
