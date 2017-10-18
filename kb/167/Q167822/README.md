---
layout: page
title: "Q167822: Error 0122 Starting Peer Web Server"
permalink: kb/167/Q167822/
---

## Q167822: Error 0122 Starting Peer Web Server

	Article: Q167822
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kberrmsg kbnetwork
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After installing Microsoft Peer Web Server in Windows NT Workstation 4.0,
	neither the World Wide Web Publishing service nor the FTP Server Service may
	start automatically. In addition, if you attempt to start these services
	manually, the following message may be displayed:
	
	  Service manager on <COMPUTER NAME> could not start <SERVICE
	  NAME>
	
	  Error 0122 the data passed to the system call is too small
	
	CAUSE
	=====
	
	This error is caused by having TCP/IP protocols from multiple manufacturers
	installed at the same time. Microsoft Peer Web Server functions only over the
	Microsoft TCP/IP protocol.
	
	RESOLUTION
	==========
	
	The following procedure should allow you to continue to use your own client for
	access to your local network.
	
	WARNING: Using Registry Editor incorrectly can cause serious, system- wide
	problems that may require you to reinstall Windows NT to correct them. Microsoft
	cannot guarantee that any problems resulting from the use of Registry Editor can
	be solved. Use this tool at your own risk.
	
	Use Registry Editor (Regedt32.exe) to change the following key:
	
	HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\Winsock\ 
	Parameters\Transports
	
	Move TCP/IP to the top of the transports list. After you make this change,
	Restart the computer.
	
	
	======================================================================
	Keywords          : kberrmsg kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search
	Version           : 4.0
	
	=============================================================================
	
