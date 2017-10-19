---
layout: page
title: "Q195841: Event Viewer Error 9503: NWLinkIpx Illegal Parameters"
permalink: /kb/195/Q195841/
---

## Q195841: Event Viewer Error 9503: NWLinkIpx Illegal Parameters

	Article: Q195841
	Product(s): Microsoft Windows NT
	Version(s): WINNT:4.0,4.0a,4.5
	Operating System(s): 
	Keyword(s): kberrmsg kbnetwork 3rdpartynet kb3rdPartyNetClient
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	- Microsoft BackOffice Server versions 4.0, 4.5 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	- Microsoft BackOffice Small Business Server versions 4.0, 4.0a 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you restart a computer that has Microsoft Gateway Services for NetWare
	installed with the NWLink IPX/SPX protocol, all NetWare-based resources may be
	unavailable. When you use the IPXROUTE CONFIG command, an error message may be
	returned indicating an unknown command and the following error message may
	appear in Event Viewer:
	
	  Event ID: 9503
	  Source: Nwlnklpx
	  Type: Warning
	  Description: The value for the NwlnkIpx parameter was illegal.
	
	CAUSE
	=====
	
	This behavior can occur if data values in the NwlnkIpx registry key are
	incorrect or damaged.
	
	RESOLUTION
	==========
	
	To remove the incorrect or damaged data values in the registry and restore
	NetWare connectivity:
	
	1. Remove the NWLink IPX/SPX protocol. To do this, click Start, point to
	  Settings, click Control Panel, and then double-click the Network icon. Click
	  the Protocols tab, click the NWLink IPX/SP protocol, and then click Remove.
	
	2. Restart the computer.
	
	3. Install the NWLink IPX/SPX protocol. To do this, click Start, point to
	  Settings, click Control Panel, and then double-click the Network icon. Click
	  the Protocols tab, click Add, and then double-click NWLink IPX/SPX Compatible
	  Transport. When you are prompted, type the full path to the installation
	  files folder (for example, D:\I386).
	
	4. When you are prompted to restart the computer, click Do Not Restart Windows.
	
	5. Reapply the latest Windows NT 4.0 service pack. For information about
	  obtaining and installing the latest service pack for Windows NT 4.0, see the
	  following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	6. Restart the computer when the service pack installation is complete.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the products listed above.
	
	Additional query words: novell
	
	======================================================================
	Keywords          : kberrmsg kbnetwork 3rdpartynet kb3rdPartyNetClient 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400xsearch kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400xsearch kbWinNTS400 kbNTTermServ400 kbNTTermServSearch kbAudDeveloper kbBackOfficeSearch kbSBServSearch kbBackOfficeServ400 kbBackOfficeServ450 kbSBServ400 kbSBServ400a
	Version           : WINNT:4.0,4.0a,4.5
	Hardware          : ALPHA x86
	Issue type        : kbprb
	
	=============================================================================
	
