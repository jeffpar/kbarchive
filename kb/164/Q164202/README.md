---
layout: page
title: "Q164202: Booting to Secondary Installation When Boot.ini Is Set to Zero"
permalink: kb/164/Q164202/
---

## Q164202: Booting to Secondary Installation When Boot.ini Is Set to Zero

	Article: Q164202
	Product(s): Microsoft Windows NT
	Version(s): 3.51 4.0
	Operating System(s): 
	Keyword(s): kbenv kbusage
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.51, 4.0 
	- Microsoft Windows NT Workstation versions 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start your computer, it may boot into a non-operating Windows NT
	installation before you have a chance to select another option. When this
	occurs, you cannot select another operating system that is working.
	
	CAUSE
	=====
	
	This behavior can occur if the timeout value in the Boot.ini file is set to
	zero.
	
	RESOLUTION
	==========
	
	Use any of the following methods to resolve the issue:
	
	Using the ARROW Keys to Select an Option in the Boot Menu
	---------------------------------------------------------
	
	Restart the computer and then press and hold down the DOWN ARROW key before the
	boot menu appears. This floods the keyboard buffer. The result is similar to
	pressing the DOWN ARROW key just before the timeout expires, allowing you to
	select an option on the Boot menu.
	
	Editing the Boot.ini File
	-------------------------
	
	If the boot drive is formatted with the FAT file system, you can edit the timeout
	value in the Boot.ini file. To do this, follow these steps:
	
	1. Boot using an MS-DOS floppy disk or a Windows 95 Startup disk containing the
	  Edit.com and Attrib.exe files.
	
	2. At the A:> prompt, type the following lines, pressing ENTER after each
	  line:
	
	  attrib -r -s -h c:\boot.ini
	  edit c:\boot.ini
	
	3. Change the timeout value from 0 to the number of seconds you want the Boot
	  menu to wait for you to make your selection (the default is 30 seconds).
	
	4. Save and then close the Boot.ini file.
	
	5. Remove the floppy disk and then restart the computer.
	
	Select the Hardware Profile/Last Known Good Option
	--------------------------------------------------
	
	As Windows NT 4.0 boots, you can press the spacebar when the following message
	appears on the screen:
	
	  Press space bar NOW to invoke Hardware Profile/Last Known Good menu.
	
	In Windows NT 3.51, this message reads:
	
	  Press spacebar NOW to invoke the Last Known Good menu.
	
	In Windows NT 4.0, this will produce the Hardware Profile screen. At this point,
	you may press the F3 key and it will produce the NT Loader menu with no timeout
	to allow you to choose another operating system.
	
	In Windows NT 3.51, pressing the spacebar will take you to the Last Known Good
	menu, where you may choose the option to Restart Computer. This will also take
	you to the NT Loader menu with no timeout.
	
	Repairing the Startup Environment
	---------------------------------
	
	NOTE: This method assumes you have more than one installation of Windows NT on
	the computer.
	
	You can use your Windows NT Startup disks to repair the Boot.ini file and use the
	working Windows NT installation as the default. To do so, follow these steps:
	
	1. Boot using the Setup floppy disks included with the Windows NT version that
	  is working.
	
	  For additional information, please see the following article in the Microsoft
	  Knowledge Base:
	
	  ARTICLE-ID: Q131735
	  TITLE : How to Create Windows NT Boot Floppy Disks
	
	2. In the Windows NT Workstation Setup screen, choose R (for Repair).
	
	3. In the next screen, disable the Verify System Files and Inspect Registry
	  Files options. This limits the repair process to the Inspect Startup
	  Environment and Inspect Boot Sector options. Click Continue.
	
	4. When you are prompted to choose which installation to repair, select the
	  working installation. This changes the default option in the Boot.ini file to
	  use the working installation.
	
	5. Follow the instructions until the process is finished. After the computer
	  restarts, select the default option from the Boot menu, or wait for the
	  timeout to expire.
	
	If you do not have an Emergency Repair disk, press ESC when you are prompted for
	one. The repair process will continue. When the process is finished, the
	installation you repaired will be the default item in the Boot menu.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbenv kbusage 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT400search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search
	Version           : 3.51 4.0
	
	=============================================================================
	
