---
layout: page
title: "Q132993: Windows 95 File System Questions and Answers"
permalink: /kb/132/Q132993/
---

## Q132993: Windows 95 File System Questions and Answers

{% raw %}

	Article: Q132993
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	This article contains questions and answers about the Windows 95 file system.
	
	MORE INFORMATION
	================
	
	1. Q. I am experiencing problems accessing a floppy disk drive in Windows 95.
	  What can I do to fix this?
	
	  A. There are many possible causes for floppy disk drive problems. To
	  troubleshoot the problem, please see the following article in the Microsoft
	  Knowledge Base:
	
	  Q131690 Troubleshooting Floppy Disk Drive Problems in Windows
	
	2. Q. Why do I not see a device that is connected to a controller in Device
	  Manager?
	
	  A. The device may not appear because there are no protected-mode drivers for
	  it, or because Windows 95 did not detect it. Try the following steps:
	
	  1. Determine if the device works at in MS-DOS or with its Windows 3.1
	     drivers. If it does, Windows 95 is not able to detect the device or there
	     are no protected-mode drivers for it.
	
	  2. Use the Add New Hardware tool in Control Panel. Let Windows detect the
	     hardware in your computer. If the device is not detected, run the Add New
	     Hardware Wizard again and choose the specific device.
	
	3. Q. How do I resolve device conflicts that Device Manager indicates?
	
	  A. Device Manager may display an exclamation point in a yellow circle or an
	  "X" in a red circle next to a device. An exclamation point in a yellow circle
	  indicates that the device is not present, is not working properly, or does
	  not have all its drivers installed.
	
	  An "X" in a red circle indicates that the device has been disabled. You can
	  enable the device by clicking the Original Configuration (Current) check box
	  in the properties for the device.
	
	4. Q. I have a CD-ROM drive connected to my sound card but I cannot access the
	  drive. Why?
	
	  A. Windows 95 includes drivers for CD-ROM drives on SoundBlaster, MediaVision,
	  and Aztech sound cards. If Windows 95 does not support your sound card or
	  CD-ROM drive, you must use real-mode drivers to access the CD-ROM drive.
	
	5. Q. Why can't I access my ATAPI CD-ROM drive in protected mode?
	
	  A. Some ATAPI CD-ROM drives require real-mode drivers to be loaded in order
	  for Windows 95 to activate the CD-ROM drive in protected mode. Such drivers
	  need to be installed before Windows 95 Setup can detect or enable the drive.
	
	6. Q. Why does the Performance tab in System properties indicate that the MS-DOS
	  compatibility mode is in use on my large IDE hard disk?
	
	  A. Any of the following conditions can cause the file system to use the MS-DOS
	  compatibility mode:
	
	   - You use OnTrack Disk Manager version 6.02 or earlier. Disk Manager 6.03 is
	     supported in protected mode on hard disks on the primary IDE channel and
	     when DriveSpace disk compression is not installed. For drives on the
	     secondary IDE channel, Disk Manager 7.0 or later is required. When using
	     the DriveSpace compression software that is included with Microsoft
	     Windows 95 and Microsoft Plus!, Disk Manager 7.04 or later must be used.
	     For information about upgrading your version of Disk Manager, please
	     contact OnTrack.
	
	   - You use any MicroHouse EZ driver version. If you use any MicroHouse EZ
	     driver version, contact MicroHouse for information about version updates
	     and compatibility with Windows 95.
	
	   - The presence of a virus may force the file system into the MS-DOS
	     compatibility mode.
	
	   - There is no Windows 95 protected-mode driver for your hard disk. Contact
	     the hard disk manufacturer about a Windows 95 protected- mode driver.
	
	7. Q. My removable-media device does not work in Windows 95. How can I fix
	  this?
	
	  A. To correct the problem, try these steps:
	
	  1. Verify that the removable-media device works in MS-DOS.
	
	  2. Make sure that a cartridge is in the device before you start Windows 95.
	
	  3. Load the removable-media device's real-mode drivers in the Config.sys
	     file.
	
	  4. Try to format a new cartridge in Windows 95. If you can access the drive,
	     the original cartridge may be formatted with a format that Windows 95
	     cannot use.
	
	8. Q. Windows 95 can read a data CD-ROM but cannot play an audio CD. Why?
	
	  A. This behavior can be caused by either of the following conditions:
	
	   - You may have a CD-ROM drive with outdated firmware. In order to use this
	     drive properly, you must load its real-mode drivers. The Hardware.txt file
	     included with Windows 95 may provide additional information.
	
	   - If you are loading real-mode drivers for your sound card, make sure the
	     audio settings in Windows 95 match the audio settings for the real-mode
	     driver.
	
	9. Q. What can prevent my SCSI device from working properly?
	
	  A. Most SCSI problems are due to hardware termination issues. Refer to the
	  hardware manual for the proper termination settings.
	
	10. Q. Device Manager displays an entry for an unknown device. What is this?
	
	  A. Unknown devices are enumerated devices without a class. These devices
	  consume resources (such as interrupt lines or input/output addresses) but
	  they do not have protected-mode drivers.
	
	Additional query words: win95q a win95faq w95tlc
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	

{% endraw %}
