---
layout: page
title: "Q136900: Manually Updating the Startup Disk After Installing MS Plus!"
permalink: /kb/136/Q136900/
---

## Q136900: Manually Updating the Startup Disk After Installing MS Plus!

{% raw %}

	Article: Q136900
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 18-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Plus! for Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you do not update your Windows 95 Startup disk (also known as the Emergency
	Boot Disk) either when you install Microsoft Plus! for Windows 95, or when you
	run DriveSpace 3, you may not be able to start your computer with the Startup
	disk.
	
	CAUSE
	=====
	
	The Startup disk has not been updated for DriveSpace 3. Therefore, DriveSpace 3
	compressed volume files (CVFs) cannot be mounted or repaired.
	
	RESOLUTION
	==========
	
	If Windows 95 starts normally, you can create a new Startup disk with updated
	files by following these steps:
	
	1. In Control Panel, double-click the Add/Remove Programs icon.
	
	2. On the Startup Disk tab, click the Create Disk button.
	
	If you cannot start Windows 95 normally, you must replace the Scandisk.exe and
	Drvspace.bin files on the Startup disk with updated versions compatible with
	DriveSpace 3. To do so, follow the steps in the appropriate section below.
	
	Using the Microsoft Plus! CD-ROM
	--------------------------------
	
	NOTE: If you cannot access the CD-ROM drive, the real-mode drivers for the CD-ROM
	drive are probably not being loaded in the Config.sys and Autoexec.bat files.
	You must load the appropriate drivers for the CD-ROM drive to function.
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q135174 Cannot Access CD-ROM Drive in MS-DOS Mode
	
	Or, if you have not started Windows 95, view the Config.dos and Autoexec.dos
	files with a text editor. If they exist, copy the lines for the CD-ROM driver
	and Mscdex.exe to the equivalent Config.sys and Autoexec.bat files.
	
	When you have finished updating the Startup disk, remove these lines from the
	Config.sys and Autoexec.bat files.
	
	To update the Startup disk, follow these steps:
	
	1. Boot your computer to a command prompt, and then insert the Startup disk in
	  drive A.
	
	  NOTE: The instructions in this section assume that you are using floppy disk
	  drive A for the Startup disk. If you are using a different drive, modify the
	  instructions in this section accordingly.
	
	2. Insert the Microsoft Plus! CD-ROM in the CD-ROM drive.
	
	3. Type the following command, and then press ENTER
	
	  " copy <cdrom drive>:\win95\*.* a: " (without the quotation marks)
	
	  where <cdrom drive> is the drive letter for the CD-ROM drive.
	
	4. Type "a:" (without the quotation marks), and then press ENTER.
	
	5. Type the following commands. Press ENTER after each command:
	
	  " ren scandisk.exe scandisk.w95
	  ren drvspace.bin drvspace.w95
	  ren scanplus.exe scandisk.exe
	  ren drvplus.bin drvspace.bin " (without the quotation marks)
	
	6. Restart your computer with the Startup disk in the drive.
	
	Using Microsoft Plus! Disks
	---------------------------
	
	NOTE: The instructions in this section assume that you are using floppy disk
	drive A. If you are using a different drive, modify the instructions in this
	section accordingly.
	
	1. Boot your computer to a command prompt.
	
	2. Type the following command, and then press ENTER:
	
	  " md c:\tempplus " (without the quotation marks)
	
	3. Type the following command, and then press ENTER:
	
	  " copy c:\windows\command\extract.exe c:\tempplus " (without the quotation
	  marks)
	
	4. Put disk 1 of the original Microsoft Plus! disks in drive A, type the
	  following command, and then press ENTER:
	
	  " c:\tempplus\extract a:\plus_1.cab drvplus.bin /l c:\tempplus " (without the
	  quotation marks)
	
	5. Replace disk 1 in the floppy disk drive with disk 2.
	
	6. Type the following line, and then press ENTER:
	
	  " c:\tempplus\extract a:\plus_2.cab scanplus.exe /l c:\tempplus " (without
	  the quotation marks)
	
	7. Place the Startup disk in drive A.
	
	8. Type the following commands. Press ENTER after each command:
	
	  " copy c:\tempplus\scanplus.exe a:\
	  copy c:\tempplus\drvplus.bin a:\
	  ren a:\scanplus.exe a:\scandisk.exe
	  ren a:\drvplus.bin a:\drvspace.bin " (without the quotation marks)
	
	9. Restart your computer with the Startup disk in the drive.
	
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbGamesSearch kbPlusSearch kbZNotKeyword3 kbPlus95
	Version           : 95
	
	=============================================================================
	

{% endraw %}
