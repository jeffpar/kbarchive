---
layout: page
title: "Q199497: XFOR: Microsoft Mail Connector Connecting to Untrusted Domain"
permalink: kb/199/Q199497/
---

## Q199497: XFOR: Microsoft Mail Connector Connecting to Untrusted Domain

	Article: Q199497
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:3.2a,3.5; winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): exc4 exc5 exc55
	Last Modified: 19-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.5, 4.0, 5.0 
	- Microsoft Mail for PC Networks, versions 3.2a, 3.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to connect the Microsoft Mail Connector to a
	Microsoft Mail for PC Networks postoffice in an untrusted Microsoft Windows NT
	domain.
	
	MORE INFORMATION
	================
	
	There are two ways to facilitate the operation of a Microsoft Mail Connector
	(PC) message transfer agent (MTA) service account with a Microsoft Mail for PC
	Networks postoffice in an untrusted Windows NT domain:
	
	Method 1
	--------
	
	1. On the Exchange Server computer where the Microsoft Mail Connector (PC) MTA
	  is installed, in Control Panel, double-click Services, and then click to
	  select the Microsoft Mail Connector (PC) MTA service.
	
	2. Click Startup, and then click to select a Windows NT account that is common
	  to both Windows NT domains and has the same user name and password.
	
	3. Make sure that the Microsoft Mail Connector (PC) MTA service account has the
	  advanced user right to "Log on as a service".
	
	Method 2
	--------
	
	1. Create a new Microsoft Mail Connector (PC) MTA that uses a service account
	  that is local to the untrusted Windows NT domain.
	
	2. In Control Panel, double-click the Services of the new Microsoft Mail
	  Connector (PC) MTA, and then configure the Startup properties to use an
	  account in the untrusted Windows NT domain.
	
	3. Make sure the account in the untrusted domain also has "Log on as a service"
	  rights.
	
	To create a common account to use as the service account, on the computer where
	the Microsoft Mail for PC Networks postoffice resides, in the User Manager for
	Domains, click Account. In the Account Type box, click "Local Account for users
	from untrusted domains".
	
	Additional query words:
	
	======================================================================
	Keywords          : exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2 kbMailSearch kbZNotKeyword3 kbMailPCN320a kbMailPCN350
	Version           : WINDOWS:3.2a,3.5; winnt:4.0,5.0,5.5
	Issue type        : kbhowto
	
	=============================================================================
	
