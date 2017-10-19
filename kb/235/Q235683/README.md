---
layout: page
title: "Q235683: XWEB: OWA Uses Client RPC Binding Order to Set Up Communication"
permalink: /kb/235/Q235683/
---

## Q235683: XWEB: OWA Uses Client RPC Binding Order to Set Up Communication

	Article: Q235683
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook Web Access, version 5.5 
	- Microsoft Outlook Web Access, version 5.5 Service Packs 1, 2, 3 
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft Exchange Server uses remote procedure call (RPC) built into Microsoft
	Windows NT to establish connections among the Exchange Server processes, such as
	connections between Exchange Server message transfer agents (MTAs), and to
	connect Exchange clients and Exchange Server computers in the network. Exchange
	Server can use RPC over named pipes, TCP/IP, NetBIOS, and IPX/SPX. When Exchange
	Server uses RPC, it proceeds through the list of the protocols above and
	establishes RPC binding. The preference order of the transports is defined by
	the "RPC BINDING ORDER," which by default is Local RPC, TCP/IP, SPX, named
	pipes, and then NetBIOS, in order of preference.
	
	Outlook Web Access (OWA) uses the Outlook/Exchange client RPC binding order to
	establish RPC communications to the Exchange Server, the same way that an
	Exchange or Outlook client does.
	
	RPC_Binding_Order is located in the registry key:
	
	  HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Exchange\Exchange Provider
	
	MORE INFORMATION
	================
	
	When you set up OWA and Exchange Server on different computers, OWA connects to
	the Exchange Server computer and uses the protocols listed in the binding order
	until it establishes communication with the server or until it runs out of
	protocols as described above. If OWA runs out of protocols and fails to connect
	you may receive the following error message:
	
	  Unable To Get Your Inbox.
	
	For additional information about changing the binding order, please see the
	following article(s) in the Microsoft Knowledge Base:
	
	  Q163576 XGEN: Changing the RPC Binding Order
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbOWASearch kbOWA550 kbOWA550SP1 kbOWA550SP2 kbOWA550SP3
	Version           : WINDOWS:5.5
	Issue type        : kbinfo
	
	=============================================================================
	
