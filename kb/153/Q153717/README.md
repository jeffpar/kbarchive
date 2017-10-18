---
layout: page
title: "Q153717: XCON: Dynamic RAS Connector Not Sending Over NetBeui"
permalink: kb/153/Q153717/
---

## Q153717: XCON: Dynamic RAS Connector Not Sending Over NetBeui

	Article: Q153717
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
	
	The Microsoft Exchange Dynamic RAS Connector might fail to deliver mail over
	NetBeui even though the modem connection is established and NetBeui has been
	installed on both Microsoft Exchange Server computer's Windows NT RAS
	configuration settings.
	
	CAUSE
	=====
	
	By default, the Microsoft Exchange Message Transfer Agent (MTA) only supports
	the use of Microsoft TCP/IP, IPX/SPX compatible transport, and Banyan Vines IP.
	
	RESOLUTION
	==========
	
	WARNING: Using Registry Editor incorrectly can cause serious, system-wide
	problems that may require you to reinstall Windows NT to correct them. Microsoft
	cannot guarantee that any problems resulting from the use of Registry Editor can
	be solved. Use this tool at your own risk.
	
	To enable support for NetBeui over the Dynamic RAS Connector, the following
	registry adjustment will need to be made on both Microsoft Exchange Server
	computers.
	
	1. Start Regedt32.exe and open the following key:
	
	     HKEY_LOCAL_MACHINE\Software\Microsoft\Exchange\Exchange Provider
	
	2. On the RPC_SVR_BINDING_ORDER registry entry add the following value:
	
	     NCACN_NB_NB
	
	Make sure this setting is entered on both Microsoft Exchange Servers so that they
	will have a common protocol. After the change is made, stop and re-start the
	MSExchangeMTA service.
	
	It is important to note that the MTA reads the RPC_SVR_BINDING_ORDER in a serial
	manner, so the placement of the protocols can effect how the MTA functions. If
	the NCACN_NB_NB value is first in the order, the MTA will attempt to use NetBeui
	first. If it is last, the MTA will read through all the other values
	sequentially. What this means is that if NetBeui and TCP/IP are both loaded, and
	the NCACN_NB_NB value is last in the binding order, TCP/IP will be used. This is
	only important in environments where there are mixed protocols and/or adapters.
	
	CAUTION: Using only the NetBeui protocol with the Microsoft Exchange Dynamic RAS
	Connector may cause delays in modem disconnect times with certain modems and/or
	telco line conditions. This is due to a limitation in the NetBeui protocol. If
	such symptoms are encountered, we recommend that an additional protocol such as
	TCP/IP also be installed.
	
	Additional query words: 9322 9311 access denied error code 5 ras
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0
	Issue type        : kbhowto
	
	=============================================================================
	
