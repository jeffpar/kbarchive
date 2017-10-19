---
layout: page
title: "Q65533: OS/2 LAN Manager: Numbering of Fault-Tolerance Drives"
permalink: /kb/065/Q65533/
---

## Q65533: OS/2 LAN Manager: Numbering of Fault-Tolerance Drives

	Article: Q65533
	Product(s): Microsoft LAN Manager
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-JUL-2001
	
	SUMMARY
	=======
	
	The following is an explanation of how fault-tolerance drives are numbered.
	
	The first logical drive in each primary partition on each drive is lettered
	consecutively (that is, C on Disk 0, D on Disk 1, E on Disk 2, etc.). The
	remaining drives are lettered successively on a per-drive basis. For example:
	
	     DISK  80h          DISK  81h
	  +-------------+    +-------------+
	  | DRIVE  C    |    | DRIVE ??    |  <-- Primary partition if one
	  | 80 MB       |    |             |      exists on the second drive.
	  +-------------+    +-------------+
	  | DRIVE ?     |    | MIRROR OF   |
	  |             |    |  DRIVE ?    |  <-- Extended partition that the
	  | 245 MB      | ==>|             |      mirrors are created in.
	  |             |    |  245 MB     |
	  |             |    |             |
	  |             |    |             |
	  +-------------+    +-------------+
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	
	=============================================================================
	
