---
layout: page
title: "Q150543: WinNT, Terminal Server, &amp; Exchange Services Use TCP/IP Ports"
permalink: /kb/150/Q150543/
---

## Q150543: WinNT, Terminal Server, &amp; Exchange Services Use TCP/IP Ports

{% raw %}

	Article: Q150543
	Product(s): Microsoft Windows NT
	Version(s): 1.0,2000,4.0,5.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	- Microsoft Windows NT Load Balancing Service 1.0 
	- Microsoft Windows 2000 Server 
	- Microsoft Windows 2000 Professional 
	- Microsoft Windows 2000 Advanced Server 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article discusses the known TCP/IP ports (TCP and/or UDP) that are used by
	services within Microsoft Windows NT version 4.0 and Microsoft Exchange Server
	version 5.0. This is not a complete list of TCP/IP port assignments.
	
	For additional TCP/IP port assignment information, see the following articles in
	the Microsoft Knowledge Base:
	
	  Q174904 Information About TCP/IP Port Assignments
	
	  Q176466 XGEN: TCP Ports and Microsoft Exchange: In-depth Discussion
	
	
	MORE INFORMATION
	================
	
	List of Ports Used by Windows NT version 4.0 services:
	
	Function                    Static ports
	--------                    ------------
	
	Browsing                    UDP:137,138
	DHCP Lease                  UDP:67,68
	DHCP Manager                TCP:135
	Directory Replication       UDP:138 TCP:139
	DNS Administration          TCP:135
	DNS Resolution              UDP:53
	Event Viewer                TCP:139
	File Sharing                TCP:139
	Logon Sequence              UDP:137,138 TCP:139
	NetLogon                    UDP:138
	Pass Through Validation     UDP:137,138 TCP:139
	Performance Monitor         TCP:139
	PPTP                        TCP:1723 IP Protocol:47 (GRE)
	Printing                    UDP:137,138 TCP:139
	Registry Editor             TCP:139
	Server Manager              TCP:139
	Trusts                      UDP:137,138 TCP:139
	User Manager                TCP:139
	WinNT Diagnostics           TCP:139
	WinNT Secure Channel        UDP:137,138 TCP:139
	WINS Replication            TCP:42
	WINS Manager                TCP:135
	WINS Registration           TCP:137
	
	List of Ports Used by WLBS and Convoy for Cluster Control:
	
	Function                    Static ports
	
	--------                    ------------
	Convoy                      UDP:1717 
	WLBS                        UDP:2504
	
	List of Ports Used by Microsoft Exchange Server version 5.0:
	
	Function                    Static ports
	
	--------                    ------------
	
	Client/Server Comm.         TCP:135
	Exchange Administrator      TCP:135
	IMAP                        TCP:143
	IMAP (SSL)                  TCP:993
	LDAP                        TCP:389
	LDAP (SSL)                  TCP:636
	MTA - X.400 over TCP/IP     TCP:102
	POP3                        TCP:110
	POP3 (SSL)                  TCP:995
	RPC                         TCP:135
	SMTP                        TCP:25
	NNTP                        TCP:119
	NNTP (SSL)                  TCP:563
	
	For additional information, please see the following article(s) in the Microsoft
	Knowledge Base:
	
	  Q176466 XGEN: TCP Ports and Microsoft Exchange: In-depth Discussion
	
	List of Ports Used by Terminal Server Clients
	
	Function                    Static ports
	
	--------                    ------------
	
	RDP Client (Microsoft)      TCP:3389 (Pre Beta2:1503)
	ActiveX Client (TSAC)       TCP:80, 3389
	ICA Client (Citrix)         TCP:1494
	
	NOTE: Terminal Server uses port 3389.
	
	Additional Ports Used by Windows 2000 services:
	
	Function                              Static ports
	--------                              ------------
	Direct Hosting of  SMB Over TCP/IP    TCP,UDP: 445
	
	IPSec:                      
	  ISAKMP                             UDP: 500
	  ESP                                IP Protocol 50	
	  AH                                 IP Protocol 51
	
	Kerberos                              TCP,UDP: 88
	RSVP                                  IP Protocol 46
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNT400search kbwin2000AdvServ kbwin2000AdvServSearch kbwin2000Serv kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTLBS100 kbWinNTLBSSearch kbwin2000ServSearch kbwin2000Search kbwin2000ProSearch kbwin2000Pro kbNTTermServ400 kbNTTermServSearch kbWinAdvServSearch
	Version           : :1.0,2000,4.0,5.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
