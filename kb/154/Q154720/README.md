---
layout: page
title: "Q154720: Using FDOS on the PowerPC"
permalink: kb/154/Q154720/
---

## Q154720: Using FDOS on the PowerPC

	Article: Q154720
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kb3rdparty
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	FDOS, a utility with MS-DOS-like functions, is for the Motorola PowerStack
	(PowerPC) computer. The program only works on FAT drives but may still be useful
	in troubleshooting various issues. This program comes bundled with the computer.
	It is not supplied by or supported by Microsoft.
	
	MORE INFORMATION
	================
	
	FDOS starts from the "Run a program" option on the firmware menu.
	
	  Program to run: a:\fdos
	
	When FDOS initializes, the following screen will be displayed:
	
	    *** Copyright 1994 MOTOROLA, INC.  All Rights Reserved ***
	
	              *** FDOS Version 0.0 Feb 6 1995 ***
	
	  a: => multi(1)disk(0)fdisk(0)\ 
	  c: => multi(0)scsi(0)disk(0)rdisk(0)partition(1)\ 
	  d: => multi(0)scsi(0)disk(0)rdisk(0)partition(2)\ 
	  e: => multi(0)scsi(0)cdrom(5)fdisk(0)\ 
	  f: => multi(0)scsi(0)disk(0)rdisk(0)partition(3)\ 
	
	  Vendor MCG PS, System  Date: 8/13/1996  Time: 11:40:49
	  a:>_
	
	All drives defined in the firmware will be displayed. A command prompt is
	provided so the user can enter FDOS commands.
	
	  Commands Available in PPC FDOS Version 0.0
	
	  Command    Description
	  ------------------------------------------
	
	  attrib     Set file attributes
	  chdir      Change to a new working directory
	  copy       Copy a file
	  copydir    Copy a directory or directory tree
	  date       Display date and time
	  dir        Display directory
	  echo       Set the command echo flag, display a message
	  erase      Delete files
	  exit       Quit FDOS and return to firmware interactive mode
	  flash      Archive/load flash ROM memory
	  help       Display all commands or syntax for given commands
	  memory     Display firmware memory descriptors
	  mkdir      Create directories
	  mount      Display firmware component table nodes
	  move       Move a file
	  restart    Reboot or reset the system
	  rmdir      Delete directories
	  subst      Display volume table or define a symbolic user volume
	  tree       Display directory tree
	  type       Copy files to the console
	
	The products included here are manufactured by vendors independent of Microsoft;
	we make no warranty, implied or otherwise, regarding these products' performance
	or reliability.
	
	Additional query words: prodnt powerpc
	
	======================================================================
	Keywords          : kb3rdparty 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : 4.0
	
	=============================================================================
	
