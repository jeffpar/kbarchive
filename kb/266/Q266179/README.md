---
layout: page
title: "Q266179: Unable to Create Volume When Adding a Directory to a Dfs Share"
permalink: /kb/266/Q266179/
---

## Q266179: Unable to Create Volume When Adding a Directory to a Dfs Share

	Article: Q266179
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use Dfs Administrator to add a directory to a distributed file system
	(Dfs) share, you may receive an error message indicating that the volume cannot
	be created.
	
	CAUSE
	=====
	
	This behavior can occur when the directory you selected contains files. You can
	add only empty directories to a Dfs share; you cannot use an existing share or
	directory that contains files as a Dfs share.
	
	RESOLUTION
	==========
	
	Either select an existing empty directory, or create a new directory to use as a
	share point by typing a new, unused directory name.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	
