---
layout: page
title: "Q120599: Detection of Duplicate IP Addresses by Microsoft TCP/IP"
permalink: /kb/120/Q120599/
---

## Q120599: Detection of Duplicate IP Addresses by Microsoft TCP/IP

{% raw %}

	Article: Q120599
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): 2.2x,3.1,3.5,4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.1, 3.5, 4.0 
	- Microsoft Windows NT Workstation versions 3.1, 3.5, 4.0 
	- Microsoft Windows NT Advanced Server, version 3.1 
	- Microsoft LAN Manager, version 2.2x 
	- Microsoft Windows for Workgroups 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The TCP/IP protocol may fail to start if another system using the same IP
	address is detected on the network. All the TCP/IP protocols currently shipping
	(as of 9/20/94) can detect duplicate IP addresses in most cases. The following
	information details how this happens and how to recognize duplicate addresses in
	a network trace.
	
	MORE INFORMATION
	================
	
	Each computer running TCP/IP uses a cache that contains mappings between IP
	addresses and media access control (MAC) or network adapter addresses on the
	network. The cache is maintained by the address resolution protocol (ARP) and is
	dynamic. When a connection attempt is made from one computer to another, the
	calling computer looks in its ARP cache for the target computer's IP/MAC address
	entry, and then builds an outgoing frame directed to the MAC address of the
	target computer.
	
	If the target computer's IP address is not in the cache, the calling system
	broadcasts an ARP frame onto the network. The ARP frame contains the IP address
	of the target computer, and requests its MAC address. If the target computer
	exists on the local sub-net then an ARP reply will be returned to the calling
	computer, which updates its cache accordingly. The cache must contain correct
	mappings for communications to function.
	
	At system startup, when the IP protocol initializes, it sends an ARP request
	containing its own MAC and IP address so that other computers can update their
	ARP caches. If there is already a computer using the IP address, the "older"
	computer will respond with an ARP reply containing its MAC and IP address,
	indicating a conflict. Unfortunately, many other computers may have already
	updated their ARP caches with the new mapping. At that point, the "younger"
	computer that is initializing needs to do two things:
	
	1. Repair the ARP cache on all affected computers.
	
	2. Cease using the duplicate address.
	
	Computers running Microsoft TCP/IP will send out a new ARP broadcast to re- map
	the ARP cache on all affected computers. This new ARP will contain the MAC
	address and IP address of the older owner of the IP address. After sending this
	ARP, the IP protocol on the younger machine will report the problem to the user
	and the stack will shut down. The stack should not be re-started until a unique
	address is obtained. Note that the computer may still function at this point if
	another protocol such as NetBEUI is loaded.
	
	Below is a network trace illustrating this behavior. It was captured on a Token
	Ring network.
	
	Network Trace Illustrating Handling of Duplicate IP Addresses
	-------------------------------------------------------------
	
	1. At IP protocol startup, an ARP package is sent by the younger computer:
	
	  Frame  Time    Src MAC Addr  Dst MAC Addr   Protocol  Description
	  1      1.166   4000DDDD1111  BROADCAST      ARP_RARP  ARP: Request,
	                                                        Target IP:
	  11.1.9.221
	
	  + FRAME: Base frame properties
	    TOKENRING: Length =  50, Priority Normal (No token) LLC Frame
	      + TOKENRING: Access control = 24 (0x18) Repeated, Frame, Priority:
	        Normal (No token)
	      + TOKENRING: Frame control = 64 (0x40), LLC Frame
	      + TOKENRING: Destination address : FFFFFFFFFFFF
	      + TOKENRING: Source address      : 4000DDDD1111
	        TOKENRING: Frame length : 50 (0x0032)
	        TOKENRING: Tokenring data: Number of data bytes remaining = 36
	                   (0x0024)
	  + LLC: UI DSAP=0xAA SSAP=0xAA C
	  + SNAP: ETYPE = 0x0806
	    ARP_RARP: ARP: Request, Target IP: 11.1.9.221
	        ARP_RARP: Hardware Address Space = 6 (0x6)
	        ARP_RARP: Protocol Address Space = 2048 (0x800)
	        ARP_RARP: Hardware Address Length = 6 (0x6)
	        ARP_RARP: Protocol Address Length = 4 (0x4)
	        ARP_RARP: Opcode = 1 (0x1)
	        ARP_RARP: Sender's Hardware Address = 4000DDDD1111
	        ARP_RARP: Sender's Protocol Address = 11.1.9.221
	        ARP_RARP: Target's Hardware Address = FFFFFFFFFFFF
	        ARP_RARP: Target's Protocol Address = 11.1.9.221
	
	2. The older computer already using that address responds directly to the
	  younger computer with an ARP reply:
	
	  Frame  Time    Src MAC Addr  Dst MAC Addr   Protocol  Description
	  2      1.166   APRICT093738  4000DDDD1111   ARP_RARP  ARP: Reply, Target
	                                                        IP: 11.1.9.221
	  Target
	                                                        Hdwr Addr:
	                                                        4000DDDD000
	
	  + FRAME: Base frame properties
	    TOKENRING: Length =  50, Priority Normal (No token) LLC Frame
	      + TOKENRING: Access control = 16 (0x10) Original, Frame, Priority:
	        Normal (No token)
	      + TOKENRING: Frame control = 64 (0x40), LLC Frame
	      + TOKENRING: Destination address : 4000DDDD1111
	      + TOKENRING: Source address      : 0000C9093951
	        TOKENRING: Frame length : 50 (0x0032)
	        TOKENRING: Tokenring data: Number of data bytes remaining = 36
	                   (0x0024)
	  + LLC: UI DSAP=0xAA SSAP=0xAA C
	  + SNAP: ETYPE = 0x0806
	    ARP_RARP: ARP: Reply, Target IP: 11.1.9.221 Target Hdwr Addr:
	                   4000DDDD1111
	        ARP_RARP: Hardware Address Space = 6 (0x6)
	        ARP_RARP: Protocol Address Space = 2048 (0x800)
	        ARP_RARP: Hardware Address Length = 6 (0x6)
	        ARP_RARP: Protocol Address Length = 4 (0x4)
	        ARP_RARP: Opcode = 2 (0x2)
	        ARP_RARP: Sender's Hardware Address = 0000C9093951
	        ARP_RARP: Sender's Protocol Address = 11.1.9.221
	        ARP_RARP: Target's Hardware Address = 4000DDDD1111
	        ARP_RARP: Target's Protocol Address = 11.1.9.221
	
	3. The younger computer realizes its mistake, and broadcasts a corrective ARP to
	  map all ARP caches back to the MAC address of the older computer:
	
	  Frame  Time    Src MAC Addr   Dst MAC Addr  Protocol  Description
	  3      1.168   4000DDDD1111   BROADCAST     ARP_RARP  ARP: Request,
	                                                        Target IP:
	  11.1.9.221
	
	  + FRAME: Base frame properties
	    TOKENRING: Length =  50, Priority Normal (No token) LLC Frame
	      + TOKENRING: Access control = 24 (0x18) Repeated, Frame, Priority:
	                   Normal (No token)
	      + TOKENRING: Frame control = 64 (0x40), LLC Frame
	      + TOKENRING: Destination address : FFFFFFFFFFFF
	      + TOKENRING: Source address      : 4000DDDD1111
	        TOKENRING: Frame length : 50 (0x0032)
	        TOKENRING: Tokenring data: Number of data bytes remaining = 36
	                   (0x0024)
	  + LLC: UI DSAP=0xAA SSAP=0xAA C
	  + SNAP: ETYPE = 0x0806
	    ARP_RARP: ARP: Request, Target IP: 11.1.9.221
	        ARP_RARP: Hardware Address Space = 6 (0x6)
	        ARP_RARP: Protocol Address Space = 2048 (0x800)
	        ARP_RARP: Hardware Address Length = 6 (0x6)
	        ARP_RARP: Protocol Address Length = 4 (0x4)
	        ARP_RARP: Opcode = 1 (0x1)
	        ARP_RARP: Sender's Hardware Address = 0000C9093951    <----|
	        ARP_RARP: Sender's Protocol Address = 11.1.9.221      <----|
	        ARP_RARP: Target's Hardware Address = FFFFFFFFFFFF         |
	        ARP_RARP: Target's Protocol Address = 11.1.9.221           |
	                                                                   |
	                                                                   |
	
	  Here the IP address gets mapped back to the older computer's MAC address.
	
	Windows NT version 4.0 Service Pack 3
	-------------------------------------
	
	Microsoft changed the way a Windows NT TCPIP computer reacts to a duplicate IP
	address with Service Pack 3. This change has not been made in any of the other
	TCPIP stacks. The new method of resolving duplicate IP addresses is as follows:
	
	1. The "new" machine broadcasts an ARP request with its own MAC address andIP
	  address.
	
	2. The "older" computer will send an ARP reply directly back to the "newer"
	  computer, indicating a conflict.
	
	3. The "newer" computer will not initialize its TCP/IP stack.
	
	4. The "older" computer will send an ARP broadcast with its own MAC address and
	  IP address to ensure other computers have a correct ARP cache entry for the
	  IP address that was in conflict.
	
	Additional query words: prodtcp32 wfw wfwg 3.10
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW310 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS350 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS350search kbWinNTS310search kbAudDeveloper kbWinNT310Search kbWinNTW310Search kbLanManSearch kbWFWSearch kbLanMan220xSearch
	Version           : :2.2x,3.1,3.5,4.0
	
	=============================================================================
	

{% endraw %}
