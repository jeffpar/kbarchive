---
layout: page
title: "Q150059: Cannot Perform a NET VIEW Across RAS to Windows 95 Client"
permalink: /kb/150/Q150059/
---

## Q150059: Cannot Perform a NET VIEW Across RAS to Windows 95 Client

{% raw %}

	Article: Q150059
	Product(s): Microsoft Windows NT
	Version(s): WINDOWS:95; winnt:3.5,3.51
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Windows NT servers and workstations are unable to perform a NET VIEW on a
	Windows 95 client when they are dialed in remotely through Remote Access Service
	(RAS). The Windows NT clients can perform a NET USE without difficulty, but they
	must know the share connection. The Windows 95 remote can perform a NET VIEW or
	NET USE to Windows NT servers and workstations or other Windows 95 clients
	without difficulty.
	
	The following error message appears in Windows NT when a NET VIEW is performed
	from a command prompt:
	
	  System error 1450 has occurred.
	  Insufficient system resources exist to complete the requested service.
	
	
	CAUSE
	=====
	
	Windows 95 allows only one server message block (SMB) request at a time from
	each client. The Windows NT redirector has code that prevents all the command
	slots at a server from being tied up with "long term" operations. Remote API
	requests are marked as long term requests.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT versions 3.5 and
	3.51. This problem was corrected in the latest Windows NT 3.51 U.S. Service
	Pack. For information on obtaining the Service Pack, query on the following word
	in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: winnt hotfix bug ras view win95
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search kbWin95search kbZNotKeyword3
	Version           : WINDOWS:95; winnt:3.5,3.51
	
	=============================================================================
	

{% endraw %}
