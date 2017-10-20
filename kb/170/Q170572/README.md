---
layout: page
title: "Q170572: Unable to Format a 1.44-MB Disk on an LS-120 After SP3"
permalink: /kb/170/Q170572/
---

## Q170572: Unable to Format a 1.44-MB Disk on an LS-120 After SP3

{% raw %}

	Article: Q170572
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kb3rdparty kbhw kbWinNT400sp4fix kbHardware
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After installing Service Pack 3 and when using an LS-120 removable media drive
	that also reads/writes 1.44-MB disks, you are unable to format a 1.44-MB disk.
	You can still write to an already formatted disk or to LS- 120 media.
	
	RESOLUTION
	==========
	
	Perform the following steps to work around this problem:
	
	1. Rename %Systemroot%\system32\drivers\Atapi.sys to Atapi.org.
	
	2. Copy the Atapi.sys from Service Pack 2 to the following directory:
	
	     %Systemroot%\system32\drivers directory.
	
	3. Shut down and restart the system.
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	Windows NT Server 4.0, Terminal Server Edition. For additional information,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0 Service
	Pack 3. This problem was first corrected in Windows NT 4.0 Service Pack 4.0 and
	Windows NT Server 4.0, Terminal Server Edition Service Pack 4.
	======================================================================
	Keywords          : kb3rdparty kbhw kbWinNT400sp4fix kbHardware 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : WinNT:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
