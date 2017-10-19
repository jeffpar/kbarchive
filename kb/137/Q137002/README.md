---
layout: page
title: "Q137002: STOP 0x0000000A May Occur on Multi-processor Computers"
permalink: /kb/137/Q137002/
---

## Q137002: STOP 0x0000000A May Occur on Multi-processor Computers

	Article: Q137002
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to use Windows NT Backup (NTBACKUP.EXE) to back up mirrored
	(fault tolerant) Windows NT file system (NTFS) drives on a multi- processor
	computer, the following STOP error message may appear:
	
	  STOP: 0x0000000A
	  IRQL_NOT_LESS_OR_EQUAL
	
	CAUSE
	=====
	
	The Windows NT Kernel has a small window for error where two CPUs can access the
	same memory at the same time and perform out of sequence processing.
	
	NOTE: It is acceptable for two CPUs to access memory at the same time as long as
	proper locking mechanisms are in place. This locking does not occur correctly in
	the problem detailed above.
	
	
	RESOLUTION
	==========
	
	To correct this problem, apply the fix mentioned below.
	
	NOTE: This fix affects the Windows NT Kernel. The kernel file has two different
	versions - Single processor and Multi-processor. The installation files are
	named NTOSKRNL.EXE and NTKRNLMP.EXE respectively. However, the file must be
	named NTOSKRNL.EXE before being installed. Therefore, when you install a new
	kernel on a multi-processor system, you must rename NTKRNLMP.EXE to NTOSKRNL.EXE
	in the %SystemRoot%\SYSTEM32 directory.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem with Windows NT version 3.51. This
	problem was corrected in the lastest US Service Pack for Windows NT version
	3.51. For information on obtaining this update, query on the following word in
	the Microsoft Knowledge Base (without the spaces):
	
	  SERVPACK
	
	Additional query words: prodnt trap 0x0A 0xA tolerance ft
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	
	=============================================================================
	
