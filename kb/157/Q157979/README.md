---
layout: page
title: "Q157979: NT/RDR: &quot;Access Denied&quot; with Windows NT 4.0 Ntbackup"
permalink: /kb/157/Q157979/
---

## Q157979: NT/RDR: &quot;Access Denied&quot; with Windows NT 4.0 Ntbackup

	Article: Q157979
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Windows NT 4.0 Ntbackup displays an "access denied" error if you try to access
	directories under a remote share to which you have connected. Therefore, you are
	not able to back up any remote files or directories.
	
	WORKAROUND
	==========
	
	Give the Backup Operator group or user the appropriate NTFS rights (Read) on all
	files and subdirectories. However, this implies that the Backup Operator group
	or user will be able to read files and directories from Windows Explorer also.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0.
	
	A supported fix is now available, but has not been fully regression- tested and
	should be applied only to systems experiencing this specific problem. Unless you
	are severely impacted by this specific problem, Microsoft recommends that you
	wait for the next Service Pack that contains this fix. Contact Microsoft
	Technical Support for more information.
	
	
	Additional query words: backup access denied prodnt
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	
	=============================================================================
	
