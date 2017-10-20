---
layout: page
title: "Q134444: Dogs for Windows: Manual Installation Instructions"
permalink: /kb/134/Q134444/
---

## Q134444: Dogs for Windows: Manual Installation Instructions

{% raw %}

	Article: Q134444
	Product(s): Microsoft Home Multimedia Titles
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Dogs for Windows, version 1.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article provides instructions to manually install Microsoft Dogs for
	Windows.
	
	MORE INFORMATION
	================
	
	These instructions assume:
	
	- Your hard drive is drive C:
	
	- Your Windows folder is C:\Windows
	
	- Your CD-ROM drive is drive D
	
	If your hard disk drive, destination folder, Windows folder, or CD-ROM drive
	letters are different, replace the drive letters and folder names throughout
	this article with the drive letters and folder names on your computer.
	
	NOTE: The following instructions discuss copying, editing, and modifying folders
	(directories) and files. For more information about accomplishing these tasks in
	Windows, see your Windows printed documentation or online Help.
	
	Steps for Windows 95 or Windows NT
	----------------------------------
	
	Follow these steps if you are using Microsoft Windows 95 or Microsoft Windows NT.
	When copying files, Do not overwrite any existing files.
	
	CAUTION: Allowing system files to be overwritten in Windows 95 or Windows NT may
	cause improper system performance.
	
	
	1. Copy the following files from the D:\Data\Setup\Vfw32 folder to the
	  C:\Windows\System (System32 in NT) folder:
	   - Ir32_32.dll
	   - Msadp32.acm
	   - Msrle32.dll
	
	2. Copy all the files in the D:\Data\Setup\Wing folder to the C:\Windows\System
	  (System32 in NT) folder. The files are:
	   - Wing.dll
	   - Wingdib.drv
	   - Wing32.dll
	   - Wingde.dll
	   - Wingpal.wnd
	
	3. If you are running Windows NT, copy the following file from the
	  D:\Data\Setup\Vfw32 folder to the C:\Windows\System32 folder:
	   - Msvideo.nt
	
	  NOTE: After copying this file, it must be renamed to Msvideo.dll.
	
	4. Use a text editor, such as Microsoft WordPad, to make the following changes
	  to the Windows initialization files. These files are located in the Windows
	  folder.
	
	  Changes To The System.ini File
	  ------------------------------
	
	        [drivers32]
	        Vidc.iv32=ir32_32.dll
	        Vidc.iv31=ir32_32.dll
	        Vidc.mrle=msrle32.dll
	        Msacm.msadpcm=msadp32.acm
	
	5. Add the program icons or shortcuts. As a guide, use the appropriate section
	  below.
	
	Creating Start Menu Shortcuts
	-----------------------------
	
	If you are using Windows 95, add Microsoft Dogs to the Start Menu by following
	these instructions:
	
	1. Click the Start button, point to Settings, and then click Taskbar.
	
	2. Click the Start Menu Programs tab.
	
	3. Click Add.
	
	4. Type the following in the Command Line box, and then click Next:
	
	  "d:\dogs.exe" (without the quotation marks)
	
	5. In the Select Program Folder dialog box, click the Microsoft Multimedia
	  folder to select it, and then click Next.
	
	  NOTE: If the Microsoft Multimedia folder is not listed, create it using the
	  following steps:
	  a. Click New Folder
	
	  b. Type the following, and then click Next:
	
	  "Microsoft Multimedia" (without the quotation marks)
	
	6. In the Select A Title For The Program dialog box, type the following, and
	  then click Finish:
	
	  "Dogs" (without the quotation marks)
	
	7. Repeat steps 3 through 6 to create shortcuts for the following items:
	
	  Command Line:                    notepad.exe d:\readme.txt
	  Select A Title For The Program:  MS Dogs Readme
	
	  Command Line:                    d:\mmcat\catppi.exe
	  Select A Title For The Program:  Microsoft Multimedia Catalog
	
	Steps for Windows or Windows for Workgroups, Version 3.1x
	---------------------------------------------------------
	
	If you are running Microsoft Windows 3.1x, follow these steps. When copying
	files, exit Windows and copy from the MS-DOS command prompt. Allow MS-DOS to
	overwrite any files it finds on your hard drive.
	
	1. Copy the following files from the D:\Data\Setup\Vfw16 folder to the
	  C:\Windows folder:
	   - Mplayer.exe
	   - Mplayer.hlp
	
	  For example, to copy Mplayer.exe, type the following at the MS-DOS command
	  prompt and press ENTER:
	
	  "copy d:\data\setup\vfw16\mplayer.exe c:\windows" (without the quotation
	  marks)
	
	2. Copy all of the files in the D:\Data\Setup\Wing folder to the
	  C:\Windows\System folder. The files are:
	   - Wing.dll
	   - Wingdib.drv
	   - Wing32.dll
	   - Wingde.dll
	   - Wingpal.wnd
	
	3. Copy all of the files in the D:\Data\Setup\Ole2 folder to the
	  C:\Windows\System folder. The files are:
	   - Compobj.dll
	   - Ole2conv.dll
	   - Ole2prox.dll
	   - Typelib.dll
	   - Ole2.dll
	   - Ole2disp.dll
	   - Storage.dll
	   - Ole2.reg
	   - Ole2nls.dll
	   - Stdole.tlb
	
	4. Copy the following files from the D:\Data\Setup\Vfw16 folder to the
	  C:\Windows\System folder:
	   - Acmcmprs.dll
	   - Dispdib.dll
	   - Mciavi.drv
	   - Msacm.drv
	   - Avicap.dll
	   - Dva.386
	   - Mciole.dll
	   - Msadpcm.acm
	   - Avifile.dll
	   - Ir32.dll
	   - Mplayer.reg
	   - Msrle.drv
	   - Cleanup.reg
	   - Map_win.hlp
	   - Msacm.dll
	   - Msvideo.dll
	
	5. Copy all of the files in the D:\Data\Setup\System folder to the
	  C:\Windows\System folder. The files are:
	   - Ver.dll
	   - Vshare.386
	
	6. Use a text editor, such as Microsoft Notepad, to make the following changes
	  to the Msdogs.ini file, which is located in the Windows folder. If the
	  Msdogs.ini file does not already exist, create one in the Windows folder with
	  these entries:
	
	         [USA]
	         Launched=1
	         CD=D:
	         Pid=
	         Window=65535,0
	
	7. Use a text editor to make the following changes to the Windows initialization
	  files, which are located in the Windows folder:
	
	  Changes to the Win.ini File
	  ---------------------------
	
	         [mci extensions]
	         avi=AVIVideo
	
	         [embedding]
	         Mplayer=Media Clip,Media Clip,mplayer.exe,picture
	
	  Changes to the Control.ini File
	  -------------------------------
	
	         [drivers.desc]
	         msacm.drv=Microsoft Sound Mapper V2.00
	         msadpcm.acm=Microsoft ADPCM Codec V2.00
	
	  Changes to the System.ini File
	  ------------------------------
	
	         [386Enh]
	         Device=Vshare.386
	         Device=Dva.386
	
	         [mci]
	         AVIVideo=mciavi.drv
	
	         [drivers]
	         WaveMapper=msacm.drv
	         Msacm.msadpcm=msadpcm.acm
	         Vidc.iv31=ir32.dll
	         Vidc.iv32=ir32.dll
	         Vidc.mrle=msrle.drv
	
	8. On the File menu in Program Manager, click Run. Type the following command,
	  and then click OK:
	
	  "d:\data\setup\vfw16\mplayer.reg" (without the quotation marks)
	
	  Repeat this step using the following command lines:
	
	  "d:\data\setup\ole2\ole2.reg
	  d:\data\setup\vfw16\cleanup.reg" (without the quotation marks)
	
	9. Add the Microsoft Dogs icons to Program Manager by following the instructions
	  at the end of this article.
	
	10. Exit Windows and restart the computer. The installation is now complete.
	
	Creating Program Manager Icons
	------------------------------
	
	If you are using Windows Program Manager, create the Microsoft Dogs icons using
	the following instructions:
	
	1. Open the Microsoft Multimedia group. If this group does not already exist,
	  create it as follows:
	  a. On the File menu, click New.
	
	  b. Click Program Group, and then click OK.
	
	  c. In the Description box, type the following, and then click OK:
	
	  "Microsoft Multimedia" (without the quotation marks)
	
	2. On the File menu, click New.
	
	3. Click Program Item, and then click OK.
	
	4. Type in the Description and Command Line as listed below, and then click OK:
	
	     Description:       Microsoft Dogs
	     Command Line:      d:\dogs.exe
	
	5. Repeat steps 2 through 4 for each item listed below:
	
	     Description:       Read Me Dog Tips
	     Command Line:      d:\readme.txt
	
	     Description:       Microsoft Multimedia Catalog
	     Command Line:      d:\mmcat\catppi.exe
	
	Additional query words: kbhowto dog msdog multi media multimedia multi- mmtitles install set up
	
	======================================================================
	Keywords          :  
	Technology        : kbHomeProdSearch kbDogs100
	Version           : WINDOWS:1.0
	
	=============================================================================
	

{% endraw %}
