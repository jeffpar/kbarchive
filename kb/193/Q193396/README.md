---
layout: page
title: "Q193396: Cannot Repartition Disk Space During Windows NT Setup"
permalink: /kb/193/Q193396/
---

## Q193396: Cannot Repartition Disk Space During Windows NT Setup

	Article: Q193396
	Product(s): Microsoft Windows NT
	Version(s): WINNT:4.0
	Operating System(s): 
	Keyword(s): kbenv kbsetup
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You cannot combine old partitions into one new larger partition when you run
	Windows NT 4.0 Setup with the boot disks. Setup does not allow you to create a
	partition larger than the original.
	
	CAUSE
	=====
	
	This behavior can occur if you have multiple partitions in Windows NT 4.0 and
	you delete one or more partitions using Disk Administrator. During Windows NT
	4.0 Setup, the deleted partition appears as unpartitioned space and cannot be
	consolidated with other partitions.
	
	RESOLUTION
	==========
	
	To work around this behavior, use the following steps during Windows NT Setup.
	
	WARNING: Deleting a partition removes all files and data in the partition. Make
	sure to back up important files before deleting a partition.
	
	1. Delete all partitions.
	
	2. Create each partition using the maximum size allowed by Windows NT Setup.
	
	3. Delete all partitions again.
	
	4. Create one large partition.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem Windows NT Workstation 4.0.
	
	======================================================================
	Keywords          : kbenv kbsetup 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search
	Version           : WINNT:4.0
	Issue type        : kbprb
	
	=============================================================================
	
