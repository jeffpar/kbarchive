---
layout: page
title: "Q150492: Julia Child: Manual Installation Instructions for Windows 3.x"
permalink: /kb/150/Q150492/
---

## Q150492: Julia Child: Manual Installation Instructions for Windows 3.x

	Article: Q150492
	Product(s): Microsoft Home Multimedia Titles
	Version(s): WINDOWS:1.0,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Julia Child: Home Cooking with Master Chefs for Windows, version 1.0 
	- the operating system: Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article provides instructions to manually install Microsoft Julia Child:
	Home Cooking with Master Chefs on computer systems running Windows 3.x.
	
	MORE INFORMATION
	================
	
	These instructions assume:
	
	- Your hard drive is drive C:
	
	- Your Windows folder is C:\Windows
	
	- Your CD-ROM drive is drive D
	
	- Your Destination folder is C:\Msjulia
	
	If your hard disk drive, destination folder (directory), Windows folder, or
	CD-ROM drive letters are different, replace the drive letters and folder names
	throughout this article with the drive letters and folder names on your
	computer.
	
	NOTE: The following instructions discuss copying, editing, and modifying folders
	and files. For more information about how to accomplish these tasks in Windows,
	see your Windows printed documentation or online Help.
	
	1. Exit Windows.
	
	2. Run the Pss.bat file. The batch program copies the Julia Child program files
	  and system files to your hard drive. At the MS-DOS command prompt, type the
	  following commands, pressing ENTER at the end of each line:
	
	  "d:" (without the quotation marks)
	  "cd \aamsstp\manual" (without the quotation marks)
	  "pss.bat c:\msjulia c:\windows" (without the quotation marks)
	
	  CAUTION: Do not run the Pss.bat file if you are using Windows 95 or Windows
	  NT.
	
	3. Install the fonts included on the compact disc. Do install the fonts, do the
	  following:
	  a. Open the Windows Control Panel, usually located in the Main group of
	     Program Manager.
	
	  b. On the Settings menu, click Fonts.
	
	  c. Click Add.
	
	  d. Change the drive letter to match the letter of your CD-ROM drive.
	
	  e. In the Directories area, double-click the Aamsstp folder, then
	     double-click the Fonts folder.
	
	  f. Click Select All, and then click OK.
	
	  g. Click OK if you receive messages about the fonts already being installed.
	
	  h. Click Close.
	
	4. Delete the file C:\Windows\System\Dcisvga.drv, if it exists.
	
	5. Use a text editor, such as Microsoft Notepad, to make the following changes
	  to the Msjulia.ini file, which is located in the Windows folder.
	
	        [Options]
	        BookDirectory=D:\msjulia\ 
	        CodeDirectory=C:\Msjulia\ 
	        DataDirectory=C:\Msjulia\ 
	        MediaDirectory=D:\msjulia\video\ 
	
	6. Use a text editor to make the following changes to the Windows initialization
	  files, which are located in the Windows folder:
	
	  Win.ini File Changes
	  --------------------
	
	        [MCI Extensions]
	        avi=AVIVideo
	        wav=waveaudio
	
	  System.ini File Changes
	  -----------------------
	
	        [386enh]
	        device=dva.386
	        device=vshare.386
	
	        [mci]
	        AVIVideo=mciavi.drv
	
	        [drivers]
	        WaveMapper=msacm.drv
	        MSACM.msadpcm=msadpcm.acm
	        MSACM.imaadpcm=imaadpcm.acm
	        VIDC.IV31=ir32.dll
	        VIDC.IV32=ir32.dll
	        VIDC.MSVC=msvidc.drv
	        VIDC.CVID=iccvid.drv
	        VIDC.MRLE=msrle.drv
	
	  Control.ini File Changes
	  ------------------------
	
	        [drivers.desc]
	        msacm.drv=Microsoft Sound Mapper V2.00
	        msadpcm.acm=Microsoft ADPCM Codec V2.00
	        imaadpcm.acm=Microsoft IMA ADPCM Codec V2.00
	
	7. Add the Program icons. As a guide, use the steps in the "Creating Program
	  Manager Icons" section below.
	
	8. Restart Windows. Installation is complete.
	
	Creating Program Manager Icons
	------------------------------
	
	1. Open the Microsoft Multimedia group. If this group does not already exist,
	  create it as follows:
	  a. On the File menu, click New.
	
	  b. Click Program Group, and then click OK.
	
	  c. In the Description box, type the following, and then click OK:
	
	  "Microsoft Multimedia" (without the quotation marks)
	
	2. On the File menu, click New.
	
	3. Click Program Item, and then click OK.
	
	4. Type the following Description and Command Line information, and then click
	  OK:
	
	     Description:       Julia Child
	     Command Line:      c:\msjulia\msjulia.exe d:\msjulia\msjulia.m13
	
	5. Repeat steps 2-4 for the following item:
	
	     Description:       Julia Child Read Me
	     Command Line:      C:\msjulia\readme.wri
	
	Additional query words: multi media multimedia multi-media mmtitles kbmm kbhowto
	
	======================================================================
	Keywords          :  
	Technology        : kbOSWinSearch kbHomeProdSearch kbZNotKeyword6 kbZNotKeyword kbJuliaChild kbOSWin310 kbOSWin311
	Version           : WINDOWS:1.0,3.1,3.11
	
	=============================================================================
	
