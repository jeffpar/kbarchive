---
layout: page
title: "Q162595: NTFS Causes Windows NT Server to Stop Responding"
permalink: /kb/162/Q162595/
---

## Q162595: NTFS Causes Windows NT Server to Stop Responding

	Article: Q162595
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Under stressful conditions the Windows NT File System (NTFS) may fail. Processes
	accessing the NTFS volume may continue to run in a reduced functional state or
	they may stop responding entirely.
	
	CAUSE
	=====
	
	NTFS synchronizes access to the meta-data streams with a per-file resource.
	There is a path in Create where the resource can be dropped and reacquired. In
	this case, a close on the same directory came in while the resource was being
	dropped.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. A
	supported fix is now available, but is not fully regression-tested and should be
	applied only to systems experiencing this specific problem. Unless you are
	severely impacted by this specific problem, Microsoft recommends that you wait
	for the next Service Pack that contains this fix. Contact Microsoft Technical
	Support for more information.
	
	
	Additional query words: prodnt hang hung
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : winnt:3.51
	
	=============================================================================
	
