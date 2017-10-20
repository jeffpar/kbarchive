---
layout: page
title: "Q169734: How to Change the Location of the Windows 95 Print Spool Folder"
permalink: /kb/169/Q169734/
---

## Q169734: How to Change the Location of the Windows 95 Print Spool Folder

{% raw %}

	Article: Q169734
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to change the location of the Windows 95 print spool
	folder. The following topics are discussed:
	
	- You installed Windows 95 from floppy disks
	
	- You installed Windows 95 from a CD-ROM
	
	MORE INFORMATION
	================
	
	The print spool folder is located in the <drive>:\Windows\Spool\Printer
	folder (where <drive> is the hard disk containing the Windows folder). To
	change the location of the Windows 95 print spool folder, you must install
	Windows 95 to another local hard disk. To do so, use the appropriate method.
	
	You Installed Windows 95 from Floppy Disks
	------------------------------------------
	
	1. Restart your computer to a command prompt. To do so, restart your computer,
	  press the F8 key when you see the "Starting Windows 95" message, and then
	  choose Command Prompt Only from the Startup menu.
	
	2. Insert Windows 95 disk 1 in the floppy disk drive.
	
	3. Type the following line at the command prompt, and then press ENTER
	
	  " <drive>:\setup.exe " (without the quotation marks)
	
	  where <drive> is the drive letter of the floppy disk drive.
	
	4. Follow the instructions on the screen to install Windows 95. When you are
	  prompted to select the hard disk on which you want to install Windows, select
	  the hard disk you want to contain the Windows 95 print spool folder, and then
	  continue with the Setup process.
	
	5. When Setup finishes, you must reinstall all of your programs in order to
	  update the Windows 95 registry.
	
	You Installed Windows 95 from a CD-ROM
	--------------------------------------
	
	1. Click the Start button, point to Programs, and then click MS-DOS Prompt.
	
	2. At the command prompt, type the following lines, pressing ENTER after each
	  line:
	
	  " cd\
	  md w95flat " (without the quotation marks)
	
	3. Insert the Windows 95 CD-ROM into the CD-ROM drive.
	
	4. At the command prompt, type the following line, and then press ENTER
	
	  " copy <drive>:\win95\*.* c:\w95flat " (without the quotation marks)
	
	  where <drive> is the drive letter assigned to your CD-ROM drive.
	
	5. Type "exit" (without the quotation marks), and then press ENTER.
	
	6. Restart your computer to a command prompt. To do so, restart your computer,
	  press the F8 key when you see the "Starting Windows 95" message, and then
	  choose Command Prompt Only from the Startup menu.
	
	7. At the command prompt, type the following lines, pressing ENTER after each
	  line:
	
	  " cd\
	  cd w95flat
	  setup.exe " (without the quotation marks)
	
	8. Follow the instructions on the screen to install Windows 95. When you are
	  prompted to select the hard disk on which you want to install Windows, select
	  the hard disk you want to contain the Windows 95 print spool folder, and then
	  continue with the Setup process.
	
	9. When Setup finishes, you must reinstall all of your programs in order to
	  update the Windows 95 registry.
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
