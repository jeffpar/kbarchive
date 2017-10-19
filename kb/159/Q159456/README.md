---
layout: page
title: "Q159456: Using IOMEGA Zip IDE Insider under Windows NT"
permalink: /kb/159/Q159456/
---

## Q159456: Using IOMEGA Zip IDE Insider under Windows NT

	Article: Q159456
	Product(s): Microsoft Windows NT
	Version(s): WinNT:3.51,4.0
	Operating System(s): 
	Keyword(s): kb3rdparty kbhw kbsetup kbHardware
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.51, 4.0 
	- Microsoft Windows NT Workstation versions 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Zip IDE Insider drive is a IDE-based removable media drive. This article
	will discuss information about settings and troubleshooting of this device.
	
	Currently, the Zip IDE Insider will only work on Windows NT 4.0. Windows NT 3.51
	has no removable IDE capability in its Atapi.sys driver because no removable IDE
	media products were available during its product cycle.
	
	The Windows NT 4.0 ATAPI driver is designed to recognize the new capabilities of
	removable IDE products such as the IOMEGA Zip IDE Insider or the SyQuest
	DataFlyer 230 IDE, and so forth.
	
	MORE INFORMATION
	================
	
	Currently, there are no plans to add removable media IDE capability to the
	Windows NT 3.51 Atapi.sys driver.
	
	Zip Jumper Information
	----------------------
	
	The Zip IDE Insider has a row of jumpers on the back of the unit that are
	jumpered 1-3 and 5-6 from the factory.
	
	                     1     3   5
	|----------------------------------------|-------------|--------------|
	|                                        | O----O    O |
	|
	|             (IDE Connector)            |           | |  (Power Connector)
	|
	|                                        | O    O    O |
	|
	|----------------------------------------|-------------|--------------|
	                     2    4    6
	
	If you are having problems getting Windows NT 4.0 to use this device you may need
	to jumper pins 3 and 4 together. This enables media status notification, which
	is vital to its operation in Windows NT. Otherwise, the unit will effectively
	emulate a hard disk drive and can even be detected by IDE hard disk drive
	detection programs typical in the BIOS of a modern computer.
	
	1-3 Jumper is unknown at this time but appears to have no effect. 5-6 reflect
	Master/Slave. No jumper on 5-6 equals Slave, Jumpered equals Master.
	
	It is not recommended that you allow your computer's BIOS to detect and set
	Cylinder/Head/Sectors settings for the Zip Insider as it will negate its
	removable media properties and you will be unable to remount another Zip disk if
	you eject the Zip disk while the Zip Insider is configured as a hard drive in
	BIOS regardless of the operating system.
	
	Note: The following information applies only to Windows NT 3.51. This issue was
	resolved in Windows NT 4.0 Service Pack 2.
	
	In addition, you should not format these disks with NTFS if you desire to use
	several disks while in a single session of Microsoft Windows NT. This is because
	NTFS is not a remountable file system and will disable software and hardware
	ejections of the Zip drive while you are running Windows NT. After you have
	shutdown, you can change Zip disks freely. If your Zip disks are left formatted
	as FAT you change Zip disks freely.
	
	The third-party products discussed here are manufactured by vendors independent
	of Microsoft; we make no warranty, implied or otherwise, regarding these
	products' performance or reliability.
	
	Additional query words: IDE Insider removable Zip ntmp smp
	======================================================================
	Keywords          : kb3rdparty kbhw kbsetup kbHardware 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT400search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search
	Version           : WinNT:3.51,4.0
	Issue type        : kbinfo
	
	=============================================================================
	
