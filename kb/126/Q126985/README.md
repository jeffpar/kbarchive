---
layout: page
title: "Q126985: INFO: Unattended Setup Switch Fails to Run"
permalink: /kb/126/Q126985/
---

## Q126985: INFO: Unattended Setup Switch Fails to Run

	Article: Q126985
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.5
	Operating System(s): 
	Keyword(s): kbOPK kbSBK
	Last Modified: 02-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The command for unattended setup, WINNT /U, does not run as stated on page 99 of
	the "Microsoft Windows NT Resource Kit Volume 1: Windows NT Resource Guide." It
	states that syntax for the command is:
	
	     winnt /u[:answer_file]
	
	-or-
	
	     winnt32 /u[:answer_file]
	
	The WINNT /U switch does not work without the /S:<SOURCE PATH> switch, as
	specified in the SETUPMGR.TXT file provided with the Microsoft Windows NT
	Resource Kit software.
	
	NOTE: WINNT32 /U works as documented in the "Microsoft Windows NT Resource Kit
	Volume 1: Windows NT Resource Guide."
	
	MORE INFORMATION
	================
	
	The following information, taken from the SETUPMGR.TXT file, correctly documents
	the use of the unattended setup command:
	
	     The saved answer files can be executed at the command line
	     in conjunction with the winnt or winnt32 commands. The syntax
	     for the commands is shown below.
	
	     winnt /u:<answer file> /s:<source path>
	
	If you use the WINNT /U command without adding the /S<SOURCE PATH> switch,
	Windows NT command help is displayed, just as it is when you run WINNT with the
	/? switch; it lists all of the documented switches for the WINNT command, but
	does not start Windows NT Setup.
	
	USE OF THE / B SWITCH
	---------------------
	
	The SETUPMGR.TXT file also states, in the following text, that the use of the /B
	switch is optional when you run WINNT; it is not.
	
	     Other winnt and winnt32 switches that make unattended
	     installations go easier are:
	
	        /B    to eliminate the need for the
	              multiple setup floppy disks.
	
	Contrary to this statement, just specifying the /U switch will include the floppy
	diskless setup feature. The functionality of the /B switch is included in the /U
	switch, and therefore does not need to be specified at the command line. The /B
	switch is correctly documented on page 99 of the Microsoft Windows NT Resource
	Kit Volume 1: Windows NT Resource Guide.
	
	Additional query words: prodnt options configuration install disk less OPK Unattended Setup
	
	======================================================================
	Keywords          : kbOPK kbSBK 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	Version           : winnt:3.5
	Issue type        : kbinfo
	
	=============================================================================
	
