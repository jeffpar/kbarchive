---
layout: page
title: "Q108777: READ.ME File from Canon BJC-600 Version 1.00 Printer Driver"
permalink: kb/108/Q108777/
---

## Q108777: READ.ME File from Canon BJC-600 Version 1.00 Printer Driver

	Article: Q108777
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 27-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article contains the READ.ME file for the Canon BJC-600 version 1.0 printer
	driver.
	
	MORE INFORMATION
	================
	
	Copyright 1993 Canon Information Systems, Inc., Canon Inc.
	
	BJC-600 Windows Printer Driver Version 1.0 READ.ME File:
	
	June 1993
	*************************************************************************
	
	Congratulations on your purchase of the Canon Color Bubble Jet Printer BJC-600.
	We are sure you'll appreciate its exceptional print quality using both color and
	black inks, flexible paper handling, fast printing speed, and trouble-free
	operation.
	
	As with most software and hardware products, information is made available after
	the development of the manual. Updated information regarding the BJC-600 is
	provided in this readme file. Should the information in this readme file be
	inaccurate or you require further explanation, please contact Canon's Help Desk
	at 1-800-423-2366.
	
	Printing Envelopes
	------------------
	
	When printing envelopes with the BJC-600 and the auto-sheet feeder, move the
	paper thickness selection lever on the auto-sheet feeder to the forward
	position. This will result in the best paper handling for envelopes. Also, make
	sure to print with the option 'Print Current Page' or set the print range to be
	from '1' to '1'. This will ensure that the application will not prompt you to
	insert a second envelope after printing.
	
	Windows System Options
	----------------------
	
	When setting up your Windows system to print with the BJC-600, please consider
	the following options to optimize your printing performance.
	
	- Fast Printing Direct to Port: This option, available from within Printers in
	  the Windows Control Panel, should always be ON for best printing results.
	
	- Use DOS 5.0 or higher & HIMEM command to make 550 K of 'real' memory
	  available.
	
	- Ensure a minimum of 4 to 8MB of permanent Windows SWAPFILE.
	
	- Increase your RAM memory to more than 8MB. Increasing RAM memory will result
	  in faster printing and reduce compatibility problems with applications. If
	  you must print in a low memory situation, and are having problems with your
	  application, try turning off screen-matched color or reducing resolution to
	  correct the problem.
	
	- ATI display driver. If you are using ATI's display driver version 1.5 and are
	  experiencing problems when printing, do the following:
	
	  1. Run the program "FlexDesk Control Panel" supplied with your ATI driver.
	
	  2. Click on the "Advanced..." button on the main dialog.
	
	  3. Select "Off" for the "Device Bitmaps" selection.
	
	  4. Press "Ok" to exit "FlexDesk Advanced Settings" dialog.
	
	  5. Press "Ok" to exit "FlexDesk Control Panel".
	
	  6. You will be prompted to restart Windows. Press "Yes" to this query.
	
	Operation under Windows 3.0
	---------------------------
	
	If you are installing the BJC-600 driver under Windows 3.0 and you wish to use
	its on-line help, you need to manually copy a newer version of the file
	WINHELP.EXE from the BJC-600 Installation diskette to your Windows directory.
	For instance, if your Windows directory is C:\WINDOWS and your BJC-600
	Installation diskette is in drive A:, under DOS you would type:
	
	  copy a:\winhelp.exe c:\windows
	
	Alternatively, you can use the Windows file manager to copy this file.
	
	Application Notes
	-----------------
	
	This section contains the latest information about using your BJC-600 with
	various Windows application programs.
	
	Corel Draw 3.1 (Corel Corp.):
	
	If a print job is canceled from within Corel Draw 3.1, an extra page may be
	ejected from the printer after the canceled job is ejected.
	
	Excel 4.0 (Microsoft):
	
	In Excel, changes to the Page Setup in the Print menu do not take effect
	immediately. After closing Page Setup, re-open the dialog box and select the
	same options again to ensure that Excel recognizes the change and implements
	it.
	
	Freelance Graphics 1.0 (Lotus Development Corp.):
	
	When printing grayscale documents from Freelance, gradients used in the document
	may appear as solid colors. This is due to a problem in Freelance 1.0.
	
	Image-In 3.1a (Image-In Corp.):
	
	When printing .bmp images from Image-In 3.1a, the file may be printed upside down
	when Portrait orientation is selected. When printing from Image-In and using the
	Fit to Page option and Landscape orientation, some horizontal lines may appear
	in the output. Try scaling the image with the BJC-600 driver rather than using
	Fit to Page.
	
	IntelliDraw 1.0 (Aldus Corp.):
	
	When printing with IntelliDraw in low memory conditions, IntelliDraw may cause a
	general protection fault error. Try increasing the RAM memory to greater than
	4MB.
	
	Persuasion 2.0 (Aldus Corp.):
	
	When printing from within Persuasion, a white line may appear across the page.
	This is due to a problem in Persuasion.
	
	PhotoFinish 2.0 (Zsoft):
	
	PhotoFinish has an option within its printer setup called 'Use PhotoFinish
	halftone'. This option should not be used with the BJC-600 printer. Always
	select 'Use Printer's Halftone' when printing from PhotoFinish.
	
	PhotoStyler 1.1a (Aldus Corp.):
	
	When printing using the Fit to Page option within PhotoStyler, the bottom and
	right sides of the document may sometimes be cut off. Try scaling the image with
	the BJC-600 driver rather than using Fit to Page. Also, multiple copies cannot
	be printed from within PhotoStyler. Each copy must be printed individually. This
	is due to the fact that the application is not correctly communicating with the
	printer driver about how to print multiple pages.
	
	Picture Publisher 3.1 (Micrografx):
	
	When printing a color image from Picture Publisher using Black & White print
	mode within the BJC-600 driver, the Intensity control does not function. This is
	due to a problem in Picture Publisher.
	
	Ventura Publisher 4.01 (Ventura):
	
	When importing PCX files into Ventura, the file will be printed as grayscale even
	if it contains color data. This is due to a problem with Ventura Publisher
	4.01.
	
	Word 2.0 (Microsoft Corp.):
	
	When printing envelopes from Word 2.0, the message 'The margins of section 1 are
	set outside the printable area of the page. Do you want to continue?' may
	appear. Click OK and the envelope will print correctly.
	
	WordPerfect 5.2 (WordPerfect Corp.):
	
	When printing with WordPerfect in low memory conditions, some graphic elements
	may not appear on the printed page that are present in the document or they may
	print as grayscale rather than color. This can be solved by lowering the
	resolution of the print, lowering the color depth, turning off screen-matched
	color, setting the "Fast Graphics Printing" option off within WordPerfect's
	Print Preferences, or increasing the RAM memory of your computer. The message
	'The Windows printer driver did not accept the requested paper size. Document
	will print on paper size the printer did not select.' may appear when printing
	envelopes from WordPerfect. The envelope will still print correctly.
	
	Works 2.0 (Microsoft):
	
	Due to a problem within the printing mechanism of Works, make sure you change the
	BJC-600's print resolution, color format, paper size, media type, paper source,
	print quality, and Landscape/Portrait orientation using Printers from the
	Control Panel. If Works is launched, and any of the settings previously
	mentioned is changed from within Works, the output from the BJC-600 will not be
	correct.
	
	
	Additional query words: gpf win31 3rdparty 3.10 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : :3.1,3.11
	
	=============================================================================
	
