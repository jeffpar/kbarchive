---
layout: page
title: "Q120822: Error Message: Bad or Missing Command Interpreter"
permalink: kb/120/Q120822/
---

## Q120822: Error Message: Bad or Missing Command Interpreter

	Article: Q120822
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
	
	When you restart your computer, you may receive the following error message:
	
	  Bad or missing Command Interpreter
	  Enter name of Command Interpreter (for example, C:\Windows\Command.com)
	
	CAUSE
	=====
	
	This error message can occur when the Windows 95 or the MS-DOS command
	interpreter (COMMAND.COM) is missing or has become corrupted.
	
	The Windows 95 COMMAND.COM file is renamed COMMAND.W40 when the system is booted
	to a previous version of MS-DOS. If this file is corrupted or missing, the above
	error message appears when you start Windows 95 normally.
	
	The MS-DOS COMMAND.COM file is renamed COMMAND.DOS when the system is booted into
	Windows 95. If this file is corrupted or missing, the above error message
	appears when you bypass the normal Windows 95 startup by pressing either the F4
	or the F8 key at the Starting Windows message.
	
	Note that the Junkie virus is known to infect the COMMAND.COM and WIN.COM files.
	When the COMMAND.COM file is infected, its file size increases to 93,187 or
	93,907 bytes.
	
	RESOLUTION
	==========
	
	To restore the Windows 95 operating system and make the disk bootable, follow
	these steps:
	
	1. Start your computer with the Startup Disk created during Setup.
	
	2. Make a backup copy of the current MSDOS.SYS file by typing the following
	  lines at the command prompt:
	
	  " c:
	  cd\windows\command
	  attrib c:\msdos.sys -r -s -h
	  ren c:\msdos.sys msdos.xxx " (without the quotation marks)
	
	3. Use the SYS command from the Startup Disk to transfer the system files to the
	  hard disk by typing the following lines at the command prompt:
	
	  " a:
	  sys c: " (without the quotation marks)
	
	4. Replace the new MSDOS.SYS file with the backup copy by typing the following
	  lines at the command prompt:
	
	  " c:
	  cd\windows\command
	  attrib c:\msdos.sys -r -s -h
	  del c:\msdos.sys
	  ren c:\msdos.xxx msdos.sys
	  attrib c:\msdos.sys +r +s +h " (without the quotation marks)
	
	5. Shut down and restart the computer.
	
	Additional query words: err msg
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	
