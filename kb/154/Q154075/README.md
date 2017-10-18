---
layout: page
title: "Q154075: Trimming LAN Manager Server Service to Tune Applications"
permalink: kb/154/Q154075/
---

## Q154075: Trimming LAN Manager Server Service to Tune Applications

	Article: Q154075
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When Microsoft Windows NT Server is installed, the Microsoft LAN Manager Server
	service ("Server" in the list of installed network software/services) in Control
	Panel Network is configured to maximize file server performance. However, if you
	install Microsoft SQL Server, the server is changed to maximize performance for
	network applications. With both settings, server service will allocate a
	considerable amount of memory for internal buffers and tables, depending on the
	amount of physical memory installed.
	
	However, this setting is only reasonable if the Server service is used during
	normal operation. If the computer running Windows NT Server is primarily used
	for application services, this memory should be used for other components. All
	inter-process communication, except Named Pipes, does not use Server service.
	However, all remote administration, except DHCP and WINS, and Windows NT-based
	printing is currently done with remote call procedures (RPCs) over Named Pipes.
	Therefore, if you are not using file sharing and Named Pipes, except for remote
	administration, you can set the server service for other options in Control
	Panel as described below in the More Information section.
	
	MORE INFORMATION
	================
	
	To set the memory usage of server service, open the Network tool in Control
	Panel, and double-click the entry for Server. A dialog box will show four
	selections:
	
	- Minimize Memory Used
	
	- Balance
	
	- Maximize Throughput for File Sharing
	
	- Maximize Throughput for Network Applications
	
	These settings effect several internal server buffers and table allocation sizes
	(number of request buffers, etc.) and rules (minimum number of pre-allocated
	memory objects for new connections, and so forth). The latter two settings have
	the same regulations for server service but effect the system cache size.
	
	If you do not have any clients connecting to server service except remote
	administration, you can set it to Minimize; if there are only a few clients you
	can set it to Balance.
	
	Here is a list of application services that benefit from changing this setting to
	Minimize Memory Used:
	
	- RAS Server
	
	- Services for Macintosh
	
	- DHCP Server
	
	- WINS Server
	
	- Internet Information Server
	
	- Domain Name Service (DNS) Server (Windows NT 4.0 only)
	
	- Microsoft File and Print Services for NetWare (also has a memory size
	  setting)
	
	- Microsoft Site Server
	
	- Microsoft Commercial Internet Services
	
	- Other application servers, like SAP R/3 server and Oracle SQL server (uses
	  Sockets) or Lotus Notes server (uses NETBIOS)
	
	These services can also be optimized this way if the clients do not connect to it
	with Named Pipes:
	
	- Microsoft SNA Server (IPX and TCP sockets available since versions 2.1x)
	
	- Microsoft SQL Server
	
	- Microsoft Systems Management Server
	
	- Microsoft Exchange Server
	
	- Microsoft Transaction Server
	
	- Microsoft Message Queue Server
	
	Services and functions that suffer from the customization to Minimize Memory Used
	are:
	
	- Windows NT File and Print Services for Microsoft Network Clients
	
	- Windows NT Primary Domain Controllers
	
	- Windows NT Backup Domain Controllers
	
	The problems you might experience when you configure the Server service for too
	little memory are intermittent connection failures (for example, "not enough
	server memory to process this request"), or problems connecting (for example,
	"server refused the connection").
	
	In one instance, this setting was changed to Minimize on an R/3 server with
	Oracle database; the time for the database import was reduced by 30 percent.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : winnt:3.5,3.51,4.0
	
	=============================================================================
	
