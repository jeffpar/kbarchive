---
layout: page
title: "Q125458: Writer/Artist: How to Print a Kids Document to a File"
permalink: /kb/125/Q125458/
---

## Q125458: Writer/Artist: How to Print a Kids Document to a File

	Article: Q125458
	Product(s): Microsoft Home Kids Products
	Version(s): WINDOWS:1.0,1.1,1.1a,2.0
	Operating System(s): 
	Keyword(s): kbprint kbusage kbimu kbPrinting
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Creative Writer for Windows, versions 1.0, 1.1, 1.1a, 2.0 
	- Microsoft Fine Artist for Windows, versions 1.0, 1.1, 1.1a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to use the Print To File feature in Microsoft Windows
	to print a Creative Writer or Fine Artist document to a printer attached to a
	computer on which Creative Writer and Fine Artist are not installed.
	
	MORE INFORMATION
	================
	
	Windows 95/98
	-------------
	
	To print a Creative Writer or Fine Artist document to a file on a Windows
	95/98-based computer and then use the print file to print the document on
	another computer, follow these steps:
	
	1. Determine the model of printer attached to the computer you want to use to
	  print the document, and note the settings for the printer.
	
	2. On the computer on which Creative Writer or Fine Artist is installed, install
	  and configure the driver for the printer you want to use. To do so, follow
	  these steps:
	  a. Click Start, point to Settings, and then click Printers.
	
	  b. Double-click Add Printer, and then click Next.
	
	  c. Click Local Printer, and then click Next.
	
	  d. In the Manufacturers box, click the name of the manufacturer of the
	     printer you want to use.
	
	  e. In the Models box, click the model of printer you want to use, and then
	     click Next.
	
	  f. In the Available Ports box, click File, and then click Next.
	
	  g. In the Printer Name box, type a name for the printer, click Yes, and then
	     click Next.
	
	  h. When you are prompted to print a test page, click No, and then click
	     Finish.
	
	  i. Follow the instructions on the screen to finish installing the printer.
	
	  j. In the Printers window, right-click the printer you want to use, and then
	     click Properties.
	
	  k. Configure the settings match the printer settings on the computer you want
	     to use to print the document.
	
	  l. Click OK, and then close the Printers window.
	
	3. Start Creative Writer or Fine Artist, and then open the document you want to
	  print.
	
	4. Print the document. When you are prompted to save the print file, follow
	  these steps:
	  a. In the Save In box, click Desktop.
	
	  b. In the File Name box, type a file name of eight or fewer characters.
	
	  c. Click OK.
	
	5. Quit Creative Writer or Fine Artist.
	
	6. Insert a blank, formatted disk into the floppy disk drive.
	
	7. On the desktop, right-click the <filename>.prn file where
	  <filename> is the file name you typed in step 4, point to Send To, and
	  then click 3 1/2 Floppy (A).
	
	8. Insert the disk into the floppy disk drive on the computer you want to use to
	  print the document.
	
	9. Open an MS-DOS window.
	
	10. At the command prompt, type the following line, and then press "ENTER"
	  (without the quotation marks)
	
	  "copy a:\<filename>.prn lpt1: /b" (without the quotation marks)
	
	  where <filename> is the file name you typed in step 4.
	
	11. Type "exit" (without the quotation marks), and then press "ENTER" (without
	  the quotation marks).
	
	Windows 3.1x
	------------
	
	To print a Creative Writer or Fine Artist document to a file on a Windows
	3.1x-based computer and then use the print file to print the document on another
	computer, follow these steps:
	
	1. Determine the model of printer attached to the computer you want to use to
	  print the document, and note the settings for the printer.
	
	2. On the computer on which Creative Writer or Fine Artist is installed, install
	  and configure the driver for the printer you want to use. To do so, follow
	  these steps:
	  a. Follow the instructions provided by the printer manufacturer to install
	     the printer drivers.
	
	  b. In the Main group in Program Manager, double-click Control Panel.
	
	  c. Double-click the Printers icon.
	
	  d. Click Connect.
	
	  e. In the Ports box, click File, and then click OK.
	
	  f. Click Close.
	
	  g. Close Control Panel.
	
	3. Start Creative Writer or Fine Artist, and then open the document you want to
	  print.
	
	4. Print the document. When you are prompted to save the print file, type the
	  following line, and then click Save
	
	  "c:\<filename>.prn" (without the quotation marks)
	
	  where <filename> is a file name of eight or fewer characters.
	
	5. Quit Creative Writer or Fine Artist.
	
	6. Insert a blank, formatted disk into the floppy disk drive.
	
	7. Copy the print file to the floppy disk. To do so, follow these steps:
	  a. In the Main group in Program Manager, double-click the MS-DOS Prompt icon.
	
	  b. At the command prompt, type the following line, and then press "ENTER"
	     (without the quotation marks)
	
	  "copy c:\<filename>.prn a:\ " (without the quotation marks)
	
	     where <filename> is the file name you typed in step 4.
	
	  c. At the command prompt, type "exit" (without the quotation marks), and then
	     press "ENTER" (without the quotation marks).
	
	8. Insert the disk into the floppy disk drive on the computer you want to use to
	  print the document.
	
	9. Open an MS-DOS window.
	
	10. At the command prompt, type the following line, and then press "ENTER"
	  (without the quotation marks)
	
	  "copy a:\<filename>.prn lpt1: /b" (without the quotation marks)
	
	  where <filename> is the file name you typed in step 4.
	
	11. Type "exit" (without the quotation marks), and then press "ENTER" (without
	  the quotation marks).
	
	For more information about how to use the Print To File command, or about how to
	use the MS-DOS prompt, see your Windows printed documentation or online Help.
	
	
	Additional query words: cw fa home kids homekids homekid mskids wm_writer wm_artist 1.00 1.10 1.10a mczee prints printing printout output
	
	======================================================================
	Keywords          : kbprint kbusage kbimu kbPrinting 
	Technology        : kbHomeProdSearch kbZNotKeyword2 kbCreativeWriter100 kbCreativeWriter200 kbCreativeWriter110 kbCreativeWriter110a kbFineArtist100 kbFineArtist110 kbFineArtist110a
	Version           : WINDOWS:1.0,1.1,1.1a,2.0
	Issue type        : kbhowto
	
	=============================================================================
	
