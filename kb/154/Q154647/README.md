---
layout: page
title: "Q154647: Setup Halts with &quot;Windows Has Disabled Direct Disk Access&quot;"
permalink: kb/154/Q154647/
---

## Q154647: Setup Halts with &quot;Windows Has Disabled Direct Disk Access&quot;

	Article: Q154647
	Product(s): Microsoft Windows NT
	Version(s): 3.5 3.51 4.0
	Operating System(s): 
	Keyword(s): kbsetup
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are installing Windows NT Workstation or Server version 4.0 from a flat
	directory on the hard disk, Setup may halt with the following message after
	setting the location of the source files:
	
	  Windows has disabled direct disk access to protect your long file
	  names. To override this protection, see the Lock /? Command for more
	  information. The system has been halted. Press CTRL-ALT-DEL to restart
	  your computer.
	
	CAUSE
	=====
	
	This behavior can occur if the Microsoft Windows 95 or Microsoft Windows 98
	system files have been installed on the hard disk.
	
	RESOLUTION
	==========
	
	Restart the computer, and then type "lock c:" (without quotation marks) at the
	command prompt. Windows returns the following message:
	
	  WARNING: The lock command enables direct disk access by programs that can
	  CORRUPT file names and/or DESTROY disk data, resulting in the loss of files
	  on your disk.
	
	  Are you sure (Y/N)?
	
	Press Y to return to the command prompt, and then run Windows NT Setup again.
	
	MORE INFORMATION
	================
	
	Windows 95/98 includes volume-locking code to protect long file names from
	programs that make absolute INT25 read and INT26 write disk calls by- passing
	the FAT. The Windows 95/98 Command.com includes a LOCK command to allow you to
	perform an exclusive read/write lock for use with programs that do not use the
	volume-locking APIs included in Windows 95/98.
	
	======================================================================
	Keywords          : kbsetup 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.5 3.51 4.0
	
	=============================================================================
	
