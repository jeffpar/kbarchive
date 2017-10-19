---
layout: page
title: "Q214500: App. Compatibility Flag Registry Setting Not Read Correctly"
permalink: /kb/214/Q214500/
---

## Q214500: App. Compatibility Flag Registry Setting Not Read Correctly

	Article: Q214500
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): _IK
	Last Modified: 16-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Normally, an administrator can use the registry to set compatibility flags for
	specific applications being run on Windows Terminal Clients. For example, adding
	the following registry key and value to HKEY_LOCAL_MACHINE on the Terminal
	Server will force the application, in this case NTVDM, to use the Terminal
	Server's Windows System folder, instead of the user's Windows folder:
	
	  Software\Microsoft\Windows NT\CurrentVersion\Terminal Server\Compatibility\Applications\ 
	
	  KEY: NTVDM
	  VALUE: Flags  reg_dword  0x400
	
	This setting can be used to force all applications running within NTVDM to use
	the "_Default.pif" (without the quotation marks) file on the server for custom
	settings, rather than requiring the administrator to copy the "_Default.pif"
	(without the quotation marks) file to the Windows folder of each user.
	
	After you add the Application Compatibility Flag to the registry, the application
	does not respond to the flag.
	
	For additional information, please see the following article(s) in the Microsoft
	Knowledge Base:
	
	  Q186499 Terminal Server Registry Settings for Applications
	
	CAUSE
	=====
	
	The system does not correctly retrieve the application name. Therefore, the
	application compatibility flag in the registry is not found.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT Server
	4.0, Terminal Server Edition. For additional information, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT Server 4.0, Terminal
	Server Edition. This problem was first corrected in Windows NT Server 4.0,
	Terminal Server Edition Service Pack 4.
	
	Additional query words: 4.00 wts tse
	
	======================================================================
	Keywords          : _IK 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServSearch
	Version           : winnt:4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
