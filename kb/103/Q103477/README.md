---
layout: page
title: "Q103477: ProComm Plus Downloads Slowly Using Zmodem in Windows NT"
permalink: /kb/103/Q103477/
---

## Q103477: ProComm Plus Downloads Slowly Using Zmodem in Windows NT

{% raw %}

	Article: Q103477
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
	
	When using ProComm Plus for Windows or MS-DOS with Windows NT, the Zmodem
	protocol may not function properly, it may take much longer than usual to
	download files using Zmodem. The Zmodem protocol is usually one of the faster
	protocols available in most telecommunication packages and therefore it is
	widely used.
	
	ProComm Plus for Windows 1.02 and earlier have this problem.
	
	WORKAROUND
	==========
	
	To work around the problem, use a 2 kilobyte (K) or 4K window for Zmodem or
	select a different protocol for downloading. Although this protocol functions
	properly in other applications in Windows NT, it may run very slowly with
	ProComm Plus for Windows or MS-DOS in Windows NT. All other protocols provided
	with Procomm Plus should function properly with Windows NT.
	
	For ProComm Plus for Windows 2.0, there is an .INI setting in the ProComm for
	Windows .INI file (PW2.INI) in the [Options] section, there is a setting for
	
	  DropRTSAroundDiskWrites=1
	
	where 1 is for Windows 3.x and Windows NT; 0 is for OS/2 and Windows 95.
	
	STATUS
	======
	
	This problem does not occur with Windows NT version 3.5.
	
	ProComm Plus is manufactured by DataStorm Technologies, a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding this products'
	performance or reliability.
	
	Additional query words: prodnt crawl slow modem
	
	======================================================================
	Keywords          : kb3rdparty 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW310 kbWinNTSsearch kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : 3.1
	
	=============================================================================
	

{% endraw %}
