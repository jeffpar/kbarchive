---
layout: page
title: "Q140250: Wine Guide 1.0a: Manual Installation Instructions"
permalink: kb/140/Q140250/
---

## Q140250: Wine Guide 1.0a: Manual Installation Instructions

	Article: Q140250
	Product(s): Microsoft Home Multimedia Titles
	Version(s): WINDOWS:1.0a
	Operating System(s): 
	Keyword(s): win31
	Last Modified: 14-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Wine Guide for Windows, version 1.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article provides instructions to manually install Microsoft Wine Guide for
	Windows, version 1.0a.
	
	NOTE: Wine Guide 1.0 and 1.0a differ in program filenames, directory structures,
	and the setup procedure. This article applies to version 1.0a only.
	
	MORE INFORMATION
	================
	
	The following steps assume:
	
	- Your hard drive is drive C:
	
	- Windows is in C:\Windows
	
	- Your CD-ROM drive is drive D:
	
	  NOTE: Wine Guide 1.0a will not run from a UNC network path.
	
	If your hard drive, destination folder, Windows folder, or CD-ROM drive letters
	are different, replace the drive letters and folder names throughout this
	article with the drive letters and folder names on your computer.
	
	NOTE: The following instructions discuss copying, editing, and modifying folders
	(directories) and files. For more information about accomplishing these tasks in
	Windows, see your Windows printed documentation or online Help.
	
	Steps for Windows 95 or Windows NT 3.51
	---------------------------------------
	
	1. Use a text editor, such as Microsoft Notepad, to create or modify the
	  Mswine.ini file in the Windows folder with the following entries:
	
	        [Engine Params]
	        Launched=1
	        AppName=Microsoft Wine Guide
	        AppPath=D:\WINE.EXE
	        DisableResChange=1
	        CD=D:\ 
	        DIBMemDC=On
	        Version=1.0a
	        Pid=26756-877-7845641-29269
	        DataDir=MSWDATA
	        TimeDir=MSWPTIME
	
	2. Create the Wine Guide shortcuts or icons using the appropriate section below
	  as a guide.
	
	Steps for Windows 3.x
	---------------------
	
	1. Copy the following files from D:\Data\00setup\Vfw16 to C:\Windows\System:
	
	  Acmcmprs.dll
	  Avicap.dll
	  Avifile.dll
	  Cleanup.reg
	  Dispdib.dll
	  Dva.386
	  Iccvid.drv
	  Ir32.dll
	  Map_win.hlp
	  Mciavi.drv
	  Mciole.dll
	  Mplayer.reg
	  Msacm.dll
	  Msacm.drv
	  Msadpcm.acm
	  Msrle.drv
	  Msvidc.drv
	  Msvideo.dll
	
	2. Copy the following files from D:\Data\00setup\Vfw16 to C:\Windows:
	
	  Mplayer.exe
	  Mplayer.hlp
	
	3. Copy all the files in D:\Data\00setup\System to C:\Windows\System:
	
	  Ver.dll
	  Vshare.386
	
	4. Copy all the files in D:\Data\00setup\Ole2 to C:\Windows\System:
	
	  Compobj.dll
	  Ole2.dll
	  Ole2.reg
	  Ole2conv.dll
	  Ole2disp.dll
	  Ole2nls.dll
	  Ole2prox.dll
	  Stdole.tlb
	  Storage.dll
	  Typelib.dll
	
	5. Use a text editor, such as Microsoft Notepad, to create or modify the
	  Mswine.ini file with the following entries:
	
	        [Engine Params]
	        Launched=1
	        AppName=Microsoft Wine Guide
	        AppPath=D:\WINE.EXE
	        DisableResChange=1
	        CD=D:\ 
	        DIBMemDC=On
	        Version=1.0a
	        Pid=26756-877-7845641-29269
	        DataDir=MSWDATA
	        TimeDir=MSWPTIME
	
	6. Use a text editor, such as Microsoft Notepad to Edit the following .ini files
	  and add or modify the specified entries:
	
	  Control.ini
	  -----------
	
	         [drivers.desc]
	         msacm.drv=Microsoft Sound Mapper V2.00
	         msadpcm.acm=Microsoft ADPCM Codec V2.00
	         imaadpcm.acm=Microsoft IMA ADPCM Codec V2.00
	
	  Win.ini
	  -------
	
	         [mci extensions]
	         wav=waveaudio
	         avi=AVIVideo
	
	  System.ini
	  ----------
	
	         [386Enh]
	         DEVICE=VSHARE.386
	         DEVICE=DVA.386
	
	         [mci]
	         AVIVideo=mciavi.drv
	
	         [drivers]
	         WaveMapper=msacm.drv
	         MSACM.msadpcm=msadpcm.acm
	         MSACM.imaadpcm=imaadpcm.acm
	         MSACM.msgsm610=msgsm610.acm
	         VIDC.IV31=ir32.dll
	         VIDC.IV32=ir32.dll
	         VIDC.CVID=iccvid.drv
	         VIDC.MSVC=msvidc.drv
	         VIDC.MRLE=msrle.drv
	
	         [msacm.msgsm610]
	         MaxRTDecodeSamplesPerSec=22050
	
	7. From the File menu in Program Manager, click Run and type the following
	  command, and click OK:
	
	  "d:\data\00setup\vfw16\mplayer.reg" (without the quotation marks)
	
	8. Repeat step 7 for the following command lines:
	
	  "d:\data\00setup\ole2\ole2.reg
	  d:\data\00setup\vfw16\cleanup.reg" (without the quotation marks)
	
	9. Add the program icons using the appropriate section below as a guide, and
	  then restart Windows.
	
	Creating Start Menu Shortcuts
	-----------------------------
	
	If you are using Windows 95, add Wine Guide to the Start Menu by following these
	instructions:
	
	1. Click the Start button, point to Settings, and then click Taskbar.
	
	2. Click the Start Menu Programs tab.
	
	3. Click Add.
	
	4. Type the following in the Command Line box, and then click Next:
	
	  "d:\wine.exe" (without the quotation marks)
	
	5. In the Select Program Folder dialog box, click the Microsoft Multimedia
	  folder, and then click Next.
	
	  NOTE: If the Microsoft Multimedia folder is not listed, create it using the
	  following steps:
	  a. Click New Folder.
	
	  b. Type the following, and then click Next:
	
	  "Microsoft Multimedia" (without the quotation marks)
	
	6. In the Select A Title For The Program dialog box, type the following, and
	  then click Finish:
	
	  "Microsoft Wine Guide" (without the quotation marks)
	
	7. Repeat steps 3 through 6 to create a shortcut for the following item:
	
	  Command Line: d:\mmcat\mmcat.exe
	  Select A Title For The Program: Microsoft Multimedia Catalog
	
	8. Repeat steps 3 through 6 to create a shortcut for the following item:
	
	  Command Line: d:\data\00setup\app\microsoft wine guide connection.mcc
	
	  Select A Title For The Program: Microsoft Wine Guide Connection
	
	Creating Program Manager Icons
	------------------------------
	
	To create the Wine Guide icons in Program Manager, do the following:
	
	1. Open the Microsoft Multimedia group. If this group does not already exist,
	  create it as follows:
	  a. On the File menu, click New.
	
	  b. Click Program Group, and then click OK.
	
	  c. In the Description box, type the following, and then click OK:
	
	  "Microsoft Multimedia" (without the quotation marks)
	
	2. On the File menu, click New.
	
	3. Click Program Item, and then click OK.
	
	4. Type the Description and Command Line listed below, and then click OK:
	
	     Description:      Microsoft Wine Guide
	     Command Line:     d:\wine.exe
	
	5. Repeat steps 2 through 4 for the following item:
	
	     Description:      Microsoft Multimedia Catalog
	     Command Line:     d:\mmcat\mmcat.exe
	
	Additional query words: 1.00a multi media multimedia multi-media mmtitles kbmm 95core installer set-up manuals installation wineguide manual set up
	
	======================================================================
	Keywords          : win31 
	Technology        : kbHomeProdSearch kbWine100a
	Version           : WINDOWS:1.0a
	
	=============================================================================
	
