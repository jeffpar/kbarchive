---
layout: page
title: "Q222085: How to Scale Microsoft Print Services Using WLBS"
permalink: kb/222/Q222085/
---

## Q222085: How to Scale Microsoft Print Services Using WLBS

	Article: Q222085
	Product(s): Microsoft Windows NT
	Version(s): 1.0,2000,4.0
	Operating System(s): 
	Keyword(s): kbnetwork kbprint
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 2000 Advanced Server 
	- Microsoft Windows 2000 Datacenter Server 
	- Microsoft Windows 2000 Professional 
	- Microsoft Windows 2000 Server 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Load Balancing Service 1.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article explains how to use the Windows NT Load Balancing Service (WLBS) to
	scale print services across the cluster.
	
	Requirements
	------------
	
	- Printer shares to be accessed by clients are identically available on all
	  cluster hosts.
	
	- Clients must be able to resolve the cluster's NetBIOS name to the cluster's
	  virtual IP address (VIP) by using WINS or LMHOSTS. This name is the host name
	  within the fully qualified domain name (FQDN) that is typed in the WLBS Setup
	  dialog box.
	
	- Use two network interface cards (NICs) on each cluster host. One NIC is for
	  the dedicated IP address, and the other one is for the virtual IP address.
	  Two NICs are needed because NBT binds only to the first IP address in a NIC,
	  and WLBS needs the VIP listed first to provide NBT support (single NIC WLBS
	  configurations require the dedicated IP address to be listed first to retain
	  normal access to the cluster host with its dedicated IP address).
	
	- Windows 2000 clients must use the cluster VIP instead of the cluster name
	  because Windows 2000 uses Direct Hosting (SMB over TCP/IP) which checks the
	  endpoint name of the cluster as a security feature (the check does not work
	  because the cluster name is not the one configured on the Network
	  Identification tab of system properties). If you use the cluster name instead
	  of the VIP, a "duplicate name" error message is returned.
	
	
	Configuring Port Rule
	---------------------
	
	Create a port rule for port 139, TCP and UDP, with Multiple Hosts filtering mode
	and Single client affinity.
	
	Accessing Cluster Printers
	--------------------------
	
	1. Map a printer port to the cluster's printer by typing the following command
	  at the command prompt:
	
	  "net use lpt<N>: \\<cluster>\printer" (without the quotation
	  marks)
	
	  where <N> is the LPT port number you want to use and <cluster> is
	  the cluster's NetBIOS name (or the cluster VIP address if you are using
	  Windows 2000).
	
	2. Set up a local printer to use the mapped lpt<N> port.
	
	MORE INFORMATION
	================
	
	WLBS does not support browsing. This is why the cluster printers have to be
	accessed by mapping a printer port. The cluster's NetBIOS name does not appear
	in Network Neighborhood. The cluster hosts will not advertise the cluster's
	NetBIOS name, but they will answer requests made to it.
	
	WLBS NBT support is enabled by default. You can disable this support by changing
	the NBTSupportEnable registry parameter from 1 to 0. For additional information
	about how to modify this parameter, click the article number below to view the
	article in the Microsoft Knowledge Base:
	
	  Q193601 Registry Parameters for Windows NT Load Balancing Service
	
	For additional information about Direct Hosting and the new endpoint name
	checking feature in Windows 2000, click the article number below to view the
	article in the Microsoft Knowledge Base:
	
	  Q254210 Cannot Use Net View \\Localhost Command
	
	Additional query words: load balancing convoy
	
	======================================================================
	Keywords          : kbnetwork kbprint 
	Technology        : kbWinNTsearch kbWinNT400search kbwin2000AdvServ kbwin2000AdvServSearch kbwin2000DataServ kbwin2000DataServSearch kbwin2000Serv kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400 kbWinNTLBS100 kbWinNTLBSSearch kbwin2000ServSearch kbwin2000Search kbwin2000ProSearch kbwin2000Pro kbWinAdvServSearch kbWinDataServSearch
	Version           : :1.0,2000,4.0
	Issue type        : kbinfo
	
	=============================================================================
	
