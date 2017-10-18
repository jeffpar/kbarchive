---
layout: page
title: "Q249280: XADM: Error Joining an Existing Site Running on Windows 2000"
permalink: kb/249/Q249280/
---

## Q249280: XADM: Error Joining an Existing Site Running on Windows 2000

	Article: Q249280
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You receive the following error message when you are running Exchange Server
	Setup to join a site that is running on Microsoft Windows 2000 Server:
	
	  No mapping between account names and security IDs was done.
	  Microsoft Windows NT
	  ID no: 0xc0020534
	
	You receive this error after entering the password for the Exchange Server
	service account.
	
	CAUSE
	=====
	
	Exchange Server 5.5 only recognizes account entries in the format of
	<Domain>\<Account>, not in the <Account>@<Domain.com>
	format.
	
	RESOLUTION
	==========
	
	To resolve this issue, you must change the Log On account for each of the
	Exchange Server services from the <Account>@<Domain.com> format to
	the <Domain>\<Account> format. To do so, on the Windows 2000
	computer that is running Exchange Server:
	
	1. Open Services from the Administrative Tools program group.
	
	2. Double-click on each of the Exchange Server services.
	
	3. Click the Log On tab.
	
	4. In the This account field, change the account to the
	  <Domain>\<Account> format.
	
	The domain in the <Domain>\<Account> format is the NetBIOS domain
	name.
	
	The account must be manually typed in in this format, because Windows 2000
	automatically enters the account name in the <Account>@<Domain.com>
	format.
	
	After you complete the preceding steps, you can complete the installation of
	Exchange Server 5.5, and join the site successfully.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbprb
	
	=============================================================================
	
