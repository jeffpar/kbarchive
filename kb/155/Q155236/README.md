---
layout: page
title: "Q155236: Ntbackup Error: No Uncataloged Sets Were Found on Tape"
permalink: kb/155/Q155236/
---

## Q155236: Ntbackup Error: No Uncataloged Sets Were Found on Tape

	Article: Q155236
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): kbtool kbusage
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	During the restoration of data from Ntbackup, double-clicking tapes may produce
	the following error message:
	
	  No uncataloged sets were found on tape.
	
	If the tape is read successfully, the option to restore by individual file or
	subdirectory may be unavailable.
	
	CAUSE
	=====
	
	This problem may be caused by any of the following reasons:
	
	- The Tapes window may have changed so that a portion of the window is hidden.
	
	- The tape unit has old firmware.
	
	- A good catalog was never created.
	
	RESOLUTION
	==========
	
	To resolve this problem, do the following:
	
	- In the Backup window, click Split on the View menu. Move the mouse pointer to
	  the middle right of the Tapes window and click the left mouse button once.
	  This will make the hidden catalog visible again. You can use this catalog to
	  restore an individual file or subdirectory.
	
	- Check the firmware of the tape unit and the tape controller speed.
	
	- Use the NTBACKUP /Missingtape command to force the creation of a new catalog.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbtool kbusage 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : winnt:3.5,3.51,4.0
	
	=============================================================================
	
