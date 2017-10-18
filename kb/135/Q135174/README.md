---
layout: page
title: "Q135174: Cannot Access CD-ROM Drive from MS-DOS Mode or Command Prompt"
permalink: kb/135/Q135174/
---

## Q135174: Cannot Access CD-ROM Drive from MS-DOS Mode or Command Prompt

	Article: Q135174
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:; Win2000:95
	Operating System(s): 
	Keyword(s): kbenv win95kbfaq
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Windows 98 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you restart your computer in MS-DOS mode, restart to a Windows command
	prompt or restart your computer and use a startup disk, you may not be able to
	access your CD-ROM drive. This behavior may occur even though you are able to
	access the CD-ROM drive from the Windows graphical user interface.
	
	CAUSE
	=====
	
	This behavior can occur if any of the following conditions exist:
	
	- The CD-ROM driver or Mscdex.exe file is disabled (commented) or missing from
	  the Autoexec.bat or Config.sys file.
	
	- The CD-ROM driver or Mscdex.exe file is missing or damaged.
	
	- The startup disk does not contain the CD-ROM driver or Mscdex.exe file.
	
	- You have replaced the original CD-ROM and not updated MS-DOS drivers.
	
	To access a CD-ROM drive when you boot to a Windows command prompt or restart the
	computer in MS-DOS mode, you must load the real-mode CD-ROM driver in the
	Config.sys file and the MSCDEX driver in the Autoexec.bat or Dosstart.bat file.
	If your CD-ROM drive is supported in protected mode in Windows, the real-mode
	CD-ROM and MSCDEX drivers are most likely not being loaded in the Config.sys and
	Autoexec.bat or Dosstart.bat files on the hard disk. In addition, if you boot
	from a floppy disk, the CD-ROM and MSCDEX drivers will not load unless you
	manually configure the Config.sys and Autoexec.bat files on the floppy disk to
	load them.
	
	RESOLUTION
	==========
	
	To resolve this behavior, use any of the following methods:
	
	- Run the Dosstart.bat file.
	
	- Extract the correct version of the Mscdex.exe file.
	
	- Add the appropriate files and commands to your startup disk.
	
	- Install the MS-DOS drivers for your CD-ROM from Command Prompt Only.
	
	Dosstart.bat File
	-----------------
	
	When you upgrade MS-DOS or Windows 3.x to Windows 95/98, your original Mscdex.exe
	file can be copied over to the Dosstart.bat file. Dosstart.bat contains copies
	of any commands Windows Setup remarks out and is run automatically when you
	restart your computer in MS-DOS Mode.
	
	If you restart your computer and then choose Command Prompt Only, Dosstart.bat is
	not run. To run the command, type "dosstart.bat" (without the quotation marks),
	and then press ENTER.
	
	Mscdex.exe Problems
	-------------------
	
	If you attempt to run Mscdex.exe and receive the following error message, the
	Mscdex.exe file may be damaged
	
	  Mscdex.exe <parameters> missing or corrupted
	
	where <parameters> are command-line switches that may be included in the
	command line in a batch file, such as Autoexec.bat or Dosstart.bat.
	
	Determine the location of the batch file by typing the following lines from
	Command Prompt Only, pressing ENTER after each line
	
	  " <drive>:
	  dir /s mscdex.exe " (without the quotation marks)
	
	where <drive> is the drive letter of the drive containing the Windows
	folder.
	
	If the file cannot be found, you can extract the file from the Windows 95 disks.
	The Mscdex.exe is file is located in the Win95_04.cab file on the Windows 95
	CD-ROM, the Win95_05.cab file on disk 5 of the Windows 95 DMF diskettes, the
	Win95_07.cab file on disk 7 of the Windows 95 non-DMF diskettes, and the
	Win95_06.cab file on the Windows 95 OEM Service Release 2 CD-ROM.
	
	For information about how to extract files in Windows 95, see the following
	article in the Microsoft Knowledge Base:
	
	  Q129605 How to Extract Original Compressed Windows Files
	
	Place the Mscdex.exe file in the Windows\Command folder.
	
	NOTE: Some batch files may point to a different folder location than the
	Windows\Command folder. If this is the case, edit the file to point to the
	Windows\Command folder. To do so, follow these steps:
	
	1. Click Start, point to Programs, and then click MS-DOS Prompt.
	
	2. Type each of the following lines, pressing ENTER after each line:
	
	  " <drive>:
	  cd\<windows>
	  edit dosstart.bat " (without the quotation marks)
	
	3. Press ALT+S (Search), and then press "F" (without the quotation marks).
	
	4. Find the Mscdex.exe file. If necessary, type "mscdex.exe" (without the
	  quotation marks) in the Find What box, and then click OK.
	
	5. Verify that the path for Mscdex.exe is the Windows\Command folder. If it is
	  not, type the correct path.
	
	6. Press ALT+F (File), press "X" (without the quotation marks), and then press
	  ENTER when prompted to save the file.
	
	In most cases, the Windows 95 version of the Mscdex.exe file works correctly with
	most CD-ROM drives, but if you have problems detecting the CD-ROM drive, contact
	the CD-ROM manufacturer for assistance.
	
	Startup Disk Drivers
	--------------------
	
	If you create a startup disk, restart your computer using it, and do not have
	access to your CD-ROM drive, the correct CD-ROM driver or Mscdex.exe file is not
	loading. To prepare a startup disk to load CD-ROM drivers, follow these steps:
	
	1. Edit the Config.sys file to include the entry for your CD-ROM driver. To do
	  so, follow these steps:
	
	  a. Click Start, click Run, type "sysedit" (without the quotation marks) in
	     the Open box, and then click OK.
	
	  b. Click the Config.sys title bar, find the line that loads your CD-ROM
	     driver, drag the pointer to select the line text, and then click Copy on
	     the Edit menu. Note the name and path of the CD-ROM driver.
	
	  c. Click Start, point to Programs, click Accessories, and then click Notepad.
	
	  d. Place your startup disk in drive A.
	
	  e. On the File menu, click Open, type "a:config.sys" (without the quotation
	     marks) in the File Name box, and then click Open.
	
	  f. Click the pointer at the end of the last line of text, press ENTER to
	     start a new line, and then on the Edit menu, click Paste.
	
	  g. Change the folder path for CD-ROM driver file to drive A. The following
	     table shows the original line to load the CD-ROM driver file and the new
	     line after you edit it:
	
	     Original line                           Edited line
	     ---------------------------------------------------------------------
	     device=c:\cdrom\cdrom.sys /d:mscd001   device=a:\cdrom.sys
	                                               /d:mscd001
	
	  h. On the File menu, click Exit, and then click Yes when prompted to save
	     changes.
	
	Note that some CD-ROM drives are attached to sound cards. If this is the case,
	you need to load the sound drivers before the CD-ROM driver. For information on
	how to load your sound driver, check the sound card documentation or contact the
	sound card manufacturer.
	
	1. Edit the Autoexec.bat file to include the entry for the Mscdex.exe driver. To
	  do so, follow these steps:
	
	  a. Click Start, click Run, type "sysedit" (without the quotation marks) in
	     the Open box, and then click OK.
	
	  b. Click the Autoexec.bat title bar, find the line that loads the Mscdex.exe
	     file, drag the pointer to select the line text, and then click Copy on the
	     Edit menu. Note the name and path of the Mscdex.exe file.
	
	  c. Click Start, point to Programs, click Accessories, and then click Notepad.
	
	  d. Place your startup disk in drive A.
	
	  e. If there is an Autoexec.bat file on the floppy disk, click Open on the
	     File menu, type "a:autoexec.bat" (without the quotation marks) in the File
	     Name box, and then click Open.
	
	  f. Click the pointer at the end of the last line of text, press ENTER to
	     start a new line, and then on the Edit menu, click Paste.
	
	  g. If another line is present that contains Mscdex.exe, type "rem" (without
	     the quotation marks) at the beginning of the line.
	
	  h. If the following text appears at the beginning of the line, select the
	     text, and then press DELETE:
	
	  REM - by Windows Setup -
	
	  i. Change the folder path for the Mscdex.exe file to drive A. The following
	     table shows the original line to load the Mscdex.exe file and the new line
	     after you edit it:
	
	     Original line                              Edited line
	     ---------------------------------------------------------------------
	     c:\windows\command\mscdex.exe /d:mscd001   a:\mscdex.exe /d:mscd001
	
	  j. On the File menu, click Exit, then click Yes when prompted to save
	     changes, and then save to the floppy disk as "autoexec.bat" (without the
	     quotation marks).
	
	2. Place the CD-ROM driver and Mscdex.exe files on your startup disk. To do so,
	  follow these steps:
	
	  a. Click Start, point to Programs, and then click MS-DOS Prompt.
	
	  b. Type each of the following lines, pressing ENTER after each line:
	
	  " <drive1>: cd\<cdpath> copy <cddrive> a: <drive2>:
	  cd\<windows>\command copy mscdex.exe a: " (without the quotation marks)
	
	     where <drive1> is the drive letter of the drive containing the CD-ROM
	     driver files, <cdpath> is the name of the folder containing your
	     MS-DOS-based CD-ROM driver file, and <drive2> is the drive letter of
	     the drive containig the Windows folder.
	
	The Windows 98 Startup disk includes drivers to load many Integrated Drive
	Electronics (IDE) and Small Computer System Interface (SCSI) CD-ROM drives.
	
	Install Appropriate MS-DOS-based CD-ROM Drivers
	-----------------------------------------------
	
	If you have updated your CD-ROM drive, but not updated your MS-DOS CD-ROM
	drivers, install the drivers from Command Prompt Only and then move the
	Mscdex.exe line from the Autoexec.bat file to the Dosstart.bat file. To do so,
	follow these steps:
	
	1. Restart your computer. When you see the "Starting Windows 95" message, press
	  the F8 key and then choose Command Prompt Only from the Startup menu.
	
	2. Follow the instructions from your CD-ROM manufacturer to install your
	  MS-DOS-based CD-ROM drivers. Restart your computer when prompted.
	
	3. Once you have verified that the correct drivers are loaded and working
	  correctly, move the driver information from the Autoexec.bat file to the
	  Dosstart.bat file. To do so, follow these steps:
	
	  a. Click Start, click Run, type "sysedit" (without the quotation marks) in
	     the Open box, and then click OK.
	
	  b. Click the Autoexec.bat title bar, find the line that loads the Mscdex.exe
	     file, drag the pointer to select the line text, and then click Copy on the
	     Edit menu.
	
	  c. Type "rem" (without the quotation marks) at the beginning of the line that
	     contains the Mscdex.exe file, click Exit on the File menu, and then click
	     Yes when prompted to save changes to the Autoexec.bat file.
	
	  d. Click Start, point to Programs, click Accessories, and then click Notepad.
	
	  e. On the File menu, click Open, type "c:\windows\dosstart.bat" (without the
	     quotation marks) in the File Name box, and then click Open. If you receive
	     an message indicating that the file does not exist, click OK, and then
	     click New on the File menu.
	
	  f. Click the pointer at the end of the last line of text, press ENTER to
	     start a new line, and then on the Edit menu, click Paste.
	
	  g. If another line is present that contains the Mscdex.exe file, type "rem"
	     (without the quotation marks) at the beginning of the line.
	
	  h. On the File menu, click Save As, type "c:\windows\dosstart.bat" (without
	     the quotation marks) , click Save, and then click Exit on the File menu.
	
	MORE INFORMATION
	================
	
	Windows does not include real-mode CD-ROM drivers. If you need access to the
	CD-ROM drive when you boot to a Windows command prompt or when you restart the
	computer in MS-DOS mode, you must use the real-mode CD-ROM driver included with
	the CD-ROM drive. For information about how to obtain, install, or configure the
	real-mode CD-ROM driver, consult the documentation included with the drive, or
	contact the drive's manufacturer.
	
	Windows does include an MSCDEX driver that is located in the Windows\Command
	folder. If you must use a real-mode MSCDEX driver, you should use the driver in
	the Windows\Command folder instead of the driver included with the CD-ROM
	drive.
	
	The real-mode CD-ROM and MSCDEX drivers can be loaded from several different
	locations, depending on the reason they are being loaded. If you are loading the
	real-mode drivers because you need access to the CD-ROM drive when you boot to a
	Windows 95 command prompt, the drivers must be loaded from the Config.sys and
	Autoexec.bat files in the root folder of the boot drive. If you are booting to a
	Windows command prompt from a floppy disk instead of a hard disk, the drivers
	must be loaded from the Config.sys and Autoexec.bat files on the floppy disk.
	
	If you are loading the real-mode drivers because you are restarting the computer
	in MS-DOS mode, the drivers can be loaded from either of the following
	locations:
	
	- The Config.sys and Autoexec.bat files in the root folder of the boot drive.
	
	- The custom Config.sys and Autoexec.bat files that you specify in the
	  properties for the program you are running in MS-DOS mode, the properties for
	  a shortcut that starts the program you are running in MS-DOS mode, or the
	  properties for the "Exit to Dos.pif" file that is used to start Windows in
	  MS-DOS mode.
	
	If you are restarting the computer in MS-DOS mode, you can also load MSCDEX from
	the Dosstart.bat file in the Windows folder. This file is used when you restart
	the computer in MS-DOS mode, but it is not used when you boot to a Windows
	command prompt or start Windows normally. If this file does not already exist in
	the Windows folder, you must create the file manually.
	
	NOTE: When you install Windows, Setup disables (remarks out) the existing
	Mscdex.exe line in the Autoexec.bat file if it detects a CD-ROM drive for which
	Windows includes a protected-mode driver. Therefore, when you boot to a command
	prompt or restart the computer in MS-DOS mode, MSCDEX is not available. To make
	MSCDEX available, enable the existing Mscdex.exe line in the Autoexec.bat file.
	You may also need to modify the line so that it loads the MSCDEX driver from the
	Windows\Command folder instead of the driver included with the CD-ROM drive.
	
	Additional query words: w95hw
	
	======================================================================
	Keywords          : kbenv win95 kbfaq
	Technology        : kbWin95search kbWin98search kbZNotKeyword3 kbWin98
	Version           : WINDOWS:; Win2000:95
	Issue type        : kbprb
	
	=============================================================================
	
