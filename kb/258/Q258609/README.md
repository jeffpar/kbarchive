---
layout: page
title: "Q258609: WLBS Cluster Appears to Stop Servicing Clients"
permalink: kb/258/Q258609/
---

## Q258609: WLBS Cluster Appears to Stop Servicing Clients

	Article: Q258609
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Host members of a Windows Load Balancing Service (WLBS) cluster that is
	configured to operate in Unicast mode (Multicast support is disabled) and is
	directly connected to a switch may suddenly stop servicing clients. Rebooting
	the cluster hosts appears to correct the problem.
	
	CAUSE
	=====
	
	By default, WLBS masks the cluster's virtual media access control (VMAC) address
	when sending packets to prevent a switch from learning the VMAC address and
	associating it with a port (for WLBS to work properly, packets going to the
	virtual IP address must reach all cluster hosts). If the switch associates the
	VMAC address with a port, packets going to the virtual IP address are sent to
	just the cluster host that is connected to the port on which the switch created
	the association in its index table.
	
	The full Microsoft Systems Management Server (SMS) version of Network Monitor
	(Netmon) binds to the adapter below the WLBS NDIS miniport driver and has a
	security feature that emits Logical Link Control (LLC) frames when capturing
	data to warn other computers in the local area network (LAN) that packets are
	being sniffed. Because these LLC frames originate from the Netmon driver below
	the WLBS driver, WLBS has no chance to mask the VMAC address. The switch would
	then add an entry in its Index table mapping the VMAC address to the port from
	which it received the LLC frame. Packets with a destination of the virtual IP
	address would only reach the host that sent the LLC frame. This host would not
	service clients that are supposed to be serviced by the other cluster hosts.
	
	RESOLUTION
	==========
	
	Do not use the SMS version of Network Monitor in a WLBS cluster host if cluster
	operations rely on WLBS masking the cluster VMAC address.
	
	MORE INFORMATION
	================
	
	This behavior does not occur in Microsoft Windows 2000 because the SMS version
	of Netmon binds to the Network Load Balancing (NLB) component.
	
	For additional information, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q193602 Configuration Options for WLBS Hosts Connected to Layer 2 Switch
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	
