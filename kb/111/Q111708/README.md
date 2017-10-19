---
layout: page
title: "Q111708: Registry Subtree Not Saved to Disk"
permalink: /kb/111/Q111708/
---

## Q111708: Registry Subtree Not Saved to Disk

	Article: Q111708
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
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In Registry Editor, when you choose Save Subtree As from the Registry menu and
	select a disk drive that does not have enough space to accommodate the Registry
	data, Windows NT write an empty or partial subtree file on disk and no error
	message will appear.
	
	WORKAROUND
	==========
	
	Make sure you select a directory with adequate room for the Registry subtree you
	wish to save.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT and Windows NT
	Advanced Server version 3.1. This problem has been corrected in Windows NT
	Workstation and Windows NT Server version 3.5.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbother 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW310 kbWinNTSsearch kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : 3.1
	
	=============================================================================
	
