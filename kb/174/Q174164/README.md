---
layout: page
title: "Q174164: MTG: PC DIRSYNC"
permalink: /kb/174/Q174164/
---

## Q174164: MTG: PC DIRSYNC

	Article: Q174164
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.2a,3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 3.2a, 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTONS
	========
	
	After running import during a manual dirsync, the program fails with an error
	message that may appear in the Dirsync.log file:
	
	  ERROR [13] Dirsync import error accessing srvtrans.glb
	
	CAUSE
	=====
	
	This problem occurs when import attempts to read the Srvtrans.glb file and the
	file is either locked open or corrupted.
	
	RESOLUTION
	==========
	
	To resolve this problem, do one of the following:
	
	- If the file is locked open, remove the lock and try import again. It may be
	  necessary to complete another full dirsync cycle.
	
	- If the file is larger than zero bytes or corrupted, rename the Srvtrans.glb
	  file and create a new one using TYPE NUL > SRVTRANS.GLB and complete
	  another dirsync cycle:
	
	Additional query words: error13
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320a kbMailPCN350
	Version           : WINDOWS:3.2a,3.5
	Issue type        : kbprb
	
	=============================================================================
	
