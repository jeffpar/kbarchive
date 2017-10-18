---
layout: page
title: "Q148262: Removing Windows NT 3.51 SP4 or SP5 May Cause Logon Failures"
permalink: kb/148/Q148262/
---

## Q148262: Removing Windows NT 3.51 SP4 or SP5 May Cause Logon Failures

	Article: Q148262
	Product(s): Microsoft Windows NT
	Version(s): 3.51
	Operating System(s): 
	Keyword(s): kbnetwork kbsetup
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you upgrade to Windows NT 3.51 Service Pack 4 or 5 and you want to revert
	back to the original version of Windows NT 3.51 or the previous Service Pack
	version through the Repair process or re-installation of Windows NT 3.51, one or
	all the following symptoms occur:
	
	- The following Logon error message appears:
	
	  The system cannot log you on [80000005]
	  Please try again or consult your system administrator
	
	- The following Logon error message appears:
	
	  Unable to log you on because the netlogon service failed to start.
	
	- The following Logon error message appears:
	
	  The system cannot log you on [C0000037]. Please try again or consult your
	  system administrator.
	
	- The From drop-down list box is blank. No computer or domain name appears.
	
	
	RESOLUTION
	==========
	
	To correct this problem, do one of the following:
	
	- If Windows NT is installed on a FAT partition, replace Samsrv.dll in the
	  %SystemRoot%\System32 directory with the Samsrv.dll in Service Pack 4 or 5.
	
	  OR-
	
	- If Windows NT is installed on an NTFS partition, re-install Windows NT to a
	  separate directory. Log on as the same user with same permissions and relace
	  Samsrv.dll in the %SystemRoot%\System32 directory with the Samsrv.dll in the
	  Service Pack 4 or 5.
	
	  OR-
	
	- Restore the SAM and SECURITY database system hives from the last Windows NT
	  Backup performed prior to the installation of Windows NT Service Pack 4 or 5.
	  This restores the SAM and Security databases to the format prior to the
	  update of Service Pack 4. This format is compatible with the original Windows
	  NT 3.51 (Build 1057) system files.
	
	  WARNING: This procedure may result in loss of any new users, groups and trust
	  relationships created since the previous backup. You should only follow this
	  procedure as the last resort.
	
	  OR-
	
	- Modify the contents of the emergency repair disk (ERD) by doing the
	  following:
	
	1. Remove the attributes from the SETUP.LOG file by typing the following at the
	  commandline:
	
	  "attrib -r -h -s a:\SETUP.LOG" (without the quotation marks)
	
	2. In Setup.log, add the following line to the files.WinNt section:
	
	  \Winnt\System32\Samsrv.dll = "samsrv.dll","316d3","\", (continued line) "nt351
	  repair disk","samsrv.dll"
	
	  NOTE: \Winnt represents the directory where Windows NT is installed.
	
	3. Copy Samsrv.dll from the Windows NT 3.51 Service Pack 4 or 5 source media to
	  the root directory of the ERD.
	
	4. Restart your computer with the three Windows NT 3.51 Setup disks.
	
	5. Select R to Repair your Windows NT.
	
	6. Select only "Verify Windows NT System Files" and continue.
	
	7. If prompted to insert Windows NT setup disk #4, press ESC to continue with
	  the Repair process.
	
	8. After you replace Samsrv.dll with the file from Windows NT 3.51 Service Pack
	  4 or 5, press F3 to exit Repair. Reboot the computer and restart Windows NT.
	
	MORE INFORMATION
	================
	
	After you install Windows NT 3.51 Service Pack 4 or 5, the SAM and Security
	database hives are updated to a new format. This new format requires the new
	Samsrv.dll that ships with Service Pack 4 or 5, and it is not backward-
	compatible with the earlier versions of Samsrv.dll.
	
	The following is an important notice included in the Readme.txt of the Windows NT
	3.51 Service Pack 4 and 5:
	
	  When using the Windows NT Emergency Repair Disk to repair your Windows NT
	  system after applying the Service Pack, do not repair the file Samsrv.dll. If
	  it is necessary to repair this file because it has become corrupt, you must
	  replace it with the Service Pack version of the file.
	
	  This is necessary because the Service Pack update process changes the user
	  database, and the Service Pack version of Samsrv.dll is needed to allow the
	  system to function properly.
	
	Additional query words: prodnt sp4 sp5
	
	======================================================================
	Keywords          : kbnetwork kbsetup 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : 3.51
	
	=============================================================================
	
