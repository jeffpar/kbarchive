---
layout: page
title: "Q94064: Installing IBM OS/2 1.3 on an ALR M.P.S System"
permalink: /kb/094/Q94064/
---

## Q94064: Installing IBM OS/2 1.3 on an ALR M.P.S System

	Article: Q94064
	Product(s): Microsoft LAN Manager
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-JUL-2001
	
	SUMMARY
	=======
	
	The following procedure is to be used to install IBM OS/2 version 1.3 on an ALR
	M.P.S. system:
	
	MORE INFORMATION
	================
	
	How to Limit the Maximum Amount of Memory
	-----------------------------------------
	
	In order for IBM OS/2 1.3 to install properly, you must first limit the maximum
	amount of RAM the system can recognize to 16 MB. If you don't do this, OS/2 1.3
	will lock up right after the Government Users message screen. To set the limit,
	you will need the MC systems Setup/Utilities disk that came with your system.
	Follow these steps to limit the maximum memory the system can recognize:
	
	1. Insert an MS-DOS disk in Drive A and turn on the machine.
	
	2. Once the computer has booted to an A> prompt, remove the MS-DOS disk and
	  insert the MC systems Setup/Utilities disk in drive A.
	
	3. Start the Setup program by typing:
	
	  " A:
	  CD\SETUP
	  PRD" (without the quotation marks)
	
	  This will start the Setup program. Follow the prompts. After each selection
	  you will need to press ENTER.
	
	4. Select Configuration.
	
	5. Select Change.
	
	6. Select Internal Options. Here you will see all the available settings for the
	  motherboard.
	
	7. Scroll down to the selection marked Maximum Memory Limit and press ENTER.
	
	8. Select 16 MB limit and press ENTER.
	
	9. Exit the Setup program by pressing ESC five times. Your system will reboot
	  itself, making this change effective.
	
	You are now ready to install the OS/2 1.3 driver.
	
	Installing the IBM OS/2 1.3 Driver
	----------------------------------
	
	Most of the newer technology ESDI and all SCSI hard drive controllers will
	require a driver that is provided by the controller manufacturer. If you are
	using an ESDI or SCSI controller and are experiencing difficulties, please check
	to be sure that you are using the correct driver and also the correct version.
	Check with your dealer or the controller manufacturer for this information. If
	you are using the IDE interface that is integrated into the M.P.S. system and
	your hard drive is larger than 85 MB, you will need to use the driver provided
	with the system to ensure complete compatibility with the MS-DOS mode of OS/2
	1.3. To install this driver, do the following:
	
	Note: This driver is to be used on an M.P.S. system with OS/2 1.3 and an IDE hard
	drive larger than 85 MB only. If you are using OS/2 version 1.30.10, please be
	sure to download the latest version of the DISK02.SYS driver from the OS/2
	library on ALR BBS at (414 458-6834).
	
	1. Insert the IBM OS/2 installation disk into drive A. Turn on the system and
	  install OS/2. Be sure to follow all of the instructions and swap the disks as
	  your system asks for them. When the setup prompts "Do you have any device
	  support diskettes to install?", select No.
	
	2. Once OS/2 is installed, reboot your system with the OS/2 installation disk in
	  drive A. Wait until the system displays the blue IBM screen and then press
	  ESC. This will exit to an OS/2 [A:\] prompt.
	
	3. You must first rename the existing DISK02.SYS on your C drive to DISK02.OLD.
	  This can be accomplished with the following commands:
	
	  C:
	  CD\
	  REN DISK02.SYS DISK02.OLD
	
	4. Insert the supplemental MCS drivers diskette into drive A. Copy the file
	  DISK02.SYS to the root of your C drive with the following command:
	
	  copy disk02.sys c:\
	
	5. Press CTRL+ALT+DEL to reboot your system. Your new OS/2 1.3 IDE driver should
	  now be installed and operating.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	
	=============================================================================
	
