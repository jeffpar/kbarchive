---
layout: page
title: "Q142434: BUG: Jetpack Overwrites Existing TEMP.MDB File"
permalink: kb/142/Q142434/
---

## Q142434: BUG: Jetpack Overwrites Existing TEMP.MDB File

	Article: Q142434
	Product(s): Microsoft Windows NT
	Version(s): 3.5 4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	You had a file named TEMP.MDB in either your WINS or DHCP directory, but after
	running JETPACK.EXE in the same directory, the TEMP.MDB file is missing.
	
	CAUSE
	=====
	
	When you run the program JETPACK.EXE to compact a WINS or DHCP database, it
	actually uses two temporary files to do the work. The first one is a swapfile
	and is hardcoded as TEMP.MDB; the second is the file name that you specify and
	will ultimately replace the database file you are compacting (WINS.MDB or
	DHCP.MDB).
	
	In the case that JETPACK fails, it leaves a TEMP.MDB in the directory. This file
	is redundant and does not contain user data. You can delete it manually,
	otherwise JETPACK will silently overwrite it and delete it on the next
	successful compaction. This is the reason that there is no warning about
	overwriting the file.
	
	When you enter the Jetpack command parameters, it does not check to see if a file
	name of TEMP.MDB already exists, it just opens a file of that name with
	over-write privileges. When Jetpack is finished, it automatically deletes the
	TEMP.MDB file.
	
	Also, you cannot specify the file name TEMP.MDB in your own command parameters.
	In this case, Jetpack will return an error because it has already opened its own
	TEMP.MDB and cannot open a duplicate one (specified in your command line).
	Therefore, use any other file name for the temp file, as in this example:
	
	  JETPACK.EXE WINS.MDB TMP.MDB
	
	STATUS
	======
	
	This behavior is by design.
	======================================================================
	Keywords          : kbusage 
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.5 4.0
	Issue type        : kbbug
	
	=============================================================================
	
