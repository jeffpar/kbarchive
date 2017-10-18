---
layout: page
title: "Q145578: STOP Msg: 0xc000021a After Changing Drive Letter Assignment"
permalink: kb/145/Q145578/
---

## Q145578: STOP Msg: 0xc000021a After Changing Drive Letter Assignment

	Article: Q145578
	Product(s): Microsoft Windows NT
	Version(s): 3.50 3.51
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
	
	If you change the drive letter of the system drive to "unassigned", after
	rebooting the following error message appears:
	
	  STOP: c000021a {Fatal System Error}
	  The Session Manager Initialization system process terminated unexpectedly with
	  a status of 0xC000003a (0x00000000 0x00000000).
	  The system has shutdown.
	
	RESOLUTION
	==========
	
	To correct this problem, do one of the following:
	
	- You must use the Emergency Repair Disk and replace the system hive of the
	  registry or re-install Windows NT. Selecting "Last Known Good" will not
	  correct this problem.
	
	  -or-
	
	- Install Windows NT to a separate directory and modify the registry of the
	  original Windows NT that experiences the symptom above.
	
	  WARNING 1: If you have implemented any of the Microsoft Software Fault
	  Tolerance solutions, including mirroring, stripe sets and volume sets in
	  Windows NT, do NOT perform the following procedures.
	
	  WARNING 2: Using Registry Editor incorrectly can cause serious, system- wide
	  problems that may require you to reinstall Windows NT to correct them.
	  Microsoft cannot guarantee that any problems resulting from the use of
	  Registry Editor can be solved. Use this tool at your own risk.
	
	  1. Start Registry Editor (REGEDT32.EXE) and locate and select the
	     HKEY_LOCAL_MACHINE subtree.
	
	  2. From the Registry menu, select Load Hive.
	
	  3. Find the file that contains the Hive in the following directory of the
	     original Windows NT installation that experiences the symptom above:
	     %SystemRoot%\System32\Config\System
	
	  4. In the Load Hive dialog box, type TEMP for the key name.
	
	  5. A new TEMP hive is now listed. In TEMP, find and select Disk.
	
	  6. From the Edit menu, select Binary.
	
	  7. Delete all the binary information.
	
	  8. Click OK and select TEMP.
	
	  9. From the Registry menu, select Unload Hive. This unloads the hive from the
	     current session and saves it to the original Windows NT location.
	
	  10. Quit Registry Editor.
	
	  11. Shut down and restart the original installation of Windows NT.
	
	Additional query words: prodnt
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.50 3.51
	
	=============================================================================
	
