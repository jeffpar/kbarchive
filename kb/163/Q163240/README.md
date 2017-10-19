---
layout: page
title: "Q163240: STOP 0x0000006B Process1_Initialization_Failed"
permalink: /kb/163/Q163240/
---

## Q163240: STOP 0x0000006B Process1_Initialization_Failed

	Article: Q163240
	Product(s): Microsoft Windows NT
	Version(s): WINNT:3.51 4.0
	Operating System(s): 
	Keyword(s): kbsetup
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.51, 4.0. 
	- Microsoft Windows NT Server versions 3.51, 4.0. 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When it restarts, a computer running Windows NT may get the following Blue
	Screen STOP message:
	
	  Stop 0x0000006B (0xC0000034, 0x00000002, 0x00000000, 0x00000000)
	  Process1_Inialization_Failed.
	  CPUID : Genuine Intel IRQL:0 SYSVER 0xF0000xxx
	
	The first parameter in the STOP code, 0XC0000034, means:
	
	  STATUS_OBJECT_NAME_NOT_FOUND
	
	  Object name not found.
	
	CAUSE
	=====
	
	This error is caused by a missing system file (usually Ntdll.dll in the
	%systemRoot%\system32 directory.
	
	RESOLUTION
	==========
	
	To resolve the problem, do either of the following:
	
	- If Windows NT is installed on a FAT partition, start the computer into MS-DOS
	  and copy the Ntdll.dll from the Windows NT compact disc.
	
	- If Windows NT is installed on an NTFS partition, you can do either of the
	  following:
	
	   - Perform a parallel installation and copy the Ntdll.dll file from the
	     Windows NT compact disc.
	
	     -or-
	
	  1. Restart your computer with the three Windows NT Setup disks.
	
	     NOTE: To perform a system repair, you must copy a fixed version of the
	     Setupdd.sys file from Windows NT 4.0 Service Pack 2 or later to setup disk
	     two.
	
	  2. Select "R" to repair your Windows NT installation.
	
	  3. Select only Verify Windows NT System Files and then continue.
	
	  4. After you replace the Ntdll.dll file with the a copy from the Windows NT
	     compact disc, press F3 to exit Repair. Restart the computer and also
	     restart Windows NT.
	
	     NOTE: If the Ntdll.dll file was corrupted due to a bad block, you must
	     rename the file before copying the new version of the file.
	
	  5. If the restart results in the same error, repeat the above procedure, but
	     repair ALL files when asked during the repair process.
	
	Additional query words: prodnt 0x6B diskette reboot
	
	======================================================================
	Keywords          : kbsetup 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : WINNT:3.51 4.0
	Issue type        : kbprb
	
	=============================================================================
	
