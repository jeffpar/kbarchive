---
layout: page
title: "Q141298: NCR 3350 MCA Floppy Drive Hangs in Windows NT 3.51"
permalink: kb/141/Q141298/
---

## Q141298: NCR 3350 MCA Floppy Drive Hangs in Windows NT 3.51

	Article: Q141298
	Product(s): Microsoft Windows NT
	Version(s): 3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	In Windows NT, when you read or write to the floppy disk, the floppy drive LED
	is on, but there is no response afterward and Windows NT hangs. Windows for
	Workgroups 3.11 and MS-DOS floppy disk access functions normally.
	
	CAUSE
	=====
	
	There is a problem with Windows NT version 3.51 FLOPPY.SYS file.
	
	WORKAROUND
	==========
	
	Replace the existing %SYSTEMROOT%\SYSTEM32\DRIVERS\FLOPPY.SYS file with the
	Windows NT 3.5 FLOPPY.SYS file located in i386 directory on CD-ROM. File size
	=19,520. Date = 9/4/94.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	Additional query words: prodnt
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : 3.51
	
	=============================================================================
	
