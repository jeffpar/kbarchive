---
layout: page
title: "Q163576: XGEN: Changing the RPC Binding Order"
permalink: /kb/163/Q163576/
---

## Q163576: XGEN: Changing the RPC Binding Order

	Article: Q163576
	Product(s): Microsoft Exchange
	Version(s): MACINTOSH:8.0,8.1; WINDOWS:4.0,5.0,8.0,8.01,8.02,8.03,8.04,8.5,9.0; winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): kbsetup kbusage exc4 exc5 exc55
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	- Microsoft Exchange Windows 3.x client, versions 4.0, 5.0 
	- Microsoft Exchange Windows 95/98 client, versions 4.0, 5.0 
	- Microsoft Exchange Windows NT client, versions 4.0, 5.0 
	- Microsoft Outlook 97, versions 8.0, 8.01, 8.02, 8.03, 8.04, used with:
	   - the operating system: Microsoft Windows 98 
	   - the operating system: Microsoft Windows 95 
	- Microsoft Outlook 2000, version 9.0, used with:
	   - the operating system: Microsoft Windows 98 
	   - the operating system: Microsoft Windows 95 
	- Microsoft Outlook 98, version 8.5, used with:
	   - the operating system: Microsoft Windows 98 
	   - the operating system: Microsoft Windows 95 
	- Microsoft Outlook 97, versions 8.0, 8.01, 8.02, 8.03, 8.04, used with:
	   - the operating system: Microsoft Windows NT 
	- Microsoft Outlook 2000, version 9.0, used with:
	   - the operating system: Microsoft Windows NT 
	- Microsoft Outlook 98, version 8.5, used with:
	   - the operating system: Microsoft Windows NT 
	- Microsoft Outlook, Exchange Server Edition, version 8.0, used with:
	   - the operating system: Microsoft Windows versions 3.1, 3.11 
	- Microsoft Outlook for Macintosh, Exchange Server Edition, versions 8.0, 8.1 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SUMMARY
	=======
	
	How Exchange Server Uses RPC
	----------------------------
	
	Exchange Server uses remote procedure call (RPC) built into Microsoft Windows NT
	to establish connections among the Exchange Server processes, such as
	connections between Exchange Server message transfer agents (MTAs), and to
	connect Exchange Clients and Exchange Server computers in the network. Exchange
	Server can use RPC over named pipes, TCP/IP, NetBIOS, and IPX/SPX. When it uses
	RPC, Exchange Server proceeds through a list of those protocols and tries to
	establish RPC binding. The preference order of the transports is defined by the
	RPC Binding Order, which by default is: local RPC, TCP/IP, SPX, named pipes, and
	then NetBIOS (in order of preference).
	
	Changing the RPC Protocol Binding Order
	---------------------------------------
	
	The default RPC protocol binding order is set when an Exchange Client is
	installed. This setting determines the protocol sequence that the client uses to
	communicate with Exchange Server. You can change the RPC binding order before or
	after the client is installed. You can improve performance by changing the RPC
	binding order if the client uses multiple protocols or if the single protocol
	your client uses is not the first listed in the RPC binding order. If the
	protocol that the Exchange Client uses is last in the sequence, the client
	attempts to bind over the protocols listed before that protocol when it connects
	to the server. The protocols are represented in the binding order, using the
	following entries. The string ncacn refers to Network Computing Architecture
	Connection.
	
	  Protocol name RPC protocol string
	  ----------------------------------
	
	  Local RPC      ncalrpc
	  TCP/IP         ncacn_ip_tcp
	  SPX            ncacn_spx
	  Named pipes    ncacn_np
	  NetBIOS        netbios
	  VINES IP       ncacn_vns_spp
	
	For example, the following entry attempts to establish connections over SPX,
	TCP/IP, and NetBIOS, in that order.
	
	  RPC_Binding_Order=ncacn_spx,ncacn_ip_tcp,netbios
	
	Clients Running Windows 95, Windows NT Server, and Windows NT Workstation
	-------------------------------------------------------------------------
	
	By default, the Exchange Client uses the following RPC binding order for Windows
	95, Windows NT Server, and Windows NT Workstation when it connects to an
	Exchange Server computer.
	
	1. TCP/IP
	
	2. SPX
	
	3. Named pipes
	
	4. NetBIOS
	
	5. VINES IP (Windows NT Server and Windows NT Workstation only)
	
	You can change the RPC binding order for clients running Windows 95, Windows NT
	Workstation, and Windows NT Server before or after you install the Exchange
	Client.
	
	Before installation:
	
	  In Setup Editor, select the Binding Order property page.
	
	After installation:
	
	  Use the Registry Editor to modify the binding order.
	
	  WARNING: If you use Registry Editor incorrectly, you may cause serious
	  problems that may require you to reinstall your operating system. Microsoft
	  cannot guarantee that you can solve problems that result from using Registry
	  Editor incorrectly. Use Registry Editor at your own risk.
	
	  Locate and modify the following key in the registry:
	
	  HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Exchange\Exchange Provider.
	
	  For example, the following entry establishes SPX, TCP/IP, and NetBIOS
	  connections in the order indicated:
	
	  RPC_Binding_Order=ncacn_spx,ncacn_ip_tcp,netbios
	
	Clients Running Windows and Windows for Workgroups
	--------------------------------------------------
	
	By default, the Exchange Client uses the following RPC binding order for Windows
	for Workgroups when it connects to an Exchange Server computer.
	
	1. Named pipes
	
	2. SPX
	
	3. TCP/IP
	
	4. NetBIOS
	
	5. VINES IP
	
	You can change the RPC binding order for clients running Windows and Windows for
	Workgroups before or after you install the Exchange Client.
	
	Before installation:
	
	  In Setup Editor, select the Binding Order property page.
	
	After installation:
	
	  In the Exchng.ini file in the Windows folder, edit the [Exchange Provider]
	  section. For example, the following entry in the Exchng.ini file establishes
	  SPX, TCP/IP, and NetBIOS connections in the order indicated:
	
	  [Exchange Provider]
	  RPC_Binding_Order=ncacn_spx,ncacn_ip_tcp,netbios
	
	Clients Running MS-DOS
	----------------------
	
	By default, the Exchange Client uses the following RPC binding order for MS-DOS
	when it connects to an Exchange Server computer.
	
	1. Local RPC
	
	2. Named pipes
	
	3. SPX
	
	4. TCP/IP
	
	5. NetBIOS
	
	You can change the RPC binding order for clients running MS-DOS after you install
	MS-DOS. To change the order, edit the RPC_BINDING_ORDER line in the Mlsetup.ini
	file. This file is installed automatically on the client or on a network share.
	For example, the following entry in the Mlsetup.ini file establishes local RPC,
	named pipes, TCP/IP, and NetBIOS connections in the order indicated:
	
	  RPC_Binding_Order=ncalrpc,ncacn_np,ncacn_ip_tcp,netbios
	
	MORE INFORMATION
	================
	
	You do not need to restart the computer after you modify the Exchange binding
	order. The Exchange Client rereads the binding when it restarts. For
	troubleshooting purposes, simply change the binding order in the registry (make
	sure the key has been fully committed to the registry), and then perform a check
	names from the properties for the Exchange Server service (in Control Panel,
	double-click Mail). You do not even need to quit the Registry Editor when you
	try different bindings.
	
	IMPORTANT: You MUST use commas between binding order entries, or the binding is
	not read. If, for example, you use "ncacn_ip_tcp;netbios" and perform a check
	names, the following error is immediately displayed:
	
	  The name could not be resolved. The Microsoft Address Book was unable to
	  log on to the Microsoft Exchange Server computer. Contact your system
	  administrator if the problem persists. <ok>
	
	If you delete the entire RPC_binding_Order subkey, the Exchange Client uses the
	default binding order. This may be a good quick troubleshooting step if you have
	concerns about incorrect entries in the binding order.
	
	The information in this article came from the Exchange Server Resource Kit on
	TechNet, and from other sources.
	
	For additional information, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q136516 XCLN: Improving Windows Client Startup Times
	
	Additional query words: Exchange provider EXCHNG.INI XCLN XADM exclnfaq outlook
	
	======================================================================
	Keywords          : kbsetup kbusage exc4 exc5 exc55 
	Technology        : kbOutlookSearch kbExchangeSearch kbExchangeClientSearch kbZNotKeyword kbZNotKeyword2 kbOutlook97Search kbZNotKeyword3
	Version           : MACINTOSH:8.0,8.1; WINDOWS:4.0,5.0,8.0,8.01,8.02,8.03,8.04,8.5,9.0; winnt:4.0,5.0,5.5
	Issue type        : kbinfo
	
	=============================================================================
	
