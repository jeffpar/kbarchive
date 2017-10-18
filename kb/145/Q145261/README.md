---
layout: page
title: "Q145261: WD97: Can't Print Multiple Copies from Word"
permalink: kb/145/Q145261/
---

## Q145261: WD97: Can't Print Multiple Copies from Word

	Article: Q145261
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbenv kbfile kbprint kbdta word97 kbPrintingkbfaq
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you set the "Number of copies" option to print multiple copies of your Word
	document in the Print dialog box (on the File menu, click Print), multiple
	copies are not printed. This problem is known to occur with the following
	printer drivers:
	
	- Brother 4500 ML Laser
	- Brother HL 960
	- Brother HL630
	- Brother HL640
	- Canon BJC-5100
	- Epson Stylus 600 Inkjet Color
	- Hewlett-Packard DeskJet 1200C, Hewlett-Packard 1600 printers
	- Hewlett-Packard DeskJet 550C, 560C, 660C, 693C, 694C, or 855C using the
	  legacy printer drivers, 870CSE
	- Hewlett-Packard LaserJet 5M, Standard
	- Hewlett-Packard LaserJet 5P, using the HPPCL5MS printer driver version G.1.20
	- Hewlett-Packard LaserJet 6MP
	- Hewlett-Packard OfficeJet SERIES
	- NEC SilentWriter II model 90 PostScript printer, using the Windows 95 printer
	  driver
	
	CAUSE
	=====
	
	There are three known possible causes of this problem:
	
	- You are using a Windows 3.1 or old printer driver.
	
	  -or-
	
	- The registry key that contains Word settings is corrupted.
	
	  -or-
	
	- The printer that you are using does not support printing multiple copies.
	
	
	WORKAROUND
	==========
	
	To work around this problem, use the appropriate method for your situation.
	
	Method 1: Upgrade to Microsoft Windows 95 Service Pack 1
	--------------------------------------------------------
	
	You can download the latest driver from the following Microsoft World Wide Web
	site:
	
	  http://support.microsoft.com/support/downloads/default.asp
	
	Windows 95 Service Pack 1 (SP1) contains updated printer drivers for the
	following printers:
	
	  HP DeskJet 310
	  HP DeskJet 320
	  HP DeskJet 500C
	  HP DeskJet 520
	  HP DeskJet 540
	  HP DeskJet 550C
	  HP DeskJet 560C
	  HP DeskJet Portable
	
	Method 2: Clear the Background Printing Option
	----------------------------------------------
	
	To clear the background printing option, follow these steps:
	
	1. On the Tools menu, click Options, and then click the Print tab.
	
	2. Click to clear the Background Printing check box.
	
	3. Click OK.
	
	Method 3: Set the Printer Driver Spool Settings to "Print Directly to Printer"
	------------------------------------------------------------------------------
	
	To change the printer driver's spool settings, follow these steps:
	
	1. Click Start, point to Settings, and then click Printers.
	
	2. Right-click the printer icon for your particular printer driver and click
	  Properties.
	
	3. Click the Details tab and then click Spool Settings.
	
	4. Click to select Print Directly to Printer.
	
	5. Click OK twice.
	
	Method 4: Change the Graphics Mode from Vector to Raster
	--------------------------------------------------------
	
	To change the graphics mode from vector to raster, follow these steps:
	
	1. Click Start, point to Settings, and then click Printers.
	
	2. Right-click the printer icon for your particular printer driver and click
	  Properties.
	
	3. Click the Graphics tab.
	
	4. Under Graphics mode, select Use Raster Graphics, click Apply, and then click
	  OK.
	
	Method 5: Add an Extra Page to Your Document
	--------------------------------------------
	
	Sometimes adding a blank page to the end of your document allows the printing of
	multiple copies. To do this in Word, follow these steps:
	
	1. Press CTRL+END to go to the end of the document.
	
	2. On the Insert menu, click Break.
	
	3. Under Insert, select Page Break, and then click OK.
	
	Method 6: Upgrade Third-Party Printer Drivers
	---------------------------------------------
	
	If you are using a third-party printer driver, contact the printer driver vendor
	to see whether they have an updated printer driver. If they do, upgrade to that
	driver.
	
	For information about how to contact your printer manufacturer, click the
	appropriate article number below to view the article in the Microsoft Knowledge
	Base:
	
	  Q65416 Hardware and Software Third-Party Vendor Contact List, A-K
	
	  Q60781 Hardware and Software Third-Party Vendor Contact List, L-P
	
	  Q60782 Hardware and Software Third-Party Vendor Contact List, Q-Z
	
	The third-party contact information included in this article is provided to help
	you find the technical support you need. This contact information is subject to
	change without notice. Microsoft in no way guarantees the accuracy of this
	third-party contact information.
	
	Method 7: Printer Specific Settings to Try
	------------------------------------------
	
	The following section of this article gives steps for workarounds for specific
	printer drivers.
	
	  
	
	  HP DeskJet 870CSE:
	
	  If you are using the HP DeskJet 870CSE printer driver, follow these steps:
	
	  1. Click Start, point to Settings, and then click Printers.
	
	  2. Right-click the printer icon for HP DeskJet 870CSE.
	
	  3. Click the Paper tab.
	
	  4. Click to select Ordered Printing.
	
	  NOTE: This allows your pages to be printed from back-to-front.
	
	  5. Click OK twice.
	
	  Epson Stylus 600 Inkjet Color:
	
	  If you are using the Epson Stylus 600 Inkjet Color printer driver, follow
	  these steps:
	
	  1. In Microsoft Word, click Options on the Tools menu, and then click the Print
	  tab.
	
	  2. From the Default Tray list, select Auto Sheetfeeder.
	
	  3. Click OK.
	
	  Hewlett-Packard LaserJet 5P:
	
	  If you are using HPPCL5MS.DRV legacy printer driver, follow these steps:
	
	  1. Click Start, point to Settings, and then click Printers.
	
	  2. Right-click the printer icon for HP 5P.
	
	  3. Click Print Quality tab.
	
	  4. In the Graphics Mode list, select Raster.
	
	  5. Click OK twice.
	
	MORE INFORMATION
	================
	
	For additional information, click the article number below to view the article
	in the Microsoft Knowledge Base:
	
	  Q137243 Cannot Print Multiple Copies from WordPad or Paint
	
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words: printing including envelopes Pages
	
	======================================================================
	Keywords          : kbenv kbfile kbprint kbdta word97 kbPrinting kbfaq
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Hardware          : x86
	Issue type        : kbprb
	Solution Type     : kbfix
	
	=============================================================================
	
