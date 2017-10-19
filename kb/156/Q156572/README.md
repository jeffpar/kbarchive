---
layout: page
title: "Q156572: How to Install the FTP Server Service in Windows NT 4.0"
permalink: /kb/156/Q156572/
---

## Q156572: How to Install the FTP Server Service in Windows NT 4.0

	Article: Q156572
	Product(s): Internet Information Server
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbnetwork kbsetup
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Internet Information Server versions 2.0, 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to install the FTP Server Service for Windows NT
	version 4.0. In previous versions of Windows NT, the FTP Server Service is
	installed as a component of the TCP/IP protocol. In Windows NT version 4.0, the
	FTP Server Service is included as a component of the Peer Web Services in
	Windows NT Workstation and a component of Internet Information Server in Windows
	NT Server.
	
	
	MORE INFORMATION
	================
	
	To install the FTP Server Service in Windows NT 4.0, follow these steps:
	
	1. In Control Panel, double-click Network.
	
	2. Click the Protocols tab, and then click the TCP/IP protocol.
	
	  NOTE: If the TCP/IP protocol is not installed, click Add, click TCP/IP
	  Protocol and then click OK.
	
	3. Click Services, click Add, and then click Microsoft Peer Web Services.
	
	  NOTE: For Windows NT Server 4.0, click Microsoft Internet Information Server
	  2.0 instead of Microsoft Peer Web Services.
	
	4. Click OK, and then type the path for the Windows NT source files. For
	  example, if you are using the Windows NT CD-ROM in drive D, type the
	  following line:
	
	     d:\i386
	
	5. Click OK to start the Microsoft Peer Web Services Setup.
	
	6. The FTP Service is selected by default, but you may want to clear the check
	  boxes for options you do not want to install.
	
	  NOTE: The FTP Service, along with other Peer Web Service components, can be
	  configured by using the Internet Service Manager tool.
	
	Additional query words: prodnt utilities
	
	======================================================================
	Keywords          : kbnetwork kbsetup 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbiisSearch kbiis300 kbiis200
	Version           : 2.0
	Issue type        : kbhowto
	
	=============================================================================
	
