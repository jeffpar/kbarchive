---
layout: page
title: "Q129593: Windows NT Workstation and Server Optimized For Different Roles"
permalink: /kb/129/Q129593/
---

## Q129593: Windows NT Workstation and Server Optimized For Different Roles

	Article: Q129593
	Product(s): Microsoft Windows NT
	Version(s): 3.5 4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 4.0 
	- Microsoft Windows NT Server versions 3.5, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article discusses the roles for which Windows NT Workstation and Windows NT
	Server are optimized.
	
	MORE INFORMATION
	================
	
	Microsoft optimized both Windows NT Workstation and Windows NT Server to better
	serve their intended purposes. Windows NT Workstation is a great corporate
	client for users who need the power, scalability, fault tolerance, or security
	it offers. Windows NT Server is a powerful server environment for customers who
	want to leverage its application server, file and print services, or remote
	access capabilities. The following optimizations were made in Windows NT version
	3.5:
	
	- The write-throttling mechanism (the point at which dirty data is flushed to
	  disk) is implemented differently for the Windows NT Server and Windows NT
	  Workstation. This allows the server to handle server-like loads and the
	  workstation to handle desktop-like tasks.
	
	- The internal code that provides the Windows NT Server server functionality
	  (SRV.SYS) is less pagable. This leads to better response times under heavy
	  server-type loads.
	
	- Under Windows NT Workstation, the Windows NT Virtual DOS Machine (VDM) is
	  pre-loaded for improved application startup times. Windows NT Server does not
	  pre-load the VDM, but instead optimizes server file operations.
	
	- Windows NT Workstation and Windows NT Server use a different number of system
	  worker threads and threads for blocking operations. Windows NT Server is
	  optimized for fast server type I/O operations and Windows NT Workstation is
	  optimized for desktop applications.
	
	- Windows NT Server can be optimized for file and print server performance or
	  application server performance, allowing you to tune it for maximum
	  throughput depending on the type of server usage. Windows NT Workstation does
	  not have this feature. Internal testing has also shown that Windows NT
	  Workstation performs about the same as Windows NT Server up to approximately
	  10 different, simultaneous inbound user connections. This enables Windows NT
	  Workstation to function well in a small peer environment. Windows NT Server
	  is the correct choice if you want to deploy a server in a larger environment
	  or want to scale your network in the future.
	
	These optimizations changed the performance of Windows NT Workstation when used
	as a server. As a result, peer networking is still supported for basic
	connectivity between users on a network. You can still make unlimited outbound
	connections to server resources. However, Windows NT Workstation now supports a
	maximum of 10 simultaneous inbound connections. Our research has shown that
	systems with this many connections are almost always being used as dedicated
	file, print and/or application servers.
	
	While Windows NT Server can certainly provide excellent file and print services,
	it can also be used extensively as an application server platform for database
	and other services. The Windows NT Server file and print capabilities can be
	selectively implemented.
	
	Windows NT Server includes the following capabilities not available on Windows NT
	Workstation:
	
	- Dynamic Host Configuration Protocol (DHCP) server service (Both Windows NT
	  Workstation and Server have DHCP Protocol)
	
	- Windows Internet Naming Service (WINS)
	
	- Single network logon
	
	- Data protection features (disk striping, RAID 5, disk mirroring)
	
	- Remote Access Server service can handle 255 concurrent incoming calls
	  (Windows NT Workstation limited to one incoming call)
	
	- Gateway Services for NetWare(GSNW)
	
	- Gateway to NetWare file and print resources for MS network clients
	
	
	- Services for Macintosh (allows Macintosh clients to access file and print
	  resources on the Windows NT Server, and allows Microsoft network and
	  Macintosh clients to access AppleTalk-based printers)
	
	- Netlogon request authentication (for running logon scripts)
	
	- Account lockout security
	
	- Network Client Administrator
	
	- Administrative tools (Server Manager, User Manager for Domains)
	
	- Support for remote boot of diskless workstations (RPL)
	
	Because Windows NT Server is optimized as a server platform, it is required to
	run Microsoft BackOffice products (Systems Management Server, SNA Server, SQL
	Server, and the upcoming Exchange Server).
	
	Microsoft recommends Windows NT Workstation as a desktop operating system and
	Windows NT Server as a server operating system for server applications. This
	provides you an environment that is architecturally very clean, since both the
	desktop and server are running the same operating system, and have the same
	APIs, etc.
	
	Additional query words: prodnt difference comparison
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS350 kbWinNTS350search
	Version           : 3.5 4.0
	
	=============================================================================
	
