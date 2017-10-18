---
layout: page
title: "Q149931: XADM: Setup Cannot Connect To Remote Directory Service"
permalink: kb/149/Q149931/
---

## Q149931: XADM: Setup Cannot Connect To Remote Directory Service

	Article: Q149931
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbsetup
	Last Modified: 23-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you run the Microsoft Exchange Server Setup program and add a Microsoft
	Exchange Server to an existing Site with Netbeui as the only protocol running on
	the computer, the Setup program will end abnormally with the following error
	message:
	
	  Error:
	
	  A connection could not be made to the remote directory service, possibly due
	  to network failure. Be sure that both directory services are running and that
	  your network is available, and then try connecting again."
	
	RESOLUTION
	==========
	
	Install either the IPX/SPX or TCP/IP protocols on the Windows NT Server. Netbeui
	is not supported for Microsoft Exchange Server to Server communications. A
	network protocol that supports RPC is required for the Microsoft Exchange
	services to communicate with each other.
	
	MORE INFORMATION
	================
	
	For more information, please check section 1.1 of the Readme.wri file on the
	Microsoft Exchange Server CD.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsetup 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0
	
	=============================================================================
	
