---
layout: page
title: "Q94069: Microsoft TCP/IP Protocol Comparison and FAQ"
permalink: /kb/094/Q94069/
---

## Q94069: Microsoft TCP/IP Protocol Comparison and FAQ

	Article: Q94069
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): 2.2c,3.0,3.1,3.11,3.11b,3.5,3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.1, 3.5, 3.51 
	- Microsoft Windows NT Workstation versions 3.1, 3.5, 3.51 
	- Microsoft Windows NT Advanced Server, version 3.1 
	- Microsoft Network Client for MS-DOS version 3.0 
	- Microsoft LAN Manager, version 2.2c 
	- Microsoft Windows for Workgroups version 3.11 
	- Microsoft TCP/IP-32 for Windows for Workgroups, version 3.11b 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	This article describes the feature sets available in the following Microsoft
	TCP/IP protocols:
	
	- MS-DOS TCP/IP for Microsoft Network Client and Microsoft LAN Manager for
	  MS-DOS, version 2.2c (Basic and Enhanced Clients)
	
	- Microsoft LAN Manager for MS OS/2 Client TCP/IP
	
	- Microsoft TCP/IP for Windows for Workgroups
	
	- Microsoft TCP/IP-32 for Windows for Workgroups, version 3.11b
	
	- Microsoft TCP/IP for Microsoft Windows NT (included with Windows NT versions
	  3.1, 3.5, and 3.51)
	
	At the end of this article you can also find general Microsoft TCP/IP questions
	and answers.
	
	MS-DOS TCP/IP FOR MICROSOFT NETWORK CLIENT AND MICROSOFT LAN MANAGER FOR MS-DOS,
	VERSION 2.2C (BASIC AND ENHANCED CLIENTS)
	
	Identical TCP/IP on Both Clients
	--------------------------------
	
	Identical TCP/IP protocols ship with both MS-DOS-based clients. These
	MS-DOS-based clients support:
	
	- An MS-DOS-based interface.
	
	- Domain Name Resolver (DNR) (to resolve hostname-to-IP address mappings) if
	  your network has a domain name server (DNS).
	
	- For Dynamic Host Configuration Protocol (DHCP) clients.
	
	- WINS resolution.
	
	- Windows Sockets.
	
	These MS-DOS-based clients do not support following features that are provided by
	TCP/IP-32 for Windows for Workgroups version 3.11 and Windows NT version 3.5:
	
	- Support for DNS resolution using WINS.
	
	- Support for WINS resolution using DNS.
	
	- Name registration with the WINS database. (MS-DOS-based computers are
	  clients, not servers, and do not generally need registration.)
	
	- Ability to act as a WINS proxy node.
	
	- Multihomed support.
	
	- Support for Internet Group Management Protocol (IGMP).
	
	- DHCP command-line switches for IPCONFIG.EXE (use the DHCP Administration
	  utility instead). Specifically, IPCONFIG.EXE does not support the following
	  switches, which are available in the IPCONFIG.EXE utilities for Windows for
	  Workgroups and for Windows NT:
	
	     IPCONFIG /release
	     IPCONFIG /renew
	     IPCONFIG /?
	     IPCONFIG /all
	
	The MS-DOS TCP/IP client is available on the Windows NT Server CD and can be
	download from:
	
	  ftp://ftp.microsoft.com/bussys/Clients/WFW
	
	MICROSOFT LAN MANAGER FOR MS OS/2 CLIENTS TCP/IP
	------------------------------------------------
	
	Microsoft LAN Manager for MS OS/2 Client TCP/IP:
	
	- Does not ship with Network File System (NFS) support. Third party
	  applications such as Chameleon NFS from Netmanage and NFS from FTP Software
	  Incorporated provide this functionality.
	
	- Does not ship with line printer daemon (LPD) support. Third-party vendors
	  provide this support.
	
	- Does not support DHCP or WINS.
	
	- Can only be bound to one network card.
	
	- Supports Token Ring source routing over TCP/IP.
	
	NOTE: You cannot connect to a network drive from an MS-DOS session nor from
	Windows running under OS/2. You must make the connection using the LAN Manager
	Net interface or using the NET USE command at an OS/2 command prompt. The
	redirected drive letter is then available when you switch to an MS-DOS or
	Windows session.
	
	Microsoft LAN Manager for MS OS/2 Client is available on the Windows NT Server
	CD.
	
	MICROSOFT TCP/IP FOR WINDOWS FOR WORKGROUPS
	-------------------------------------------
	
	Microsoft TCP/IP for Windows for Workgroups includes the NDIS 2 protocol to
	support connecting computers running Windows for Workgroups or computers running
	Windows for Workgroups to Windows NT and Windows NT Advanced Server.
	
	Microsoft TCP/IP for Windows for Workgroups does not include any TCP/IP
	utilities; however, support for Windows Sockets is provided, which allows any
	Windows Sockets-compatible TCP/IP utilities (including terminal emulators and
	file transfer programs) to be used.
	
	MICROSOFT TCP/IP-32 FOR WINDOWS FOR WORKGROUPS, VERSION 3.11B
	-------------------------------------------------------------
	
	Microsoft TCP/IP-32 for Windows for Workgroups is an NDIS 3 protocol that
	includes:
	
	- Core TCP/IP protocols, including Transmission Control Protocol (TCP),
	  Internet Protocol (IP), User Datagram Protocol (UDP), Address Resolution
	  Protocol (ARP), and Internet Control Message Protocol (ICMP). This suite of
	  Internet protocols provides a set of standards for how computers communicate
	  and how networks are interconnected.
	
	- Support for application interfaces, including Windows Sockets for network
	  programming and NetBIOS for establishing logical names and sessions on the
	  network.
	
	- Basic TCP/IP connectivity applications, including ftp and telnet. These
	  utilities allow Windows for Workgroups users to interact with and use
	  resources on non-Microsoft hosts, such as UNIX workstations.
	
	- TCP/IP diagnostic tools, including arp, ipconfig, nbtstat, netstat, ping,
	  route, and tracert. These utilities can be used to detect and resolve TCP/IP
	  networking problems.
	
	- Support for DHCP automatic configuration.
	
	- Industry standard Windows Sockets 1.1 support for third-party and public
	  domain TCP/IP applications such as NCSA Mosaic.
	
	This version of TCP/IP does not:
	
	- Include server-side applications for telnet and ftp.
	
	- Include LPR and Gopher.
	
	- Support an MS-DOS-based interface (you an use Windows Sockets instead).
	
	- Support SLIP and PPP to dial in to the Internet.
	
	- Support NFS (although it will likely be provided by third-party vendors).
	
	Microsoft TCP/IP-32 for Windows for Workgroups is available on the Windows NT
	Server CD and can be download from:
	
	  ftp://ftp.microsoft.com/bussys/Clients/WFW
	
	NOTE: For more information on the specific bugs fixed in Microsoft TCP/IP-32
	version 3.11b, query here in the Microsoft Knowledge Base on:
	
	  TCP/IP-32 and 3.11b
	
	MICROSOFT TCP/IP FOR MICROSOFT WINDOWS NT VERSION 3.1
	-----------------------------------------------------
	
	Microsoft TCP/IP for Microsoft Windows NT version 3.1 features:
	
	- Core TCP/IP protocols, including Transmission Control Protocol (TCP),
	  Internet Protocol (IP), User Datagram Protocol (UDP), Address Resolution
	  Protocol (ARP), and Internet Control Message Protocol (ICMP).
	
	- Support for application interfaces, including Windows Sockets for network
	  programming, remote procedure call (RPC) for communicating between systems,
	  NetBIOS for establishing logical names and sessions on the network, and
	  network dynamic data exchange (Network DDE) for sharing information embedded
	  in documents across the network.
	
	- Basic TCP/IP connectivity applications, including ftp, rcp, rsh, telnet, and
	  tftp. These utilities allow Windows NT users to interact with and use
	  resources on non-Microsoft hosts, such as UNIX workstations.
	
	- TCP/IP diagnostic tools, including hostname, netstat, ping, and route. These
	  utilities can be used to detect and resolve TCP/IP networking problems.
	
	- Simple Network Management Protocol (SNMP) agent. This component allows a
	  Windows NT computer to be administered remotely using management tools such
	  as Sun Net Manager or HP Open View.
	
	MICROSOFT TCP/IP FOR MICROSOFT WINDOWS NT VERSIONS 3.5 AND 3.51
	---------------------------------------------------------------
	
	Microsoft TCP/IP for Microsoft Windows NT versions 3.5 and 3.51 features:
	
	- New (completely rewritten) core TCP/IP protocols, including Transmission
	  Control Protocol (TCP), Internet Protocol (IP), User Datagram Protocol (UDP),
	  Address Resolution Protocol (ARP), and Internet Control Message Protocol
	  (ICMP). This suite of Internet protocols provides a set of standards for how
	  computers communicate and how networks are interconnected. Support is also
	  provided for Point-to- Point Protocol (PPP) and Serial-Line IP (SLIP),
	  protocols used for dial-up access to TCP/IP networks, including the Internet.
	
	- Support for application interfaces, including Windows Sockets for network
	  programming, remote procedure call (RPC) for communicating between systems,
	  NetBIOS for establishing logical names and sessions on the network, and
	  network dynamic data exchange (Network DDE) for sharing information embedded
	  in documents across the network.
	
	- Basic TCP/IP connectivity applications, including finger, ftp, lpr, rcp,
	  rexec, rsh, telnet, and tftp. These utilities allow Windows NT users to
	  interact with and use resources on non-Microsoft hosts, such as UNIX
	  workstations.
	
	- TCP/IP diagnostic tools, including arp, hostname, ipconfig, lpq, nbtstat,
	  netstat, ping, route, and tracert. These utilities can be used to detect and
	  resolve TCP/IP networking problems.
	
	- Services and related administrative tools, including the FTP Server service
	  for transferring files between remote computers, Windows Internet Name
	  Service (WINS) for dynamically registering and querying computer names on an
	  internetwork, Dynamic Host Configuration Protocol (DHCP) service for
	  automatically configuring TCP/IP on Windows NT computers, and TCP/IP printing
	  for accessing printers connected to a UNIX workstation or connected directly
	  to the network through TCP/IP.
	
	- Simple Network Management Protocol (SNMP) agent. This component allows a
	  Windows NT computer to be administered remotely using management tools such
	  as Sun Net Manager or HP Open View. SNMP can also be used to monitor and
	  manage DHCP and WINS.
	
	- The client software for simple network protocols, including Character
	  Generator, Daytime, Discard, Echo, and Quote of the Day. These protocols
	  allow a Windows NT computer to respond to requests from other systems that
	  support these protocols.
	
	GENERAL MICROSOFT TCP/IP QUESTIONS AND ANSWERS
	----------------------------------------------
	
	1. Q. What is the Windows Sockets standard?
	
	  A. The Windows Sockets standard is an open interface for network programming
	  under Microsoft Windows. Some of the companies originally involved in writing
	  the specification were JSB Corporation, FTP Software Inc., Sun Microsystems,
	  and Microsoft Corp.
	
	  On the Internet it can be found by using anonymous FTP to VAX.FTP.COM or
	  FTP.UU.NET. You can also use the archie service on the Internet to find the
	  one closest to you. You can request information by sending email to:
	  winsock@ftp.com.
	
	2. Q. What is the difference between a Windows NT domain and a Domain Name
	  Server (DNS) domain?
	
	  A. A Windows NT domain is a collection of computers that share a common user
	  account database and security policy. A DNS domain is used by computers on
	  the Internet. It is typically used for distributing a host file across a
	  network. However, it can also be used to distribute any form of information.
	
	3. Q. What is the difference between WINS and DNS?
	
	  A. The Domain Name System (DNS) proxy agent in the Windows NT version 3.5x
	  Resource Kit improves the integration of Dynamic Host Configuration Protocol
	  (DHCP) and Windows Internet Name Service (WINS). DHCP is a protocol for
	  automatic TCP/IP configuration that provides static and dynamic address
	  allocation and management. WINS is a name resolution service that resolves
	  Windows networking computer names to IP addresses in a routed environment.
	  DNS requires static configuration for computer name-to-IP address mapping,
	  while WINS is fully dynamic and requires far less administration.
	
	REFERENCES
	==========
	
	MS-DOS Client README.TXT file
	Microsoft LAN Manager for MS OS/2 Clients README.TXT file
	Microsoft TCP/IP for Windows for Workgroups Help file (MSTCPIP.HLP)
	Microsoft TCP/IP-32 for Windows for Workgroups Help file (MTCPIP32.HLP)
	Microsoft Windows NT TCP/IP Help (TCPIP.HLP)
	
	Additional query words: wfw wfwg prodtcp32 tcpip tcp ip prodnt 1.00 2.10 2.10a 2.20 3.10 3.11 3.11b winsock
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTW310 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS351search kbWinNTS350search kbWinNTS310search kbAudDeveloper kbWinNT310Search kbWinNTW310Search kbZNotKeyword kbTCPIPSearch kbLanManSearch kbWFWSearch kbZNotKeyword3 kbNetworkClientSearch kbWFW311 kbLanMan220c kbNetworkClient300DOS kbTCPIP311b
	Version           : :2.2c,3.0,3.1,3.11,3.11b,3.5,3.51
	
	=============================================================================
	
