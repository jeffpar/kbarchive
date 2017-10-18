---
layout: page
title: "Q276223: XCLN: Named Pipes in RPC Binding Order causes Open Resources"
permalink: kb/276/Q276223/
---

## Q276223: XCLN: Named Pipes in RPC Binding Order causes Open Resources

	Article: Q276223
	Product(s): Microsoft Exchange
	Version(s): 4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook 2000 
	- Microsoft Outlook 97 
	- Microsoft Outlook 98 
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	- Microsoft Exchange Windows 95/98 client, versions 4.0, 5.0 
	- Microsoft Exchange Windows NT client, versions 4.0, 5.0 
	- the operating system: Microsoft Windows NT 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If named pipes is listed in the remote procedure call (RPC) binding order as the
	primary protocol on a client computer, and you connect to a Microsoft Exchange
	Server computer by using the Microsoft Exchange Client or Outlook, your logon
	name is displayed in Server Manager as an open resource over named pipes on the
	Exchange Server computer in one of the following formats:
	
	- "<USER>" \\pipe\\00000xxx.001
	
	- "<USER>" \\pipe\00000xxx.000
	
	MORE INFORMATION
	================
	
	If Transmission Control Protocol/Internet Protocol (TCP/IP) or RPC is listed
	first in the binding order, neither TCP/IP nor RPC is displayed in Server
	Manager as an open resource. Also, when you dump the endpoints to determine the
	pipe name, the endpoints are displayed as "STORE" and "ADMIN" in the user
	interface.
	
	To view this information on the Exchange Server computer:
	
	1. Start Server Manager in Administrative Tools.
	
	2. Click the appropriate Exchange Server computer.
	
	3. Click Computer, and then click Properties.
	
	4. Click In Use.
	
	Notice that the following is displayed as an open resource for the client user:
	
	  \\pipe\00000xx.000
	
	
	Additional query words: xmrp rpc_binding_order;named pipes Outlook Windows NT client, versions 8.0, 8.01, 8.02, 8.03, 8.04, 8.5, 9.0, 8.5
	
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbOSWinSearch kbOSWinNT400 kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbExchangeClientSearch kbZNotKeyword kbZNotKeyword2 kbOutlook2000Search kbOutlook97Search kbOutlook98Search kbZNotKeyword3 kbOSWinNTSearch kbExchange400NT kbExchange500NT kbExchange400Win95 kbExchange500Win95
	Version           : :4.0,5.0,5.5
	Issue type        : kbhowto
	
	=============================================================================
	
