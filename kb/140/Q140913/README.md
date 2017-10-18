---
layout: page
title: "Q140913: Communicating over TCP/IP May Fail Due to 802.3 Frame Type"
permalink: kb/140/Q140913/
---

## Q140913: Communicating over TCP/IP May Fail Due to 802.3 Frame Type

	Article: Q140913
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): 3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 05-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A Windows NT TCP/IP node is not be able to communicate to a non Microsoft based
	TCP/IP node.
	
	CAUSE
	=====
	
	The non Microsoft TCP/IP node is configured to use 802.3 SNAP encoding. Some
	devices can be configured to use 802.3 SNAP encoding. By default, the Microsoft
	TCP/IP stack transmits packets in DIX Ethernet format.
	
	RESOLUTION
	==========
	
	If the node device is using 802.3 SNAP encoding, modify the Windows NT registry
	and change the ArpUseEtherSNAP setting to 1 on the Windows NT system to match
	the 802.3 SNAP encoding.
	
	Registry path:
	
	This parameter is under the subtree HKEY_LOCAL_MACHINE under the following
	subkey:
	
	  \SYSTEM\CurrentControlSet\Services\Tcpip\Parameters
	
	    Value (Parameter) Name: ArpUseEtherSNAP
	    Data Type:  REG_DWORD - Boolean
	    Data Range: 0 or 1 (False or True)
	    Default:    0 (False)
	
	Description: Setting this parameter to 1 will force TCP/IP to transmit Ethernet
	packets using 802.3 SNAP encoding. By default, the stack transmits packets in
	DIX Ethernet format. Windows NT always receives both formats.
	
	MORE INFORMATION
	================
	
	In Windows NT 3.1, when TCP/IP is used on an Ethernet network, it will use only
	the Ethernet II frame format. It will recognize a SNAP formatted ARP request,
	but will respond with an Ethernet II formatted ARP reply in the hopes that the
	remote station TCP/IP stack will recognize the frame type and switch to the
	Ethernet II frame format.
	
	In Windows NT 3.5, 3.51, and 4.0, there is a registry parameter (ArpUseEtherSNAP)
	that instructs TCP/IP to use SNAP on an Ethernet (802.3) network. With this
	parameter set, TCP/IP uses SNAP to encapsulate IP, ICMP, and ARP frames in 802.3
	frames. If, however, a SNAP-encapsulated ARP request is responded to with an
	Ethernet II format ARP reply, or if a Ethernet II format ARP request is
	received, TCP/IP will automatically switch to using Ethernet II frames on that
	link.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : :3.5,3.51,4.0
	Issue type        : kbprb
	
	=============================================================================
	
