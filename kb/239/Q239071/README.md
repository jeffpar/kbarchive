---
layout: page
title: "Q239071: XADM: Installing Exchange Server Mailbox Manager on a BDC"
permalink: kb/239/Q239071/
---

## Q239071: XADM: Installing Exchange Server Mailbox Manager on a BDC

	Article: Q239071
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5,5.5 SP3
	Operating System(s): 
	Keyword(s): exc55sp3
	Last Modified: 07-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.5, 5.5 SP3 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	When you run Microsoft Exchange Server Mailbox Manager Setup on a Backup Domain
	Controller (BDC), you get the following informational message after you provide
	the service account name and password.
	
	  Microsoft Exchange Server Mailbox Manager setup was unable to assign the
	  service account the Log on as Service right because this machine is acting as
	  a Backup Domain Controller for your network. Please use the Windows NT User
	  Manager to confirm that the Microsoft Exchange Server Mailbox Manager service
	  account has the Log on as Service right.
	
	This message is displayed even if the service account has all the required
	rights.
	
	MORE INFORMATION
	================
	
	This behavior is expected. When the Mailbox Manager Setup program is run on a
	BDC, it is not able to assign privileges to the account used as the service
	account. The message above is a reminder that you should verify that the service
	account correctly has the "Log On As A Service" privilege.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55sp3 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2 kbExchange550SP3
	Version           : winnt:5.5,5.5 SP3
	Issue type        : kbinfo
	
	=============================================================================
	
