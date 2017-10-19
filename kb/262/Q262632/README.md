---
layout: page
title: "Q262632: Run IIS 5.0/5.1 Instead of PWS on Windows 2000 Professional"
permalink: /kb/262/Q262632/
---

## Q262632: Run IIS 5.0/5.1 Instead of PWS on Windows 2000 Professional

	Article: Q262632
	Product(s): Internet Information Server
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): kbOSWin2000
	Last Modified: 07-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.0 
	- Microsoft Internet Information Services version 5.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Although Personal Web Server (PWS) can be installed separately from the Windows
	NT 4.0 Option Pack (NTOP) on computers running Windows NT Workstation 4.0, PWS
	does not run on Windows 2000. Instead, you need to install Microsoft Internet
	Information Services (IIS) 5.0, which is included in Windows 2000 Professional
	and IIS 5.1, which is included in Microsoft Windows XP.
	
	RESOLUTION
	==========
	
	To install IIS 5.0 or IIS 5.1, perform the following steps:
	
	1. From the Start menu, click Control Panel, and then click "Add/Remove
	  Programs".
	
	2. Select "Add/Remove Windows Components", select the Internet Information
	  Services (IIS) component, and then follow the on-screen instructions.
	
	NOTE: IIS 5.0 and 5.1 are not installed by default unless Windows is upgraded
	over a previous version of Windows that had PWS installed.
	
	MORE INFORMATION
	================
	
	IIS has the following limitations:
	
	- Limited to 10 connections
	- Limited to one Web and one FTP server. In other words, you cannot create
	  additional virtual Web or FTP servers.
	
	Additional query words: iis 5 Personal Web Services Peer Server win2kpro w2kpro akz 5.1
	
	======================================================================
	Keywords          : kbOSWin2000 
	Technology        : kbiisSearch kbiis500
	Version           : :5.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	
