---
layout: page
title: "Q191614: Able to Commit More Memory Than Is Available"
permalink: kb/191/Q191614/
---

## Q191614: Able to Commit More Memory Than Is Available

	Article: Q191614
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbWinNT400sp4fix
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	- Microsoft BackOffice Server 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Applications appear to use more memory than is available (physical RAM +
	pagefile) and get repeated Out of Virtual Memory errors.
	
	CAUSE
	=====
	
	When a user receives the following error message:
	
	  System Process - Out of Virtual Memory
	
	  Your system is running low on virtual memory. Please close some
	  applications. You can then start the System option in the Control
	  Panel and choose the Virtual Machine button to create an additional
	  page file or to increase the size of your current paging file.
	
	By clicking OK, the system will continue to run and will allow applications to
	consume more memory. If you do not free up memory by following the instructions
	indicated by the error message, the system will bring up another popup error. By
	clicking OK button, the system will continue to run and will consume more memory
	until the amount of memory being used reaches what is actually available with
	RAM and pagefile combined. It will, however, appear to use more memory than
	that.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	Windows NT Server 4.0, Terminal Server Edition. For additional information,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	After the service pack is applied, Windows NT does not show that it has allocated
	more memory than what is set with the RAM and page file. There may only be a
	single warning message, but if more processes are started, additional error
	messages may appear.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0 and Windows NT
	Server 4.0, Terminal Server Edition. This problem was first corrected in Windows
	NT 4.0 Service Pack 4.0 and Windows NT Server 4.0, Terminal Server Edition
	Service Pack 4.
	
	
	Additional query words: committed commited bytes limit
	
	======================================================================
	Keywords          : kbWinNT400sp4fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch kbAudDeveloper kbBackOfficeSearch kbBackOfficeServ400
	Version           : winnt:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
