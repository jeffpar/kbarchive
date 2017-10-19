---
layout: page
title: "Q140372: Direct Disk Access Disabled to Protect Long File Names"
permalink: /kb/140/Q140372/
---

## Q140372: Direct Disk Access Disabled to Protect Long File Names

	Article: Q140372
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): WINDOWS:95; winnt:3.51
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Server version 3.51 
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you install Windows NT 3.51 by running Winnt from a Windows 95 MS-DOS
	prompt, the following error may occur as Setup is copying files:
	
	  Windows has disabled direct disk access to protect your long file names. To
	  overwrite this protection see the LOCK /? command for more information.
	
	  The system has been halted. Press CTRL+ALT+DEL to restart your computer.
	
	
	CAUSE
	=====
	
	Direct disk writes using INT 26h or INT 13h fail under Windows 95. This is
	necessary in a multi-tasking environment to prevent disk corruption from
	multiple utilities running simultaneously or prevent loss of long file names by
	applications that are not long file name aware.
	
	The LOCK and UNLOCK commands can be used to work around this protection for DOS
	utilities (for example, Winnt) if necessary.
	
	Use the following syntax for running LOCK:
	
	  lock <drive_letter>:
	
	Use the following syntax for running UNLOCK.EXE:
	
	  unlock <drive_letter>:
	
	RESOLUTION
	==========
	
	To lock a drive to enable direct disk access for Windows NT Setup, do either of
	the following:
	
	- Boot with the Windows 95 Emergency Startup Disk and at the MS-DOS prompt
	  type:
	
	  lock <drive_letter_to_lock>:
	
	  For example:
	
	  lock c:
	
	-or-
	
	- From within Windows 95, select Shutdown from the Start button and choose to
	  Restart the Computer in MS-DOS mode. At the DOS Prompt type:
	
	  lock <drive_letter_to_lock>:
	
	  For example:
	
	  lock c:
	
	MORE INFORMATION
	================
	
	The error message above is a Windows 95 message and only appears if you start
	Windows NT Setup by typing Winnt. If you install from the Windows NT compact
	disc using boot floppies, this error message does not occur because Windows 95
	must be running at the time to cause this error.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search kbWin95search kbZNotKeyword3
	Version           : WINDOWS:95; winnt:3.51
	
	=============================================================================
	
