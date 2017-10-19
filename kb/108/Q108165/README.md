---
layout: page
title: "Q108165: PRB: Cannot Read from Drive &lt;Drive Letter&gt;"
permalink: /kb/108/Q108165/
---

## Q108165: PRB: Cannot Read from Drive &lt;Drive Letter&gt;

	Article: Q108165
	Product(s): Microsoft FoxPro
	Version(s): 2.50 2.50a 2.50b 3.00 5.00 | 2.5
	Operating System(s): 
	Keyword(s): kberrmsg
	Last Modified: 03-AUG-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 5.0, 6.0 
	- Microsoft FoxPro for Windows, versions 2.5, 2.5a, 2.5b 
	- Microsoft FoxPro for MS-DOS, versions 2.5, 2.5a, 2.5b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Mainframe workstation software that maps drives D and E to hold them for future
	use when using emulation will cause the following error message to appear when a
	disk drive cannot be read:
	
	  Cannot read from drive <drive letter>.
	
	Use of the MS-DOS Interlnk program and the INTERSVR command is also a source of
	this message. Interlnk's drive mapping redirects the client system's drives to
	the next available drive letters of the server. If INTERLNK.EXE is loaded in the
	CONFIG.SYS file of the client and the server PC is then disconnected, FoxPro
	will be told that sequential drive mapping exists, when, in fact, there will be
	no response when FoxPro checks the drives in sequence that were on the connected
	PC.
	
	CAUSE
	=====
	
	Some FoxPro operations appear to scan all consecutive disk drives.
	
	The following operations have been reported to cause this error on computers with
	a drive that cannot be read:
	
	- Running an executable file (.EXE) created by the FoxPro Distribution Kit.
	
	- Opening a project whose home directory points to a drive that cannot be read.
	
	- Setting a printer driver in FoxPro for MS-DOS.
	
	WORKAROUND
	==========
	
	Reassign the drive letter of the device that cannot be read so that it is not in
	consecutive order with the other drives.
	
	For example, if drive C is a hard disk drive, and drive D is a CD-ROM drive that
	causes the error message when it does not contain a disc, reassign the CD-ROM
	drive letter to drive Z.
	
	You may need to either consult the manual for your CD-ROM drive or use the MS-DOS
	SUBST command.
	
	
	NOTE: Reassigning the drive letter may require the use of the LASTDRIVE=<drive
	letter> command in the CONFIG.SYS file.
	
	MORE INFORMATION
	================
	
	The following hardware configurations may cause a disk drive to report that it
	cannot be read:
	
	- A laptop computer does not have a floppy drive A or B.
	
	- A CD-ROM drive does not contain a disc.
	
	- A removable hard disk drive does not contain a hard disk.
	
	Additional query words: VFoxWin FoxDos FoxWin errmsg err msg can't notebook floppies bernoulli box IBM PS/2 80 akz
	
	======================================================================
	Keywords          : kberrmsg 
	Technology        : kbVFPsearch kbAudDeveloper kbFoxproSearch kbZNotKeyword3 kbFoxPro250DOS kbFoxPro250aDOS kbFoxPro250bDOS kbFoxPro250 kbFoxPro250a kbFoxPro250b kbVFP300 kbVFP500 kbVFP600
	Version           : 2.50 2.50a 2.50b 3.00 5.00 | 2.5
	
	=============================================================================
	
