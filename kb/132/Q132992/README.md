---
layout: page
title: "Q132992: Windows 95 Multimedia Questions and Answers"
permalink: /kb/132/Q132992/
---

## Q132992: Windows 95 Multimedia Questions and Answers

	Article: Q132992
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): Win2000:95
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	This article contains questions and answers about multimedia in Windows 95.
	
	MORE INFORMATION
	================
	
	1. Q. My sound card is supported by Windows 95, but Setup did not detect it. How
	  do I install it?
	
	  A. Use the Add New Hardware tool in Control Panel. If the sound card is not
	  detected, make sure its real-mode drivers are loading in the Config.sys and
	  Autoexec.bat files before you run the Add New Hardware Wizard again.
	
	  If Windows 95 still does not detect the sound card, there may be a conflict
	  between the sound card and another device. Use the right mouse button to
	  click My Computer, click Properties on the menu that appears, then click the
	  Device Manager tab. Examine the properties for each device to see if Windows
	  95 reports a device conflict. Once any device conflict is resolved, run the
	  Add New Hardware Wizard again.
	
	2. Q. Windows 95 does not have a driver for my sound card. How do I use it in
	  Windows 95?
	
	  A. To use your sound card in Windows 95, install its Windows 3.1 drivers. You
	  may also want to contact your sound card manufacturer about Windows 95 driver
	  availability.
	
	  If the sound card driver files include an Oemsetup.inf file, use the following
	  steps to install the driver:
	
	  1. Click the Start button, point to Settings, then click Control Panel.
	
	  2. Double-click the Add New Hardware icon, then click Next.
	
	  3. When you are prompted "Do you want Windows to search for your new
	     hardware?" click No, then click Next.
	
	  4. In the Hardware Types box, click Sound, Video And Game Controllers, then
	     click Next.
	
	  5. Click the Have Disk button to install the sound card driver.
	
	     If the sound card driver files do not include an Oemsetup.inf file, use the
	     sound card's Setup program to install it. If there is no Setup program,
	     contact the manufacturer for assistance.
	
	3. Q. The sound from my Creative Labs SoundBlaster sound card is scratchy. How
	  do I fix it?
	
	  A. This problem can occur when the SoundBlaster's DMA setting does not match
	  its DMA setting in Windows 95. To correct this, follow these steps:
	
	  1. Use the right mouse button to click My Computer, then click Properties on
	     the menu that appears.
	
	  2. On the Device Manager tab, click Sound, Video And Game Controllers, then
	     click Remove. When you are prompted to restart your computer, click Yes.
	
	  3. Click the Start button, point to Settings, then click Control Panel.
	
	  4. Double-click the Add New Hardware icon, click Next, then click Next again.
	
	  5. Restart your computer when the Add New Hardware Wizard finishes.
	
	4. Q. When I play .avi files they don't seem to play smoothly. How can I correct
	  this?
	
	  A. Try the following tips to smooth out .avi file playback:
	
	   - Do not run the file over a network.
	
	   - If you are playing the file from a CD-ROM, and the CD-ROM drive uses
	     protected-mode drivers, use the following steps to increase the size of
	     the CD-ROM cache:
	
	     1. Use the right mouse button to click My Computer, then click Properties
	        on the menu that appears.
	
	     2. On the Performance tab, click File System, then click the CD-ROM tab.
	
	   - If the CD-ROM drive uses real-mode drivers, load SMARTDrive in the
	     Autoexec.bat file.
	
	   - For additional information, please see the following article in the
	     Microsoft Knowledge Base:
	
	  Q127139 Troubleshooting Video Problems in Windows 95
	
	5. Q. Why does Windows 95 not detect my SCSI CD-ROM drive?
	
	  A. Windows 95 detects only proprietary CD-ROM drives (such as Panasonic,
	  Mitsumi, and Sony CD-ROM drives). Although Windows 95 does not detect CD-ROM
	  drives on SCSI controllers, it does detect supported SCSI controllers. Your
	  SCSI CD-ROM drive is accessible because the enumerator for the SCSI
	  controller also enumerates the CD-ROM drive.
	
	6. Q. Does Media Player support MPEG?
	
	  A. No. Windows 95 does not include an MPEG driver for Media Player. However,
	  there are third-party products you can use to view MPEG files in Windows 95.
	
	7. Q. Some of the sounds played by my sound card sound fine, and others sound
	  scratchy. How can I correct this?
	
	  A. Try the following tips to improve the sound playback:
	
	   - Make sure you are using the proper DMA settings. Some sound cards use a
	     High and a Low DMA setting.
	
	   - Make sure the format of the wave file is supported by your sound card. For
	     example, you cannot play a 16-bit wave file on an 8-bit sound card.
	
	8. Q. My program that uses QuickTime does not work properly. What can I do to
	  fix this?
	
	  A. Make sure there is only one version of QuickTime on your computer. If you
	  continue to have problems, add the line "optimize=driver" to the [Video]
	  section of the Qtw.ini file in the Windows folder and then restart your
	  computer.
	
	Additional query words: win95q a win95faq w95tlc wmpfaq
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	Version           : Win2000:95
	
	=============================================================================
	
