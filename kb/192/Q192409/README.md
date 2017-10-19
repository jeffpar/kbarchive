---
layout: page
title: "Q192409: Open Files Can Cause Kernel to Report INSUFFICIENT_RESOURCES"
permalink: /kb/192/Q192409/
---

## Q192409: Open Files Can Cause Kernel to Report INSUFFICIENT_RESOURCES

	Article: Q192409
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbWinNT400sp4fix
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	The problem described in this article is difficult to identify. One way to check
	for the problem if you suspect you are experiencing it is to calculate the
	number of files open on the Window NT-based computer, and look at their size. If
	you have approximately 180 GB of open files that are not being closed
	continuously or are opened and closed rapidly in a looping condition, you may be
	experiencing this problem. Also, your programs may be receiving an
	INSUFFICIENT_RESOURCES error message when attempting to open, create, or extend
	a file.
	
	This problem is intermittent. If you try the operation again it is possible for
	it to succeed. This occurs because it is possible to have a program create and
	close files faster than Windows NT can clean up. When this occurs it is possible
	for the program to succeed if retried.
	
	One method that can be used to identify the problem is to start Task Manager and
	click the Performance tab. At the bottom, locate the Kernel Memory section and
	watch the value for Paged Memory. You may experience the problem when that value
	reaches approximately 190. If this value goes back down immediately, you should
	be able to retry the operation that caused the error message and have it succeed
	if the system has enough resources to fulfill the program's request.
	
	
	RESOLUTION
	==========
	
	Install the following files and set the following registry entry.
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	Windows NT Server 4.0, Terminal Server Edition. For additional information,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	1. Start Registry Editor
	
	2. Navigate to the following registry subtree:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\Session Manager\Memory
	  Management
	
	3. From the Edit menu, click Add Value.
	
	4. Enter UnusedFileCache as the value name and set the Data Type to REG_DWORD.
	
	5. Click OK and enter a value of 0 (zero) or 5-40 as the data value.
	
	  0 = Default behavior similar to Windows NT 4.0 Service Pack 3.
	  5 - 40 Trim unused file cache based on pool usage.
	  This number represents the percent of pool that we allow to be consumed by
	  unused segments. Where 5 is most aggressive. (For example, it increases the
	  size of the cache the least ) and 40 is least aggressive. (For example, lets
	  the cache grow to the largest before trimming) .
	
	  Internal testing found that this fix has positive benefits in that it also
	  increases the performance of some applications such as IIS. It works best
	  when set to 15-20. Do not choose a value greater than 20 without extensive
	  stress testing.
	
	6. Click OK, quit Registry Editor, and then restart the computer.
	
	For additional information, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q171458 Windows NT May Fail On Request to Open Large Files
	
	The solution to this issue also improves the performance of the computer.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0 and Windows NT
	Server 4.0, Terminal Server Edition. This problem was first corrected in Windows
	NT 4.0 Service Pack 4.0 and Windows NT Server 4.0, Terminal Server Edition
	Service Pack 4.
	
	Additional query words: mmst
	
	======================================================================
	Keywords          : kbWinNT400sp4fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : :4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
