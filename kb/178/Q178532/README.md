---
layout: page
title: "Q178532: XFOR: Configuring Exchange Internet Protocols with Proxy Server"
permalink: kb/178/Q178532/
---

## Q178532: XFOR: Configuring Exchange Internet Protocols with Proxy Server

	Article: Q178532
	Product(s): Microsoft Exchange
	Version(s): winnt:2.0,5.0,5.5
	Operating System(s): 
	Keyword(s): exc5 exc55
	Last Modified: 10-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.0, 5.5 
	- Microsoft Proxy Server version 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Microsoft Exchange Internet protocols can be configured to allow Internet
	clients to connect to the Microsoft Exchange Server information store through
	Microsoft Proxy Server version 2.0. Microsoft Exchange Server requires the
	addition of a configuration file, .ini, and installation of WinSock Proxy Client
	in order to work with Proxy Server 2.0. This is not necessary if Microsoft Proxy
	Server 2.0 is installed on the Microsoft Exchange Server.
	
	MORE INFORMATION
	================
	
	WinSock Proxy Client allows you to bind any Internet protocol to the external
	network interface of Microsoft Proxy Server. After the Internet protocol is
	bound to the external network interface, it is available to clients outside the
	proxy server. The proxy server then monitors for connections on behalf of the
	information store.
	
	When the configuration file is properly added and the appropriate Exchange
	service is restarted, the Exchange Server computer binds to the appropriate port
	on the network interface of the proxy server. This is easily verified by telnet
	to the respective port of the proxy server.
	
	The respective ports are as follows:
	
	  POP3: 110, 995 for Secure POP3 (SSL)
	  IMAP4: 143, 993 for Secure IMAP4 (SSL)
	  LDAP: 389, 636 for Secure LDAP (SSL)
	  NNTP: 119, 563 for Secure NNTP (SSL)
	
	Configuration is as follows:
	
	1. Install and configure Microsoft Proxy Server.
	
	2. Install and test the WinSock Proxy (WSP) client on the Exchange Server
	  computer by running a WinSock client application.
	
	  NOTE: The ping command, ICMP packets, is not passed by the proxy server. Use
	  telnet or ftp.
	
	3. Create a second Wspcfg.ini file for the Exchange store (Store.exe). Add the
	  information below to this Wspcfg.ini file and place the file in the directory
	  where Store.exe is located, typically Exchsrvr\Bin.
	
	         [STORE]
	         ServerBindTcpPorts=(Appropriate port for protocol used, multiple
	                             protocols can be configured)
	         Persistent=1
	         KillOldSession=1
	
	  Sample .ini entry for LDAP appears as follows:
	
	         [DSAMAIN]
	         ServerBindTcpPorts=389 (636 for Secure)
	         Persistent=1
	         KillOldSession=1
	
	4. If dynamic packet filtering is enabled (recommended), the proxy server
	  dynamically opens all necessary ports when they are requested. No special
	  configuration is needed.
	
	5. Stop and restart the Exchange information store (or directory for LDAP).
	
	6. You should now be able to contact the Exchange Server computer by connecting
	  to the proxy server's Internet IP address using an Internet client.
	
	NOTE: In order to bind to Secure Sockets Layer (SSL) ports, you must use the
	ProxyBindIP= statement in addition to the other entries. Without such a
	statement the Exchange Server computer will not bind to the proxy server
	properly, and thus not allow secure passage of messages through the Proxy server
	using SSL.
	
	Additional query words: XIMS XADM XGEN IIS PROXY NNTP IMAP4 POP3 LDAP TCPIP
	
	======================================================================
	Keywords          : exc5 exc55 
	Technology        : kbAudDeveloper kbExchangeSearch kbExchange500 kbExchange550 kbZNotKeyword2 kbProxyServSearch kbProxyServ200
	Version           : winnt:2.0,5.0,5.5
	Hardware          : ALPHA x86
	Issue type        : kbhowto
	
	=============================================================================
	
