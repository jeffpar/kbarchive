---
layout: page
title: "Q104559: Attachmate Extra Card not Supported in Windows NT"
permalink: kb/104/Q104559/
---

## Q104559: Attachmate Extra Card not Supported in Windows NT

	Article: Q104559
	Product(s): Microsoft Windows NT
	Version(s): 3.1
	Operating System(s): 
	Keyword(s): kb3rdparty
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to attach to an IBM mainframe from a VDM under Windows NT using
	Attachmate Extra for MS-DOS v2.23, you receive the following error message and
	are returned to the COMMAND prompt:
	
	  Configuration Error
	  Error Detected
	  Press any Key to continue
	
	When you try to attach to an IBM mainframe from Windows NT using Attachmate Extra
	for Windows v3.3, 3.4 or 3.5, you receive the following error message:
	
	  Cannot connect to mainframe.
	  Try again with more memory.
	
	  NTVDM CPU has encountered an illegal instruction
	  CS:007a IP:0058 OP:f0 53 ff 00
	  Choose CLOSE to terminate application.
	
	CAUSE
	=====
	
	There are no Windows NT drivers for the Attachmate Extra card at this time.
	
	RESOLUTION
	==========
	
	There is no resolution at this time. To be notified as soon as drivers are
	available, please call Attachmate technical support at (425) 644-4010.
	
	Steps to work around this problem:
	
	There are Windows NT network drivers for the NetBIOS and TCP/IP Connections. For
	more information, query on the following words in the Microsoft Knowledge Base:
	
	  Windows NT and dlc and attachmate
	
	
	Additional query words: prodnt Coax 3270
	
	======================================================================
	Keywords          : kb3rdparty 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW310 kbWinNTSsearch kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : 3.1
	
	=============================================================================
	
