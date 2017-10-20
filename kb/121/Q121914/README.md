---
layout: page
title: "Q121914: WINNT Setup Fails Due to LASTDRIVE=F in CONFIG.SYS"
permalink: /kb/121/Q121914/
---

## Q121914: WINNT Setup Fails Due to LASTDRIVE=F in CONFIG.SYS

{% raw %}

	Article: Q121914
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	3.50
	
	WINDOWS
	
	kbnetwork kbsetup kberrmsg kbbug3.50
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you install Windows NT version 3.5 over the network or from a CD-ROM drive
	from MS-DOS using WINNT.EXE, the system stops responding (hangs) during the DOS
	portion of the Setup process, and the following status message appears:
	
	  Configuring Floppy Disk...
	
	You may also experience a Setup failure during the generation of the Windows NT
	version 3.5 Setup boot floppy disks with the command WINNT /O and receive the
	following error message:
	
	  Internal Stack Overflow - System Halted
	
	CAUSE
	=====
	
	This problem occurs when the LASTDRIVE statement in the CONFIG.SYS file is set
	to Drive F.
	
	WORKAROUND
	==========
	
	Change the drive assignment for LASTDRIVE to any drive other than drive F (Drive
	Z is recommended).
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.5. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	Additional query words: prodnt MSDOS
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	
	=============================================================================
	

{% endraw %}
