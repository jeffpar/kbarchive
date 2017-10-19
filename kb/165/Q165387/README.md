---
layout: page
title: "Q165387: Sharing Violation When Deleting a Folder"
permalink: /kb/165/Q165387/
---

## Q165387: Sharing Violation When Deleting a Folder

	Article: Q165387
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbui kbWinNT400sp4fix
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you uncompress a directory structure on an NTFS volume and you quit the
	process for any reason (such as corrupt file or out of free space), you will
	receive a sharing violation when trying to delete the directory structure. The
	sharing violation always occurs in the directory of the last file accessed when
	you quit the uncompression process.
	
	
	CAUSE
	=====
	
	This is caused because Explorer.exe (Windows NT 4.0 shell) keeps an open handle
	to the directory.
	
	WORKAROUND
	==========
	
	To work around this problem, perform either of the following steps:
	
	- Log off the computer and log back on, which should clear the handle. You
	  should now be able to delete the directory.
	
	  -or-
	
	- Restart your system.
	
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
	
	
	Additional query words: compress uncompress
	
	======================================================================
	Keywords          : kbui kbWinNT400sp4fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : winnt:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
