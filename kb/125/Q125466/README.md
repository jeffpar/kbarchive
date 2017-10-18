---
layout: page
title: "Q125466: Strauss: Manual Installation Instructions"
permalink: kb/125/Q125466/
---

## Q125466: Strauss: Manual Installation Instructions

	Article: Q125466
	Product(s): Microsoft Home Multimedia Titles
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Multimedia Strauss for Windows, version 1.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article provides instructions to manually install Microsoft Multimedia
	Strauss for Windows.
	
	MORE INFORMATION
	================
	
	These directions assume the following:
	
	- The hard disk is drive C.
	
	- Your destination folder is C:\Strauss
	
	- Windows is installed in C:\Windows
	
	- The CD-ROM drive is drive D
	
	These steps involve copying and editing files and folders (directories). For more
	information about how to accomplish these tasks in Windows, see your Windows
	printed documentation or online help.
	
	To manually install Microsoft Multimedia Strauss for Windows, do the following:
	
	- Copy the appropriate files to your hard disk.
	
	- Modify the System.ini, Win.ini, and Strauss.ini files.
	
	- Create a Microsoft Multimedia program group that contains a Strauss icon.
	
	Copying the appropriate files from the CD-ROM
	---------------------------------------------
	
	1. On your hard drive, create a folder (directory) called C:\Strauss.
	
	2. Copy all of the files from the D:\Strauss folder on the CD-ROM to the
	  C:\Strauss folder on your hard drive. The files are:
	
	  Glossary.idx
	  Index.dat
	  Index.map
	  Index.nam
	  Strauss.map
	  Strauss.mpf
	  Strauss.mxe
	  Playup.avi
	  Playdwn.avi
	  Chartup.avi
	  Chartdwn.avi
	  Popdwn.avi
	  Readme.txt
	
	3. In the C:\Strauss folder, rename the file Strauss.mxe to Strauss.exe.
	
	4. Create a folder in C:\Strauss called "Illus," (without the quotation marks)
	  and then copy all of the files from the D:\Strauss\Illus256\Hd folder on the
	  CD-ROM to the C:\Strauss\Illus folder on the hard drive. 67 files should be
	  copied.
	
	5. For this step, use the appropriate instructions for your version of Windows.
	
	  Windows 3.x
	  -----------
	
	  Copy all the files from the D:\Strauss\Msstp\System folder on the compact disc
	  to the C:\Windows\System folder on the hard disk. The files are:
	
	  acmcmprs.dll
	  avifile.dll
	  compobj.dll
	  mciavi.drv
	  mcicda.drv
	  msacm.dll
	  msacm.drv
	  msadpcm.acm
	  msvidc.drv
	  msvideo.dll
	
	  Windows 95
	  ----------
	
	  Copy the following file from the D:\Strauss\Msstp\System folder on the compact
	  disc to the C:\Windows\System folder on the hard drive:
	
	  Acmcmprs.dll
	
	6. Copy all of the files from the D:\Strauss\Msstp\Shared folder on the compact
	  disc to the C:\Windows\System folder on the hard disk. The files are:
	
	  bmutils.dll
	  mci.vbx
	  mill.fon
	  millb.fon
	  millsc.fon
	  msgblast.vbx
	  mvfs2.dll
	  picclip.vbx
	  rtfcc.vbx
	  spush.vbx
	  vbrun300.dll
	
	7. Install the fonts through Control Panel using the following steps:
	  a. Double-click on the Fonts icon.
	
	  b. Click the Add button or in Windows 95 select Install New Fonts from the
	     File menu
	
	  c. From the C:\Windows\System folder, click the following fonts while you
	     press and hold down the keyboard CTRL key:
	
	  Millicent 10, 12, 14, 16
	  Millicent Bold 12, 14
	  Millicent SmallCaps 9, 14
	
	  d. Click OK.
	
	Modifying the System.ini, Win.ini, and Strauss.ini Files
	--------------------------------------------------------
	
	Use a text editor, such as Windows Notepad, to modify or add the specified
	sections of these files.
	
	CAUTION: Do not delete any information from these files.
	
	1. If you are using Windows 3.x, add or modify these sections of the System.ini
	  file:
	
	        [Drivers]
	        WAVEMAPPER=MSACM.DRV
	        MSACM.msadpcm=msadpcm.acm
	        VIDC.MSVC=msvidc.drv
	
	        [MSASCM]
	        INSTALL=MSADPCM.ACM
	
	        [MCI]
	        CDAUDIO=MCICDA.DRV
	        WAVEAUDIO=MCIWAVE.DRV
	        AVIVideo=MCIAVI.DRV
	
	2. If you are using Windows 3.x, add or modify this section of the Win.ini
	  file:
	
	        [MCI EXTENSIONS]
	        wav=waveaudio
	        avi=AVIVideo
	
	3. Use a text editor to make the following changes to the Strauss.ini file,
	  which is located in the Windows folder. If the Strauss.ini file does not
	  already exist, create one in the Windows folder with these entries:
	
	        [STRAUSS]
	        HDPath=C:\STRAUSS
	        InstalledColors=256
	
	  NOTE: If you use WordPad to make the changes, make sure you select save the
	  file as a text document
	
	4. Restart Windows.
	
	Creating a Microsoft Multimedia Program Group and Strauss Icon
	--------------------------------------------------------------
	
	Use the instructions below for your version of Windows:
	
	Windows 3.x
	-----------
	
	If you do not already have one, use the following steps to create a Microsoft
	Multimedia program group.
	
	1. On the File menu in Program Manager, click New.
	
	2. Select Program Group, and then click OK.
	
	3. In the Description box, type "Microsoft Multimedia" (without the quotation
	  marks), and click OK.
	
	Once this group has been created, do the following to add a new program item to
	this group:
	
	1. On the File menu in Program Manager, click New.
	
	2. Select Program Item, and then click OK.
	
	3. Type the following information for the program item:
	
	     Description:  Microsoft Strauss
	     Command Line:  C:\STRAUSS\STRAUSS.EXE
	     Working Directory:  C:\STRAUSS
	
	4. Click OK.
	
	Windows 95
	----------
	
	If you do not already have one, use the following steps to create a Microsoft
	Multimedia program folder:
	
	1. Find and open the folder C:\Windows\Start Menu\Programs.
	
	2. On the File menu, point to New, and then click Folder.
	
	3. Rename the folder "Microsoft Multimedia" (without the quotation marks).
	
	Once this group has been created, do the following to add a new program item to
	this group:
	
	1. Open the Microsoft Multimedia folder.
	
	2. On the File menu, point to New, and then click Shortcut.
	
	3. Type the following command line for the program item:
	
	  "c:\strauss\strauss.exe" (without the quotation marks)
	
	4. Name the shortcut "Microsoft Strauss"(without the quotation marks).
	
	Additional query words: kbhowto 1994 multi media multimedia multi- strauss mmtitles
	
	======================================================================
	Keywords          :  
	Technology        : kbHomeProdSearch kbHomeMMsearch kbZNotKeyword kbMMStrauss
	Version           : WINDOWS:1.0
	
	=============================================================================
	
