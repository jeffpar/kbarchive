---
layout: page
title: "Q156410: STOP 0x1E or 0x50 Error on Multiprocessor DEC Alpha Computer"
permalink: /kb/156/Q156410/
---

## Q156410: STOP 0x1E or 0x50 Error on Multiprocessor DEC Alpha Computer

	Article: Q156410
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbnetworkkbbuglist kbfixlist
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	You may receive one of the following kernel mode STOP messages in NTOSKRNL while
	running Windows NT 4.0 on a multiprocessor DEC Alpha computer:
	
	- STOP 0x0000001E (KMODE_EXCEPTION_NOT_HANDLED)
	
	- STOP 0x00000050 (PAGE_FAULT_IN_NON_PAGED_AREA)
	
	CAUSE
	=====
	
	These STOP messages may be caused by the Windows NT 4.0 kernel on multiprocessor
	DEC Alpha computers while freeing pool quota. This problem can potentially occur
	on any multiprocessor DEC Alpha computer. This issue does not affect single
	processor DEC Alpha computers, nor does it affect other platforms running
	Windows NT 4.0.
	
	
	RESOLUTION
	==========
	
	An updated kernel and HAL that correct this issue are available on the Microsoft
	FTP server.
	
	NOTE: This fix is to be applied only to computers with Service Pack 2 for Windows
	NT 4.0 installed.
	
	This hotfix has been posted to the following Internet location:
	
	  ftp://ftp.microsoft.com/bussys/winnt/winnt-public/fixes/usa/nt40/hotfixes-postsp2/alpha-fix
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. This
	problem was corrected in the latest Microsoft Windows NT 4.0 U.S. Service Pack.
	For information on obtaining the service pack, query on the following word in
	the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: prodnt 0x3B 0000003B 0x0000003B
	
	======================================================================
	Keywords          : kbnetwork kbbuglist kbfixlist
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbbug
	
	=============================================================================
	
