---
layout: page
title: "Q240374: Explorer Reverts New Folder Name to &quot;New Folder&quot; in SFM Volume"
permalink: /kb/240/Q240374/
---

## Q240374: Explorer Reverts New Folder Name to &quot;New Folder&quot; in SFM Volume

	Article: Q240374
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0,4.0 SP1,4.0 SP2,4.0 SP3,4.0 SP4,4.0 SP5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3, 4.0 SP4, 4.0 SP5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you create a new folder in Windows NT Explorer under a Services for
	Macintosh (SFM) volume, the folder "New Folder" is created, and you are then
	able to type a name for this folder. However, when you try to rename the folder,
	the name reverts back to "New Folder" after a few seconds.
	
	CAUSE
	=====
	
	The problem occurs because of a combination of the SFM service and Windows NT
	Explorer.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT Server 4.0, 4.0 SP1,
	4.0 SP2, 4.0 SP3, 4.0 SP4, and 4.0 SP5.
	
	
	MORE INFORMATION
	================
	
	This problem does not occur if the new folder name is typed and then you press
	Enter within 5 seconds.
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400sp5 kbWinNTS400sp4 kbWinNTS400sp3 kbWinNTS400sp2 kbWinNTS400sp1 kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0,4.0 SP1,4.0 SP2,4.0 SP3,4.0 SP4,4.0 SP5
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
