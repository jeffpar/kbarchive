---
layout: page
title: "Q193809: Personal Web Server and Out Of Process Components"
permalink: /kb/193/Q193809/
---

## Q193809: Personal Web Server and Out Of Process Components

	Article: Q193809
	Product(s): Internet Information Server
	Version(s): WINDOWS:1.0,1.0a,4.0
	Operating System(s): 
	Keyword(s): mspwsw95 win98
	Last Modified: 11-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Personal Web Server versions 1.0, 1.0a, 4.0 for Windows 95 
	- Microsoft Windows 98 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Personal Web Server for Windows 95 and Windows 98 does not support Out Of
	Process components.
	
	MORE INFORMATION
	================
	
	If Microsoft Internet Explorer tries to access such a component from Personal
	Web Server, it may generate an error message similar to:
	
	  Server object error 'ASP 0196 : 80040154'
	
	  Cannot launch out of process component
	
	  /c81/global.asa, line 19
	
	Note that Personal Web Server for Microsoft Windows NT does support Out Of
	Process components.
	
	Additional query words: pws
	
	======================================================================
	Keywords          : mspwsw95 win98 
	Technology        : kbWin98search kbPersWebServSearch kbZNotKeyword3 kbWin98 kbPersWebServ100Win95 kbPersWebServ100aWin95 kbPersWebServ400Win95
	Version           : WINDOWS:1.0,1.0a,4.0
	Issue type        : kbinfo
	
	=============================================================================
	
