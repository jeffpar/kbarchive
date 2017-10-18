---
layout: page
title: "Q72169: MS-DOS 5 README.TXT: Documentation Corrections and ..."
permalink: kb/072/Q72169/
---

## Q72169: MS-DOS 5 README.TXT: Documentation Corrections and ...

	Article: Q72169
	Product(s): Microsoft Disk Operating System
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following information was taken from the Microsoft MS-DOS 5 README.TXT file.
	This is the packaged product of MS-DOS version 5.0 that is licensed to OEMs
	(original equipment manufacturers).
	
	MORE INFORMATION
	================
	
	8. DOCUMENTATION CORRECTIONS AND ADDITIONS
	------------------------------------------
	
	8.1 New CV.COM for CodeView:
	
	Users of CodeView versions 3.0 to 3.13 should use the program CV.COM to start
	CodeView. For more details, see the section on CodeView in the file
	APPNOTES.TXT.
	
	8.2 Documentation Corrections:
	
	The following are corrections to the "Microsoft MS-DOS User's Guide and
	Reference":
	
	COMP /? Help:
	
	  Online help for the COMP command /d switch should state that the default
	  format is hexadecimal.
	
	EXPAND Command:
	
	  The example in Chapter 4 of the "Microsoft MS-DOS Getting Started" guide
	  refers to the wrong installation and upgrade disks. The disk referred to as
	  Disk 1 should be Disk 2; the disk referred to as Disk 2 should be Disk 3.
	
	FORMAT Command:
	
	  If you can't use the FORMAT command to format an unformatted disk, try using
	  the /u switch.
	
	MIRROR Command:
	
	  You cannot use the MIRROR command with a network drive or any drive you
	  created by using the ASSIGN, SUBST, or JOIN command.
	
	UNDELETE Command:
	
	  Do not use the UNDELETE command in the following circumstances:
	
	- When other programs are active.
	
	- With the LOAD= command or the SHIFT+ENTER key combination in Windows.
	
	- With Task Swapper in MS-DOS Shell.
	
	UNFORMAT Command:
	
	  The UNFORMAT /p switch is not compatible with the /j switch.
	
	8.3 Hercules Display Adapter (MSHERC.COM):
	
	If you use MS-DOS Editor or QBasic with a Hercules display adapter, run
	MSHERC.COM before you run either program.
	
	8.4 QBasic "On Error" Command:
	
	Online help for Microsoft QBasic incorrectly states that ON ERROR RESUME NEXT is
	a valid statement. The correct syntax is as follows:
	
	  ON ERROR GOTO <LINE/LABEL>
	
	8.5 SMARTDrive and Third-Party Partitions:
	
	If your system includes a third-party disk partition and you try to use
	SMARTDrive, you may receive a message stating that you cannot load SMARTDrive.
	
	You can force SMARTDrive to load by specifying the /p switch. However, doing so
	may corrupt your hard disk if either of the following conditions is true:
	
	- Your hard disk contains more than 1024 cylinders.
	
	- Your hard disk is not supported by the system's ROM BIOS.
	
	If you have partitions created by using third-party disk-partitioning software,
	use SMARTDrive ONLY if you are sure your hard disk contains 1024 or fewer
	cylinders AND it is supported directly by the system's ROM BIOS.
	
	
	Additional query words: 5.00
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS500
	Version           : :5.0
	
	=============================================================================
	
