---
layout: page
title: "Q92369: PC Gen: Novell NetWare and NCP Calls -- General Information"
permalink: /kb/092/Q92369/
---

## Q92369: PC Gen: Novell NetWare and NCP Calls -- General Information

{% raw %}

	Article: Q92369
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how communication with Microsoft Mail for PC Networks
	works on a Novell NetWare network. Major players in the system are Novell
	NetWare, the NetWare shell (Netx), the NetWare Core Protocol (NCP) language, and
	Microsoft Mail.
	
	MORE INFORMATION
	================
	
	The NetWare shell (Netx) is responsible for determining if an application's file
	request is for the operating system (MS-DOS) or for the network. If a request is
	for a network file service, the shell intercepts it and prepares it for
	transmission to the appropriate server. Netx works with IPX, which is NetWare's
	communication protocol. IPX is bound to the workstation network interface card
	(NIC) driver that allows the request to be sent out over the topology to the
	server.
	
	The shell and NetWare communicate using a language called NetWare Core Protocol
	(NCP). NCP is used for all client requests for service and for the responses to
	those requests. NCP is the single most important application layer protocol that
	NetWare provides. Without NCP, none of the file services offered by NetWare
	would be possible.
	
	The definition of NCP is not available to the public. It is proprietary
	information.
	
	NCP manages communications for these services:
	
	- Opening files under different modes
	
	- Closing open files
	
	- Reading data blocks from open files
	
	- Writing data blocks to open files
	
	In addition, NCP provides high-level connection services and synchronization
	operations.
	
	The shell accomplishes its redirection tasks by hooking several MS-DOS
	interrupts. Once loaded, the shell monitors any calls that applications make to
	Interrupt 21h and redirects those that require access to a server or the
	network.
	
	To determine if a request is for a local drive or a network drive, the shell
	maintains a set of tables that keep track of network drives and mappings. The
	shell compares the network drive table to the internal operating system drive
	table (A-E, or whatever the LASTDRIVE= setting is). If the request is for a
	local drive, the shell passes it to the operating system. If the request is for
	a network drive, the shell passes it to the network.
	
	When Microsoft Mail makes a file open request for a file located on a NetWare
	server, Mail issues an Interrupt 21h. The shell intercepts the request and finds
	that the file resides on the server or on a network drive (for example, drive
	M). Then the shell creates an IPX packet with the NCP information. The shell
	hands this off to the LAN driver, and the LAN driver passes it to the network.
	The response from the server is the same, except in reverse order. The shell
	reads the NCP response, and returns the Interrupt 21h request.
	
	Additional query words: 3.00 3rdParty
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN300
	Version           : WINDOWS:3.0
	
	=============================================================================
	

{% endraw %}
