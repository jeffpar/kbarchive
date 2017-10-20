---
layout: page
title: "Q242109: Slow Logging On and Browsing the Network Using IPX/SPX"
permalink: /kb/242/Q242109/
---

## Q242109: Slow Logging On and Browsing the Network Using IPX/SPX

{% raw %}

	Article: Q242109
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to log on to or browse the network from a Microsoft Windows
	95-based or Microsoft Windows NT 4.0-based computer that uses only the IPX/SPX
	protocol, you may experience delays. Also, programs that run on the
	IPX/SPX-based network may time out.
	
	CAUSE
	=====
	
	This behavior can occur if an internal network number is set on a server running
	Windows NT, but there is no NetWare server on the network.
	
	RESOLUTION
	==========
	
	To resolve this issue, manually configure the frame type and external network
	number on both the server and client computers:
	
	NOTE: A Windows NT Server 4.0-based server typically does not require an internal
	network number when there is no NetWare server on the network.
	
	1. In Control Panel, double-click Network, and then click the Protocols tab.
	
	2. Click NWLink IPX/SPX-Compatible Transport, and then click Properties.
	
	3. On the General tab, click the network adapter in the Adapter box.
	
	4. Click Manual Frame Type Detection, and then click Add.
	
	5. Click the frame type in the list, and then type the network number in the
	  Network Number box.
	
	6. Click Add, and then click OK.
	
	7. Restart the computer.
	
	MORE INFORMATION
	================
	
	The IPX network number, sometimes referred to as the 'external network number',
	is used to define the segments on your network. An IPX network number must be
	configured for each frame type on each network adapter installed in your Windows
	NT 4.0-based computer. The network number must be unique for each network
	segment. All computers on the same network segment using the same frame type
	must use the same network number to communicate.
	
	An internal network number identifies a virtual network segment on your network.
	Novell NetWare servers typically use internal network numbers to create a
	logical network to help identify the server in a multiple IPX/SPX-based network
	environment. By default, the internal network number is set to 0 on a Windows NT
	Server 4.0-based server and is not used in IPX routing. To use an internal
	network number on a Windows NT Server 4.0-based server, you must manually set
	the internal network number to a non-zero value (the internal network number is
	not automatically detected).
	
	A Windows NT Server 4.0-based computer requires an internal network number only
	when the following conditions apply:
	
	- Your computer is running File and Print Service for NetWare (FPNW)
	
	- Multiple frame types are in use on a single network adapter
	
	- NWLink is bound to multiple network adapters on your Windows NT Server
	  4.0-based computer
	
	- Your server is running programs that use the IPX/SPX Service Advertising
	  Protocol (SAP), such as Microsoft SQL Server or Microsoft System Network
	  Architecture (SNA) Server.
	
	For more information about the NWLink protocol and network numbers, refer to the
	following articles in the Microsoft Knowledge Base:
	
	  Q150546 NWLink IPX/SPX: Network Number vs. Internal Network Number
	
	  Q203051 Description of Microsoft NWLink IPX/SPX-Compatible Transport
	
	Additional query words: nt 4.0 slow log in netware
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
