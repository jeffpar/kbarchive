---
layout: page
title: "Q123110: Err Msg: Unknown Firmware Error with Archive 5580 Tape Drive"
permalink: /kb/123/Q123110/
---

## Q123110: Err Msg: Unknown Firmware Error with Archive 5580 Tape Drive

	Article: Q123110
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the Windows NT Backup program (NTBACKUP.EXE) in Windows NT with an
	Archive 5580 tape unit, the following message may appear when you attempt to
	initialize and format a tape and the attempt may fail:
	
	  Unknown firmware error.
	
	CAUSE
	=====
	
	This problem occurs if the Archive 5580 tape unit you are using has a serial
	number that starts with the letters AAA or BBB. These two tape unit models are
	not compatible with Windows NT, even though the Archive 5580 tape unit is listed
	in the Windows NT Hardware Compatibility List (HCL). Only the model with a
	serial number that starts with the letters CCC works with the Windows NT Backup
	program.
	
	RESOLUTION
	==========
	
	Obtain the latest firmware from your tape unit vendor that starts with the
	letters CCC (for example, serial number CCC60612). For more information, call
	Archive Corporation at (714) 641-0279.
	
	
	The Archive 5580 tape units are manufactured by Archive Corporation, a vendor
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words: prodnt 1540CF
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	
	=============================================================================
	
