---
layout: page
title: "Q184744: DHCP Server Leaks Registry Quota on Alpha Version of Windows NT"
permalink: /kb/184/Q184744/
---

## Q184744: DHCP Server Leaks Registry Quota on Alpha Version of Windows NT

	Article: Q184744
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbWinNT400sp4fix
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A DHCP server running on an Alpha server causes Registry Quota to be leaked over
	time. This may result in degraded system performance or the following STOP error
	message:
	
	  Stop 0xc000021a e17c7fc8 00000000 00000000
	
	CAUSE
	=====
	
	This issue only occurs on Alpha versions of Windows NT 4.0 with DHCP server
	installed. The problem is caused by allocating more memory than is deallocate
	when saving registry keys. DHCP server periodically leaks Registry Quota during
	normal operation, approximately .065 KB every 10 minutes using PerfMon
	statistics. This problem is amplified by repeatedly starting and stopping the
	DHCP service. The service was found to have 2 leaks, each leaking 2 KB every
	time the service was started and stopped.
	
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
	
	
	Additional query words: registry memory leak
	
	======================================================================
	Keywords          : kbWinNT400sp4fix 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : WinNT:4.0
	Hardware          : ALPHA
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
