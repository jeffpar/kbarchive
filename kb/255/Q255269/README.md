---
layout: page
title: "Q255269: XADM: POP3, IMAP Clients Can't Authenticate After Dcpromo"
permalink: kb/255/Q255269/
---

## Q255269: XADM: POP3, IMAP Clients Can't Authenticate After Dcpromo

	Article: Q255269
	Product(s): Microsoft Exchange
	Version(s): 2000,5.5,5.5 SP1,5.5 SP2,5.5 SP3
	Operating System(s): 
	Keyword(s): exc55 exc55sp1 exc55sp2 exc55sp3
	Last Modified: 18-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.5, 5.5 SP1, 5.5 SP2, 5.5 SP3, on platform(s):
	   - the operating system: Microsoft Windows 2000 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If the Dcpromo process runs on a Windows 2000 Server-based computer that is
	running Exchange Server 5.5, the Exchange Server services may not start. Also,
	Post Office Protocol version 3 (POP3) and Internet Message Access Protocol
	(IMAP) clients may be unable to authenticate when those clients connect to the
	Exchange Server computer. The following event may be found in the Application
	Event Log on the Exchange Server.
	
	  
	
	  Event ID: 13003
	  Source: MSExchangePOP3
	  Type: Error
	  Category: Authentication
	  Description: A required privilege is not held by the client
	
	CAUSE
	=====
	
	This problem can occur because, when the Dcpromo process is running, the
	Security Accounts Manager (SAM) database (which contains all of the local
	accounts) is removed and the security policy of the Exchange Server service
	account is altered.
	
	RESOLUTION
	==========
	
	To resolve this problem, start the Services Microsoft Management Console (MMC)
	and reassociate the correct user name and password with each of the Exchange
	Server services. You must reinstall Exchange Server Service Pack 3 for POP3 and
	IMAP clients to work properly.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows 2000 Server.
	
	Additional query words: Windows 2000, DCPROMO, Exchange 5.5
	
	======================================================================
	Keywords          : exc55 exc55sp1 exc55sp2 exc55sp3 
	Technology        : kbExchangeSearch kbZNotKeyword2
	Version           : :2000,5.5,5.5 SP1,5.5 SP2,5.5 SP3
	Issue type        : kbprb
	
	=============================================================================
	
