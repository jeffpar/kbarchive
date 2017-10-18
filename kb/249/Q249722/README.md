---
layout: page
title: "Q249722: No ODBC Logging Format in PWS4.0"
permalink: kb/249/Q249722/
---

## Q249722: No ODBC Logging Format in PWS4.0

	Article: Q249722
	Product(s): Internet Information Server
	Version(s): WINDOWS:4.0; winnt:4.0
	Operating System(s): 
	Keyword(s): kbOSWinNT400 kbOSWin95 kbOSWin98 kbIIS kbiis400
	Last Modified: 13-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 4.0 
	- Microsoft Personal Web Server version 4.0 for NT Workstation version 4.0 
	- Microsoft Personal Web Server version 4.0 for Windows 95 
	- Microsoft Personal Web Server version 4.0 for Windows 98 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	After you install Internet Information Server (IIS) 4.00 on Windows NT servers,
	four types of IIS logging formats are provided (MMC, Web site Properties, Web
	Site tab, Active Log format):
	
	- Microsoft IIS Log file Format
	- NCSA Common Log File Format
	- W3C Extended Log File Format(default)
	- ODBC Logging
	
	When Microsoft Peer Web Server (PWS) is installed on a Windows NT workstation or
	Windows95/98 computers, only the first three log formats are listed under Web
	site Properties, and there is no ODBC Logging format for PWS.
	
	This is a product design feature.
	
	MORE INFORMATION
	================
	
	PWS installed on Windows NT workstation (or Windows95/98) does not provide the
	same full functionality as IIS installed on Windows NT server, although the
	installation may use the same NTOP CD or Visual Studio CD packet.
	
	IIS ODBC Logging feature requires server communication and an authentication
	mechanism supported only on Windows NT servers.
	
	Please refer to PWS Release Notes along with the PWS installation guide (or on
	the CD) for more information on other differences between PWS and IIS.
	
	Additional query words: PWS, NTW, IIS4, Logging format, ODBC
	
	======================================================================
	Keywords          : kbOSWinNT400 kbOSWin95 kbOSWin98 kbIIS kbiis400 
	Technology        : kbiisSearch kbiis400 kbPersWebServSearch kbZNotKeyword3 kbPersWebServ400NTW400 kbPersWebServ400Win95 kbPersWebServ400Win98
	Version           : WINDOWS:4.0; winnt:4.0
	Issue type        : kbhowto
	
	=============================================================================
	
