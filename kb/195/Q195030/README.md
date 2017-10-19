---
layout: page
title: "Q195030: Automatic Reboot Does Not Work with Default Paging File Size"
permalink: /kb/195/Q195030/
---

## Q195030: Automatic Reboot Does Not Work with Default Paging File Size

	Article: Q195030
	Product(s): Microsoft Windows NT
	Version(s): WINNT:4.0
	Operating System(s): 
	Keyword(s): kbenv kbWinNT400sp4fixkbfaq
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	On a Windows NT-based computer with exactly four gigabytes (GB) of RAM, if you
	select both the Write Debugging Information To and Automatically Reboot check
	boxes on the Startup/Shutdown tab in the System tool in Control Panel, allowing
	the default paging file size of 2049 megabytes (MB) of RAM causes the automatic
	reboot feature not to work.
	
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
	
	MORE INFORMATION
	================
	
	Under these conditions, if you receive an error message on a blue screen, or
	another serious error condition, Windows NT does not restart the computer after
	a memory dump has been performed.
	
	======================================================================
	Keywords          : kbenv kbWinNT400sp4fix kbfaq
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : WINNT:4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
