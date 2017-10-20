---
layout: page
title: "Q186416: System Hang Results from Large Number of Notify Syncs"
permalink: /kb/186/Q186416/
---

## Q186416: System Hang Results from Large Number of Notify Syncs

{% raw %}

	Article: Q186416
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbWinNT400sp4fix
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 SP3 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Your computer running Windows NT 4.0 Service Pack 3 (SP3) that is configured as
	a domain controller may stop responding (hang) when approximately 400 users with
	a centralized desktop scheme are connected to the domain controller.
	
	CAUSE
	=====
	
	With this centralized desktop scheme, the most significant network load came
	about when the Start Menu and Desktop were refreshed. The Explorer shell from
	the client causes a series of NotifyChangeDirectoryFile calls to be made to the
	file system of the server during these refresh cycles. Each call causes a notify
	sync object to be allocated and places an IRP in the notify queue.
	
	In this configuration, the 400 users generated a significant number of notify
	syncs, which eventually would create a mismatch between an associated IRP and
	its notify synch object because of a timing issue.
	
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
	
	
	======================================================================
	Keywords          : kbWinNT400sp4fix 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400sp3 kbWinNTS400search kbNTTermServ400 kbNTTermServSearch
	Version           : WinNT:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
