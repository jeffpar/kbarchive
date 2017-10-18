---
layout: page
title: "Q262640: Windows NT 4.0 Option Pack Does Not Install on Windows 2000"
permalink: kb/262/Q262640/
---

## Q262640: Windows NT 4.0 Option Pack Does Not Install on Windows 2000

	Article: Q262640
	Product(s): Internet Information Server
	Version(s): winnt:5.0
	Operating System(s): 
	Keyword(s): kbOSWin2000
	Last Modified: 04-AUG-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to install the Windows NT 4.0 Option Pack (NTOP) on a Windows
	2000-based computer, the following error message occurs:
	
	  The features included in the Windows NT 4.0 Option Pack are designed for
	  Microsoft Windows NT Server Version 4.0. They do not currently run on Windows
	  NT Server 5.0.
	
	CAUSE
	=====
	
	Internet Information Services (IIS) and related services, such as FTP Server,
	Indexing Service, and SMTP Service, are included as built-in components of
	Windows 2000 (both the Professional and Server editions) and cannot be installed
	through the NTOP.
	
	RESOLUTION
	==========
	
	Perform the following steps to install IIS 5.0:
	
	1. From the Start menu, click Control Panel, and then click "Add/Remove
	  Programs".
	
	2. Select "Add/Remove Windows Components", select the Internet Information
	  Services (IIS) component, and then follow the on-screen instructions.
	
	Additional query words: iis 5 setup set up set-up akz
	
	======================================================================
	Keywords          : kbOSWin2000 
	Technology        : kbiisSearch kbiis500
	Version           : winnt:5.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	
