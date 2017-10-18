---
layout: page
title: "Q164590: Branch Servers Using DLS Cannot Communicate Through Firewalls"
permalink: kb/164/Q164590/
---

## Q164590: Branch Servers Using DLS Cannot Communicate Through Firewalls

	Article: Q164590
	Product(s): Microsoft SNA Server
	Version(s): 3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, version 3.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	
	SYMPTOMS
	========
	
	Branch-based SNA Servers that use a Remote Link Service may not be able to
	communicate with a Central SNA Server if there are Internet firewalls or
	screening routers between the SNA Server systems.
	
	CAUSE
	=====
	
	You can configure Central SNA Servers that are distributing link services for
	remote SNA servers to use specific software port numbers. This allows
	administrators of Internet firewalls to filter packets based on port number,
	thereby denying/accepting their propagation to the private network.
	
	Branch (or Remote) SNA Servers that use the Remote Link Service to communicate
	with the Central SNA Servers, use dynamic ports. The Distributed Link Service is
	installed on the branch server, as installed via SNA Server Manager (which
	appears with a link service name of SnaRemx within SNA Server Manager). Because
	these remote servers use dynamic ports, administrators could not determine what
	port number would be used, thereby limiting their ability to filter packets
	based on port numbers.
	
	RESOLUTION
	==========
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	The SNA Server transport DLLs were modified to support registry entries that can
	be used to set fixed port numbers over the protocols supported by distributed
	link services. The supported protocols are TCP/IP, IPX/SPX, and Banyan Vines
	IP.
	
	The updated SNA Server modules and registry entries below must be implemented on
	the branch (remote) SNA Server that is using the distributed link service.
	
	Normally the distributed link service (running on the central box, such as
	SnaDlcX - for 802.2, SnaChanX - for Channel, etc) opens a dynamic port number.
	The following registry setting can be used to set the port number used by the
	link service:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\<linkservice>\Parameters\
	
	If TCP/IP:
	
	  IpPort: REG_DWORD:
	
	If Netware IPX/SPX:
	
	  IpxPort: REG_DWORD:
	
	If Banyan Vines:
	
	  VinesPort: REG_DWORD:
	
	For example:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\SnaRem1\Parameters\LocalIpPort:
	  REG_DWORD: 1479 (decimal)
	
	The firewall must be configured to allow TCP/IP traffic to and from the port
	number used by the distributed link service running on the central server.
	
	It should not be necessary to set the local port number used by the remote link
	service (i.e. SnaRemX) running on the branch system, so that a dynamic port
	number is always used by SnaRemX.
	
	WARNING: If you configure fixed IP ports on both ends, you will be unable to
	reopen a connection for several minutes after it is disconnected. This is due to
	the TcpTimedWaitDelay, per TCP/IP RFC793.
	
	However, if you must set the local port number that is used by the remote link
	service (SnaRemX), the following registry setting can be used to set the port
	number used by the link service:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\SnaRemX\Parameters\
	
	If TCP/IP:
	
	  LocalIpPort: REG_DWORD:
	
	If Netware IPX/SPX:
	
	  LocalIpxPort: REG_DWORD:
	
	If Banyan Vines:
	
	  LocalVinesPort: REG_DWORD:
	
	Where "X" is the link service name. Note that there may be several "SnaRemx" link
	services installed on the branch server. The names default to SnaRem1, SnaRem2,
	and so forth.
	
	For example:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\SnaRem1\Parameters\IpPort:
	  REG_DWORD: 1479 (decimal)
	
	The following files were modified to provide this support:
	
	  <snaroot>\system\snaip.dll <snaroot>\system\snanw.dll
	  <snaroot>\system\snabv.dll
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server version 3.0. This
	problem was corrected in the latest Microsoft SNA Server 3.0 U.S. Service Pack.
	For information on obtaining the service pack, query on the following word in
	the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	MORE INFORMATION
	================
	
	If a connection is configured to activate "On Demand" or "By Admin" the node
	issues an initial Open Link request. When the connection is activated, the node
	issues a Close Link request, then an Open Link request for the actual
	connection. If a DLS link service (SNAREMx) is configured to use a fixed IP port
	number (LocalIPport registry entry), the second Open Link request will fail
	because the port will be in a Time_Wait state from the first Open/Close Link.
	
	The workaround for this problem is to add the registry entry LocalIPPortRange.
	This will allow the link service to use additional ports. This registry entry is
	also necessary to allow the connection to recover or be recycled in a timely
	fashion. For more information about the LocalIPPortRange registry entry, please
	see the following Microsoft Knowledge Base article:
	
	  Q224303 SNA Server Allows Range of IP Ports With Distributed Link Service
	
	For additional information regarding SNA Server and Internet firewalls, please
	see the following article in the Microsoft Knowledge Base:
	
	  Q139508 Internet Firewall Support in SNA Server
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300
	Version           : :3.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
