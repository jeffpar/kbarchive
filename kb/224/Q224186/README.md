---
layout: page
title: "Q224186: Access Violation Selecting More Than 32,767 Objects in Windows N"
permalink: /kb/224/Q224186/
---

## Q224186: Access Violation Selecting More Than 32,767 Objects in Windows N

	Article: Q224186
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0,4.0 SP1,4.0 SP2,4.0 SP3,4.0 SP4
	Operating System(s): 
	Keyword(s): kbui
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3, 4.0 SP4 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you select or attempt to manipulate more than 32,767 objects in Windows NT
	Explorer, you may receive an access violation error message in Explorer.exe.
	
	
	CAUSE
	=====
	
	This behavior occurs because Windows NT Explorer was not designed to manipulate
	over 32,767 objects.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	Additional query words: shell Explorer.exe restarts AV Drwatson
	
	======================================================================
	Keywords          : kbui 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400sp4 kbWinNTS400sp3 kbWinNTS400sp2 kbWinNTS400sp1 kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0,4.0 SP1,4.0 SP2,4.0 SP3,4.0 SP4
	Issue type        : kbprb
	
	=============================================================================
	
