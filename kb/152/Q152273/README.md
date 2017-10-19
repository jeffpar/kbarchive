---
layout: page
title: "Q152273: DHCP Server May Give Out Duplicate IP Addresses"
permalink: /kb/152/Q152273/
---

## Q152273: DHCP Server May Give Out Duplicate IP Addresses

	Article: Q152273
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	In network environments that allow duplicate routes between DHCP clients and a
	DHCP server, a DHCP server gives out one IP address to two different clients.
	
	This can occur in several different network environments, including Token Ring
	environments with large numbers of source routing bridges (where the bridges
	would be set up in a way that would provide multiple, unique routes between the
	server and client) and Ethernet environments with multiple routers enabled with
	BOOTP relay agents or IP helper addressing.
	
	RESOLUTION
	==========
	
	Obtain the hotfix mentioned below for your version of Windows NT Server.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0.
	
	
	A supported fix is now available, but has not been fully regression tested and
	should be applied only to systems experiencing this specific problem. Unless you
	are severely impacted by this specific problem, Microsoft recommends that you
	wait for the next Service Pack that contains this fix. Contact Microsoft
	Technical Support for more information.
	
	
	Microsoft has confirmed this to be a problem in Windows NT versions 3.5 and 3.51.
	A supported fix is now available, but has not been fully regression tested and
	should be applied only to systems experiencing this specific problem. Unless you
	are severely impacted by this specific problem, Microsoft recommends that you
	wait for the next Service Pack that contains this fix. Contact Microsoft
	Technical Support for more information.
	
	
	MORE INFORMATION
	================
	
	A network trace of the problem shows multiple DISCOVER packets arriving at the
	DHCP server with the same XID. Only one DISCOVER was sent by the client, but
	because of the multiple routes the packet can take through the source routing
	bridges, more than one of the same packet arrives at the DHCP server. The DHCP
	server responds to each of the DISCOVER packets with an OFFER. Each time an
	OFFER is sent, the DHCP server resets the lease on the IP address to 15 minutes.
	When a REQUEST is received by the DHCP server, it sets the lease to the lease
	period that was designated by the administrator of the DHCP server. It then
	sends an ACK to the client, and the client then completes the initialization of
	TCP/IP.
	
	Since multiple DISCOVER packets with the same XID and client MAC address are
	being processed, a REQUEST from the client might be received while the server is
	sending OFFERs. If this happens and the DHCP server ACKs the client and then
	sends OFFERs after ACKing, the IP address is set to the temporary lease time of
	15 minutes. Since the client already has bound to the IP address that it
	received and ACKed for, it will ignore subsequent OFFER packets from the DHCP
	server. The temporary lease on the IP address will expire, since the client will
	not respond to the OFFER packets that are sent after the first OFFER packet. The
	IP address will then be marked as available for leasing by the next client that
	requests an IP address. The example below illustrates the process in which this
	could happen.
	
	NOTE: This behavior may also happen in Ethernet configurations that are routed
	with slower or multiple BOOTP relay agents.
	
	Example of a Network Monitor trace:
	-----------------------------------
	
	#     Source Addr.   Dest. Addr.    Protocol  Command
	======================================================================
	20    Client         *BROADCAST     DHCP      Discover  (xid=35663566)
	
	Client sends Discover; there are 4 because the packet takes 4 routes
	to the server.
	
	21    Client         *BROADCAST     DHCP      Discover  (xid=35663566)
	22    Client         *BROADCAST     DHCP      Discover  (xid=35663566)
	24    DHCPServer     *BROADCAST     DHCP      Offer     (xid=35663566)
	
	DHCP Server sends Offer.
	
	25    Client         *BROADCAST     DHCP      Request   (xid=36773677)
	
	Client sends Request; again 4 because of 4 routes to the server.
	
	26    Client         *BROADCAST     DHCP      Request   (xid=36773677)
	27    Client         *BROADCAST     DHCP      Request   (xid=36773677)
	28    Client         *BROADCAST     DHCP      Request   (xid=36773677)
	29    DHCPServer     *BROADCAST     DHCP      Offer     (xid=35663566)
	
	Server sends another Offer. Notice XID is the same as the first Offer.
	
	30    DHCPServer     *BROADCAST     DHCP      ACK       (xid=36773677)
	31    DHCPServer     *BROADCAST     DHCP      ACK       (xid=36773677)
	32    DHCPServer     *BROADCAST     DHCP      ACK       (xid=36773677)
	33    DHCPServer     *BROADCAST     DHCP      ACK       (xid=36773677)
	
	Server ACKs the 4 Requests it receives from the client; at this time
	server removes IP address from temporary lease.
	
	34    DHCPServer     *BROADCAST     DHCP      Offer      (xid=35663566)
	35    DHCPServer     *BROADCAST     DHCP      Offer      (xid=35663566)
	
	Server sends 2 more Offers. XID is the same as previous 2 Offers and puts the IP
	address in temporary 15 minute lease. This lease will expire, since the client
	has an IP address per the ACK from the server. When this 15 minute lease
	expires, the server will give this IP address to the next client that renews and
	doesn't have a reserved IP address.
	
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : winnt:3.5,3.51,4.0
	
	=============================================================================
	
