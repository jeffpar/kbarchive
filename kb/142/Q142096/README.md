---
layout: page
title: "Q142096: How to Reinstall Windows 95 to a New Folder"
permalink: kb/142/Q142096/
---

## Q142096: How to Reinstall Windows 95 to a New Folder

	Article: Q142096
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): kbsetup win95
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to reinstall Windows 95 to a new folder.
	
	MORE INFORMATION
	================
	
	NOTE: Be sure to disable any anti-virus software or "dirty" TSRs before you run
	Windows 95 Setup. For additional information about "dirty" TSRs, click the
	article number below to view the article in the Microsoft Knowledge Base:
	
	  Q139052 "Dirty" and "Deadly" TSRs Detected by Windows 95
	
	To install Windows 95 to a new folder, you must run Setup from a real-mode
	command prompt. If you run Setup from within Windows 95, you can reinstall
	Windows 95 over the existing installation, but not to a new folder. To install
	Windows 95 to a new folder, use the appropriate method:
	
	Installing from Your Hard Disk
	------------------------------
	
	1. Click Start, point to Programs, and then click MS-DOS Prompt.
	
	2. At the command prompt, type the following lines, pressing ENTER after you
	  type each line:
	
	  cd\
	  md w95flat
	
	3. Insert the Windows 95 CD-ROM into the CD-ROM drive.
	
	4. At the command prompt, type the following line, and then press ENTER
	
	  copy <drive>:\win95\*.* c:\w95flat
	
	  where <drive> is the drive letter assigned to your CD-ROM drive.
	
	5. Restart your computer. When you see the "Starting Windows 95" message, press
	  the F8 key, and then choose Command Prompt Only.
	
	6. Make a backup copy and rename the system files in case you decide to return
	  to your original installation of Windows 95. To do so, type the following
	  lines, pressing ENTER after you type each line:
	
	  attrib -s -h -r msdos.sys
	  copy msdos.sys *.xxx
	  copy autoexec.bat *.xxx
	  copy config.sys *.xxx
	  attrib -s -h -r system.1st
	  ren system.1st *.xxx
	  ren <windows> winold
	  ren progra~1 progold
	
	  where <windows> is the current windows directory.
	
	  To return to your original Windows 95 installation, copy and rename the files
	  listed above to their original names, and then restart your computer.
	
	  NOTE: You cannot restore the Progra~1 folder from the command prompt. To
	  restore the Progra~1 folder, restart the computer in Safe mode, start Windows
	  Explorer, and then rename the Progold folder to Program Files.
	
	7. Type "cd w95flat" (without the quotation marks), and then press ENTER.
	
	8. Run Setup. Specify a new folder for the Windows 95 installation. Make sure
	  not to use the folder for your current installation of Windows 95.
	
	  NOTE: During some installations, you are not offered an option to change the
	  folder in which to install Windows unless you first rename the current
	  Windows folder.
	
	Installing from Windows 95 CD-ROM or Floppy Disks
	-------------------------------------------------
	
	1. Restart your computer. When you see the "Starting Windows 95" message, press
	  the F8 key, and then choose Command Prompt Only.
	
	2. Make a backup copy of the system files in case you decide to return to your
	  original installation of Windows 95. To do so, follow these steps:
	
	  a. Type the following lines, pressing ENTER after you type each line:
	
	  attrib -s -h -r msdos.sys
	  copy msdos.sys *.xxx
	  copy autoexec.bat *.xxx
	  copy config.sys *.xxx
	
	  b. To return to your original Windows 95 installation, copy the files listed
	     above to their original names, and then restart your computer.
	
	3. To install Windows 95 from disks, proceed to step 9.
	
	4. To install Windows 95 from a CD-ROM, the real-mode CD-ROM drivers must be
	  loaded in the Autoexec.bat and Config.sys files. If they are not, continue
	  with these steps. If they are, proceed to step 9.
	
	5. View the Autoexec.dos file and note the line referring to the Mscdex.exe
	  file.
	
	6. View the Config.dos file and note the line referring to the CD-ROM driver.
	
	7. Edit the Autoexec.bat file and add the MSCDEX statement you noted in step 5.
	  Edit the Config.sys file and add the CD-ROM driver line you noted in step 6.
	
	8. After you edit and save the Autoexec.bat and Config.sys files, restart the
	  computer. When you see the "Starting Windows 95" message, press the F8 key,
	  and then choose Command Prompt Only.
	
	9. Run Setup from the original Windows 95 disks or CD-ROM. Specify a new folder
	  for the Windows 95 installation. Make sure not to use the folder for your
	  current installation of Windows 95.
	
	NOTE: When you install Windows 95 to a new folder, you must reinstall all
	Windows-based programs in the new Windows 95 installation.
	
	Additional query words: clean
	
	======================================================================
	Keywords          : kbsetup win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : :
	Issue type        : kbhowto
	
	=============================================================================
	
