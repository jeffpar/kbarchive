---
layout: page
title: "Q106222: CSD00.059 Allows Remoteboot to Work with MS-DOS 6.0, 6.2"
permalink: /kb/106/Q106222/
---

## Q106222: CSD00.059 Allows Remoteboot to Work with MS-DOS 6.0, 6.2

	Article: Q106222
	Product(s): Microsoft LAN Manager
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-JUL-2001
	
	SUMMARY
	=======
	
	
	Hotfix CSD00.059 allows LAN Manager Remoteboot to work with MS-DOS 6.0 and 6.2.
	
	
	MORE INFORMATION
	================
	
	MS-DOS 6 requires slightly more memory than MS-DOS 5. LAN Manager Remoteboot
	failed with MS-DOS 6.0 and 6.2 because some rpl boot block components (mainly
	RPLDISK.SYS) placed executing code in unprotected memory, where it was
	overwritten by the MS-DOS 6 boot process. (Other components were also affected.)
	RPLDISK.SYS is now in another location in memory.
	
	Install these fixed/new files immediately after installing LAN Manager and before
	executing the rplsetup/rplinst step. If you add them to an existing rpl server,
	re-run rplinst to set the permissions up correctly.
	
	No changes are needed to LANMAN\RPL\RPL.MAP. OS/2 rpl is not affected, and no
	files specific to it need to change. MS-DOS 6.2 support is also included.
	
	
	Additional query words: 2.20 2.2 2.10a 2.1a 2.10 2.1
	
	======================================================================
	Keywords          :  
	
	=============================================================================
	
