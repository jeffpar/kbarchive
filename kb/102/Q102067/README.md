---
layout: page
title: "Q102067: SESSTIMEOUT Information"
permalink: /kb/102/Q102067/
---

## Q102067: SESSTIMEOUT Information

{% raw %}

	Article: Q102067
	Product(s): Microsoft Windows NT
	Version(s): 3.1
	Operating System(s): 
	Keyword(s): kbenv
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	The function of the SESSTIMEOUT parameter has changed somewhat between
	Microsoft LAN Manager 2.x and Windows NT. In LAN Manager, SESSTIMEOUT
	is the maximum amount of time that the redirector waits for a server
	to respond to a Server Message Block (SMB). If SESSTIMEOUT expires,
	the session is disconnected. In Windows NT, SESSTIMEOUT is only part
	of the time-out equation.
	
	Windows NT uses a dynamic SMB response timer algorithm. The time-out
	can be changed on a per-SMB basis. The redirector uses some
	intelligence to calculate a proper time-out. Using a new TDI API call,
	[TDIQueryConnectionInfo], the redirector can determine the bytes per
	second rate of the media. It also knows the size of the data being
	sent or received in the SMB. Using this information, it calculates how
	long the SMB response is expected to take. To this value, it adds
	SESSTIMEOUT, which defaults to 45 seconds.
	
	  [(SMB size + the size of data being sent OR the expected data to be
	  read) / bytes per second] + SESSTIMEOUT.
	
	In Windows NT, SESSTIMEOUT can be thought of as a margin for error. If
	things go wrong or get delayed, the redirector waits an extra
	SESSTIMEOUT amount before giving up. In LAN Manager, it is the
	absolute maximum amount of time to wait.
	
	Currently, there is no way to see the value of the SMB response timer
	at any one point in time.
	
	SESSTIMEOUT can be set using REGEDT32. It is found under
	HKEY_LOCAL_MACHINE\SYSTEM\CURRENTCONTROLSET\SERVICES\ 
	LANMANWORKSTATION\PARAMETERS\SESSTIMEOUT. It has a variable type of
	REG_DWORD. The value is stored in decimal seconds. The default is 45.
	Range 10 to 65535 seconds. SESSTIMEOUT is never automatically
	adjusted. If you manually adjust the value it will take effect
	immediately.
	
	In addition, SESSTIMEOUT and the SMB Response timer are system-wide
	parameters. With LAN Manager, SESSTIMEOUT does not apply to TCP/IP. In
	Windows NT, it applies to all protocols including TCP/IP.
	
	SESSTIMEOUT does not apply to certain types of SMBs. These mostly
	consist of Transaction commands, which have their own time-out
	variable in the SMB. SESSTIMEOUT mostly comes into effect on Read and
	Write operations.
	
	Additional query words: prodnt tuning registry
	
	======================================================================
	Keywords          : kbenv 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTW310 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS351search kbWinNTS350search kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : 3.1
	
	=============================================================================
	

{% endraw %}
