---
layout: page
title: "Q246515: STOP Message When Backing Up Long File Names from Novell Server"
permalink: kb/246/Q246515/
---

## Q246515: STOP Message When Backing Up Long File Names from Novell Server

	Article: Q246515
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run Cheyenne's ARCserve on a Compaq ProLiant 6000 Dual Processor server
	running Microsoft Windows NT Server 4.0, you may receive a STOP 0x0A or STOP
	0x1E error message. This may occur during the backup of files with long names
	from a Novell-based server to the Windows NT-based server.
	
	CAUSE
	=====
	
	The cause is unknown.
	
	RESOLUTION
	==========
	
	To resolve this issue, do one or more of the following, depending on the type of
	error message:
	
	1. To resolve the STOP 0x0A error message, install the latest Compaq Software
	  Support Disk (SSD) for Windows NT Server 4.0 on the Windows NT-based server.
	  To obtain the latest SSD, visit the following Compaq Computer Corp. Web site
	  at:
	
	  http://www.compaq.com/support/files/server/WINNT/index.html
	
	2. To resolve the STOP 0x1E message, install the IntraNetware Support Pack 4E or
	  later on the Novell-based server. To obtain the latest IntraNetware Support
	  Pack, visit the following Novell, Inc. Web site at:
	
	  http://support.novell.com/
	
	3. Install the latest Cheyenne ARCserve patch on the Windows NT-based server. To
	  obtain it, visit the following Computer Associates Web site at:
	
	  http://support.cai.com/Download/patches/techptch.html
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words: nt 4.0 0x0A 0x1E novell long file
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	
