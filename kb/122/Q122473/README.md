---
layout: page
title: "Q122473: Complete Basketball '94-'95: Manual Installation Instructions"
permalink: /kb/122/Q122473/
---

## Q122473: Complete Basketball '94-'95: Manual Installation Instructions

{% raw %}

	Article: Q122473
	Product(s): Microsoft Home Multimedia Titles
	Version(s): 1994-1995 edition
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Complete NBA Basketball for Windows 1994-1995 edition 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article provides instructions to manually install Microsoft Basketball for
	Windows, 1994-1995 edition.
	
	This installation is equivalent to the "Fast" Setup option, which requires 6
	megabytes (MB) of disk space and provides the fastest performance.
	
	MORE INFORMATION
	================
	
	These instructions assume:
	
	- Your hard disk is drive C
	
	- Your destination folder is C:\Nations
	
	- Your Windows folder is C:\Windows
	
	- Your CD-Rom drive is drive D
	
	If your hard disk drive, destination folder, Windows folder, or CD-ROM drive
	letters are different, replace the drive letters and folder names throughout
	this article with the drive letters and folder names on your computer.
	
	NOTE: The following instructions discuss copying, editing, and modifying
	directories and files. For more information about accomplishing these tasks in
	Windows, see your Windows printed documentation or online Help.
	
	Steps for Windows or Windows for Workgroups, Versions 3.x
	---------------------------------------------------------
	
	If you are running Microsoft Windows 3.x, follow these steps. When copying files,
	exit Windows and copy from the MS-DOS command prompt. Allow MS-DOS to overwrite
	any files it finds already on your hard drive.
	
	1. Create a folder named C:\Bktball on your hard drive.
	
	  For example, type the following at the MS-DOS command prompt and press ENTER
	  at the end of the line:
	
	  "md c:\bktball" (without the quotation marks)
	
	2. Create a folder named C:\Bktball\Daily.
	
	3. Copy all the files in the D:\App folder to C:\Bktball folder.
	
	  For example, to copy Medvdll.dll, type the following at the MS-DOS command
	  prompt and press ENTER at the end of the line:
	
	  "copy d:\app\medvdll.dll c:\bktball" (without the quotation marks)
	
	4. Copy the following files from the D:\ to C:\Bktball folder:
	
	  - Readme.ico
	  - Readme.txt
	
	5. Copy the file Text.m11 from the D:\Baggage folder to the C:\Bktball folder.
	
	6. Copy all the files in the D:\Daily folder to the C:\Bktball\Daily folder.
	
	7. Copy all the files in the D:\Zzsystem folder to C:\Windows\System folder.
	
	8. Copy all the files in the D:\Viewer folder to C:\Windows\System folder.
	
	9. If necessary, remove the read-only attribute from all the files in the
	  C:\Bktball and C:\Baseball\Daily folders.
	
	10. Use a text editor, such as Microsoft Notepad, to make the following changes
	  to the Bktball.ini file, which is located in the Windows folder. If the
	  Bktball.ini file does not already exist, create one in the Windows folder
	  with these entries:
	
	      [bktball]
	      idxpath=C:\BKTBALL\ 
	      cd=D:\ 
	      workpath=C:\BKTBALL\ 
	      viewerpath=C:\WINDOWS\SYSTEM\ 
	      rlefix=0
	
	      [sound]
	      installed=1
	      fxsounds=1
	      music=1
	      random=1
	      button=1
	
	11. Use a text editor to make the following changes to the Mssports.ini file,
	  which is located in the Windows folder. If the Mssports.ini file does not
	  already exist, create one in the Windows folder with these entries:
	
	      [bktball]
	      Key=<special characters, see below>
	      Path=C:\BKTBALL\DAILY
	
	      [online]
	      ViewerPath=C:\VIEWER\ 
	
	  NOTE: To insert the special characters after Key=, use the following method:
	
	  Make sure the NUMLOCK key is on and place the cursor to the right of the Key=
	  entry. Press and hold down the ALT key, and type the numbers from the
	  numeric keypad as shown below. Be sure to release the ALT key after typing
	  each sequence of numbers:
	
	  ALT+0177
	  ALT+0184
	  ALT+0187
	  ALT+0182
	  ALT+0180
	  ALT+0180
	  ALT+0182
	  ALT+0182
	
	12. Use a text editor to make the following changes to the Windows information
	  files, which are located in the Windows folder:
	
	  Changes to the Win.ini File
	  ---------------------------
	
	      [MCI EXTENSIONS]
	      AVI=AVIVideo
	      WAV=WaveAudio
	
	  Changes to the System.ini File
	  ------------------------------
	
	      [Drivers]
	      WaveMapper=msacm.drv
	      MSACM.msadpcm=msadpcm.acm
	      MSACM.imaadpcm=imaadpcm.acm
	      VIDC.MSVC=msvidc.drv
	      VIDC.RT21=ir21_r.drv
	      VIDC.CVID=iccvid.drv
	      VIDC.IV31=ir32.dll
	      VIDC.MRLE=msrle.drv
	      VIDC.YVU9=ir21_r.drv
	      VIDC.IV32=ir32.dll
	
	      [mci]
	      AVIVideo=mciavi.drv
	
	  Changes to the Control.ini File
	  -------------------------------
	
	      [drivers.desc]
	      msacm.drv=Microsoft Sound Mapper V2.00
	      msadpcm.acm=Microsoft ADPCM Codec V2.00
	      imaadpcm.acm=Microsoft IMA ADPCM Codec V2.00
	
	13. Add the Basketball icons to Program Manager by following the instructions at
	  the end of this article.
	
	14. Exit Windows and restart the computer. The installation is now complete.
	
	Steps for Windows 95 or Windows NT
	----------------------------------
	
	Follow these steps if you are using Microsoft Windows 95 or Microsoft Windows NT.
	When copying files, DO NOT overwrite ANY existing files.
	
	CAUTION: Allowing the system files to be overwritten in Windows 95 or Windows NT
	may cause improper system performance.
	
	1. Follow steps 1 through 7, and step 9 above to copy files.
	
	2. DO NOT use step 8 above, which is for copying Windows 3.x system files.
	
	3. Follow steps 10 through 11 above to create or edit the program .ini files.
	
	4. Add the program icons or shortcuts using the appropriate section below as a
	  guide.
	
	Create the Start Menu Shortcuts
	-------------------------------
	
	If you are using Windows 95, add Basketball to the Start Menu by following these
	instructions:
	
	1. Click the Start button, point to Settings, and then click the Taskbar.
	
	2. Click the Start Menu Programs tab.
	
	3. Click Add.
	
	4. Type the following in the Command Line box, and then click Next:
	
	  "c:\bktball\bktball.exe" (without the quotation marks)
	
	5. In the Select Program Folder dialog box, click on the Microsoft Multimedia
	  folder to select it, and then click Next.
	
	  NOTE: If Microsoft Multimedia is not listed, create it as follows:
	  a. Click New Folder
	
	  b. Type in the following, and then click Next:
	
	  "Microsoft Multimedia" (without the quotation marks)
	
	6. In the Select A Title For The Program dialog box, type the following, and
	  then click Finish:
	
	  "Complete NBA Basketball" (without the quotation marks)
	
	7. Repeat steps 3 through 6 to create shortcuts for the following shortcuts:
	
	  Command Line: notepad.exe c:\bktball\readme.txt
	  Select A Title For The Program: Complete NBA Basketball Info
	
	  Command Line: c:\bktball\daily\tblshoot.txt
	  Select A Title For The Program: Online Troubleshooting Tips
	
	Create Program Manager Icons
	----------------------------
	
	If you use the Windows Program Manager, create the Basketball icons as follows:
	
	1. Open the Microsoft Multimedia group. If this group does not already exist,
	  create it as follows:
	  a. On the File menu, click New.
	
	  b. Click Program Group, and then click OK.
	
	  c. In the Description box, type the following, and then click OK:
	
	  "Microsoft Multimedia" (without the quotation marks)
	
	2. On the File menu, click New.
	
	3. Click Program Item, and then click OK.
	
	4. Type in the Description and Command Line as listed below, and then click OK:
	
	  Item 1:
	  Description: Complete NBA Basketball
	  Command Line: c:\bktball\bktball.exe
	
	5. Repeat steps 2 through 4 to create the following icons:
	
	  Description: Complete NBA Basketball Info
	  Command Line: notepad.exe c:\bktball\readme.txt
	
	  Description: Online Troubleshooting Tips
	  Command Line: notepad.exe c:\bktball\daily\tblshoot.txt
	
	Additional query words: kbhowto 1994 1995multi media multimedia multi- mmtitles kbmm
	
	======================================================================
	Keywords          :  
	Technology        : kbHomeProdSearch kbGamesSearch kbCompleteBasketballSearch kbCompleteNBABasketball kbCompleteNBABasketball1994
	Version           : :1994-1995 edition
	
	=============================================================================
	

{% endraw %}
