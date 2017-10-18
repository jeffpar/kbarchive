---
layout: page
title: "Q236964: Delayed Return of Paged Pool Causes Error 1450"
permalink: kb/236/Q236964/
---

## Q236964: Delayed Return of Paged Pool Causes Error 1450

	Article: Q236964
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0,4.0 SP6
	Operating System(s): 
	Keyword(s): kbWinNT4sp6fix
	Last Modified: 16-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	- Microsoft Windows NT Server version 4.0 SP6 
	- Microsoft Windows NT Workstation version 4.0 SP6 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 SP6 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The problem described in this article is difficult to identify. One way to check
	for the problem if you suspect you are experiencing it is to calculate the
	number of files open on the Window NT-based computer and look at their size. If
	you have approximately 180 gigabytes (GB) of open files that are not being
	closed continuously or are opened and closed rapidly in a looping condition, you
	may be experiencing this problem. Also, your programs may be receiving an
	INSUFFICIENT_RESOURCES error message when attempting to open, create, or extend
	a file.
	
	This problem can be intermittent. If you try the operation again it is possible
	for it to succeed. This behavior occurs because it is possible to have a program
	create and close files faster than Windows NT can clean up. When this occurs it
	is possible for the operation to succeed if retried.
	
	Another method that you can use to identify the problem is to start Task Manager
	and click the Performance tab. At the bottom of the tab, locate the Kernel
	Memory section and watch the value for Paged Memory. You may experience the
	problem when that value reaches approximately 190. If this value goes back down
	immediately, you should be able to retry the operation that caused the error
	message and have it succeed (if the system has enough resources to fulfill the
	program's request).
	
	CAUSE
	=====
	
	In Windows NT 4.0 Service Pack 4 (SP4), optimization was added to the cache
	manager and the NTFS file system that allows NTFS to return a FALSE response
	when the cache manager tries to acquire a file for "lazy" writing. NTFS does
	this when it is in the middle of a clean checkpoint, because clean checkpoints
	can take time to finish. This allows the cache manager to move on to other files
	on other volumes instead of waiting for the clean checkpoint to finish.
	
	In this case, NTFS needs to free recently deallocated clusters. NTFS does this by
	forcing a clean checkpoint. In this particular situation, the cache manager
	should wait for the checkpoint to finish instead of moving on to work on other
	files, because it is not really a clean checkpoint and should not take very
	long.
	
	The solution is not to let NTFS return a FALSE response to the cache manager when
	it is performing a clean checkpoint as a result of needing recently deallocated
	clusters freed.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	the individual software update. For information on obtaining the latest service
	pack, please go to:
	
	- http://www.microsoft.com/windows/servicepacks/
	
	-or-
	
	- Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	For information on obtaining the individual software update, contact Microsoft
	Product Support Services. For a complete list of Microsoft Product Support
	Services phone numbers and information on support costs, please go to the
	following address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0 and Windows NT
	Server 4.0, Terminal Server Edition. This problem was first corrected in Windows
	NT Server version 4.0, Terminal Server Edition Service Pack 6.
	
	Additional query words: insufficient resources
	
	======================================================================
	Keywords          : kbWinNT4sp6fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400sp6 kbWinNTS400sp6 kbWinNTS400search kbNTTermServ400 kbNTTermServSearch kbWinNTW400sp6
	Version           : winnt:4.0,4.0 SP6
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
