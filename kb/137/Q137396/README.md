---
layout: page
title: "Q137396: Unable to Copy Files During Windows NT 3.51 Upgrade"
permalink: kb/137/Q137396/
---

## Q137396: Unable to Copy Files During Windows NT 3.51 Upgrade

	Article: Q137396
	Product(s): Microsoft Windows NT
	Version(s): 3.10 3.50 3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to upgrade to Windows NT 3.51 from previous versions of Windows
	NT using the Windows NT 3.5 Setup floppy disks, an "Unable to copy <file
	name>" error message appears for the following files:
	
	Upgrade From Windows NT 3.1
	---------------------------
	
	  MVAPI32.DLL
	  OLEPRX32.DLL
	  NTVER.DLL
	  MUSRMGR.IND
	  CALC.IND
	  NTCMDS.IND
	  NPINCDET.DLL
	  FTUI32.DLL
	  FTENG32.DLL
	  WINNT.IND
	
	Upgrade From Windows NT 3.5
	---------------------------
	
	  NPINCDET.DLL
	  FTUI32.DLL
	  FTENG32.DLL
	  WINNT.IND
	
	If you skip the copying operation of the files above, the following error message
	appears:
	
	  Error!
	
	  The GINA.dll has created an unrecoverable error and Windows NT will reboot
	  after this.
	
	When the computer reboots, the following STOP error message may appear:
	
	  STOP: 0xC000021A {Fatal System Error}
	  The Windows Logon Process system process terminated unexpectedly with a status
	  of 0xC000006d (0x00000000 0x00000000).
	  The system has been shutdown.
	
	RESOLUTION
	==========
	
	To correct this problem, do one of the following:
	
	- Use the Windows NT 3.51 Setup Boot floppy disks.
	
	  -or-
	
	- Create the Windows NT 3.51 Setup Boot floppy disks using the /OX parameter.
	  For example:
	
	  WINNT.EXE /OX
	
	  -or-
	
	  WINNT32.EXE /OX
	
	  -or-
	
	- Perform a floppyless installation of Windows NT 3.51 by typing the
	  following:
	
	  WINNT.EXE /B
	
	  -or-
	
	  WINNT32.EXE /B
	
	Additional query words: prodnt hang blue screen fails
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTW310 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS351search kbWinNTS350search kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : 3.10 3.50 3.51
	
	=============================================================================
	
