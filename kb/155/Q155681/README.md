---
layout: page
title: "Q155681: Troubleshooting Display Problems in Windows NT 4.0"
permalink: /kb/155/Q155681/
---

## Q155681: Troubleshooting Display Problems in Windows NT 4.0

	Article: Q155681
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbdisplay
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to troubleshoot video display in Windows NT version
	4.0. The following items are included with Windows NT to help you troubleshoot
	video problems:
	
	- Hardware Compatibility List
	
	- Setup.txt file
	
	- Readme.wri file
	
	- Video drivers from other manufacturers
	
	- VGA mode
	
	- The ability to easily change display settings
	
	- Last Known Good Configuration
	
	MORE INFORMATION
	================
	
	Hardware Compatibility List
	---------------------------
	
	The Windows NT 4.0 Hardware Compatibility List is available in the Support folder
	on the Windows NT 4.0 CD-ROM as a file named Hcl.hlp. The Hardware Compatibility
	List is a listing of computers and peripherals that have passed compatibility
	testing with Windows NT 4.0. Before you install Windows NT or if you are
	experiencing problems with your video adapter, make sure your video adapter
	appears on this list.
	
	Although your video adapter may not appear on the Hardware Compatibility List, it
	may work with Windows NT. If a device does not appear on the Hardware
	Compatibility List, Microsoft does not guarantee the device will work properly
	with Windows NT.
	
	For additional information, please see the following article(s) in the Microsoft
	Knowledge Base:
	
	  ARTICLE-ID: Q142865
	  TITLE : Microsoft Support Policy on Hardware Not On Windows NT HCL
	
	Setup.txt and Readme.wri Files
	------------------------------
	
	If your video adapter appears on the Hardware Compatibility List and you continue
	to experience problems, check for information concerning your video adapter in
	the Setup.txt and Readme.wri files.
	
	The Setup.txt file is available in the I386 folder on the Windows NT 4.0 CD-ROM
	and the Readme.wri file is available in the Winnt\System32 folder.
	
	Video Drivers from Other Manufacturers
	--------------------------------------
	
	If your video adapter appears on the Hardware Compatibility List, additional
	information is not available in the Setup.txt or Readme.wri file, and you
	continue to experience problems, check the Drvlib\Video folder on the Windows NT
	4.0 CD-ROM for an updated video driver.
	
	This folder contains video drivers written by third-party manufacturers for their
	video adapters that are provided for your convenience. If you have a question
	concerning any of these drivers, please contact the manufacturer of that driver.
	If these adapters are not detected during Setup, the standard VGA driver is
	installed.
	
	Perform the following steps to manually add one of these drivers:
	
	1. In Control Panel, double-click Display.
	
	2. Click the Settings tab, click Display Type, and then click Change.
	
	3. Click Have Disk and then click Browse to browse the Windows NT CD-ROM for the
	  appropriate video driver for your display adapter.
	
	4. After you locate the appropriate video driver, click OK, read the message
	  about third-party hardware vendors, and then click Yes.
	
	5. Click Reboot when you are prompted.
	
	Drivers for the following adapters and chip sets are in the Drvlib\Video folder
	on the CD-ROM:
	
	  Folder         Adapter
	  ---------------------------------------------------------------------
	  X86\Avga       Compaq AVGA
	  X86\Chips      Chips Video Accelerator(64300 64310 65545 65548 65550)
	  X86\Imagine    Number Nine Visual technologies Imagine 128
	  X86\Imagine2   Number Nine Visual technologies Imagine 128 II
	  X86\Neomagic   Neomagic MagicGraph 128/Z/ZV
	  X86\S3virge    S3 inc. ViRGE
	  X86\Trident    Trident Video Accelerator
	  PPC\GXT150     IBM gxt150p
	
	VGA Mode
	--------
	
	If Windows NT does not start or if distorted or unreadable text appears on the
	screen, start your computer using VGA mode. By default, the Windows NT boot
	loader menu offers options to start normally or in VGA mode. To force Windows NT
	to use the standard VGA driver, choose the VGA Mode option.
	
	If VGA mode works correctly, please see the "The Ability to Easily Change Display
	Settings" section in this article. If VGA mode is unsuccessful, please see the
	"Last Known Good Configuration" section in this article.
	
	The Ability to Easily Change Display Settings
	---------------------------------------------
	
	If VGA mode lets you run Windows NT, changing the display settings may let you
	run Windows NT normally. The following three display settings, if set
	incorrectly for your video adapter or monitor, may prevent Windows NT from
	loading:
	
	- Color Palette
	
	- Desktop Area
	
	- Refresh Frequency
	
	NOTE: The Font Size setting affects only the size of the text on the screen. It
	does not prevent Windows NT from loading.
	
	Perform the following steps to change display settings:
	
	1. In Control Panel, double-click Display.
	
	2. Click the Settings tab.
	
	3. Try each of the following steps, restarting Windows NT after each change,
	  until Windows NT starts normally. Repeat the steps as necessary.
	
	  a. Reduce the Color Palette setting. To do so, click a lower setting in the
	     Color Palette box.
	
	  b. Reduce the desktop area. To do so, move the Desktop Area slider to the
	     left.
	
	  c. Reduce the refresh rate. The current setting may be too high for your
	     monitor. To reduce this setting, click a slower refresh rate in the
	     Refresh Frequency box.
	
	Last Known Good Configuration
	-----------------------------
	
	If Windows NT does not start in VGA mode, start Windows NT using the last known
	good configuration. To do so, restart your computer and press the SPACEBAR when
	you see the "Press spacebar NOW to invoke Hardware Profile/Last Known Good menu"
	message. The last known good configuration works only if you have not
	successfully logged on since the problem began.
	
	If the last known good configuration works, see the "Driver" section in this
	article. If the last known good configuration does not work, try to recover your
	system with the Emergency Repair Disk. Please see your Windows NT documentation
	for more information about the Emergency Repair Disk.
	
	Driver
	------
	
	If the last known good configuration works, there may be a problem with the
	installed video driver. Please consult the video adapter manufacturer for a
	possible video driver update.
	
	NOTE: Because of changes to the Windows NT 4.0 video subsystem, most Windows NT
	3.x video drivers do not work in Windows NT 4.0.
	
	Additional query words: prodnt svga xga ncy corrupt erd
	
	======================================================================
	Keywords          : kbdisplay 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	
	=============================================================================
	
