---
layout: page
title: "Q245110: Err Msg: Internet Explorer Installation is Incomplete."
permalink: /kb/245/Q245110/
---

## Q245110: Err Msg: Internet Explorer Installation is Incomplete.

	Article: Q245110
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to upgrade your version of Microsoft Internet Explorer by using the
	Microsoft Internet Explorer 4.0 installation CD-ROM or the installation files
	downloaded from the Web and you initially installed Internet Explorer when you
	installed Microsoft Windows NT Server 4.0, Terminal Server Edition, you may
	receive the following error message:
	
	  Internet Explorer Installation is Incomplete
	
	You may receive additional error messages stating that Setup has not installed
	the following components:
	
	  Internet Explorer Direct Animation
	  Internet Explorer Classes for Java
	
	Also, when you restart your computer, you may receive the following error message
	while Internet Explorer is initializing:
	
	  Unable to install java packages from D:\WTSRV\Java\Classes\Win32ie4.cab, the
	  system cannot find the file specified.
	
	CAUSE
	=====
	
	This behavior can occur if you do not use the Add/Remove Programs tool in
	Control Panel to upgrade Internet Explorer.
	
	RESOLUTION
	==========
	
	To resolve this issue, use the Add/Remove Programs tool to remove your current
	version of Internet Explorer, and then install Internet Explorer 4.0:
	
	1. In Control Panel, double-click Add/Remove Programs, and then remove the
	  current version of Internet Explorer.
	
	2. If you have not already done so, download the Internet Explorer 4.0
	  installation files from the Web to a local hard disk or a network share.
	
	  NOTE: You can also copy the Internet Explorer 4.0 installation files from the
	  Internet Explorer 4.0 installation CD-ROM to a local hard disk or to a
	  network share.
	
	3. In Control Panel, install Internet Explorer 4.0:
	
	  a. Double-click Add/Remove Programs.
	
	  b. Click Install.
	
	  c. Click Next, and then click Browse.
	
	  d. Locate the Ie4setup.exe file on the local hard disk or on the network
	     share.
	
	  e. Click the Ie4setup.exe file, and then follow the instructions on your
	     screen to install Internet Explorer 4.0.
	
	Additional query words: add remove
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServSearch
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	
