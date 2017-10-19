---
layout: page
title: "Q104033: Uncompressed Removable Media Disk Files Displayed w/Host Drive"
permalink: /kb/104/Q104033/
---

## Q104033: Uncompressed Removable Media Disk Files Displayed w/Host Drive

	Article: Q104033
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 21-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you mount a compressed removable media disk, replace it with an uncompressed
	disk, and then access the old compressed disk's host drive letter, the directory
	listing of the uncompressed removable media disk is displayed using the host
	drive letter.
	
	NOTE: This problem occurs at the MS-DOS command prompt and in Windows File
	Manager.
	
	RESOLUTION
	==========
	
	To avoid this problem, do not access the host drive letter after replacing a
	compressed removable media disk with an uncompressed disk.
	
	For example, after using a compressed removable media disk in drive D (with a
	host drive G), immediately access drive D (not drive G) after inserting an
	uncompressed removable media disk. If you are using File Manager, you can simply
	press F5 after switching disks.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in MS-DOS version 6.2. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	Additional query words: 6.22 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620
	Version           : MS-DOS:6.2,6.21,6.22
	
	=============================================================================
	
