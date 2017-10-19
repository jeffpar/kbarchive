---
layout: page
title: "Q283102: Windows NT4.0 Print Servers Paged Pool Leak on FsRt Pooltag"
permalink: /kb/283/Q283102/
---

## Q283102: Windows NT4.0 Print Servers Paged Pool Leak on FsRt Pooltag

	Article: Q283102
	Product(s): Microsoft Windows NT
	Version(s): 4.0,4.0 SP6a
	Operating System(s): 
	Keyword(s): kbenv kbprint kbtool kbWinNT400nospFix kbWin2000SP2Fix
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 4.0, 4.0 SP6a 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	When you are using a Windows NT 4.0-based print server that is running any
	service pack with spooler print notifications (pop-ups) enabled, the computer
	may run out of Paged Pool if the users who are submitting the print jobs are not
	logged on.
	
	When you use the Poolmon tool for a few days, paged pool usage increases due to
	pooltag elements of type FsRt.
	
	This problem usually occurs on print servers when the print requests are
	submitted from a Windows NT 4.0 service running under a dedicated service
	account, and no user is logged on under that account to receive the spooler
	notifications.
	
	CAUSE
	=====
	
	The problem can occur when the spooler generates printing notifications faster
	than the alerter-messenger remote procedure call (RPC) can dispatch them.
	
	After a variable period of time (one week or more), the print server computer may
	run out of paged pool and eventually stop responding (hang). This occurs because
	the spooler notifications use the mailslots mechanism and the messages are
	stored in paged pool on the server.
	
	If the receiving user is not logged on somewhere on the network, these
	notification messages cannot be delivered, and eventually exhaust paged pool.
	
	RESOLUTION
	==========
	
	To work around this problem, use one of the methods in this section.
	
	Method 1
	--------
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	If you do not need the spooler notifications, you can disable them by setting the
	NetPopUp value in the following registry key:
	
	  Key: HKEY_LOCAL_MACHINE\System\CurrentControlSet\Control\Print\Providers
	
	  Value: NetPopUp
	  Type: REG_DWORD
	  Data value: 0
	
	Method 2
	--------
	
	If you enable spooler notifications, verify that the user who should receive the
	notification is logged on to the network. If the user never logs on
	interactively (which is usually the case for a service account), printing
	notifications are accumulated on the server. After a period of time, the paged
	pool is exhausted and the print server must be restarted. Note that on a
	computer running Windows NT 4.0, the paged pool size is limited to 192 megabyte
	(MB).
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	This problem is resolved in Windows 2000 Service Pack 2 (SP2). The messenger is
	redesigned so that it is multiple threaded in Windows 2000, and SP2 adds an
	enabler hotfix.
	
	
	Additional query words: spooler spoolss mailslots notification
	
	======================================================================
	Keywords          : kbenv kbprint kbtool kbWinNT400nospFix kbWin2000SP2Fix 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400sp6 kbWinNTS400search kbWinNTS400
	Version           : :4.0,4.0 SP6a
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
