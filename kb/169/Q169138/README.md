---
layout: page
title: "Q169138: Network Connections Are Deferred"
permalink: kb/169/Q169138/
---

## Q169138: Network Connections Are Deferred

	Article: Q169138
	Product(s): Microsoft Windows NT
	Version(s): 2.2,3.11,4.0
	Operating System(s): 
	Keyword(s): kbdomain
	Last Modified: 22-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft LAN Manager, version 2.2 
	- Microsoft Windows for Workgroups version 3.11 
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	By default, persistent drive connections are deferred in Windows NT 4.0. These
	deferred connections are sometimes referred to as ghosted. If you type net use
	from the command prompt, the drive status shows disconnected. Setting focus to
	the drive changes the drive mapping status to OK and initiates a connection with
	the server. However, you will experience the following error when using Windows
	NT Explorer to access a deferred mapping to a share-level server or user-level
	server that requires a password other than that of the currently logged on
	user:
	
	  D:\ is not accessible.
	
	  Logon failure: unknown username or password.
	
	CAUSE
	=====
	
	The DeferFlags registry entry is not set to 1.
	
	This registry value should be added when making a persistent drive mapping to a
	server that requires specifying a password before connecting:
	
	HKEY_CURRENT_USER\Network\D   (where D represents the drive mapping)
	
	Valuename:  DeferFlags
	Datatype:   REG_DWORD
	Value:      1
	
	For additional information on ghosted connections, please see the following
	article in the Microsoft Knowledge Base:
	
	  Q127018 How to Enable Ghosted Connections in Windows NT
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. This
	problem has been corrected in the latest U.S. Service Pack for Windows NT
	version 4.0. For information on obtaining the Service Pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: ghost defer restore quick share
	
	======================================================================
	Keywords          : kbdomain 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbAudDeveloper kbWin95search kbLanManSearch kbWFWSearch kbZNotKeyword3 kbWFW311 kbLanMan220
	Version           : :2.2,3.11,4.0
	Hardware          : x86
	
	=============================================================================
	
