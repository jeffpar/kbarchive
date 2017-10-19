---
layout: page
title: "Q168931: Err Msg: Setup Was Unable to Verify Your &lt;X&gt;: Drive"
permalink: /kb/168/Q168931/
---

## Q168931: Err Msg: Setup Was Unable to Verify Your &lt;X&gt;: Drive

	Article: Q168931
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kberrmsg kbsetupkbfaq
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you are running Windows NT 4.0 Setup from the three boot floppy disks, you
	may receive the following error message on the third disk when Setup performs a
	check of your hard disks:
	
	  Setup was unable to verify your <X> drive
	
	where <X> is C: or D: depending on your configuration.
	
	CAUSE
	=====
	
	This occurs if Autochk.exe cannot check the drive or cannot be loaded. Most
	likely, Windows NT Setup detected a CD-ROM drive but could not read from it.
	Because this is not a fatal error, you can continue, but you may have problems
	copying the files from your CD-ROM drive. This can also lead you to believe that
	your hard disk is damaged, but may be just a bad CD- ROM or failing CD-ROM drive
	or controller.
	
	
	RESOLUTION
	==========
	
	If the message occurs because of a CD-ROM that cannot be read, try the following
	steps to work around the problem:
	
	1. For a drive using the FAT file system, copy the I386 folder to the hard disk
	  and then install from the hard disk using the WINNT /B command.
	
	2. For a drive using the NTFS file system, try replacing the CD-ROM, the CD-ROM
	  drive, or the CD-ROM controller.
	
	Additional query words: Autochk autocheck
	
	======================================================================
	Keywords          : kberrmsg kbsetup kbfaq
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 4.0
	
	=============================================================================
	
