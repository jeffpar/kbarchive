---
layout: page
title: "Q174456: LFN MS-DOS Shortcuts Do Not Run When 8.3 Names Are Disabled"
permalink: /kb/174/Q174456/
---

## Q174456: LFN MS-DOS Shortcuts Do Not Run When 8.3 Names Are Disabled

{% raw %}

	Article: Q174456
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kberrmsg
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to run a long file name (LFN) MS-DOS shortcut on a Windows NT
	client with the shortcut residing on a partition that does not create 8.3
	(short) file names, the following error message will occur:
	
	  Program Not Found
	
	  Windows Cannot Find <LFN Shortcut Name>.pif
	
	  This program is needed for opening files of type "Shortcut to MS-DOS
	  Program."
	
	  Location to <LFN Shortcut Name>.pif:
	
	WORKAROUND
	==========
	
	To work around this problem, perform on of the following:
	
	- Move the shortcuts to a location that does generate short file names.
	
	  -or-
	
	- Create only short file names when creating shortcuts.
	
	MORE INFORMATION
	================
	
	This problem can be caused by storing shortcuts on an NTFS partition after
	having disabled 8.3 name creation with the NtfsDisable8dot3NameCreation registry
	key.
	This problem can also be caused by storing shortcuts on a NetWare file server.
	NetWare supports long file names through the OS/2 namespace. It does not support
	8.3 file name creation.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	Additional query words: profile policy os eight three os2nam.nlm
	======================================================================
	Keywords          : kberrmsg 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	Hardware          : x86
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
