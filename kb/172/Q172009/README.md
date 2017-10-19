---
layout: page
title: "Q172009: WINS Server Experiences Slow Performance"
permalink: /kb/172/Q172009/
---

## Q172009: WINS Server Experiences Slow Performance

	Article: Q172009
	Product(s): Microsoft Windows NT
	Version(s): WinNT:3.5,4.0
	Operating System(s): 
	Keyword(s): kb3rdparty kbnetwork
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You have network clients using Cheyenne's ArcServe client and your Windows
	Internet Name Service (WINS) server on your network may stop responding to all
	name queries. The network clients have both a primary and secondary WINS server
	specified in their TCP/IP properties.
	
	CAUSE
	=====
	
	Cheyenne ArcServe has a feature known as Auto Discovery mode, that allows the
	software to discover all clients on the network. Unfortunately, the Auto
	Discovery mode causes enormous amounts of queries against the primary and
	secondary WINS servers.
	
	
	RESOLUTION
	==========
	
	WARNING: Using Registry Editor incorrectly can cause serious, system-wide
	problems that may require you to reinstall Windows NT to correct them. Microsoft
	cannot guarantee that any problems resulting from the use of Registry Editor can
	be solved. Use this tool at your own risk.
	
	To resolve this issue, you will need to edit the registry using the following
	steps:
	
	1. Start Registry Editor (Regedt32.exe) and select the following subkey:
	
	  HKEY_LOCAL_MACHINE\SOFTWARE\Cheyenne\ARCserve\CurrentVersion
	  \ServerRecord
	
	2. Click BCastType, from the Edit menu, click DWORD.
	
	3. Type 0, and then click OK.
	
	4. Close Registry Editor and restart the computer.
	
	MORE INFORMATION
	================
	
	For information about how to contact Cheyenne, query in the Microsoft Knowledge
	Base for the following article:
	
	  Q65416 Hardware and Software Third-Party Vendor Contact List, A-K
	
	
	
	ARCServe is manufactured by Cheyenne, a vendor independent of Microsoft; we make
	no warranty, implied or otherwise, regarding this product's performance or
	reliability.
	
	Additional query words: backup degraded poor
	======================================================================
	Keywords          : kb3rdparty kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT400search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search
	Version           : WinNT:3.5,4.0
	Issue type        : kbprb
	
	=============================================================================
	
