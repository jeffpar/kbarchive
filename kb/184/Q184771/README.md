---
layout: page
title: "Q184771: XADM: How to Configure Exchange Server on Banyan VINES Network"
permalink: /kb/184/Q184771/
---

## Q184771: XADM: How to Configure Exchange Server on Banyan VINES Network

	Article: Q184771
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 10-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	This article details the process of configuring Microsoft Exchange Server on a
	Banyan VINES network.
	
	MORE INFORMATION
	================
	
	To run Microsoft Exchange Server on a Banyan VINES network, perform the
	following configuration steps:
	
	1. Install the Banyan VINES redirector on the Exchange Server computer.
	
	2. Configure RPC support for Banyan VINES.
	
	If Windows NT Server version 3.51 is installed, copy the DLLs in the
	Support\banyan directory on the Exchange Server CD to your Windows System32
	directory.
	
	If Windows NT Server version 4.0 is installed, perform the following steps:
	
	1. On Control Panel, choose Network.
	
	2. Select the Services tab.
	
	3. Click Add.
	
	4. Select RPC support for Banyan and click OK.
	
	If Exchange Server and Windows NT Server version 4.0 are installed on a computer
	running in a Banyan VINES network, the Banyan VINES computer name must be the
	same as the Exchange Server computer name. For example, if the Exchange Server
	computer name is MailServer1, the Banyan VINES computer name should also be
	MailServer1. To set the Banyan VINES computer name to the same name as the
	Exchange Server computer, perform the following steps:
	
	1. Choose Setup from the VINES program group.
	
	2. Choose Computers.
	
	3. Select Name Workstation on Network.
	
	4. In the Computer Name box, type the name used by the Exchange Server computer.
	
	To ensure that the Microsoft Exchange client can connect to an Exchange Server
	computer on a Banyan VINES network, the Banyan VINES protocol (ncacn_vns_spp)
	should be the first protocol listed in the RPC binding order. In addition, any
	unused protocols should be removed from the binding order.
	
	RPC connectivity in Banyan requires the Windows NT 3.51 versions of the following
	two .dll files:
	
	  Rpcltc8.dll
	  Rpclts8.dll
	
	The registry specifies the correct version of the .dll file to use at:
	
	  HKEY_LOCAL_MACHINE\Software\Microsoft\RPC\Client Protocols
	  \ncacn_vns_spp:REG_SZ:rpcltc8.dll
	
	  HKEY_LOCAL_MACHINE\Software\Microsoft\RPC\Server Protocols
	  \ncacn_vns_spp:REG_SZ:rpclts8.dll
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : WINDOWS:4.0,5.0,5.5
	Issue type        : kbhowto
	
	=============================================================================
	
