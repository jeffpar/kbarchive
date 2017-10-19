---
layout: page
title: "Q114358: Insufficient Disk Space to Install MS-DOS 6.21 Upgrade"
permalink: /kb/114/Q114358/
---

## Q114358: Insufficient Disk Space to Install MS-DOS 6.21 Upgrade

	Article: Q114358
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 02-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You run out of disk space when installing MS-DOS 6.21 over MS-DOS 6.0 or later
	or IBM PC DOS version 6.3.
	
	CAUSE
	=====
	
	When you install MS-DOS 6.21 on a system that has an existing copy of Microsoft
	Backup for MS-DOS or Microsoft Backup for Windows, you may get past the
	4,200,000-byte minimum disk space check and subsequently run out of disk space
	during Setup. On a system with MS-DOS 6.0 or 6.2 installed with Backup for
	MS-DOS and/or Backup for Windows, the actual minimum free space required is
	5,084,736 bytes.
	
	WORKAROUND
	==========
	
	To work around this problem, use the following steps when you receive the above
	error message:
	
	1. Exit Setup.
	
	2. Rename or delete MSBACKUP.EXE and MWBACKUP.EXE.
	
	3. Restart Setup.
	
	This allows you to choose None for Backup and reduce the required free space to
	install MS-DOS.
	
	Additional query words: 6.22 6.20 pcdos 6.3
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622
	Version           : MS-DOS:6.21,6.22
	
	=============================================================================
	
