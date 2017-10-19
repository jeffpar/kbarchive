---
layout: page
title: "Q138991: Problems Using Windows 95 or MS Plus! Startup Disk"
permalink: /kb/138/Q138991/
---

## Q138991: Problems Using Windows 95 or MS Plus! Startup Disk

	Article: Q138991
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 18-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Plus! for Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start your computer with the Startup disk, you may not have access to
	certain drives, such as CD-ROM drives, compressed drives, or logical drives
	located on hard disks on which geometry translation is normally performed by a
	real-mode driver. In addition, other devices that require real-mode drivers may
	not function properly.
	
	CAUSE
	=====
	
	This problem may be caused by any of the following conditions:
	
	- If you are unable to access a compressed drive after starting your computer
	  with the Startup disk, you may not be loading the necessary third-party
	  compression drivers in the Config.sys file, the Startup disk may not have
	  been properly updated for the third-party compression software you are
	  running, or the Startup disk may not contain the correct version of the
	  real-mode DriveSpace compression driver.
	
	- If you are unable to access a CD-ROM drive or other device that requires a
	  real-mode driver in the Config.sys file after starting your computer with the
	  Startup disk, the Config.sys file on the Startup disk may not be loading the
	  necessary driver. The Config.sys file on the Startup disk is not
	  automatically updated to load real-mode drivers that are necessary for
	  devices installed in the computer.
	
	- If you are using a third-party software tool to perform geometry translation,
	  and you are unable to access one or more of your uncompressed drives after
	  starting your computer with the Startup disk, the Config.sys file on the
	  Startup disk may not be loading the necessary driver, or it may not be
	  possible to completely start your computer from the Startup disk.
	
	RESOLUTION
	==========
	
	To resolve the problem, refer to the appropriate section below.
	
	Compressed Drives
	-----------------
	
	Third-Party Compression:
	
	If you are using third-party compression software that requires a real-mode
	driver in the Config.sys file, you must manually update the Config.sys file on
	the Startup disk so that it loads the necessary driver. For information about
	the proper syntax for the real-mode compression driver, refer to the
	documentation that came with the software or contact the software manufacturer.
	
	If the third-party compression software that you are using loads the real- mode
	compression driver before the Config.sys file is processed, the Startup disk
	must be updated so that the real-mode driver is loaded when you start your
	computer with the Startup disk. For information about how to do so, contact your
	software manufacturer.
	
	DriveSpace 3 Compression:
	
	If you installed Microsoft Plus! for Windows 95 and currently have DriveSpace 3
	compressed drives on your computer, but you did not update the Startup disk when
	you installed Microsoft Plus!, you must manually update the Startup disk to have
	access to your DriveSpace 3 compressed drives when using the Startup disk.
	
	When you create a Startup disk in Windows 95 when Microsoft Plus! is not
	installed, the real-mode DriveSpace compression driver is one of the files that
	is placed on the disk. This allows you to access your DriveSpace compressed
	drives when you start your computer with the Startup disk. When you install
	Microsoft Plus! and choose to update your Startup disk, the DriveSpace files on
	the disk are updated to the DriveSpace 3 versions. This allows you to access
	your compressed drives when using the Startup disk if you choose to convert your
	existing compressed drives to DriveSpace 3, or if you create new compressed
	drives after you install Microsoft Plus!. If you choose not to update your
	Startup disk, you are unable to access your DriveSpace 3 compressed drives when
	using the Startup disk.
	
	For information about manually updating the Startup disk after Microsoft Plus! is
	already installed on your computer, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q136900 Manually Updating the Startup Disk After Installing Microsoft Plus!
	
	CD-ROM Drives or Other Devices
	------------------------------
	
	If you have a CD-ROM drive or other device that requires a real-mode driver in
	the Config.sys file installed in your computer, you must manually update the
	Config.sys file on the Startup disk so that it loads the necessary driver. For
	CD-ROM drives, you must also update the Autoexec.bat file on the Startup disk so
	that it loads the real-mode MSCDEX driver.
	
	For information about the parameters for the real-mode CD-ROM driver and MSCDEX,
	or for information about the syntax for the real-mode driver for another device,
	refer to the documentation that came with the device or contact the hardware
	manufacturer.
	
	NOTE: You may be able to obtain the correct parameters for the real-mode CD- ROM
	driver and MSCDEX from the Config.dos and Autoexec.dos files in the root folder
	of your boot drive. These files represent the Config.sys and Autoexec.bat files
	that you were using before you installed Windows 95. If your CD-ROM drive
	functioned properly before you installed Windows 95, the Config.dos and
	Autoexec.dos files should contain the correct parameters for the real-mode
	CD-ROM driver and MSCDEX.
	
	Drives with Geometry Translation Software Installed
	---------------------------------------------------
	
	If you are using a third-party software tool that requires a real-mode driver in
	the Config.sys file to perform geometry translation, you must manually update
	the Config.sys file on the Startup disk so that it loads the necessary driver.
	For information about the proper syntax for the real- mode driver, refer to the
	documentation that came with the software or contact the software manufacturer.
	
	If the third-party software tool that you are using to perform geometry
	translation uses a real-mode driver that is stored in the root folder of the
	boot drive and is loaded from the Master Boot Record, you may not be able to
	completely start your computer from the Startup disk. You may need to partially
	start your computer from the hard disk before inserting the Startup disk and
	continuing the boot process. For information about how to do so, refer to the
	documentation that came with the software or contact the software manufacturer.
	
	
	MORE INFORMATION
	================
	
	If you do not have a Startup disk, you can create one in Windows 95. To do so,
	double-click the Add/Remove Programs icon in Control Panel, click the Startup
	Disk tab, and then click the Create Disk button. If you cannot start Windows 95
	normally, you should use these steps to create a Startup disk on another
	computer that can start Windows 95. If you have Microsoft Plus! installed on
	your computer, the computer that you use to create a Startup disk must also have
	Microsoft Plus! installed.
	
	NOTE: If you can boot your computer to a command prompt, but cannot start Windows
	95 normally, you may be able to manually create a bootable floppy disk by using
	the SYS command to copy the Windows 95 system files from your hard disk to a
	floppy disk. To do so, place a floppy disk in drive A, type the following
	command, and then press ENTER:
	
	  " c:\windows\command\sys c: a: " (without the quotation marks)
	
	This command copies the system files from the root folder of drive C to the
	floppy disk in drive A. If there is a problem with the system files on drive C,
	the same problems will exist with the system files that are copied to the floppy
	disk.
	
	Additional query words: emergency repair disk ebd speedstor
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbGamesSearch kbPlusSearch kbZNotKeyword3 kbPlus95
	
	=============================================================================
	
