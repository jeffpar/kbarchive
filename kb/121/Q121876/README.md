---
layout: page
title: "Q121876: Reliable, Slow Links over WANs Using RAS"
permalink: /kb/121/Q121876/
---

## Q121876: Reliable, Slow Links over WANs Using RAS

{% raw %}

	Article: Q121876
	Product(s): Microsoft Windows NT
	Version(s): 3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	3.5
	
	WINDOWS
	
	kbnetwork
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	To ensure a reliable Remote Access Service (RAS) connection when using a
	wide area network (WAN) connection (for example, a communications or X.25
	port) the speed of the link may require that you load less protocols.
	
	At lower speed links (2400 through 9600 bps) only one LAN protocol should
	be used. IP, IPX, and NetBEUI can run simultaneously with RAS. All three
	protocols are supported at all speeds and can be activated; however, using
	all three protocols at the same time at low speeds is not recommended. One
	protocol will remain active, but the others may fail. The RAS connection
	will remain, but only the most robust protocol will continue to operate.
	
	IP is the most robust network protocol for WAN links, followed by IPX and
	NetBEUI.
	
	On higher speeds links (56 through 64 Kbps and up) two or three transport
	protocols can be supported simultaneously without difficulty.
	
	Additional query words: prodnt
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	Version           : 3.5
	
	=============================================================================
	

{% endraw %}
