---
layout: page
title: "Q114883: Art Gallery, Wine Guide 1.0: Distorted Video Images"
permalink: /kb/114/Q114883/
---

## Q114883: Art Gallery, Wine Guide 1.0: Distorted Video Images

	Article: Q114883
	Product(s): Microsoft Home Multimedia Titles
	Version(s): WINDOWS:1.0,3.0,3.1,3.11
	Operating System(s): 
	Keyword(s): kbbuglist kbfaq
	Last Modified: 08-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Art Gallery for Windows, version 1.0 
	- Microsoft Wine Guide for Windows, version 1.0 
	- the operating system: Microsoft Windows 95 
	- the operating system: Microsoft Windows versions 3.0, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	NOTE: These problems, with the exception of the Diamond Stealth driver problems,
	are corrected in Wine Guide version 1.0a.
	
	Some images in the programs listed at the top of this article may be distorted if
	you use:
	
	- Alliance Promotion Windows 95 version 4.0 display driver
	
	- Dell S3 video cards using driver versions 1.34 or earlier, and versions 1.71,
	  2.11, 2.21, and 2.22
	
	- Diamond Stealth 64 display drivers version 1.22 or earlier
	
	- Diamond Stealth Pro using version 2.01
	
	- Trident TGUI 9420 DGi
	
	- Trident CXI Linear Addressing
	
	- Video Logic 928 Movie driver 1.01
	
	NOTE: This problem may also occur if you use other video cards based on an S3
	chipset.
	
	RESOLUTION
	==========
	
	To correct this problem, contact the manufacturer of the video card for an
	updated driver or configuration information, or see the workarounds in the More
	Information section below.
	
	If you are using a Trident video card, try using the Windows Super VGA driver.
	This driver is included with newer packages of Windows, and is also on the Wine
	Guide CD.
	
	If you are using a video card with the S3 801/805 chip set, you can try
	installing the S3 drivers that have been included on the Microsoft Wine Guide
	CD.
	
	
	NOTE: These generic S3 801/805 drivers (versions 1.32 or 2.41) are not necesarily
	the latest version, and may not be fully compatible with other applications or
	your PC configuration. S3 drivers are not supported by Microsoft or by S3, Inc.,
	but are provided for your convenience only. For full support of video driver
	issues, please contact your hardware vendor. For further instructions on the
	installation of these drivers, please refer to the Readme.txt file located on
	the Microsoft Wine Guide CD-ROM.
	
	MORE INFORMATION
	================
	
	IMPORTANT: Before changing your video driver or modifying the System.ini file,
	make a backup copy of your System.ini file in case your new video driver
	configuration does not work correctly. For more information about how to perform
	this task in Windows, see your Windows printed documentation or online Help.
	
	Video Logic 928 Movie Driver 1.01 Resolution
	--------------------------------------------
	
	If the screen is distorted and you have no animations, obtain 928 Movie driver
	version 1.1.1 from Video Logic.
	
	Diamond Stealth 64 Display Driver Workarounds
	---------------------------------------------
	
	To correct this problem, do the following:
	
	1. Diamond recommends adding the following line to the [STLTH64.DRV] section of
	  the System.ini file to correct display and animation problems:
	
	  "DEVICEBITMAPS=1" (without the quotation marks)
	
	  This is set to 0 by default.
	
	  NOTE: If you have installed the Diamond Stealth 64 Vram card, the
	  DEVICEBITMAPS= line is located in the [diamond] section of the System.ini
	  file (not the [STLTH64.DRV] section). If the DEVICEBITMAPS=1 line does not
	  exist, it needs to be added.
	
	  CAUTION: This is not a permanent solution. Adding this line may cause
	  unpredictable side effects in other applications. It has been reported that
	  the DEVICEBITMAPS=1 setting may correct images only and not animations.
	
	2. Use at least 64K colors.
	
	3. If you are using the Diamond Stealth 64 Dram card, obtain a driver newer than
	  version 1.22. This step applies to Dram card users only. It does not apply to
	  Vram card users. Images will still be distorted at a 256- color depth.
	  However, higher color depths, such as 64,000, look fine. Animations will not
	  run at greater than 256 colors.
	
	To obtain the Diamond Stealth 64 display drivers, contact:
	
	- Technical support: (408) 325-7100
	
	- BBS support 2400 - 14400: (408) 325-7080
	
	- BBS support 9600 - 28800: (408) 325-7175
	
	- www.diamondmm.com
	
	- ftp.diamondmm.com
	
	Diamond Stealth Pro:
	
	Diamond recommends adding the following line to the [STEALTH.DRV] section of the
	System.ini file to correct display and animation problems:
	
	  "DEVICEBITMAPS=1" (without the quotation marks)
	
	This is set to 0 by default.
	
	For information about the computer hanging when using the Diamond Stealth 64,
	please see the following article(s) in the Microsoft Knowledge Base:
	
	  Q128394 Multimedia: System Hangs with Diamond Stealth 64
	
	
	The third-party products discussed here are manufactured by a vendor independent
	of Microsoft; we make no warranty, implied or otherwise, regarding these
	products' performance or reliability.
	
	
	Additional query words: multi media multimedia multi-media s31k.drv screen display graphics pictures paintings puzzle blocks block break version 1.0 image broken slice sliced err error video avi distort clip clipped drawings phoenix bands banding Trident TGUI 9400
	
	======================================================================
	Keywords          :  kbbuglist kbfaq
	Technology        : kbOSWin95 kbOSWinSearch kbHomeProdSearch kbZNotKeyword6 kbZNotKeyword kbWine100 kbArtGallery kbOSWin310 kbOSWin311 kbOSWin300
	Version           : WINDOWS:1.0,3.0,3.1,3.11
	
	=============================================================================
	
