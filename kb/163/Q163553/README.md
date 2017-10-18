---
layout: page
title: "Q163553: Error Message: Error Initializing the Cache"
permalink: kb/163/Q163553/
---

## Q163553: Error Message: Error Initializing the Cache

	Article: Q163553
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 2,2.1
	Operating System(s): 
	Keyword(s): osr2 win95
	Last Modified: 31-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 OEM Service Release, versions 2, 2.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You may receive the following error message when you are prompted to log in
	after the first reboot after reinstalling OEM Service Release 2 (OSR2), or when
	you are initially setting up the network components after you are prompted to
	supply the computer name and workgroup:
	
	  Error Initializing the cache. Shutdown all programs and run scandisk or
	  chkdsk. Delete the cache, cookies and history directories in your windows
	  directory and then restart IE. If the problem persists reinstall IE.
	
	CAUSE
	=====
	
	The Windows folder may contain one or more of the following files:
	
	- Temporary Internet Files
	
	- Cookies
	
	- History
	
	The presence of one or more of these files prevents Runonce from creating the
	Temporary Internet Files, Cookies, or History folder that Microsoft Internet
	Explorer needs to store cached data.
	
	This error can also be caused if the thread that reads data from and writes data
	to these folders attempts to access the folders before the thread that creates
	the folders has finished.
	
	
	RESOLUTION
	==========
	
	If a file with one of the names listed above exists in the Windows folder,
	remove the file. Then, run Setup again or add the network components.
	
	MORE INFORMATION
	================
	
	The first reboot may take a long time if Internet Explorer cannot set up the
	Temporary Internet Files, Cookies, or History folders.
	
	During the first boot, you may see the error message six times; five consecutive
	times, and then once during the setup of Control Panel. There is a timeout each
	time you receive the error message.
	
	Additional query words: 95
	
	======================================================================
	Keywords          : osr2 win95 
	Technology        : kbWin95search kbOPKSearch kbWin95OPKOSR2 kbWin95OPKOSR210
	Version           : :2,2.1
	
	=============================================================================
	
