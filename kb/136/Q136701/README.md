---
layout: page
title: "Q136701: Works 95: Cannot Enter CD Key During Works 4.0 Setup"
permalink: kb/136/Q136701/
---

## Q136701: Works 95: Cannot Enter CD Key During Works 4.0 Setup

	Article: Q136701
	Product(s): Microsoft Home Multimedia Titles
	Version(s): 
	Operating System(s): 
	Keyword(s): kberrmsg kbsetup
	Last Modified: 09-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Works Windows 95 and Bookshelf 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You may not be able to enter the 10-digit CD Key during setup of Works or
	Bookshelf from the Works 4.0 for Windows 95 & Bookshelf 95 compact disc.
	
	When you try to enter the key during setup, you may be able to enter the first
	digit, and then nothing else after that. The cursor may move but no numbers
	appear in the CD Key dialog box on the screen, or the cursor may skip to the
	second part of the dialog box, where you can only enter part of the CD Key.
	
	If you try to continue Setup without the full 10-digit key entered, you will
	receive the error message:
	
	  Invalid Key Value.
	
	RESOLUTION
	==========
	
	Try one of the following two resolutions:
	
	Method 1
	--------
	
	If this problem occurs, you can run the Works Setup from the Msworks directory on
	the compact disc as follows:
	
	1. Click Start and click Run.
	
	2. Type the following:
	
	  <drive letter>:\msworks\setup /K"<CD Key Value>"
	
	  where <drive letter> is the letter designated for your compact disc
	  drive and <CD Key Value> is the 10-digit CD Key from the yellow sticker
	  on the back of your compact disc case, without any dashes or other characters
	  entered.
	
	For example, if your CD Key was 123-4567890, and your compact disc drive is drive
	D, you would type the following:
	
	  D:\msworks\setup /K"1234567890"
	
	NOTE: You must include the quote marks around the Key number.
	
	Setup records the CD Key that you entered and doesn't prompt you with a dialog
	box for the CD Key.
	
	If you are having the same problem with Bookshelf 1995 setup, use the same syntax
	from step 2, but run Setup from the Books95 folder on the compact disc.
	
	Method 2
	--------
	
	This problem can be caused by a missing or corrupt MS Sans Serif font. Add the MS
	Sans Serif font to your fonts folder or fix a corrupted font, as follows:
	
	1. Click Start, point to Settings, then click Control Panel.
	
	2. Open the Fonts folder and click Details on the View menu of the Fonts folder.
	
	3. If MS Sans Serif is not displayed in the Fonts folder, proceed to step 5 to
	  reinstall it. If MS Sans Serif is in the Fonts folder, it may be corrupted
	  and must be removed (see step 4 below).
	
	4. Select MS Sans Serif and click Delete on the File menu.
	
	  MS Sans Serif is now removed. Continue with the following steps to reinstall
	  the font.
	
	5. On the File menu in the Fonts folder, click Install New Font.
	
	6. In the Add Fonts dialog box, change the folder to the Windows fonts folder
	  and click OK.
	
	7. From the list of fonts, select MS Sans Serif and click OK. If MS Sans Serif
	  is listed twice (VGA and 8514), select the appropriate version for the output
	  device you are using. If you are unsure, about the type of output device you
	  are using, select both versions of MS Sans Serif.
	
	  NOTE: If the MS Sans Serif font is not listed, you will need to extract the MS
	  Sans Serif font files from the Windows 95 disk or compact disc, and place the
	  files in the Windows\Fonts folder and repeat Steps 5-7.
	
	  The MS Sans Serif font files are located in the Win95_06.cab file on disk 6 of
	  the Windows 95 DMF disk set, or in the Win95_05.cab file in the Win95 folder
	  on the Windows 95 compact disc. The files are Sserife.fon for VGA resolution
	  or Sseriff.fon for 8514 resolution.
	
	  To extract these files, use the following syntax with the Extract utility at
	  the command prompt
	
	  extract /L <destination> <source> <filename>
	
	  where <destination> is the folder where you want the font file placed,
	  <source> is the cabinet file that contains the font file, and
	  <filename> is the name of the font file.
	
	  For example, if you are using the Windows 95 DMF disk set and your floppy
	  drive is drive A, you would type the following at the command prompt:
	
	  extract /L C:\windows\fonts win95_06.cab sseriff.fon
	
	  For additional information on using the Extract utility, see the following
	  article in the Microsoft Knowledge Base:
	
	  Q129605 How to Extract Original Compressed Windows Files
	
	8. Once you have installed the MS Sans Serif font, restart Windows and re-run
	  the Works setup.
	
	Additional query words: 4.00 w_works CD-Key cdrom disc disk cd cd-rom cdkey numbers ID money Q138459 can't plus ms
	
	======================================================================
	Keywords          : kberrmsg kbsetup 
	Technology        : kbHomeProdSearch kbWorksSearch kbHomeMMsearch kbBookshelfSearch kbWorks400
	Version           : :
	Issue type        : kbprb
	
	=============================================================================
	
