---
layout: page
title: "Q99372: Tuning LAN Manager RAS Servers for Windows NT RAS Clients"
permalink: /kb/099/Q99372/
---

## Q99372: Tuning LAN Manager RAS Servers for Windows NT RAS Clients

	Article: Q99372
	Product(s): Microsoft Windows NT
	Version(s): 3.1 4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Windows NT Remote Access Service (RAS) is fully compatible with Microsoft LAN
	Manager RAS. However, some tuning may be required when connecting from a Windows
	NT RAS client to a LAN Manager 1.x RAS server. Windows NT uses more NetBIOS
	names than any other Microsoft networking client. (Windows NT uses eight NetBIOS
	names while LAN Manager and Windows for Workgroups use only four-five names.)
	Because of this, if some parameters on the LAN Manager RAS server are not
	modified, errors can be generated, indicating the server's name table is full or
	that insufficient NetBIOS sessions are available on the server.
	
	The following file fragments are from a sample LAN Manager RAS server
	configuration that has been tuned for Windows NT RAS clients. Additional
	information on these settings can be found in the "Additional Information on LAN
	Manager RAS Settings" section below.
	
	LANMAN.INI
	----------
	
	[REMOTEACCESS]
	MAXNAMES = 8          ;Specifies the max. number of NetBIOS names for
	
	                     ;a single client.
	
	REMOTELISTEN = ALL    ;Remote RAS workstations to act as full peers
	
	                     ;on the LAN. Increases number NetBIOS names
	                     ;listened for.
	
	PROTOCOL.INI
	------------
	
	[NETBEUI_XIF]
	SESSIONS = 160        ;This must be large enough to accommodate all
	
	                     ;simultaneous sessions between this server
	                     ;and LAN clients, this server and RAS clients,
	                     ;and RAS clients and other network servers.
	
	NCBS = 180
	NAMES = 160
	
	[TCPIP_XIF]
	NBSESSIONS = 100
	NUMNAMES = 127        ;This is the maximum for the TCP/IP stack.
	;NUMNCBS = 85         ;Commenting out NUMNCBS line lets TCP/IP stack
	
	                     ;assume the highest value possible.
	
	These modifications represent the minimum settings for Windows NT RAS client
	support. If the LAN Manager server is also handling many other network clients,
	these values may need to be increased.
	
	Additional Information on LAN Manager RAS Settings
	--------------------------------------------------
	
	The RemoteListen parameter is one of the most important settings. It can greatly
	affect the resources devoted to RAS clients and effectively make RAS clients
	full members of the LAN. For more information on this parameter, query on the
	following words in the Microsoft Knowledge Base:
	
	  REMOTELISTEN and MESSAGES
	
	The number of RAS ports in use at once greatly affects how you tune your LAN
	protocols. With more lines, you can have more sessions; with more sessions, you
	will need more names for each protocol. Because Windows NT RAS clients already
	have twice as many names as LAN Manager and Windows for Workgroups RAS clients,
	this issue becomes even more important. If you think you are having a problem
	relating to this, try stopping the messenger service. The messenger service
	registers NetBIOS names for your computer, login identification, and domain;
	disabling the messenger service will reduce your name usage by three.
	
	Windows NT RAS servers are not affected as much by a high number of names, as
	their default maximum names parameter is set to 255. Also, under Windows NT,
	these names are stored in paged memory and do not take up system resources as
	severely as under LAN Manager. The only reason to reduce this number is to limit
	the number of names each client can use.
	
	Additional query words: wfw wfwg prodnt
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTW310 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS310 kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : 3.1 4.0
	
	=============================================================================
	
