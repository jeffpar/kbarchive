---
layout: page
title: "Q181491: PRB: MFC Generic App Resources Cannot Interact with Desktop"
permalink: /kb/181/Q181491/
---

## Q181491: PRB: MFC Generic App Resources Cannot Interact with Desktop

	Article: Q181491
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	- Microsoft Cluster Server 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Microsoft Foundation Class (MFC)-based applications, when launched from
	Microsoft Cluster Server and set to interact with the desktop, will fail with an
	Abnormal Program Termination error message being displayed.
	
	CAUSE
	=====
	
	The MFC library attempts to set a computer based training (CBT) hook when a
	window is created. This operation is not allowed on the interactive desktop when
	the program is not running in the current logon session of the interactive user.
	
	RESOLUTION
	==========
	
	If you are using an MFC application as a Microsoft Cluster Server resource, you
	can resolve the problem in one of the following ways:
	
	- Do not set the MFC application to interact with the desktop.
	
	- Start Cluster Server in debug mode by using the "clussvc -debug" command line
	  in the %WinDir%\Cluster directory.
	
	  NOTE: You must first stop the Cluster Server service first using the Control
	  Panel Services tool.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	
	Additional query words: MSCS
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbAudDeveloper kbClustServSearch
	Version           : winnt:4.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
