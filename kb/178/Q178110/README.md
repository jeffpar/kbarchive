---
layout: page
title: "Q178110: FPNW Does Not Allow OS/2 Clients to Open Files"
permalink: /kb/178/Q178110/
---

## Q178110: FPNW Does Not Allow OS/2 Clients to Open Files

{% raw %}

	Article: Q178110
	Product(s): Microsoft Windows NT
	Version(s): WINNT:4.0 SP3
	Operating System(s): 
	Keyword(s): kbWinNT400sp4fix
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 SP3 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	OS/2 Warp clients version 3.0 or 4.0 can log on to a computer running Windows NT
	Server 4.0 Service Pack 3 and File and Print services for NetWare (FPNW).
	However, the client cannot map a network drive or access a file from the command
	prompt.
	
	CAUSE
	=====
	
	This problem occurs if the client tries to map or access a file from the command
	prompt in OS/2. Windows NT 4.0 Service Pack 3 provides support for extended NCP
	to support Client32. As a result, the OS/2 support for NetWare from the command
	prompt does not function properly.
	
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	Windows NT Server 4.0, Terminal Server Edition. For additional information,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0 Service
	Pack 3. This problem was first corrected in Windows NT 4.0 Service Pack 4.0 and
	Windows NT Server 4.0, Terminal Server Edition Service Pack 4.
	
	
	Additional query words: VLM MS-DOS DOS login logon sp sp3 prodnt 4.00
	======================================================================
	Keywords          : kbWinNT400sp4fix 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400sp3 kbWinNTS400search kbNTTermServ400 kbNTTermServSearch
	Version           : WINNT:4.0 SP3
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
