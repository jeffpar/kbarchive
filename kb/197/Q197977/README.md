---
layout: page
title: "Q197977: XFOR: Uninstall SMTP Gateway and Install IMC to Route SMTP Mail"
permalink: kb/197/Q197977/
---

## Q197977: XFOR: Uninstall SMTP Gateway and Install IMC to Route SMTP Mail

	Article: Q197977
	Product(s): Microsoft Exchange
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article explains how to remove the SMTP Gateway for MS Mail postoffice and
	install the Exchange Server Internet Mail Connector to route the SMTP mail for
	the downstream post offices.
	
	MORE INFORMATION
	================
	
	To remove the SMTP Gateway, install and configure the Exchange Server Internet
	Mail Connector, perform the following steps:
	
	1. Uninstall the access component.
	
	2. Uninstall the gateway component.
	
	3. Configure the Internet Mail Connector for Exchange Server.
	
	4. Install the access component on the downstream post office and point it to
	  the Exchange shadow post office.
	
	To set up the old SMTP gateway to communicate with Exchange Server, perform the
	following steps:
	
	1. Install -r from the SMTP Gateway access disk.
	
	2. Install -r from the SMTP Gateway disk.
	
	3. Install Gateway access disk point to the shadow post office. No downstream
	  post offices need to be changed.
	
	To configure the Internet Mail Connector as the SMTP gateway for MS Mail users,
	perform the following steps:
	
	1. Smarthost must route to IP address of the Exchange Server computer.
	
	2. Uninstall the access component from hub post office.
	
	3. Uninstall the gateway component from hub post office.
	
	4. Re-install the access component on the hub post office pointing to the
	  connector post office as the gateway post office.
	
	Because the Internet Mail Connector is already up an running on the Exchange
	Server computer(they must test outgoing mail), they should now be set to send
	and receive through the Internet Mail Connector.
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : WinNT:4.0
	Issue type        : kbhowto
	
	=============================================================================
	
