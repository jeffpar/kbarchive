---
layout: page
title: "Q101229: How to Restore Windows NT Over an Existing Installation"
permalink: /kb/101/Q101229/
---

## Q101229: How to Restore Windows NT Over an Existing Installation

	Article: Q101229
	Product(s): Microsoft Windows NT
	Version(s): 3.1,3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): kbtool
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.1, 3.5, 3.51, 4.0 
	- Microsoft Windows NT Workstation versions 3.1, 3.5, 3.51, 4.0 
	- Microsoft Windows NT Advanced Server, version 3.1 
	-------------------------------------------------------------------------------
	
	If you experience a hard disk or data corruption problem and lose your
	Microsoft Windows NT system volume, you can restore Windows NT and preserve your
	data if you made backup copies of the Windows NT system volume.
	
	NOTE: You must have overridden the default settings of the Windows NT Backup program (Ntbackup) to select backing up the Registry files when the original backup tape was created.
	
	To restore Windows NT, use the following procedure:
	
	NOTE: You must ensure that the current version of Windows NT is running the same version of the 
	Service Pack as the version on the tape backup before you restore the registry and restart. If
	the two versions are different, your system may not run properly.
	
	1. Start NTBackup and open the Tapes window.
	
	2. Catalog the appropriate tape and ensure the following directory:
	
	  %SystemRoot%\system32\config
	
	  Contains the following Registry files: System, Software, Sam, Security
	
	  If not, then the registry was not backed up onto this tape. Search previous
	  backup tapes for one that does contain the registry files, and then select
	  the directory to be restored.
	
	3. Select Restore.
	
	4. In the Restore Information dialog box, provide all the necessary information,
	  click to select the Restore Local Registry check box, and click OK.
	
	5. After restoring, quit NTBackup and restart the computer.
	
	6. Start NTBackup and open the Tapes window.
	
	7. Catalog the appropriate tape and select all the directories needed to restore
	  Windows NT.
	
	8. Select Restore.
	
	9. In the Restore Information dialog box, provide all the necessary information,
	  do not click to select the Restore Local Registry check box, and click OK.
	
	10. After restoring, quit Backup and restart the computer.
	
	The volume should be back to its original state.
	
	Alternately you can install NT into a \Junk directory. Then perform a
	complete Restore from your last backup tape into its original directory
	structure IE: C:\Winnt and all subdirectories. After the restore, modify
	the Boot.ini file in the root of C: to include an entry for the restored
	NT installation and restart the computer into the restored installation.
	
	NOTE: If you use a backup tape by Arcada (Conner), you can use Ntbackup.exe
	using this backup tape. Choose %Systemroot%\System32\Config and all
	Registry files. Your program groups and accounts should be restored. The
	Arcada backup does not enable you to explicitly specify the Registry files
	for backup or restore.
	
	The third-party products discussed in this article are manufactured by 
	vendors independent of Microsoft; we make no warranty, implied or 
	otherwise, regarding these products' performance or reliability.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbtool 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTW310 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS351search kbWinNTS350search kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : :3.1,3.5,3.51,4.0
	
	=============================================================================
	
