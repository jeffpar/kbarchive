---
layout: page
title: "Q191601: Defragmentation Application Hangs"
permalink: /kb/191/Q191601/
---

## Q191601: Defragmentation Application Hangs

{% raw %}

	Article: Q191601
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbWinNT400sp4fix
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	While running a defragmentation application on a volume that is formatted as
	FAT, the application can cease to respond (hang), along with other applications,
	and possibly the computer itself. No record of the hang will be logged. No entry
	will appear in the event logs, and a Dr. Watson error will not occur.
	
	CAUSE
	=====
	
	Running a defragmentation application while you actively open and close files
	forces Windows NT to enter a timing window. This timing window makes unsafe
	synchronization possible on the file being defragmented, and the system hangs as
	it waits for the error condition to be resolved. All defragmentation
	applications that use FSCTL_MOVE_FILE on FAT call are susceptible. This error is
	rare in occurrence.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0. For
	additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0. This problem was
	first corrected in Windows NT 4.0 Service Pack 4.
	
	Additional query words: kbDSupport 4.00
	
	======================================================================
	Keywords          : kbWinNT400sp4fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
