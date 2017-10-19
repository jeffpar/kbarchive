---
layout: page
title: "Q142189: Using the UNDELETE Command in Windows 95"
permalink: /kb/142/Q142189/
---

## Q142189: Using the UNDELETE Command in Windows 95

	Article: Q142189
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you try to use the MS-DOS UNDELETE command in Windows 95, you may receive the
	following error message:
	
	  Windows has disabled direct disk access to protect long filenames. To
	  override this protection, see the LOCK /? command for more information.
	
	  The system has been halted. Press CTRL+ALT+DEL to restart your computer.
	
	CAUSE
	=====
	
	The UNDELETE command requires direct access to the drive. You must lock the
	drive before you issue the UNDELETE command.
	
	RESOLUTION
	==========
	
	NOTE: The UNDELETE command runs in MS-DOS mode by default. You should run these
	commands in MS-DOS mode.
	
	Lock the drive before you issue the UNDELETE command. To lock the drive, type
	
	  lock <x>:
	
	where <x> is the letter of the drive you want to lock.
	
	When you are done using the UNDELETE command, unlock the drive by typing
	
	  unlock <x>:
	
	where <x> is the letter of the drive you want to unlock.
	
	WARNING: Using the LOCK command enables direct disk access. A program that
	accesses the disk directly can destroy long file names. You should back up long
	file names before running a program that could harm them. To back up long file
	names, use the Lfnbk.exe program located in the Admin\Apptools\ Lfnbk folder on
	the Windows 95 CD-ROM. See the Lfnbk.txt file in the same folder for information
	about this program.
	
	The Lfnbk.exe program is included in the CD-ROM version of Windows 95, but not in
	the floppy disk version. If you are using the floppy disk version of Windows 95
	and you want to use Lfnbk.exe, please see the following article in the Microsoft
	Knowledge Base for information about the availability of Lfnbk.exe:
	
	  Q135315 CD-ROM Extras for Microsoft Windows 95 Upgrade
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	
