---
layout: page
title: "Q138575: Communication Fails Through Ethernet Segment Between FDDI Rings"
permalink: /kb/138/Q138575/
---

## Q138575: Communication Fails Through Ethernet Segment Between FDDI Rings

{% raw %}

	Article: Q138575
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.5,4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 4.0 
	- Microsoft Windows NT Server versions 3.5, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The communication between two FDDI rings through an Ethernet segment may fail
	when you use TCP/IP and any FDDI network interface card (NIC) in Windows NT 3.5.
	For example:
	
	  FDDI Ring-----Bridge-----Ethernet segment-----Bridge-----FDDI Ring
	
	CAUSE
	=====
	
	Because both Windows NT 3.5 Server/Workstation are connected to the FDDI ring,
	the two hosts will negotiate to use the FDDI's MTU size. However once the
	communication between the two hosts begins the Ethernet segment will fail to
	forward packets more than 1,500 bytes. This situation may not occur if the
	bridges are replaced with routers, because router are capable of fragmenting
	packets (TCP/IP only).
	
	RESOLUTION
	==========
	
	To correct this problem, modify the registry.
	
	WARNING: Using Registry Editor incorrectly can cause serious, system-wide
	problems that may require you to reinstall Windows NT to correct them. Microsoft
	cannot guarantee that any problems resulting from the use of Registry Editor can
	be solved. Use this tool at your own risk.
	
	1. Run Registry Editor (REGEDT32.EXE).
	
	2. From the HKEY_LOCAL_MACHINE subtree, go to the following key:
	
	  \SYSTEM\CurrentControlSet\Services\<adapter name and #>
	  \Parameters\Tcpip
	
	3. From the Edit menu, select Add Value.
	
	4. Add the following:
	
	  Value Name: MTU
	  Data Type: REG_DWORD
	  Data: <1500 or Ethernet segment's MTU size>
	
	5. Choose OK.
	
	6. Quit Registry Editor.
	
	7. Shutdown and restart Windows NT.
	
	MORE INFORMATION
	================
	
	The MTU size specifies the maximum transmission unit size of an interface. Each
	interface used by TCP/IP may have a different MTU value specified. The MTU is
	usually determined through negotiation with the lower driver, using that lower
	driver's value. However, that value may be overridden. Ideally, the MTU should
	be large enough to hold any datagram in one frame. The limiting factor is
	usually the technology making the transfer. Some technologies limit the maximum
	size to as little as 128; Ethernet limits transfers to 1500; and proNet-10
	allows as many as 2044 octets per frame.
	
	Datagrams larger than the MTU value are automatically divided into smaller pieces
	called fragments; size is a multiple of eight octets. Fragmentation usually
	occurs somewhere through which the traffic must pass whose MTU is smaller than
	the encapsulated datagram. If fragmentation occurs, the fragments travel
	separately to the destination computer, where they are automatically reassembled
	before the datagram is processed.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS350 kbWinNTS350search
	Version           : winnt:3.5,4.0
	
	=============================================================================
	

{% endraw %}
