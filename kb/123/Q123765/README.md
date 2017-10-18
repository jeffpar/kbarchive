---
layout: page
title: "Q123765: The WINNT.SIF File Created by WINNT and WINNT32"
permalink: kb/123/Q123765/
---

## Q123765: The WINNT.SIF File Created by WINNT and WINNT32

	Article: Q123765
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): kbsetup
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	When you run WINNT or WINNT32, a WINNT.SIF file is created and placed on
	disk two of the three boot floppy disk set. WINNT.SIF is not supplied with
	the disk-set package of Windows NT and not created when you
	run WINNT /OX.
	
	WINNT.SIF is a text file containing the following:
	
	  [Data]
	  MsDosInitiated = 1
	
	WINNT.SIF instructs Windows NT Setup to look for installation files in
	a temporary directory on the hard disk instead of a CD-ROM. If it does not
	exist, Setup looks for installation files in either the CD-ROM or floppy
	disk drive.
	
	If you try to use WINNT or WINNT32-created floppy disks to install Windows
	NT from a CD-ROM, one of the following error message appears:
	
	  Setup was unable to locate the hard drive partition prepared by the MS-DOS
	  portion of Setup.
	
	  -OR-
	
	  Setup is unable to locate the hard drive partition prepared by the MS-DOS
	  portion of Setup.
	
	You can change source file direction of the WINNT or WINNT32-created
	floppy disks to be like the CD-ROM installation floppy disks by changing
	the entry in the WINNT.SIF file above to "MsDosInitiated = 0" (without the
	quotes) or by deleting the file. Similarly, you can modify the CD-ROM
	installation floppy disk to act like the WINNT or WINNT32-created floppy
	disk by creating and adding the WINNT.SIF file.
	
	Additional query words: prodnt floppies
	
	======================================================================
	Keywords          : kbsetup 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : winnt:3.5,3.51,4.0
	
	=============================================================================
	
