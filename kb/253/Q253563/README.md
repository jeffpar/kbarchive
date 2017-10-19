---
layout: page
title: "Q253563: XFOR: How to Enable SSL for Exchange Server 5.5 on Windows 2000"
permalink: /kb/253/Q253563/
---

## Q253563: XFOR: How to Enable SSL for Exchange Server 5.5 on Windows 2000

	Article: Q253563
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:2000; winnt:5.5
	Operating System(s): 
	Keyword(s): kbenv kbinterop
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	- the operating system: Microsoft Windows 2000 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	To enable Secure Socket Layer (SSL) for Exchange Server running on Windows 2000,
	you must have Service Pack 3 or later for Exchange Server installed.
	
	MORE INFORMATION
	================
	
	Service Pack 3 automatically installs Key Manager from Microsoft Windows NT 4.0
	on the Exchange Server computer. You can find Keyring.exe along with its
	supporting binary files in the following folder by default:
	
	  %SystemRoot%\System32\Inetsrv
	
	NOTE: %SystemRoot% is usually C:\Winnt.
	
	To finish the configuration, use the instructions in the following Microsoft
	Knowledge Base article:
	
	  Q175439 XFOR: Enabling SSL For Exchange Server
	
	For additional information, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q235452 XGEN: Updates to the Exchange Server 5.5 SP3 Release Notes
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv kbinterop 
	Technology        : kbOSWin2000 kbOSWinSearch kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : WINDOWS:2000; winnt:5.5
	Issue type        : kbinfo
	
	=============================================================================
	
