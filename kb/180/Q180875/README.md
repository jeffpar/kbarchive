---
layout: page
title: "Q180875: Russian Clients May Have File I/O Problems on an FPNW Server"
permalink: kb/180/Q180875/
---

## Q180875: Russian Clients May Have File I/O Problems on an FPNW Server

	Article: Q180875
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbWinNT400sp4fix
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Services for NetWare version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If your MS-DOS, Windows for Workgroups, Windows 95, or Windows NT client uses a
	Russian version of the operating system, or if the Russian system default locale
	is installed, you may experience one or more of the following problems while
	accessing a Microsoft File and Print Services for NetWare (FPNW) server:
	
	- After you create a directory with Russian characters using a Novell NetWare
	  redirector and refresh the view in Windows NT Explorer, all directories that
	  do not contain Russian characters disappear.
	
	- If you create a directory containing Russian characters on an FPNW server,
	  you may see a name similar to "3c5a8~1". This name disappears if you refresh
	  the screen and the correct directory name is displayed.
	
	- You cannot create a new directory on an FPNW server because, if you try to
	  rename the default folder name ("---------") to any other name, you receive
	  an error message.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	Windows NT Server 4.0, Terminal Server Edition. For additional information,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in File and Print Services for
	NetWare version 4.0. This problem was first corrected in Windows NT 4.0 Service
	Pack 4.0 and Windows NT Server 4.0, Terminal Server Edition Service Pack 4.
	
	======================================================================
	Keywords          : kbWinNT400sp4fix 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServSearch kbServicesNetware400 kbServicesNetwareSearch
	Version           : WinNT:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
