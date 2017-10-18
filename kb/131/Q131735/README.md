---
layout: page
title: "Q131735: How to Create Windows NT Boot Floppy Disks"
permalink: kb/131/Q131735/
---

## Q131735: How to Create Windows NT Boot Floppy Disks

	Article: Q131735
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.51,4.0,4.0 SP4,4.0 SP5
	Operating System(s): 
	Keyword(s): kbsetup kbusagekbfaq
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.51, 4.0 
	- Microsoft BackOffice Small Business Server version 4.0 
	- Microsoft Windows NT Server versions 4.0, 4.0 SP4, 4.0 SP5, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	In Microsoft Windows NT version 3.51 or 4.0, you can use the Winnt.exe or
	Winnt32.exe file located in the /I386 installation directory on the CD-ROM to
	create a set of Windows NT boot floppy disks.
	
	MORE INFORMATION
	================
	
	Both Winnt.exe and Winnt32.exe allow you to create boot floppy disks for
	installing Windows NT, or for using the Emergency Repair Disk (ERD).
	
	Use the /O switch to create a set of boot floppy disks that can be used to
	perform either a Winnt.exe or Winnt32.exe installation. These disks are
	identical to the set created by a regular Winnt.exe or Winnt32.exe installation.
	Using this switch allows you to create the floppy disks without installing
	Windows NT.
	
	Use the /OX switch to create a set of boot floppy disks to perform a CD- ROM or
	floppy disk installation. These disks are identical to the disks included with
	Windows NT in either the CD-ROM or floppy disk format.
	
	The only difference between these two sets of disks is the Winnt.sif file on the
	second disk that is created when you use the /O switch. The Winnt.sif file
	contains an MsDosInitiated= entry. This is set to 1 when you use the /O switch.
	Deleting the file, or setting the value to 0, makes the set of disks equivalent
	to using the /OX switch. If the Winnt.sif file exists, and MsDosInitiated= is
	set to 1, Windows NT Setup looks for the installation files in the \$WIN_NT$.~LS
	temporary folder. If Winnt.sif does not exists, or MsDosInitiated= is set to 09,
	Windows NT Setup checks the CD-ROM drive, and then the floppy disk drive, for
	the installation files.
	
	NOTE: Windows NT Small Business server (SBS) version 4.0 and 4.0a requires you to
	copy the Winnt.sif file from the first SBS CD-ROM \SUPPORT directory to the
	second installation diskette. Once this has been completed, the three diskettes
	are identical to the original diskettes that came in the SBS box. SBS 4.5
	automatically copies this file to floppy disk 2.
	
	Additional query words: smallbiz
	
	======================================================================
	Keywords          : kbsetup kbusage kbfaq
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT400search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbNTTermServ400 kbNTTermServ400sp4 kbNTTermServ400sp5 kbNTTermServSearch kbWinNTS351search kbAudDeveloper kbSBServSearch kbSBServ400
	Version           : winnt:3.51,4.0,4.0 SP4,4.0 SP5
	
	=============================================================================
	
