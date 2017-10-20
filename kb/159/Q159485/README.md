---
layout: page
title: "Q159485: XADM: Troubleshooting Setup Problems Joining an Existing Site"
permalink: /kb/159/Q159485/
---

## Q159485: XADM: Troubleshooting Setup Problems Joining an Existing Site

{% raw %}

	Article: Q159485
	Product(s): Microsoft Exchange
	Version(s): 4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 16-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you run the Microsoft Exchange Server Setup program to join an existing
	Microsoft Exchange Site, the Setup process may fail. This article explains some
	troubleshooting steps when the two servers are communicating using the TCP/IP
	network protocol.
	
	You may receive the following error messages during the replication phase of the
	Setup process:
	
	  A connection could not be made to the remote directory service, possibly due
	  to a network failure. Be sure both directory services are running and that
	  your network is available and running and then try again.
	
	  Microsoft Exchange Setup Error: c1030b11
	
	  -or-
	
	  The object cannot be found in the directory. This may be because replication
	  has not completed.
	
	  Microsoft Exchange Directory Identification number: c1010aae
	
	MORE INFORMATION
	================
	
	During the replication phase of the Setup program, the protocols listed in the
	Server Binding Order are used to locate the existing Microsoft Exchange Server
	and complete replication.
	
	By default, TCP/IP is the first protocol in the Server Binding Order.
	
	TCP/IP resolves names in the following order:
	
	1. Using the local HOSTS file.
	
	2. Using a DNS Server.
	
	3. Looking at the NetBIOS cache.
	
	4. Using a WINS server.
	
	5. Broadcasting.
	
	6. Looking at the local LMHOSTS file.
	
	The following instructions assume that you are running the Microsoft Exchange
	Setup program on Server A, and you are trying to contact the computer running
	Microsoft Exchange Server, Server B.
	
	To see if you are having problems resolving the name of the computer running
	Microsoft Exchange Server:
	
	1. From Server A, ping Server B (use the server name and not an IP address).
	
	  If the ping succeeds, note the IP address that is returned and compare it to
	  the actual IP address of Server B. This is important because you may have
	  incorrect entries in the HOSTS/LMHOSTS file or a DNS may have incorrect
	  information.
	
	  If the Ping fails, you need to make sure that one of the name resolution
	  methods mentioned earlier can resolve the server name. The easiest way to
	  complete the installation is to add entries for the other server in the local
	  HOSTS file on Server A and Server B.
	
	2. If the ping succeeds, then from Server B, ping Server A. If the ping
	  succeeds, compare the IP address returned by the Ping program with the actual
	  IP address of Server A. If this is not the same, it can cause the Microsoft
	  Exchange Server Setup program to stop during the replication phase with the
	  error message listed in the "Symptoms" section.
	
	If the name resolution works fine, but you are still unable to join a site:
	
	1. Make sure that you are logged on to Windows NT on Server A as a Domain
	  Administrator.
	
	2. Make sure that the account logged on to Server A has the Permissions Admin
	  privilege on the Organization, Site, and Configuration containers on the
	  existing Exchange site. To do this, run Microsoft Exchange Administrator
	  program against Server B and check the properties of the Organization, Site,
	  and Configuration containers.
	
	3. Use the Rpingc32.exe and Rpings.exe programs to verify remote call procedure
	  (RPC) connectivity between Server A and Server B.
	
	4. If Rping32.exe does not verify the RPC connectivity, use the Windows NT
	  utility, Tracert.exe, to determine all the routers between Server A and
	  Server B. Some routers may be configured to block access to certain ports.
	  This will prevent access to the Microsoft Exchange directory on Server B.
	
	  If you have routers configured to block access to ports above a certain
	  number, you need to configure the Directory and Information Store on Server B
	  to use predefined Ports and then configure the routers to allow access to
	  these ports.
	
	5. Determine the network topology between the two servers in question. The
	  communication between two FDDI rings through an Ethernet segment may not work
	  when you use TCP/IP and any FDDI network interface card (NIC). To resolve
	  this behavior, set the MTU size on the Windows NT Servers to the Ethernet
	  segment's MTU size.
	
	  You can detect this situation by looking at a network trace of the
	  communication between the two servers. If any server is sending out packets
	  larger than the Ethernet segment's MTU size, communication between the two
	  servers will not work.
	
	Install the Microsoft Exchange Server Administrator program only from the
	Exchange Server Setup program. To do this,
	
	1. Run setup.exe, and then click Accept on the first dialog box.
	
	2. Click Custom install, and then click only the Exchange Administrator program
	  option. Make sure the other options are cleared.
	
	3. Select the path you want. At this point, the Administrator program will be
	  installed.
	
	4. Start the Administrator program, and then click the server that you want to
	  join the site.
	
	  If the procedure does not work and you receive a "DS_E_Communications_Problem"
	  error, either name resolution or network problems are involved, such as
	  locked ports, blackhole routers, packet loss, and so on. Use the following
	  name resolution troubleshooting:
	
	   - A "DS_E_INSUFFICIENT_ACCESS_RIGHTS" error is a security problem. The
	     account that is logged on does not have administrative rights at the site
	     and configuration levels. Log back on with an account with correct rights.
	
	   - If the administrator program cannot connect and fully administer the
	     remote server, then there may be a very unusual network problem involved,
	     and you may have to perform a network trace to determine the problem.
	
	REFERENCES
	==========
	
	For additional information, click the article number below to view the article
	in the Microsoft Knowledge Base:
	
	  Q148732 XADM: Setting TCP/IP Port Numbers for Internet Firewalls
	
	For additional information about the ramifications and guidelines for static port
	assignment of Exchange services, click the article number below to view the
	article in the Microsoft Knowledge Base:
	
	  Q180795 XADM: Intrasite Directory Replication Fails with Error 1720
	
	For additional information Exchange Services for Internet Firewalls and port
	considerations, click the article numbers below to view the articles in the
	Microsoft Knowledge Base:
	
	  Q155831 XADM: Setting TCP/IP Ports for Exchange and Outlook Client
	  Connections Through a Firewall
	
	  Q194952 XADM: Statically Mapped Port Limitations for Exchange Server
	
	
	Additional query words: tshoot
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : :4.0,5.0,5.5
	
	=============================================================================
	

{% endraw %}
