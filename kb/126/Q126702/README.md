---
layout: page
title: "Q126702: Registry Editor &quot;Save Subtree As&quot; Does Not Complete"
permalink: kb/126/Q126702/
---

## Q126702: Registry Editor &quot;Save Subtree As&quot; Does Not Complete

	Article: Q126702
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run Registry Editor and back up the HKEY_LOCAL_MACHINE subtree by
	choosing Save Subtree As from the File menu, the entire tree is not saved.
	Although Registry Editor appears to finish saving the file, it stops at
	software\microsoft\windows nt\current version\perflib\009. It does not save the
	rest of the subtree information.
	
	Save Subtree As works correctly with the other subtrees.
	
	WORKAROUND
	==========
	
	If you need to back up the registry, use Windows NT Backup or RDISK.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.5. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	
	=============================================================================
	
