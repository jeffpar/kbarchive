---
layout: page
title: "Q99887: Information on NWLink"
permalink: /kb/099/Q99887/
---

## Q99887: Information on NWLink

{% raw %}

	Article: Q99887
	Product(s): Microsoft Windows NT
	Version(s): 3.1 3.51 4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Server versions 3.51, 4.0 
	- Microsoft Windows NT Workstation versions 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	This article briefly discusses NWLink. It is divided into these parts:
	
	- What is NWLink?
	
	- What Isn't NWLink?
	
	- Implementation of NWLink
	
	What is NWLink?
	---------------
	
	The goal of NWLink is to supply added value for ISVs and other
	accounts who would like to use Windows NT as an application server
	with current MS-DOS, Windows, or OS/2 NetWare clients (for
	applications such as SQL Server, SNA Server, and RPC supporting SPX
	and Novell NetBIOS over IPX). In addition, NWLink supports the Novell
	NetBIOS protocol. There are also NetBIOS enhancements (sliding windows
	and flow control, for example) to make Windows NT to Windows NT
	sessions more efficient (if this is the only Windows NT transport
	being used).
	
	What Isn't NWLink?
	------------------
	
	Novell is offering a Windows NT client that can speak to NetWare
	servers. NWLink does not provide this functionality; it is just the
	transport. It does not support the ability to do remote file and print
	I/O (which would require an additional layer above NWLink supporting
	NCPs).
	
	Novell's offering does not allow NetWare clients to use Windows NT as
	an application server, nor does it support Novell NetBIOS. At this
	time, their client does not support Windows sockets that are
	compatible with Novell's NWIPXSPC APIs. Novell plans to add this
	support soon.
	
	Implementation of NWLink
	------------------------
	
	NWLink is a streams-based transport (similar to TCP/IP and NDIS
	compatible) that supports:
	
	- Ethernet, Token Ring, FDDI, and Arcnet topologies
	
	- IPX, SPX, Novell NetBIOS, and enhanced Novell NetBIOS protocols
	
	- NetBIOS and Windows Sockets (IPX and SPX) APIs
	
	- MIPS and Intel platforms
	
	- Multiprocessor awareness
	
	- Portability
	
	NWLink does not support NCP as Novell's solution does.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT400search kbWinNTW351search kbWinNTW351 kbWinNTW310 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS310 kbWinNTS351search kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : 3.1 3.51 4.0
	
	=============================================================================
	

{% endraw %}
