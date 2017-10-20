---
layout: page
title: "Q135763: Single-User Error Opening File in FileMaker Pro for Windows"
permalink: /kb/135/Q135763/
---

## Q135763: Single-User Error Opening File in FileMaker Pro for Windows

{% raw %}

	Article: Q135763
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): WINDOWS:95; winnt:3.5,3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups 
	- Microsoft TCP/IP-32 for Windows for Workgroups, versions 3.11, 3.11a, 3.11b 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to open a multi-user file with FileMaker Pro for Windows, the
	following error message appears:
	
	  The File is currently in use and could not be opened. File is single-user or
	  host could not be found.
	
	This symptom occurs when you run Windows for Workgroups or Windows NT with the
	Microsoft TCP/IP or IPX/SPX protocols.
	
	CAUSE
	=====
	
	FileMaker Pro for Windows does not function in multi-user mode when you run the
	Microsoft Windows for Workgroups or Windows NT TCP/IP or IPX/SPX protocols on
	your computer.
	
	WORKAROUND
	==========
	
	To work around this problem, install the following on your workstation and make
	corresponding changes on your server:
	
	- Microsoft NetBEUI protocol.
	
	  -or-
	
	- Novell IPX/SPX protocol.
	
	  -or-
	
	- Microsoft Windows 95 with Microsoft IPX/SPX protocol.
	
	FileMaker Pro for Windows is manufactured by Claris Corporation, a vendor
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	this product's performance or reliability.
	
	
	Additional query words: prodnt win95 wfw wfwg 3.11 3.11a 3.11b
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search kbAudDeveloper kbWin95search kbTCPIPSearch kbWFWSearch kbZNotKeyword3 kbTCPIP311 kbTCPIP311a kbTCPIP311b
	Version           : WINDOWS:95; winnt:3.5,3.51
	
	=============================================================================
	

{% endraw %}
