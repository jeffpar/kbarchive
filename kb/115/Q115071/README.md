---
layout: page
title: "Q115071: Creative Writer 1: Difficulty Printing Card to HP DeskJet"
permalink: /kb/115/Q115071/
---

## Q115071: Creative Writer 1: Difficulty Printing Card to HP DeskJet

	Article: Q115071
	Product(s): Microsoft Home Kids Products
	Version(s): WINDOWS:1.0,1.1
	Operating System(s): 
	Keyword(s): kbdisplay kbenv kbgraphic kbprint kbtshoot kbimu kbPrintingkbfaq kbfixlist
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Creative Writer for Windows, versions 1.0, 1.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you print a card in Creative Writer on a Hewlett-Packard (HP) DeskJet 500
	or 600 series printer, you may experience one of the following symptoms:
	
	- The printer does not print the card.
	
	- The computer stops responding (hangs).
	
	- The printer may print a blank sheet of paper, and you receive McZee's
	  message: "I've finished printing your document. That was fun!"
	
	RESOLUTION
	==========
	
	To resolve this issue, increase the amount of Random Access Memory (RAM)
	installed in your computer to 16 megabytes (MB) or greater. To work around this
	issue, use the appropriate method for your version of Microsoft Windows.
	
	
	Windows 95/98
	-------------
	
	1. Click Start, point to Settings, and then click Printers.
	
	2. Right-click the printer you want to use, and then click Properties.
	
	3. On the Details tab, click Spool Settings.
	
	4. Click Print Directly To The Printer, and then click OK.
	
	5. Click OK, and then close the Printers window.
	
	If the issue continues to occur, proceed to the next step.
	
	6. Click Start, point to Settings, and then click Printers.
	
	7. Right-click the printer you want to use, and then click Properties.
	
	8. In the Resolution box on the Graphics tab, click 180 x 180, and then click
	  OK.
	
	9. Close the Printers window.
	
	If the issue continues to occur, proceed to the next step.
	
	10. If you use Windows 98, follow these steps to change the video driver to
	  VGA:
	
	  a. Click Start, point to Settings, and then click Control Panel.
	
	  b. Double-click Display.
	
	  c. On the Settings tab, click Advanced.
	
	  d. On the Adapter tab, click Change.
	
	  e. Click Next.
	
	  f. Click "Display a list of all the drivers in a specific location..." and
	     then click Next.
	
	  g. Click Show All Hardware.
	
	  h. In the Manufacturers box, click Standard Display Types.
	
	  i. In the Models box, click Standard Display Adapter (VGA).
	
	  j. Click Next, and then click Yes.
	
	  k. Click Close, and then click Close again.
	
	  l. When you are prompted to restart the computer, click Yes.
	
	11. If you use Windows 95, follow these steps to change the video driver to
	  VGA:
	
	  a. Click Start, point to Settings, and then click Control Panel.
	
	  b. Double-click Display.
	
	  c. On the Settings tab, click Change Display Type.
	
	  d. Under Adapter Type, click Change.
	
	  e. Click Show All Devices.
	
	  f. In the Manufacturers box, click Standard Display Types
	
	  g. In the Models box, click Standard Display Adapter (VGA).
	
	  h. Click OK.
	
	  i. Click Close, and then click Close again.
	
	  j. When you are prompted to restart the computer, click Yes.
	
	  NOTE: The VGA driver is a 16-color driver. If you need to use a 256-color
	  driver (some applications require 256 colors), contact the manufacturer of
	  your display adapter to inquire about obtaining the latest version of your
	  Windows 95 video driver.
	
	Windows 3.1
	-----------
	
	1. In the Main group in Program Manager, double-click Control Panel.
	
	2. Double-click Printers.
	
	3. Click the Use Print Manager check box to clear it.
	
	4. Click Setup.
	
	5. Verify that the version of the printer driver is 3.1 or greater. If you use
	  the DeskJet 520 or 560 series, verify that the version of the printer driver
	  is 4.0 or greater.
	
	6. Click OK.
	
	7. Click Connect, and then set the printer port to LPT1.DOS.
	
	8. Click OK, and then close Printers.
	
	If the issue continues to occur, proceed to the next step.
	
	9. In Control Panel, double-click 386 Enhanced.
	
	10. Click Virtual Memory, and then configure a large swap file if one is not
	  already present.
	
	11. Click OK. If you are prompted to restart the computer, do so.
	
	If the issue continues to occur, proceed to the next step.
	
	12. In Control Panel, double-click Windows Setup, and then change the display
	  driver to Windows VGA. When you are prompted to restart Windows, do so.
	
	  NOTE: You may want to make a copy of the System.ini file before you make this
	  change. The System.ini file is located in the Windows folder.
	
	If the issue continues to occur, proceed to the next step.
	
	13. On the File menu in Program Manager, click Run.
	
	14. In the Command Line box, type "sysedit" (without the quotation marks), and
	  then click OK.
	
	15. In the Autoexec.bat window, verify that the value for the Set Temp line
	  points to a valid drive and folder.
	
	16. On the File menu, click Exit. If you are prompted to save changes to the
	  Autoexec.bat file, click Yes.
	
	17. Use File Manager or the MS-DOS prompt to verify that at least 12 MB of space
	  is available on the hard disk that contains the Temp folder.
	
	For information about how to perform these tasks in Windows 3.1x, please see your
	Windows 3.1x printed documentation or online Help.
	
	Making these changes should allow you to print the card successfully. Print time
	for greeting cards is longer than print time for newspapers or banners.
	
	
	Additional query words: 1.00 1.10 can't print cardvaark win deskjet dj hp hpdj 560c 550c 500c 500 550 520 540 660 freeze crash slow lock mczee mskids
	
	======================================================================
	Keywords          : kbdisplay kbenv kbgraphic kbprint kbtshoot kbimu kbPrinting kbfaq kbfixlist
	Technology        : kbHomeProdSearch kbCreativeWriter100 kbCreativeWriter110
	Version           : WINDOWS:1.0,1.1
	Issue type        : kbprb
	
	=============================================================================
	
