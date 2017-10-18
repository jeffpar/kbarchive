---
layout: page
title: "Q192523: Print Screen Functionality Not Available on Terminalsrv Client"
permalink: kb/192/Q192523/
---

## Q192523: Print Screen Functionality Not Available on Terminalsrv Client

	Article: Q192523
	Product(s): Microsoft Windows NT
	Version(s): 2000,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	- Microsoft Windows 2000 Server 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The ALT-PRINT SCREEN functionality that pastes a current screen shot to the
	Clipboard in Windows 95, and Windows NT is not available on the RDP version 4.0
	client connecting to a Windows NT 4.0 Terminal Server. The functionality is
	available on the Windows NT Server 4.0, Terminal Server Edition, console.
	
	CAUSE
	=====
	
	This functionality is not available through the Microsoft Windows NT Terminal
	Server using RDP version 4.0 and the RDP version 4.0 Client.
	
	RESOLUTION
	==========
	
	This functionality has been added on the Windows 2000 Server with Terminal
	Services and the RDP 5.0 client and Advanced Client.
	
	
	MORE INFORMATION
	================
	
	Remote Desktop Protocol (RDP) Features and Performance:
	
	  http://www.microsoft.com/windows2000/techinfo/howitworks/terminal/rdpfandp.asp
	
	For more information, see the Readme file that ships with the Terminal Services
	Advanced Client (TSAC) on the SP1 CD-ROM, or at the following Web site:
	
	  http://www.microsoft.com/windows2000/downloads/recommended/TSAC/default.asp
	
	The following information is an excerpt from a chart in the Readme file of the
	ActiveX client Tswebsetup.exe that ships with Service Pack 1. This same chart
	works on the Windows 2000 standard client.
	
	  CTRL+ALT+MINUS SIGN (-) symbol on the numeric keypad
	
	  Places a snapshot of the active window, within the client, on the Terminal
	  server clipboard (provides the same functionality as pressing PRINT SCREEN on
	  a local computer).
	
	  CTRL+ALT+PLUS SIGN (+) symbol on the numeric keypad
	
	  Places a snapshot of the entire client window area on the Terminal server
	  clipboard (provides the same functionality as pressing ALT+PRINT SCREEN on a
	  local computer).
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbwin2000Serv kbWinNTSsearch kbWinNTS400search kbwin2000ServSearch kbwin2000Search kbNTTermServ400 kbNTTermServSearch
	Version           : :2000,4.0
	Issue type        : kbprb
	
	=============================================================================
	
