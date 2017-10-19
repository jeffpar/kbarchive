---
layout: page
title: "Q146212: Novell SEND Command Does Not Poll for Stored Messages"
permalink: /kb/146/Q146212/
---

## Q146212: Novell SEND Command Does Not Poll for Stored Messages

	Article: Q146212
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): 3rdpartynet win95 kb3rdPartyNetClient
	Last Modified: 28-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are using the Microsoft Client for NetWare Networks and you use the
	Novell NetWare SEND command (Send.exe) to poll for stored messages on a Novell
	NetWare server, the SEND command may seem to function incorrectly. The following
	message may be displayed, even if stored messages are present on the server:
	
	  No stored messages to poll
	
	This behavior can occur even though no error messages are displayed when you use
	the SEND command to configure the broadcast mode so that the server stores your
	messages until you poll to receive them.
	
	CAUSE
	=====
	
	The Microsoft Client for NetWare Networks is not compatible with this feature of
	the Novell NetWare SEND command. When you configure the broadcast mode so that
	the server stores your messages until you poll to receive them, the message
	stated above is always displayed when you poll for messages on the server.
	
	RESOLUTION
	==========
	
	To work around this behavior, use the Novell VLM or NETX network client instead
	of the Microsoft Client for NetWare Networks.
	
	STATUS
	======
	
	This behavior is caused by a difference in the functionality provided by the
	Microsoft Client for NetWare Networks and the Novell VLM and NETX clients, not
	by a problem in Microsoft Windows 95.
	
	MORE INFORMATION
	================
	
	The following command is used to configure the broadcast mode so that the server
	stores your messages until you poll to receive them:
	
	  send /a=p
	
	Once you have configured the broadcast mode in this manner, the following command
	is used to poll for stored messages on the server:
	
	  send /p
	
	======================================================================
	Keywords          : 3rdpartynet win95 kb3rdPartyNetClient 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	
