---
layout: page
title: "Q177660: Access Violation Occurs in Sfmprint.exe on Busy Print Server"
permalink: /kb/177/Q177660/
---

## Q177660: Access Violation Occurs in Sfmprint.exe on Busy Print Server

{% raw %}

	Article: Q177660
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbWinNT400sp4fix
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Print Services for Macintosh in Windows NT 4.0 may cause an access violation in
	Sfmprint.exe. Also, Sfmprint.exe may spin at 100 percent CPU usage just before
	the access violation.
	
	CAUSE
	=====
	
	A condition exists where an access violation results from the same print job
	being deleted twice on a busy print server. The print job is removed and then
	the same associated memory address is immediately used for another print job.
	The address is erroneously freed a second time for the first job. This caused an
	access violation when the address was referenced again.
	
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	Windows NT Server 4.0, Terminal Server Edition. For additional information,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0 and Windows NT
	Server 4.0, Terminal Server Edition. This problem was first corrected in Windows
	NT 4.0 Service Pack 4.0 and Windows NT Server 4.0, Terminal Server Edition
	Service Pack 4.
	
	
	Additional query words: CPU SFM access violation
	
	======================================================================
	Keywords          : kbWinNT400sp4fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : WinNT:4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
