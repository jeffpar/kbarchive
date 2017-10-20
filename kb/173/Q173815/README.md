---
layout: page
title: "Q173815: Open File Is Slow When Using Novell IntranetWare Client"
permalink: /kb/173/Q173815/
---

## Q173815: Open File Is Slow When Using Novell IntranetWare Client

{% raw %}

	Article: Q173815
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kb3rdparty kbnetwork
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Opening files off a Novell file server using the Novell IntraNetWare client
	takes a long time. This does not happen when Microsoft client for Novell is used
	instead of Novell IntraNetWare client.
	
	CAUSE
	=====
	
	The delay experienced by the user when using the Novell IntraNetWare client is
	caused by the Novell provided DLL (Novnpnt.dll). The Novell provided DLL doesn't
	export the entry point NPGetConnectionPerformance.
	
	MORE INFORMATION
	================
	
	This was a new entry point added in Windows 95 and Windows NT version 4.0 to
	implement the MultinetGetConnectionPerformance API. Microsoft Version of Novell
	redirector provided (Nwprovau.dll) does export that entry point. As a result,
	when MPR calls this entry point, it succeeds quickly.
	
	Because the Novell provided DLL (Novnpnt.dll) does not provide this entry point,
	MPR skips it and calls the next provider in the order that, in most cases, is
	the server message block provider DLL (ntlanman.dll), which takes a long time to
	fail.
	
	Additional query words: netware
	
	======================================================================
	Keywords          : kb3rdparty kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	Hardware          : ALPHA x86
	
	=============================================================================
	

{% endraw %}
