---
layout: page
title: "Q195636: Fiber System Loses SCSI Reservation After Multiple Restarts"
permalink: /kb/195/Q195636/
---

## Q195636: Fiber System Loses SCSI Reservation After Multiple Restarts

{% raw %}

	Article: Q195636
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbWinNT400sp4fix
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	- Microsoft Cluster Server 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A potential problem exists after multiple reboots of a clustered system using a
	fiber channel array as the shared storage system. After multiple restarts, the
	SCSI reservations may lose a drive array because of repeated SCSI resets.
	
	CAUSE
	=====
	
	This problem is because a reservation conflict occurs in the Disk.sys driver.
	
	RESOLUTION
	==========
	
	A new file entry solves the problem by enumerating the following information in
	Disk.sys STATUS_DEVICE_BUSY (the status that indicates a reservation conflict).
	
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
	
	Additional query words: Disk.sys SCSI RESERVATION MSCS
	
	======================================================================
	Keywords          : kbWinNT400sp4fix 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbNTTermServ400 kbNTTermServSearch kbAudDeveloper kbClustServSearch
	Version           : WinNT:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
