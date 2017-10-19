---
layout: page
title: "Q96851: MS-DOS 6.0 Configuration Questions and Answers"
permalink: /kb/096/Q96851/
---

## Q96851: MS-DOS 6.0 Configuration Questions and Answers

	Article: Q96851
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0
	Operating System(s): 
	Keyword(s): msdos
	Last Modified: 03-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	
	1. Q. I receive the message "ERROR: Unable to control A20 line" during the
	  startup (boot) process. How can I correct this problem?
	
	  A. The A20 line is a hardware component of 80286 and higher processors that
	  allows programs to access the first 64 kilobytes (K) of extended memory.
	  HIMEM.SYS must be able to control the A20 line to manage the extended memory
	  on your computer. Different computers use different techniques for
	  controlling the A20 line. In some cases, HIMEM.SYS cannot determine the
	  correct technique to use. If HIMEM.SYS cannot identify the correct technique
	  for controlling the A20 line on your computer, you may need to use the
	  /MACHINE switch with the DEVICE=C:\DOS\HIMEM.SYS command in your CONFIG.SYS
	  file. For further instructions, refer to the "Diagnosing and Solving
	  Problems" chapter of the "Microsoft MS-DOS 6 User's Guide." You can also type
	  "HELP HIMEM.SYS" (without the quotation marks) at the MS-DOS command prompt
	  and press ENTER for information on HIMEM.SYS and the /MACHINE switch.
	
	2. Q. I'm using custom menu colors with multiple configurations. During the
	  startup process, my menu colors change back to the default screen colors. Why
	  is this occurring?
	
	  A. When ANSI.SYS is loaded, it resets your screen colors. ANSI.SYS is an
	  enhanced console device driver; therefore, it takes over all output to the
	  console. At this time, no workaround is available for this problem.
	
	3. Q. How do I add the Windows(TM)-based utilities after I install MS-DOS 6.0?
	
	  A. The MS-DOS 6 Upgrade includes Windows-based versions of Microsoft Backup,
	  Microsoft Anti-Virus, and Microsoft Undelete. To install these programs after
	  you have installed MS-DOS 6.0, insert Setup Disk 1 in your floppy disk drive.
	  At the MS-DOS command prompt, type the following command and press ENTER
	
	  " <drive>: setup /e" (without the quotation marks)
	
	  where <drive> is your floppy disk drive.
	
	  For more information on the Windows-based utilities, refer to the "Microsoft
	  MS-DOS 6 User's Guide."
	
	Additional query words:
	
	======================================================================
	Keywords          : msdos 
	Technology        : kbMSDOSSearch kbMSDOS600
	Version           : MS-DOS:6.0
	Issue type        : kbinfo
	
	=============================================================================
	
