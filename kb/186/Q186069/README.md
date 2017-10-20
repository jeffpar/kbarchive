---
layout: page
title: "Q186069: Distributed File System Client Does Not Connect to Another Share"
permalink: /kb/186/Q186069/
---

## Q186069: Distributed File System Client Does Not Connect to Another Share

{% raw %}

	Article: Q186069
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:95; winnt:4.0
	Operating System(s): 
	Keyword(s): kbnetwork win95kbfixlist
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a Windows 95 Distributed File System (DFS) client tries to connect to a DFS
	network share that is unavailable, it may not attempt to connect to alternate
	network shares on a DFS network share.
	
	CAUSE
	=====
	
	This issue can occur if all of the following conditions exist:
	
	- A DFS object points to multiple share points.
	
	- One of these share points is deleted.
	
	For example, if \\DFSsrv1\DFSroot\Volume1 points to 2 network shares,
	\\DFSsrv1\Share1 and \\DFSsrv2\Share2, and \\DFSsrv1\Share1 is deleted (and is
	no longer available), then a Windows 95 client does not try to connect to
	\\DFSsrv2\Share2.
	
	RESOLUTION
	==========
	
	To resolve this issue, upgrade the Windows 95 DFS client from the following
	Microsoft Web site:
	
	  http://www.microsoft.com/ntserver/nts/downloads/winfeatures/NTSDistrFile/default.asp
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Windows 95 and OEM
	Service Release 2 (OSR2).
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork win95 kbfixlist
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWin95search kbZNotKeyword3
	Version           : WINDOWS:95; winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
