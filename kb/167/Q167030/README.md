---
layout: page
title: "Q167030: XCLN: Using Exchange Client with IE Dial When Needed (AutoDial)"
permalink: kb/167/Q167030/
---

## Q167030: XCLN: Using Exchange Client with IE Dial When Needed (AutoDial)

	Article: Q167030
	Product(s): Microsoft Exchange
	Version(s): 4.0 5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 20-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 3.x client, versions 4.0, 5.0 
	- Microsoft Exchange Windows 95/98 client, versions 4.0, 5.0 
	- Microsoft Exchange Windows NT client, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	It is possible for a Microsoft Exchange Client computer to connect successfully
	to a computer running Microsoft Exchange Server on a local LAN while still
	leaving the option for Internet Explorer to Dial When Needed (AutoDial) and not
	prompt for a dial-up networking dialog box. The dial-up connection dialog box is
	called because of initialization of the TCP/IP protocol on the local machine. It
	is possible to connect from a Microsoft Exchange Client to a Microsoft Exchange
	Server without using TCP/IP, provided that you can configure both computers to
	use a different protocol.
	
	MORE INFORMATION
	================
	
	To connect Microsoft Exchange Client to the server without being prompted for a
	dial-up connection, perform the following steps:
	
	1. Upgrade Microsoft Exchange Client to Service Pack 2 or later and follow the
	  instructions for adding an entry to the Mapiscv.inf:
	
	  Q152344 XCLN: Winsock Application Starts When Microsoft Exchange Client
	  Starts
	
	2. Create a new Microsoft Exchange Server profile. For more information on
	  creating a profile see "Creating or Deleting a Profile" in the Microsoft
	  Exchange Client online help.
	
	3. Install NetBEUI or IPX/SPX on the Microsoft Exchange Client and on the
	  computer running Microsoft Exchange Server.
	
	4. Change the RPC_binding_order so TCP/IP is not being called. Change
	  RPC_binding_order for all of your clients to include only the entry for
	  ncacn_nb_nb or ncacn_spx. The first entry will use NetBIOS rather than
	  NetBEUI and should allow you to connect to the server. The second entry will
	  use IPX/SPX to connect the client to the server.
	
	Note: NetBEUI is not a routable protocol; IPX/SPX is a routable protocol.
	
	After completing the above steps, you can leave the Dial When Needed option
	enabled in Internet Explorer. When you start the Microsoft Exchange Client you
	will not be prompted for a dial-up connection.
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbExchangeClientSearch kbZNotKeyword kbZNotKeyword2 kbZNotKeyword3 kbExchange400NT kbExchange500NT kbExchange400Win95 kbExchange500Win95
	Version           : 4.0 5.0
	
	=============================================================================
	
