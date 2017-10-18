---
layout: page
title: "Q153739: Do-It-Yourself Guide: Comdlg32.dll File Cannot Start"
permalink: kb/153/Q153739/
---

## Q153739: Do-It-Yourself Guide: Comdlg32.dll File Cannot Start

	Article: Q153739
	Product(s): Microsoft Home Multimedia Titles
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Reader's Digest Complete Do-It-Yourself Guide for Windows, version 1.0 
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start the Reader's Digest Complete Do-It-Yourself Guide, you may
	receive the following error message:
	
	  The COMDLG32.DLL file cannot start, check the file to determine the problem.
	
	When you click OK, the program closes.
	
	CAUSE
	=====
	
	Do-It-Yourself Guide cannot start if either of the following files are the
	incorrect version, missing, or damaged:
	
	- Commdlg.dll
	
	- Comdlg32.dll
	
	RESOLUTION
	==========
	
	To resolve this problem, replace both of the above files on your hard drive with
	the original files extracted from the Windows 95 compact disk or floppy disks.
	
	NOTE: You must first remove or rename any existing copies of Commdlg.dll or
	Comdlg32.dll from the Windows\System folder. For more information about how to
	accomplish this task in Windows, please see your Windows printed documentation
	or online Help.
	
	To extract the file Commdlg.dll, do the following:
	
	1. Insert the Windows 95 floppy disk or compact disc containing the Precopy1.cab
	  file in the appropriate floppy disk or CD-ROM drive.
	
	2. Click the Start button, point to Programs, and then click MS-DOS Prompt.
	
	3. At the MS-DOS command prompt, type the following, and then press ENTER:
	
	     cd\windows\system
	
	4. Type the following command for your floppy disk or compact disc:
	
	   - Floppy Disk:
	
	     Type the following and press ENTER:
	
	     extract <drive>:\Precopy1.cab Commdlg.dll
	
	     where <drive> is the letter of your floppy disk drive.
	
	   - Compact Disc:
	
	     Type the following and press ENTER:
	
	     extract <drive>:\win95\Precopy1.cab Commdlg.dll
	
	     where <drive> is the letter of your CD-ROM drive.
	
	To extract the file Comdlg32.dll, do the following:
	
	1. Insert the Windows 95 floppy disk or compact disc containing the Win95_11.cab
	  file in the appropriate floppy disk or CD-ROM drive.
	
	2. Click the Start button, point to Programs, and then click MS-DOS prompt.
	
	3. At the MS-DOS command prompt, type the following and press ENTER:
	
	     cd\windows\system
	
	4. Type the following command for your floppy disk or compact disc:
	
	   - Floppy Disk:
	
	     Type the following and press ENTER:
	
	     extract <drive>:\Win95_11.cab Comdlg32.dll
	
	     where <drive> is the letter of your floppy disk drive.
	
	   - Compact Disc:
	
	     Type the following and press ENTER:
	
	     extract <drive>:\win95\Win95_11.cab Comdlg32.dll
	
	     where <drive> is the letter of your CD-ROM drive.
	
	When both files are extracted, type the following at the MS-DOS command prompt
	and press ENTER:
	
	  exit
	
	MORE INFORMATION
	================
	
	If you still receive the error message, you can correct the problem by
	reinstalling Windows 95. However, this should be used as a last resort.
	Reinstalling Windows resets many of your custom settings to the Windows
	defaults.
	
	For more information about how to reinstall Windows 95, please see your Windows
	printed documentation or online Help.
	
	Additional query words: 1996 multi media multimedia multi-media mmtitles kbmm requires
	
	======================================================================
	Keywords          :  
	Technology        : kbHomeProdSearch kbWin95search kbZNotKeyword kbZNotKeyword3 kbDoItYourself
	Version           : 1.0
	
	=============================================================================
	
