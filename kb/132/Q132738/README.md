---
layout: page
title: "Q132738: Err Msg with IBM Optical Disk: Drive Cannot Find The Sector..."
permalink: kb/132/Q132738/
---

## Q132738: Err Msg with IBM Optical Disk: Drive Cannot Find The Sector...

	Article: Q132738
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you format an IBM 127 MB Optical Disk while running OS/2 or MS-DOS and
	then boot Windows NT, the following error message appears when you in attempt to
	view the drive from File Manager:
	
	  Drive cannot find the sector requested.
	
	If you format the optical disk using the Windows NT Disk Administrator, the disk
	is formatted to 121 megabytes and the error message does not appear. However,
	when you run CHKDSK on the disk from MS-DOS or OS/2, disk error messages appear.
	
	CAUSE
	=====
	
	The disks are formatted under Windows NT as 121 megabyte disks. Under MS-DOS and
	OS/2 they are formatted as 127 megabyte disks. This difference results in file
	corruption errors when you try to use these optical disks under different
	operating systems.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.5. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	Additional query words: prodnt windisk fat allocation table
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	
	=============================================================================
	
