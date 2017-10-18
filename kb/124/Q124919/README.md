---
layout: page
title: "Q124919: RAS Event 20026: Remote Access Server Security Failure"
permalink: kb/124/Q124919/
---

## Q124919: RAS Event 20026: Remote Access Server Security Failure

	Article: Q124919
	Product(s): Microsoft Windows NT
	Version(s): 3.5,4.0
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
	
	When you start the Remote Access Server (RAS) service on a multihomed
	Transmission Control Protocol/Internet Protocol (TCP/IP) computer set up to
	receive TCP/IP dial-in clients, the following event is written to the System
	Log:
	
	Event ID: 20026
	Source: RemoteAccess
	Type: Error
	Description: Remote Access Server Security Failure. A network error has  occurred when you try to establish a session with the security agent on   LANA x. The error code is the data.
	
	where x is the LANA number of your network card.
	
	This error does not cause problems with RAS service.
	
	CAUSE
	=====
	
	This problem occurs when the RAS service binds to two network interface cards
	(NICs) on a multihomed TCP/IP computer, but only one network card is valid. The
	network card connected to the subnet that you assign RAS clients TCP/IP
	addresses from, is the network card that should be bound to the RAS service.
	
	RESOLUTION
	==========
	
	To prevent the appearance of this event in the System Log, follow these steps:
	
	1. Run Control Panel and select the Network icon.
	
	2. Choose Bindings.
	
	3. In the Show Bindings for:, select "Remote Access Server Service".
	
	4. Select the binding for the TCP/IP protocol and NIC that you are not using for
	  the RAS client, and then select Disable. For example, the binding entry may
	  be:
	
	  Remote Access Server Service -> TCP/IP Protocol -> <Adapter
	  Driver>-> <Network Card>
	
	5. Choose OK and restart Windows NT.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS350 kbWinNTS350search
	Version           : :3.5,4.0
	
	=============================================================================
	
