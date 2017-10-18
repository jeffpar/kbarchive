---
layout: page
title: "Q109863: Writer 1: Difficulty Printing Card to Canon BubbleJet"
permalink: kb/109/Q109863/
---

## Q109863: Writer 1: Difficulty Printing Card to Canon BubbleJet

	Article: Q109863
	Product(s): Microsoft Home Kids Products
	Version(s): WINDOWS:1.0,1.1
	Operating System(s): 
	Keyword(s): kbprint kbPrintingkbfaq
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Creative Writer for Windows, versions 1.0, 1.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you print a card to the Canon BubbleJet C600 printer, you may experience
	one of the following problems:
	
	- You may receive "out of space" error messages and may not be able to print
	  the cards. For example, you may receive the following message from Spike:
	
	  Hey I'm almost out of space. If you're working in the writing studio you
	  should save your work....
	
	  You may receive similar messages, or the computer may stop responding (hang)
	  when you print a card to the Canon BubbleJet 4000 printer.
	
	- The printer may print a blank sheet of paper followed by McZee's message,
	  "I've finished printing your document. That was fun!"
	
	- The card may begin printing and hang midway through printing.
	
	CAUSE
	=====
	
	This problem occurs because the Canon driver consumes a large amount of memory
	each time you open the card. This contributes to the insufficiency of memory
	when you then try to print the card. The Epson LQ drivers, on the other hand, do
	not consume memory in this fashion.
	
	RESOLUTION
	==========
	
	To work around this problem, use the following steps:
	
	Windows 95
	----------
	
	1. Set the driver to print directly to the printer using the following steps:
	
	  a. Click Start, point to Settings and click Printers.
	
	  b. Use your right mouse button to click your printer. Click Properties.
	
	  c. Click the Details tab. Click Spool Settings.
	
	  d. Click Print Directly To The Printer.
	
	2. Set the printing resolution using the following steps:
	
	  a. Click Start, point to Settings and then click Printers.
	
	  b. Use your right mouse button to click your printer. Click Properties.
	
	  c. Click the Graphics tab. Set the Resolution to 180 x 180.
	
	3. Switch the Display Adapter Type (display driver) to VGA using the following
	  steps:
	
	  a. Click Start, then point to settings and then click Control Panel.
	
	  b. Click Display. Click the Settings tab.
	
	  c. Click Change Display Type.
	
	  d. In the Adapter Type section, click Change, click Show All Devices.
	
	  e. In the Manufacturers column click Standard Display Types. From the Models
	     column, click Standard Display Adapter (VGA).
	
	  f. Click OK. In the next two windows, click Close. Restart your computer.
	
	  NOTE: The VGA driver is a 16 color driver. If you need to use a 256 color
	  driver (some applications require 256 colors), contact your video card
	  manufacturer to receive the latest version of their 256 color video driver
	  for Windows 95.
	
	4. If you are using a printer driver which was NOT included with Windows 95, use
	  a printer emulation.
	
	   - For the Canon BubbleJet 600C, use the Epson LQ 2550 or Epson LQ 860
	     printer driver.
	   - For the Canon BubbleJet 4000, use the Epson LQ2550, LQ 2500, LQ 1500 or
	     the IBM ProPrinter X24E printer driver.
	
	Windows 3.1
	-----------
	
	1. From the Control Panel, usually located in the Main program group,
	  double-click Printers. Clear the Use Print Manager check box.
	
	2. Choose the Printers option in Control Panel. Choose the Connect button. Set
	  the printer port to LPT1.DOS.
	
	3. For the Canon BubbleJet 600C, use the Epson LQ 2550 or Epson LQ 860 printer
	  driver instead of the Canon BJC600 driver.
	
	  For the Canon BubbleJet 4000 do the following:
	
	  a. In Control Panel, click Printers.
	
	  b. Click Setup.
	
	  c. Set print quality to 180x180.You can also use the Epson LQ 2550, LQ 2500,
	     LQ 1500, or the IBM ProPrinter X24E printer driver instead of the Canon
	     BJ4000 driver.
	
	  When you are using emulation on the Canon BJC4000, set Dip Switch 11 to ON for
	  Epson emulation and OFF for Canon emulation. Refer to the printer manual for
	  further information on dip switches.
	
	4. Choose the 386 Enhanced option in Control Panel. Choose Virtual Memory, and
	  verify that there is a swapfile, or set up a large swap file.
	
	5. In Windows Setup, change the display driver to Windows VGA. (Prior to making
	  this change, Copy your SYSTEM.INI file, located in the Windows directory.)
	
	  NOTE: The VGA driver is a 16 color driver. If you need to use a 256 color
	  driver (some applications require 256 colors), contact your video card
	  manufacturer to receive the latest version of their 256 color video driver.
	
	6. Verify that the SET TEMP statement points to a valid drive and directory, and
	  that there is free disk space available on that drive.
	
	  NOTE: Check your user manual for your printer to see if there are any dip
	  switches which need to be set when using emulation.
	
	For more information about how to perform the preceding tasks in Windows, see
	your Windows printed documentation or online Help.
	
	Making these changes should allow you to print the card successfully. Cards print
	more slowly than newspapers or banners, so allow more time for a card to print.
	
	
	MORE INFORMATION
	================
	
	
	NOTE: You may get these error messages even if you don't print. When you choose
	the Cardvark or Banneroceros, the wizard queries the printer driver and the
	driver allocates memory for the page. In the case of the BubbleJet C600 printer,
	the printer driver allocates far too much memory. This memory stays allocated
	until you restart Windows.
	
	You can see the memory loss if you check available memory before and after you
	run the wizard. To check memory, switch to Program Manager and choose About
	Program Manager from the Help menu.
	
	Additional query words: 1.00 1.10 can't print greeting caardvark cardvaark bubble-jet c 600 lq2550 bjc600 win DeskJet DJ HP 500 550c mskids bj4000 freeze crash slowness slowly snake mouse mczee cards
	
	======================================================================
	Keywords          : kbprint kbPrinting kbfaq
	Technology        : kbHomeProdSearch kbCreativeWriter100 kbCreativeWriter110
	Version           : WINDOWS:1.0,1.1
	Issue type        : kbinfo
	
	=============================================================================
	
