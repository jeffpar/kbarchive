---
layout: page
title: "Q153962: XADM: Err Msg: The Interface is Unknown"
permalink: kb/153/Q153962/
---

## Q153962: XADM: Err Msg: The Interface is Unknown

	Article: Q153962
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 31-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you create a new Exchange user mailbox, the following error may appear
	after selecting OK or Apply:
	
	  The interface is Unknown
	  Microsoft Windows NT ID no:0x00206b5
	  OK
	
	After you click OK, the user account is not created and the User properties
	dialog box remains on the screen.
	
	RESOLUTION
	==========
	
	Verify the Net Logon service is started in the Services in Control Panel,and
	that the service is configured to start up automatically.
	
	MORE INFORMATION
	================
	
	NETLOGON is a resource used by the Net Logon service for processing domain logon
	requests. Net Logon provides authentication of account logons, and keeps the
	domain's security database synchronized between the primary domain controller
	and the other Windows NT Server domain controllers of the domain.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	
