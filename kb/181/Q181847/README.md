---
layout: page
title: "Q181847: XADM: How to Configure Exchange Server with Proxy Server"
permalink: /kb/181/Q181847/
---

## Q181847: XADM: How to Configure Exchange Server with Proxy Server

{% raw %}

	Article: Q181847
	Product(s): Microsoft Exchange
	Version(s): 2.0,4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 11-APR-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	- Microsoft Proxy Server version 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article explains how to configure Microsoft Exchange Server to operate
	behind Proxy Server 2.0 to handle incoming Internet client requests (this is
	known as "reverse-hosting").
	
	Simple Mail Transfer Protocol (SMTP) servers and Post Office Protocol (POP)
	clients on the Internet must be configured to contact the Proxy Server computer
	through the appropriate port in order to communicate with the Exchange Server
	computer.
	
	NOTE: this article is specifically for running Exchange Server behind Proxy
	server. If the two products are to be installed on the same computer, this
	article does not apply.
	
	In addition, versions of the Wspcfg.ini file need to be placed in the directory
	where the server application's .exe files are installed. Because Exchange Server
	has more than one .exe file, more than one Wspcfg.ini file is needed in specific
	directories.
	
	MORE INFORMATION
	================
	
	1. Install Winsock proxy client from the proxy server Mspclnt share.
	
	2. Copy two instances of the Wspcfg.ini file.
	
	3. Add the following section to the end of the first Wspcfg.ini file. This
	  section is required for the Exchange SMTP service:
	
	  [Msexcimc]
	  ServerBindTcpPorts=25
	  Persistent=1
	  KillOldSession=1
	
	
	4. Place this file in the directory where the Msexcimc.exe file is located. The
	  default directory path is \Exchsrvr\Connect\Msexcimc\Bin.
	
	5. Restart the Microsoft Exchange IMS Service.
	
	6. Confirm that the SMTP port is bound to port 25 on the Proxy Server computer.
	  Do this by typing "telnet <proxy external IP> 25" (without the
	  quotation marks), where <proxy external IP> is the external IP address
	  of the Proxy server.
	
	7. The second Wspcfg.ini file contains entries needed for the Exchange Store
	  (Store.exe), as follows:
	
	  [Store]
	        ServerBindTcpPorts=110,119,143
	        Persistent=1
	        KillOldSession=1
	
	  Additional ports can be listed in this because Store.exe sets POP mail on port
	  110, NNTP on port 119, and IMAP4 on port 143.
	
	8. Place this second Wspcfg.ini file in the directory where Store.exe is
	  located. The default directory path is \Exchsrvr\Bin.
	
	9. Stop and restart the Exchange services, or restart the Exchange Server
	  computer, for the new settings to take effect. You should be able to contact
	  the Exchange Server computer by connecting to the external IP address on the
	  Proxy Server computer using IMAP, NNTP, or POP3 protocols.
	
	10. Verify that your DNS MX records point to the Proxy Server computer and not
	  to the Exchange Server computer. Because the MX record is different from the
	  regular GetHostByName call, you must configure network TCP/IP properties,
	  using Control Panel, to use DNS for the Exchange Server computer. The
	  WinSock Proxy client application automatically redirects the DNS MX request.
	
	NOTE: If you have an internal DNS server on your network, you can use DHCP to
	configure the internal server. This may enable you to use both internal and
	external DNS servers to resolve names on your internal network and on the
	Internet.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbAudDeveloper kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2 kbProxyServSearch kbProxyServ200
	Version           : :2.0,4.0,5.0,5.5
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
