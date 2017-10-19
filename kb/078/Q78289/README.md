---
layout: page
title: "Q78289: LOADHIGH Command with Non MS-DOS Command Interpreter"
permalink: /kb/078/Q78289/
---

## Q78289: LOADHIGH Command with Non MS-DOS Command Interpreter

	Article: Q78289
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.x,6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 5.0, 5.0a, 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The following error messages may be displayed if you use the LOADHIGH command
	with a third-party command interpreter:
	
	  Unknown or Unrecognized Command Loadhigh
	
	  -or-
	
	  Unknown or Unrecognized Command LH
	
	The above errors occur if you invoke the LOADHIGH or LH command from the command
	prompt or from the AUTOEXEC.BAT file with a command interpreter other than
	COMMAND.COM.
	
	CAUSE
	=====
	
	The internal MS-DOS LOADHIGH (LH) command may not be recognized if you are using
	a command interpreter other than COMMAND.COM. For example, releases earlier than
	4.0 of the JP Software command interpreter 4DOS do not correctly recognize the
	LOADHIGH command. If this is the case, the SHELL statement in CONFIG.SYS might
	read as follows
	
	  shell=[drive]:\[dir]\[filename.ext] [drive]:\[dir]\ /p
	
	(where [drive] and [dir] are the drive and directory location of the command
	interpreter, and FILENAME.EXT is the name of the command interpreter).
	
	RESOLUTION
	==========
	
	If the SHELL statement refers to a filename other than COMMAND.COM, replace it
	with the MS-DOS 5.0 or later COMMAND.COM (and its correct drive and path). Save
	the file and reboot the computer. You can now use the LOADHIGH (LH) command from
	the MS-DOS command prompt or from the AUTOEXEC.BAT file.
	
	The JP Software product included here is manufactured by a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding this product's
	performance or reliability.
	
	Additional query words: 6.22 5.00 5.00a 6.00 3rdparty
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS500 kbMSDOS500a
	Version           : MS-DOS:5.x,6.0,6.2,6.21,6.22
	
	=============================================================================
	
