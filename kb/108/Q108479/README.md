---
layout: page
title: "Q108479: Extended Error 53 When Accessing Network Drives from MS-DOS"
permalink: /kb/108/Q108479/
---

## Q108479: Extended Error 53 When Accessing Network Drives from MS-DOS

	Article: Q108479
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-SEP-1999
	
	3.11
	
	WINDOWS
	
	kbnetwork kb3rdparty kbenv
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to access a connected network drive from the MS-DOS command prompt
	using Windows for Workgroups 3.11 and Novell NetWare connectivity, you may
	receive the following message:
	
	  Extended Error 53
	
	CAUSE
	=====
	
	This error message occurs because the real-mode network, when running Novell
	NetWare connectivity, cannot load the same protocols that load in 386 enhanced
	mode Windows for Workgroups 3.11. Because the real-mode network is using the IPX
	or IPXODI driver to communicate with the network adapter, it cannot load the
	NDIS2 or NDIS3 protocols. However, it does allow communication with any Windows
	for Workgroups 3.11 server running the IPX/SPX Compatible Transport or IPX/SPX
	Compatible Transport with NetBIOS on the network.
	
	It is not possible to access a Windows for Workgroups 3.1 server because it
	cannot use the IPX/SPX compatible protocol. Communication with a Windows NT
	server is also not possible because the real-mode network does not provide the
	NetBIOS interface necessary to communicate with the Windows NT IPX/SPX
	Compatible Transport.
	
	If persistent connections are stored in Windows for Workgroups 3.11 and ghosted
	connections are enabled, starting the real-mode network in MS-DOS will seem to
	connect machines not running the IPX/SPX compatible protocol, including Windows
	for Workgroups 3.1 and Windows NT servers. However, if you try to access files
	or printers on these servers, you receive the error message "Extended Error 53."
	This occurs because ghosted connections have been enabled in Windows for
	Workgroups 3.11 and therefore no attempt is made to connect to the server when
	the real-mode network is first started.
	
	
	RESOLUTION
	==========
	
	Communication is not possible with a Windows for Workgroups 3.1 or Windows NT
	server using the real-mode redirector in conjunction with Novell NetWare
	connectivity. If you need to access another Windows for Workgroups 3.11 machine,
	the computer you are trying to connect to must be running Windows for Workgroups
	3.11 and must have the IPX/SPX Compatible Transport (either with or without
	NetBIOS) installed as a protocol.
	
	Additional query words: 3.11 direct host redir real-mode
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW311
	Version           : WINDOWS:3.11
	
	=============================================================================
	
