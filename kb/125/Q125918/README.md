---
layout: page
title: "Q125918: PC DirSync: SRVMAIN.EXE Causes Trap 000D Error"
permalink: /kb/125/Q125918/
---

## Q125918: PC DirSync: SRVMAIN.EXE Causes Trap 000D Error

	Article: Q125918
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.2a
	Operating System(s): 
	Keyword(s): kberrmsg kbinterop
	Last Modified: 29-JAN-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, version 3.2a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	During the T2 phase of directory synchronization (Dir-Sync), when SRVMAIN -r
	runs on OS/2 or in the OS/2 subsystem on Microsoft Windows NT, a Trap 000D error
	may occur.
	
	CAUSE
	=====
	
	SRVMAIN.EXE produces a Trap 000D error when it tries to process a corrupt
	attachment sent with the status message from a requestor. The DSSERVER.LOG on
	the requestor is the file that gets sent as an attachment to the Dir-Sync
	server, and this file contains corruption.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SRVMAIN.EXE version 3.2a of
	Microsoft Mail for PC Networks. This problem was corrected in SRVMAIN version
	3.2.12.
	
	
	
	Additional query words: 3.20 kbbug3.20a kbfix3.20.13
	
	======================================================================
	Keywords          : kberrmsg kbinterop 
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320a
	Version           : WINDOWS:3.2a
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
