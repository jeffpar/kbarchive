---
layout: page
title: "Q101651: Can Delete Directory and Files When Files Read-Only"
permalink: kb/101/Q101651/
---

## Q101651: Can Delete Directory and Files When Files Read-Only

	Article: Q101651
	Product(s): Microsoft Windows NT
	Version(s): 3.1
	Operating System(s): 
	Keyword(s): kbother
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	- Microsoft Windows NT Server versions 3.51, 4.0 
	- Microsoft Windows NT Workstation versions 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An attempt to delete a directory and all of its files succeeds, even when you
	have only Read permission to access the files.
	
	CAUSE
	=====
	
	If you have Full Control permission for a directory, you have an implied
	FILE_DELETE_CHILD permission. This permission enables you to delete a directory
	and all the files it contains (its children), even if the files are read-only.
	
	RESOLUTION
	==========
	
	To remove file delete privileges, remove Full Control privilege from the
	directory, and grant each privilege in the Other field of the Special Access
	menu.
	
	Additional query words: prodnt
	======================================================================
	Keywords          : kbother 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT400search kbWinNTW351search kbWinNTW351 kbWinNTW310 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS351search kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : 3.1
	
	=============================================================================
	
