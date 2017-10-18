---
layout: page
title: "Q155048: XCLN: Troubleshooting Startup of Windows Client Using TCP/IP"
permalink: kb/155/Q155048/
---

## Q155048: XCLN: Troubleshooting Startup of Windows Client Using TCP/IP

	Article: Q155048
	Product(s): Microsoft Exchange
	Version(s): 4.0,5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 06-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook 2002 
	- Microsoft Outlook 2000 
	- Microsoft Outlook 98 
	- Microsoft Exchange Windows NT client, versions 4.0, 5.0 
	- Microsoft Exchange Windows 95/98 client, versions 4.0, 5.0 
	- Microsoft Exchange Windows 3.x client, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you start the Microsoft Exchange client, one of the more common reasons for
	slow startup is the failure to resolve the Microsoft Exchange Server TCP/IP host
	name. This document discusses the steps for eliminating host name resolution
	issues on client computers with Transmission Control Protocol/Internet Protocol
	(TCP/IP) running. Start troubleshooting by going to the Microsoft Exchange
	Server properties of the user profile. With the correct server name and mailbox
	entered, click the "Check Name" button to get an idea of how much time it is
	taking to resolve the name. If the time to resolve is greater than 30 to 40
	seconds, continue the troubleshooting steps in this article to help improve
	startup times.
	
	MORE INFORMATION
	================
	
	In the Microsoft Exchange Server properties of the client profile, type the IP
	address instead of the server name, and then click "Check Name". This will not
	only test name resolution, but also will do a basic RPCPING to the computer
	running Microsoft Exchange Server.
	
	If the IP address fails to resolve to the correct Exchange Server name, there is
	either a problem with Remote Procedure Calls (RPCs) to the computer running
	Microsoft Exchange Server or a problem with the IP Address of the computer
	running Microsoft Exchange Server. If the IP address failed, perform the
	following steps:
	
	1. At an MS-DOS prompt, try to ping the IP address of Exchange Server. If this
	  fails, then there may be a networking issue or a TCP/IP configuration issue
	  that is not allowing connection to the Exchange Server machine. This issue
	  must be resolved before the Exchange client will be able to connect to the
	  Exchange Server over TCP/IP.
	
	2. If a ping of the IP address works correctly, but a profile checkname fails to
	  resolve the IP address, then the RPC Binding Order may be incorrect. Ensure
	  the RPC Binding Order includes ncacn_ip_tcp first in the list.
	
	For additional information, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q136516 XCLN: Improving Windows Client Startup Times
	
	IP Address Resolves?
	--------------------
	
	If the IP address quickly resolves to the correct Microsoft Exchange Server name,
	continue with Host Name Resolution Troubleshooting below:
	
	Host Name Resolution Troubleshooting - Ping Microsoft Exchange Server Name:
	
	At this point, the computer running Microsoft Exchange Server is available for
	connection via IP address. The next step is to verify host name resolution. At
	an MS-DOS prompt, ping the Microsoft Exchange Server name.
	
	Ping Server Name Succeeds?
	--------------------------
	
	If pinging the Exchange Server Name works in a timely manner, but client starts
	up slowly, the RPC binding order may need to be modified. For additional
	information, click the article number below to view the article in the Microsoft
	Knowledge Base:
	
	  Q136516 XCLN: Improving Windows Client Startup Times
	
	Ping Server Name Fails?
	-----------------------
	
	Run "ipconfig /all" (without the quotation marks) (or "winipcfg" (without the
	quotation marks) on Windows 95) and check what address is set in the Domain Name
	Server (DNS) entry field. DNS can be set for all TCP clients by means of Dynamic
	Host Configuration Protocol (DHCP) or by using the TCP Configuration in Control
	Panel for the individual computers. Continue with DNS Configuration
	Troubleshooting below.
	
	DNS Configuration Troubleshooting - Ping DNS IP Address:
	
	If ipconfig displays an IP address in the DNS Servers field, then the client
	machine is configured to resolve Host Names via DNS. The next step in trouble
	shooting is to verify the DNS Server is available. At an MS-DOS prompt, ping the
	DNS IP Address. If the DNS does not respond to the request, additional attempts
	are made at 5, 10, 15, 20, 5, 10, 15, and 20- second intervals. This is the
	design of DNS and is usually the root cause of slow client startup.
	
	Ping DNS Server Fails?
	----------------------
	
	If the client computer is configured for a DNS server that is not available, DNS
	either needs to be disabled or needs to be configured for a DNS server that is
	available at all times.
	
	If there are name resolution problems on the network some of the messages an
	Exchange or Outlook user may receive are as follows:
	
	  Your Microsoft Exchange Server is unavailable. You can retry connecting to
	  the server using the network or work offline and connect using dial-up
	  networking.
	
	-or-
	
	  The network did not respond in a timely fashion. To determine the existence
	  of an Exchange server you may retry and wait for a response or work offline.
	
	Ping DNS Server Succeeds?
	-------------------------
	
	If the DNS server is available and configured properly, the Microsoft Exchange
	Server name and IP address need to be added to the DNS database. After this is
	done, pinging the Microsoft Exchange Server name will resolve to an IP address
	by the DNS server, allowing for faster startup times of the Microsoft Exchange
	client.
	
	Add Microsoft Exchange Server to HOSTS File
	-------------------------------------------
	
	The HOSTS file gets read every time a Winsock application attempts to resolve a
	host name. There are NO #PRE options to preload entries (that is how it is done
	in LMHOSTS). You can add the Microsoft Exchange Server entry to the HOSTS file
	and try again without having to restart Windows. The HOSTS file on Windows 95 is
	located in the Windows directory and on Windows NT in
	%systemroot%\system32\drivers\<and so on>.
	
	
	Name Resolution
	---------------
	
	Below is the order of host name resolution over TCP/IP:
	
	1. HOSTS file
	2. DNS Server
	3. NetBIOS Cache
	4. WINS server
	5. Broadcast
	6. LMHOSTS file
	
	Additional query words: winnt win16 win95 exfaqclnt exclnfaq sbsfaqtop outlook stack
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbOutlookSearch kbExchangeSearch kbExchange500 kbExchange400 kbExchangeClientSearch kbZNotKeyword kbZNotKeyword2 kbOutlook2000Search kbOutlook98Search kbZNotKeyword3 kbExchange400NT kbExchange500NT kbExchange400Win95 kbExchange500Win95
	Version           : :4.0,5.0
	
	=============================================================================
	
