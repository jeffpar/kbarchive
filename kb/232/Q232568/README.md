---
layout: page
title: "Q232568: Permissions on the Temp&#92;x Folder Are Incorrectly Reset"
permalink: /kb/232/Q232568/
---

## Q232568: Permissions on the Temp&#92;x Folder Are Incorrectly Reset

	Article: Q232568
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0 SP4
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 SP4, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you install Windows NT Server 4.0 Service Pack 4, Terminal Server Edition,
	a user may receive an "access denied" error message when attempting to gain
	access to the %SystemRoot%\Temp\<x> folder (where <x> is the session
	ID assigned to the user).
	
	CAUSE
	=====
	
	This behavior occurs when a user improperly quits a Terminal Server session; the
	%SystemRoot%\Temp\<x> folder is not properly deleted.
	
	When a second user logs on and receives the session number used by the first
	user, the second user does not have the correct permissions to the
	%SystemRoot%\Temp\<x> folder.
	
	RESOLUTION
	==========
	
	To work around this problem, delete the first user's %SystemRoot%\Temp\<x>
	folder, or view the following article in the Microsoft Knowledge Base:
	
	  Q234029 Err Msg: Temp Directory Not Accessible After Applying TSE SP4
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in Microsoft Windows NT Server
	4.0 Service Pack 4, Terminal Server Edition.
	
	
	Additional query words: WTS
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400sp4 kbNTTermServSearch
	Version           : winnt:4.0 SP4
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
