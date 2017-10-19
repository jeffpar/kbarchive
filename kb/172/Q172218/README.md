---
layout: page
title: "Q172218: Microsoft TCP/IP Host Name Resolution Order"
permalink: /kb/172/Q172218/
---

## Q172218: Microsoft TCP/IP Host Name Resolution Order

	Article: Q172218
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): 3.0,3.5,3.51,4.0,95
	Operating System(s): 
	Keyword(s): kbnetwork win95
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows 95 
	- Microsoft TCP/IP-32 for Windows for Workgroups 
	- Microsoft LAN Manager 
	- Microsoft Network Client for MS-DOS version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article discusses the different methods of host name to IP address
	resolutions used by Microsoft Windows clients. The sequence of methods is
	different than the sequence used to resolve NetBIOS names to IP addresses.
	
	MORE INFORMATION
	================
	
	On a network using the TCP/IP protocol, it is necessary to convert names of
	resources to IP addresses to connect to these resources. Microsoft Windows
	clients will follow a sequence of methods in attempting to resolve a name to an
	address, stopping the search when it successfully matches a name to an IP
	address.
	
	There are two main sequences used in almost all cases: NetBIOS resolution and
	Host name resolution. Clients connecting to resources on Microsoft servers,
	typically through Windows File Manager or Network Neighborhood, most often use
	NetBIOS name resolution.
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q119493 NetBIOS over TCP/IP Name Resolution and WINS
	
	
	Host name resolution resolves the names of TCP/IP resources that do not connect
	through the NetBIOS interface. The most common example of this is a Web browser
	such as Microsoft Internet Explorer. Other examples include Internet
	applications such as Ping, FTP, and Telnet. Many modern database and mail
	applications that connect using Winsock, the Microsoft Windows implementation of
	TCP/IP sockets, also use host name resolution. Examples of these types of
	applications are Outlook and Exchange.
	
	When troubleshooting name resolution issues, it is important to narrow down
	whether the application is resolving a NetBIOS name or a host name.
	
	NOTE: In the context of this article, the term "client" does not necessarily
	refer to a workstation. A Windows NT server will take the role of client when it
	requires access to resources that require host name resolution.
	
	Host name resolution generally uses the following sequence:
	
	1. The client checks to see if the name queried is its own.
	
	2. The client then searches a local Hosts file, a list of IP address and names
	  stored on the local computer.
	
	  NOTE: The Hosts file location depends on the operating system:
	
	  Windows NT                  %Systemroot%\System32\Drivers\Etc
	  Windows 95                  <drive>\<Windows folder>
	  Windows for Workgroups      <drive>\<Windows folder>
	  Windows 3.1                 <drive>\<Windows folder>
	  MS-Client 3.0               <Boot volume>\Net
	  Lan Manager 2.2c Client     <Boot volume>\Net
	
	  Where %Systemroot% is the folder in which Windows NT is installed,
	  <drive> is the drive on which the OS is installed, and <boot
	  volume> refers to a boot floppy disk or drive C.
	
	  A sample hosts file, Hosts.sam, is installed with the TCP/IP protocol showing
	  the proper format.
	
	3. Domain Name System (DNS) servers are queried.
	
	4. If the name is still not resolved, NetBIOS name resolution sequence is used
	  as a backup. This order can be changed by configuring the NetBIOS node type
	  of the client.
	
	The Windows client will try each of these methods until it either successfully
	resolves the name or exhausts these methods. Windows NT, Windows 95, and Windows
	for Workgroups clients using Microsoft TCP/IP 3.11b follow this sequence. Lan
	Manager 2.2c or Microsoft Client 3.0 clients will not use NetBIOS name
	resolution as a backup.
	
	For additional information, please see the following articles in the Microsoft
	Knowledge Base:
	
	  Q169141 NetBIOS and hostname resolution for MS-Client and LM 2.2c
	
	When resolving names the client will skip methods for which it is not configured.
	For example, if there is no hosts file on the system, then it will skip step #2
	above and try a query to a DNS server. If no DNS server IP addresses are entered
	in the client TCP/IP configuration, then the client will skip to the next step
	in the sequence after DNS.
	
	The method for changing host name resolution order differs among operating
	systems and versions. These are documented in the Resource Kits for the specific
	operating systems, as well as in the Microsoft Knowledge Base.
	
	For additional information, please see the following articles in the Microsoft
	Knowledge Base:
	
	  Q171567 Windows NT 4.0 ServiceProvider Priority Values Not Applied
	
	  Q139270 How to Change Name Resolution Order on Windows 95 and Windows NT
	
	
	  Q119372 Setting the Name Resolution Search Order for TCP/IP-32
	
	
	Troubleshooting
	---------------
	
	Problem: Client is unable to resolve a host name.
	
	Troubleshooting steps:
	
	If a client cannot resolve a host name, then it is best to verify the Host name
	resolution sequence listed above that the client should be using. If the name
	does not exist in any of the resources that the client uses, then you must
	decide to which resource to add it. If the name exists in one of the resources,
	such as a DNS server or a Windows Internet Name Service (WINS) server and the
	client is not resolving the name correctly, focus your attention on
	troubleshooting that specific resource.
	
	Also, confirm that the client is trying to resolve a host name and not a NetBIOS
	name. Many applications have multiple methods that they can utilize to resolve
	names, this is especially true of mail and database applications. The
	application may be configured to connect to resources using NetBIOS. Depending
	on the client configuration the client may bypass host name resolution. From
	there it will be necessary to either change the connection type to TCP/IP
	sockets or to troubleshoot the problem as a NetBIOS issue.
	
	Problem: Client resolves a name very slowly, or fails to resolve a name and takes
	a long time to report a failure.
	
	Troubleshooting steps:
	
	Having DNS servers configured in a client's TCP/IP configuration, but the server
	is not available to the client usually causes this. Because the TCP/IP protocol
	assumes an unreliable network, a client will repeatedly attempt to connect to a
	DNS server before abandoning the attempted query. The client will then attempt
	to query a second DNS server if one is configured and take the same time to
	fail. Only then will the client step through to NetBIOS name resolution as
	described above.
	
	There are three ways to approach this issue.
	
	- If the host name is correctly entered in a host file, it will be resolved
	  before the client attempts to query DNS. This solution works well if DNS
	  servers are temporarily unreachable and there is a small number of host names
	  that need to be resolved . Manually configuring Hosts files for numerous
	  clients may be prohibitive.
	
	-or-
	
	- If DNS servers are available, but the DNS Server addresses in the clients
	  TCP/IP configuration are incorrect, then correcting these addresses will
	  allow the clients to contact the DNS servers immediately. Even if a DNS
	  server reports that it cannot resolve a name, this will happen much faster
	  than if the client cannot reach a DNS server at all.
	
	-or-
	
	- If DNS servers are configured on the client, but these servers are
	  permanently unavailable, then remove the IP addresses of the DNS servers from
	  the client configuration. The client will then bypass the DNS lookup without
	  delay.
	
	-or-
	
	- If records in the DNS database are missing or incorrect, then there will be a
	  delay as DNS servers query other DNS servers before reporting that they
	  cannot resolve the name. This will usually cause a delay of just a few
	  seconds.
	
	For additional information on TCP/IP and name resolution, please see the
	following white paper available on the Microsoft anonymous ftp server:
	
	  File Name: Tcpipimp2.doc
	  Location : ftp://ftp.microsoft.com/bussys/winnt/winnt-docs/papers/
	  Title : "Microsoft Windows NT 3.5/3.51/4.0: TCP/IP Implementation Details
	  TCP/IP Protocol Stack and Services, Version 2.0. "
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork win95 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search kbAudDeveloper kbWin95search kbZNotKeyword kbTCPIPSearch kbLanManSearch kbZNotKeyword3 kbNetworkClientSearch kbWin95 kbNetworkClient300DOS
	Version           : :3.0,3.5,3.51,4.0,95
	Issue type        : kbinfo
	
	=============================================================================
	
