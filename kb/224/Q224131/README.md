---
layout: page
title: "Q224131: Network Switch w/ Full-Duplex Incompatible w/ Half-Duplex NICs"
permalink: /kb/224/Q224131/
---

## Q224131: Network Switch w/ Full-Duplex Incompatible w/ Half-Duplex NICs

	Article: Q224131
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbhw kbHardware
	Last Modified: 25-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Clients cannot log on to the domain controllers. Additional NetBIOS traffic
	problems are:
	
	- Loss of connectivity between servers resulting in servers being unavailable
	  in Server Manager.
	
	- Trust relationships failing to work and failing to be created.
	
	- Other connectivity where sessions for two-way are required.
	
	The primary domain controller (PDC) forces a browsing election every 12 minutes
	and generates the following event:
	
	  Event ID: 8003
	
	  Description: The master browser has received a server announcement from the
	  Windows NT client that believes that it is the master browser for the domain
	  on transport (NetBT). The master browser is stopping or an election is being
	  forced.
	
	The client computer is located in a different subnet, and UDP 137 and 138
	broadcasts are not being forwarded.
	
	CAUSE
	=====
	
	This problem occurs when network logon validation is prevented over a network
	switch.
	
	The network switch prevents the server from authenticating the client. The
	two-way communication session necessary for logon validation is prevented. The
	Windows NT client computer that cannot successfully communicate with the Windows
	NT server acting as the subnet master browser may cause a browser election,
	which causes the Event ID 8003 error to be registered on the PDC.
	
	RESOLUTION
	==========
	
	Network switches and server network interface cards (NICs) have to have the
	duplex settings matched for NetBIOS communication to function properly. Both
	need to be either full-duplex or half-duplex, but they cannot be mismatched.
	
	Browser elections resolution: Some OEM FDDI adapters configured for full-duplex
	might be incompatible with some network switches. When the OEM FDDI cards were
	replaced with full-duplex cards, the browsing elections went away.
	
	MORE INFORMATION
	================
	
	Troubleshooting Steps
	---------------------
	
	1. Removed any unnecessary protocols besides TCP/IP and attempt to log on.
	
	2. Put the client and the server on a passive hub and attempt to log on. This
	  eliminates the network switch from the logon process; if communication
	  resumes, it points to network switch configuration issues.
	
	3. Reset switch, restart the client, and test the connectivity.
	
	4. Ping across the switch by IP address from client to server or server to
	  client. This may work in spite of connectivity issues; ping is broadcast
	  based and not a session controlled three-way communication.
	
	5. Check the switch configuration settings for duplex settings and also check
	  the server's NIC for duplex settings. If the network switch and server NIC
	  are mismatched with one on full-duplex and the other half-duplex, the
	  three-way communication will be prevented and NetBIOS connectivity will fail.
	
	6. Replaced the half-duplex NIC on the server with a full-duplex and test. This
	  may be required to avoid the mismatch if the network switch and/or the
	  server's NIC are not configurable. It is a more dramatic step than
	  reconfiguring devices, but has proven to be a sound solution. Resetting the
	  server NIC to half-duplex will lose communication again.
	
	Additional query words: hub router connectivity bridging
	
	======================================================================
	Keywords          : kbhw kbHardware 
	Technology        : kbWinNTsearch kbWinNT400xsearch kbWinNTSsearch kbWinNTS400xsearch kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	
