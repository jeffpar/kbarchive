---
layout: page
title: "Q115579: Err Msg: STOP 0x0000006B PROCESS1_INITIALIZATION_FAILED"
permalink: /kb/115/Q115579/
---

## Q115579: Err Msg: STOP 0x0000006B PROCESS1_INITIALIZATION_FAILED

{% raw %}

	Article: Q115579
	Product(s): Microsoft Windows NT
	Version(s): 3.1
	Operating System(s): 
	Keyword(s): kbother
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Advanced Server, version 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to use a system disk to boot from a mirror of the Windows NT
	Advanced Server boot partition (as described in the Windows NT Advanced Server
	"Concepts and Planning Guide"), the following STOP message appears:
	
	  STOP 0x0000006B: PROCESS1_INITIALIZATION_FAILED
	
	CAUSE
	=====
	
	This STOP message appears when the system is not given enough time to fully
	replicate the primary partition to the mirror partition before the system was
	shut down and restarted with the system disk.
	
	RESOLUTION
	==========
	
	To avoid this problem, make sure FTDISK.SYS has completed mirroring from the
	boot partition to the mirror partition. You can confirm this by selecting the
	mirror in Disk Administrator. The lower-left corner of the Disk Administrator
	window is a status bar; it should say:
	
	- "Mirror #x: [REGENERATING]" if the system has not finished mirroring the
	  partitions.
	
	  -or-
	
	- "Mirror #x: [HEALTHY]" if the mirror is ready to be booted from.
	
	MORE INFORMATION
	================
	
	To mirror a partition in Windows NT Advanced Server:
	
	(In this example, these steps mirror the boot partition.)
	
	1. In the Disk Administrator window, select the boot partition.
	
	2. Press the CTRL key and select free space on another physical drive that is
	  equal or greater in size.
	
	3. From the Fault Tolerance menu, select Establish Mirror.
	
	4. Quit Disk Administrator, and then shut down the computer.
	
	When you restart Windows NT Advanced Server, FTDISK.SYS begins mirroring the
	information from the boot partition to the mirror partition.
	
	Additional query words: prodnt blue trap
	======================================================================
	Keywords          : kbother 
	Technology        : kbWinNTsearch kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNT310Search
	Version           : 3.1
	
	=============================================================================
	

{% endraw %}
