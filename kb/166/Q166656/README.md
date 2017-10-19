---
layout: page
title: "Q166656: Shared Directories Not Accessible with Windows NT 4.0"
permalink: /kb/166/Q166656/
---

## Q166656: Shared Directories Not Accessible with Windows NT 4.0

	Article: Q166656
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbinterop kbnetwork
	Last Modified: 15-OCT-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you connect to a network share with Windows NT 4.0, you may receive the
	following error message:
	
	  \\SERVER\SHARE\DIR is not accessible.
	
	  Access is denied.
	
	However, when you log on at other clients (Windows 95, or Windows NT version
	3.5x) you do not receive this error.
	
	RESOLUTION
	==========
	
	Make sure that you have Execute (X) permission on all directories.
	
	MORE INFORMATION
	================
	
	The Windows NT 4.0 redirector requires you to have the Execute (X) permission in
	the parent directory. To change to the subdirectory. You can still connect to
	the fully qualified file name. For example, NOTEPAD \\SERVER\SHARE\DIR\file.txt
	will open without problems.
	
	This problem only occurs when you have Read (R) access through Special Directory
	Access. If you are able to select Read from the Type of Access drop down box,
	then you already have Read and Execute (RX) permission.
	
	Additional query words: inaccessible worked stopped working err msg Errmsg box popup connect container inherit
	
	======================================================================
	Keywords          : kbinterop kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : :4.0
	Issue type        : kbprb
	
	=============================================================================
	
