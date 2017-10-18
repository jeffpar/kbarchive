---
layout: page
title: "Q137459: Multimedia: Printer Error pr807, pr808, Etc."
permalink: kb/137/Q137459/
---

## Q137459: Multimedia: Printer Error pr807, pr808, Etc.

	Article: Q137459
	Product(s): Microsoft Home Multimedia Titles
	Version(s): 1.0; WINDOWS:1.0,3.1,3.11
	Operating System(s): 
	Keyword(s): kbbuglist kbfaq
	Last Modified: 08-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft 500 Nations for Windows, version 1.0 
	- Microsoft Dogs for Windows, version 1.0 
	- Microsoft Oceans for Windows, version 1.0 
	- Microsoft World of Flight for Windows, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In Windows 3.x, when you print from one of the programs listed at the top of
	this article, you receive errors similar to the following:
	
	  Printer Error [pr807].
	  Check that your printer is installed correctly.
	  OK
	
	When you click OK, the following error message appears:
	
	  Printer Error [pr808].
	  Please check that the printer is properly connected and that you have the
	  proper printer driver installed.
	  OK
	
	When you click OK, the program returns to one of the programs listed at the top
	of this article. No document prints.
	
	NOTE: If Print Manager is used, the print job appears to be spooled, but the
	print job will not print.
	
	CAUSE
	=====
	
	Errors pr801 and pr807 are caused by video drivers that do not support the
	StretchDIBits() function.
	
	The cause of other "pr" errors is unknown, but appears to be related to the video
	card driver.
	
	RESOLUTION
	==========
	
	Try one of the following resolutions:
	
	- Click OK when you see the error message. It may actually be printing OK.
	
	- Instead of using the Print option, use the Copy option, then perform a paste
	  command in your favorite word processor and print from there.
	
	- Try a different color depth and/or resolution setting.
	
	- Obtain an updated driver from your hardware manufacturer.
	
	- In many cases the Super VGA video driver solves this problem.
	
	  NOTE: The Super VGA driver will not work on video cards with an S3 chip set,
	  including the Number Nine GXE or Diamond Stealth 64 cards.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the programs listed at the top
	of this article. We are researching this problem and will post new information
	here in the Microsoft Knowledge Base as it becomes available.
	
	NOTE: The problem does not occur on systems running Microsoft Windows 95.
	
	MORE INFORMATION
	================
	
	For more information on your video driver, contact your hardware vendor.
	
	This problem has been seen with the following video driver/card configurations
	and the error codes:
	
	[PR801]
	-------
	
	Older ATI drivers
	
	[PR802]
	-------
	
	Dell's S3 card with version 1.2, 2.1, and 2.41 of the S3 video drivers (printed
	fine with S3 v2.41 at 800x600x256)
	
	[PR805]
	-------
	
	Cirrus Logic 542x, using SVGA driver.
	
	[PR807]
	-------
	
	HT-SVGA (changing to an SVGA video driver corrects the error)
	
	Oak
	
	STB Lightspeed, Tseng-4000 chipset (changing it to SVGA, the ET-4000 driver,
	corrects the error)
	
	
	[PR808]
	-------
	
	Dell's S3 card with version 1.2, 2.1, and 2.41 of the S3 drivers
	
	Number 9 GXE
	
	Oak video card
	
	Cirrus Logic 5428, using driver version 1.1 CL, (changing to SVGA corrects the
	error)
	
	Cirrus Logic 542x, using Cirrus driver (changing to SVGA driver causes PR805
	error)
	
	Cirrus Logic, version 1.43 driver (latest)
	
	Cirrus Logic, CL-GD5426 v 1.41 (changing to SVGA does NOT correct the problem)
	
	Cirrus Logic chip set using an Aptiva driver (changing the video driver to SVGA
	corrects the error)
	
	Cirrus Logic 543x
	
	The third-party products discussed here are manufactured by vendors independent
	of Microsoft; we make no warranty, implied or otherwise, regarding these
	products' performance or reliability.
	
	
	Additional query words: multi media multimedia multi-media mmtitles kbmm pr 808 807 HP DeskJet 500 printer brother hl-660 hl660 hewlett-packard desk jet ATI SVGA SuperVGA pr801 pr802 pr805 pr807 pr808
	
	======================================================================
	Keywords          :  kbbuglist kbfaq
	Technology        : kbHomeProdSearch kbZNotKeyword kbKidsSearch kb500Nations100 kbDogs100 kbWorldofFlight kbOceans
	Version           : :1.0; WINDOWS:1.0,3.1,3.11
	
	=============================================================================
	
