---
layout: page
title: "Q129586: Baseball Guide 1995: Manual Installation Instructions"
permalink: kb/129/Q129586/
---

## Q129586: Baseball Guide 1995: Manual Installation Instructions

	Article: Q129586
	Product(s): Microsoft Home Multimedia Titles
	Version(s): WINDOWS:
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Complete Baseball Guide for Windows, 1995 edition 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article provides instructions to manually install Microsoft Complete
	Baseball Guide for Windows, 1995 edition.
	
	The installation is equivalent to the Fast Execution setup option, which requires
	8 megabytes (MB) of hard disk space.
	
	MORE INFORMATION
	================
	
	These instructions assume:
	
	- Your hard disk is drive C
	
	- Your destination folder (directory) is C:\Msbs95
	
	- Your Windows folder is C:\Windows
	
	- Your CD-ROM drive is drive D
	
	If your hard disk drive, destination folder, Windows folder, or CD-ROM drive
	letters are different, replace the drive letters and folder names throughout
	this article with the drive letters and folder names on your computer.
	
	NOTE: The following instructions discuss copying, editing, and modifying folders
	and files. For more information about accomplishing these tasks in Windows, see
	your Windows printed documentation or online Help.
	
	Windows 3.x
	-----------
	
	If you are running Microsoft Windows 3.x, follow these steps. When copying files,
	exit Windows and copy from the MS-DOS command prompt. Allow MS-DOS to overwrite
	any files it finds already on your hard drive.
	
	1. Create a folder named C:\Msbs95 on your hard drive.
	
	  For example, type the following at the MS-DOS command prompt and press ENTER:
	
	  "md c:\msbs95" (without the quotation marks)
	
	2. Create two folders in the MSBS95 folder and name the folders:
	
	  Bs95_dly
	  Bs95_sta
	
	3. Copy all the files from the D:\Daily folder to the C:\Msbs95\Bs95_dly
	  folder.
	
	  For example, type the following at the MS-DOS command prompt and press ENTER:
	
	  "copy d:\daily\*.* c:\msbs95\bs95_dly" (without the quotation marks)
	
	4. Copy the following files from the D:\Daily folder to the C:\Msbs95\Bs95_sta
	  folder:
	
	  - bs95strm.ico
	  - bs95strm.txt
	  - mlstats.txt
	
	5. Copy the following files from the D:\ folder to the C:\Msbs95 folder:
	
	  - Bs95read.ico
	  - Bs95read.txt
	
	6. Copy the following files from the D:\App folder to the C:\Msbs95 folder:
	
	  - Bs95.exe
	  - Helpapi.dll
	  - Msolbs95.dll
	  - Mvapi2.dll
	  - Mvfs11.dll
	  - Mvfs2.dll
	  - Pidhbs95.dll
	  - Wefx.dll
	
	7. Copy the following file from the D:\Baggage folder to the C:\Msbs95 folder:
	
	  - Indxbs95.m11
	
	8. Copy the following files from the D:\Viewer folder to the C:\Windows\System
	  folder:
	
	  - Ctl3d.dll
	  - Mvftsui2.dll
	  - Mviewer2.exe
	  - Mvtitle2.dll
	
	9. Copy the following files from the D:\Zzmmcat folder to the C:\Windows\System
	  folder:
	
	  - Picclip.vbx
	  - Spush.vbx
	  - Vbrun300.dll
	
	10. Copy all the files from the D:\System folder to the C:\Windows\System
	  folder.
	
	11. Remove the read-only attributes from all the files in the C:\Windows\System
	  folder and those in the C:\Msbs95 folder and its subfolders. For more
	  information about how to perform this task in Windows, see your Windows
	  printed documentation or online Help.
	
	12. Use a text editor, such as Notepad, to make the following changes to the
	  Mssports.ini file, which is located in the Windows folder. If the
	  Mssports.ini file does not already exist, create one in the Windows folder
	  with these entries:
	
	         [BS95]
	         idxpath=C:\MSBS95\ 
	         cd=D:\ 
	         workpath=C:\MSBS95\ 
	         installed=1
	         fxsounds=1
	         music=1
	         random=1
	         animation=1
	         button=1
	         viewerpath=C:\WINDOWS\SYSTEM\ 
	         rlefix=0
	
	         [BS95OL]
	         StatPath=C:\MSBS95\BS95_STA
	         Path=C:\MSBS95\BS95_DLY
	
	13. Use a text editor to make the following changes to the Windows information
	  files, which are located in the Windows folder:
	
	  Changes to the System.ini File
	  ------------------------------
	
	         [386Enh]
	         device=vshare.386
	         device=dva.386
	
	         [mci]
	         AVIVideo=mciavi.drv
	
	         [Drivers]
	         WaveMapper=msacm.drv
	         MSACM.msadpcm=msadpcm.acm
	         MSACM.imaadpcm=imaadpcm.acm
	         VIDC.MSVC=msvidc.drv
	         VIDC.RT21=ir21_r.dll
	         VIDC.CVID=iccvid.drv
	         VIDC.IV31=ir32.dll
	         VIDC.MRLE=msrle.drv
	         VIDC.YVU9=ir21_r.dll
	         VIDC.IV32=ir32.dll
	
	  Changes to the Win.ini File
	  ---------------------------
	
	         [mci extensions]
	         AVI=AVIVideo
	
	         [Microsoft Multimedia Catalog]
	         CatalogNum=1
	         Path=D:\zzmmcat\ 
	         ParentCD=Microsoft Complete Baseball
	
	  Changes to the Control.ini File
	  -------------------------------
	
	         [drivers.desc]
	         msacm.drv=Microsoft Sound Mapper V2.00
	         msadpcm.acm=Microsoft ADPCM Codec V2.00
	         imaadpcm.acm=Microsoft IMA ADPCM Codec V2.00
	
	14. Add the Baseball Guide icons to Program Manager by following the
	  instructions at the end of this article.
	
	15. Exit Windows and restart the computer. The installation is now complete.
	
	Windows 95 or Windows NT
	------------------------
	
	Follow these steps if you are using Microsoft Windows 95 or Microsoft Windows NT.
	When you copy files, do not overwrite any existing files.
	
	CAUTION: Allowing the system files to be overwritten in Windows 95 or Windows NT
	may cause improper system performance.
	
	1. Follow steps 1 through 9 and step 11 in the Windows 3.x section above to copy
	  program and shared files.
	
	  CAUTION: Do not follow step 10 above. Step 10 is for copying Windows 3.x
	  system files.
	
	2. Follow Step 12 above to create the Mssports.ini file.
	
	3. Use a text editor, such as Notepad or WordPad, to make the following changes
	  to the Windows information files, which are located in the Windows folder:
	
	  Changes to the Win.ini File
	  ---------------------------
	
	        [Microsoft Multimedia Catalog]
	        CatalogNum=1
	        Path=D:\zzmmcat\ 
	        ParentCD=Microsoft Complete Baseball
	
	4. Add the program icons or shortcuts using the appropriate section below as a
	  guide.
	
	Creating Start Menu Shortcuts
	-----------------------------
	
	If you are using Windows 95, do the following to add Baseball Guide to the Start
	Menu:
	
	1. Click the Start button, point to Settings, and then click Taskbar.
	
	2. Click the Start Menu Programs tab.
	
	3. Click Add.
	
	4. Type the following in the Command Line box, and then click Next:
	
	  "c:\msbs95\bs95.exe" (without the quotation marks)
	
	5. In the Select Program Folder dialog box, click the Microsoft Multimedia
	  folder, and then click Next.
	
	  NOTE: If Microsoft Multimedia is not listed, do the following to create the
	  folder:
	  a. Click New Folder
	
	  b. Type the following, and then click Next:
	
	  "Microsoft Multimedia" (without the quotation marks)
	
	6. In the Select A Title For The Program dialog box, type the following, and
	  then click Finish:
	
	  "Complete Baseball Guide 1995" (without the quotation marks)
	
	7. Repeat steps 3 through 6 to create the remaining shortcuts using the
	  information below:
	
	     Command Line: notepad.exe c:\msbs95\readme.txt
	     Select A Title: Complete Baseball 1995 Readme
	
	     Command Line: notepad.exe c:\msbs95\bs95_dly\tblshoot.txt
	     Select A Title: Complete Baseball 1995 Online Tips
	
	     Command Line: notepad.exe c:\msbs95\bs95_sta\bs95strm.txt
	     Select A Title: Complete Baseball 1995 Stats Readme
	
	     Command Line: c:\windows\catstub.exe
	     Select A Title: Microsoft Multimedia Catalog
	
	Create Program Manager Icons
	----------------------------
	
	If you use Windows Program Manager, use the steps below to create the Baseball
	Guide icons.
	
	1. Open the Microsoft Multimedia group. If this group does not already exist,
	  create it using the following steps:
	  a. On the File menu, click New.
	
	  b. Click Program Group, and then click OK.
	
	  c. In the Description box, type the following, and then click OK:
	
	  "Microsoft Multimedia" (without the quotation marks)
	
	2. On the File menu, click New.
	
	3. Click Program Item, and then click OK.
	
	4. Type the Description and Command Line information as listed below, and then
	  click OK:
	
	     Description: Complete Baseball Guide 1995
	     Command Line: c:\msbs95\bs95.exe
	
	5. Repeat steps 2 through 4 to create the remaining program items:
	
	     Description: Complete Baseball Guide 1995 Readme
	     Command Line: notepad.exe c:\msbs95\readme.txt
	
	     Description: Complete Baseball Guide 1995 Online Tips
	     Command Line: notepad.exe c:\msbs95\bs95_dly\tblshoot.txt
	
	     Description: Complete Baseball Guide 1995 Stats Readme
	     Command Line: notepad.exe c:\msbs95\bs95_sta\bs95strm.txt
	
	     Description: Microsoft Multimedia Catalog
	     Command Line: c:\windows\catstub.exe
	
	Additional query words: kbhowto 1995 1.00 multi media multimedia multi- mmtitles kbmm install create
	
	======================================================================
	Keywords          :  
	Technology        : kbHomeProdSearch kbGamesSearch kbBaseballSearch kbCompleteBaseballSearch kbCompleteBaseball1995
	Version           : WINDOWS:
	
	=============================================================================
	
