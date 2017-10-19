---
layout: page
title: "Q178151: Err Msg: This Version of Windows Does Not Run on MS-DOS 7.00"
permalink: /kb/178/Q178151/
---

## Q178151: Err Msg: This Version of Windows Does Not Run on MS-DOS 7.00

	Article: Q178151
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): kbenv kberrmsg win95
	Last Modified: 05-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start your computer, you may receive one or more of the following error
	messages:
	
	  This version of Windows does not run on MS-DOS 7.00 or earlier.
	
	  The following file is missing or damaged: WIN.COM
	
	  File creation error.
	
	CAUSE
	=====
	
	You can receive any of these error messages if you are using the Windows 95 OEM
	Service Release 2 (OSR2) version of the Win.com file with the system files from
	Windows 95 (retail release) or Windows 95 OEM Service Release 1 (OSR1).
	
	RESOLUTION
	==========
	
	To resolve this issue, use the appropriate method:
	
	OSR2 Is Installed
	-----------------
	
	If OSR2 is installed on your computer and the Sys.com file from Windows 95
	version 4.00.950 (retail release) was used to transfer system files to your hard
	disk, follow these steps:
	
	1. Start your computer with an OSR2 Startup disk. If you already have an OSR2
	  Startup disk, skip to step 2.
	
	  If you do not have an OSR2 Startup disk, create one from a computer running
	  OSR2. To do so, use the following steps:
	
	  a. Click Start, point to Settings, and then click Control Panel.
	
	  b. Double-click Add/Remove Software.
	
	  c. Click the Startup Disk tab, and then click Create Disk.
	
	  d. Close Add/Remove Software, and then close Control Panel.
	
	2. At the command prompt, type the appropriate command, and then press ENTER.
	
	  If drive c is not compressed, use the following line:
	
	  sys c:
	
	  If drive C is compressed, use the following line:
	
	  sys c: h:
	
	  You should see a message that says "System transferred."
	
	NOTE: If you are unable to access a computer running OSR2 to create the Startup
	disk, then you must reinstall Windows 95. If you need to reinstall Windows 95
	from CD-ROM, please see the following article in the Microsoft Knowledge Base:
	
	  Q135174 Cannot Access CD-ROM Drive from MS-DOS Mode or Command Prompt
	
	Windows 95 Is Installed
	-----------------------
	
	If Windows 95 version 4.00.950 (retail release) is installed on your computer and
	the Win.com file was replaced by the Win.com file in OSR2, rename the Win.com
	file, and then extract the file from the original Windows 95 floppy disks or
	CD-ROM. To do so, use the appropriate method:
	
	Windows 95 CD-ROM:
	
	1. Press F8 when you see "Starting Windows 95" and choose Command prompt only
	  from the Windows 95 Start menu.
	
	2. At the command prompt, type "dosstart" (without the quotation marks). This
	  should load the driver for your CD-ROM drive.
	
	  NOTE: If the CD-ROM driver does not load, please see the following article in
	  the Microsoft Knowledge Base:
	
	  Q135174 Cannot Access CD-ROM Drive from MS-DOS Mode or Command Prompt
	
	3. Type the following lines, pressing ENTER at the end of each line:
	
	  " cd \windows
	  ren win.com win.xxx " (without the quotation marks)
	
	4. Insert the Windows 95 CD-ROM into the CD-ROM drive.
	
	5. Type the following line at the command prompt, and then press ENTER
	
	  " extract /a drive:\win95\win95_03.cab win.cnf /l c:\windows " (without the
	  quotation marks)
	
	  where drive is the drive letter assigned to your CD-ROM drive.
	
	After you extract the file win.cnf, rename win.cnf to win.com.
	
	6. Restart your computer normally.
	
	Windows 95 Floppy Disks:
	
	1. Press F8 when you see "Starting Windows 95" and choose Command prompt only
	  from the Windows 95 Start menu.
	
	2. Type the following lines, pressing ENTER at the end of each line:
	
	  " cd \windows
	  ren win.com win.xxx " (without the quotation marks)
	
	3. Insert disk 3 of the Windows 95 disks into the floppy disk drive.
	
	4. Type the following line at the command prompt, and then press ENTER
	
	  " extract /a <drive>:\win95_12.cab win.cnf /l c:\windows\win.com "
	  (without the quotation marks)
	
	  where <drive> is the drive letter assigned to your floppy disk drive.
	
	5. Restart your computer normally.
	
	MORE INFORMATION
	================
	
	For information about how to determine the version of Windows 95 you are using,
	see the following article in the Microsoft Knowledge Base:
	
	  Q158238 How to Determine the Version of Windows 95/98/Me in Use
	
	For additional information about the EXTRACT command, please see the following
	article in the Microsoft Knowledge Base:
	
	  Q129605 How to Extract Original Compressed Windows Files
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv kberrmsg win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : :
	
	=============================================================================
	
