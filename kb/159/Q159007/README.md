---
layout: page
title: "Q159007: Encarta 1997: Manual Install Instructions for Windows 3.x"
permalink: /kb/159/Q159007/
---

## Q159007: Encarta 1997: Manual Install Instructions for Windows 3.x

{% raw %}

	Article: Q159007
	Product(s): Microsoft Home Multimedia Titles
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): kbhowto
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Encarta 97 Encyclopedia for Windows 
	- Microsoft Encarta Encyclopedia 97 Deluxe for Windows 
	- the operating system: Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following article provides instructions to manually install Encarta
	Encyclopedia for Windows, 1997 edition in Windows 3.x
	
	MORE INFORMATION
	================
	
	Manually Installing Encarta Encyclopedia
	----------------------------------------
	
	The following instructions assume:
	
	- Your hard drive is drive C:
	
	- Your Windows folder is C:\Windows
	
	- Your CD-ROM drive is drive D
	
	If your hard drive, destination folder, Windows folder, or CD-ROM
	drive letters are different, replace the drive letters and folder
	names throughout this article with the drive letters and folder names
	on your computer.
	
	NOTE: The following instructions discuss copying, editing, and
	modifying folders (directories) and files. For more information about
	how to accomplish these tasks in Windows, see your Windows printed
	documentation or online Help.
	
	Manual Installation Instructions for Windows 3.x
	------------------------------------------------
	
	1. Create a directory named:
	
	     C:\Encarta
	
	2. Create a directory named:
	
	     C:\Encarta\Updates
	
	3. Create a directory named:
	
	     C:\Windows\System\Win32s
	
	4. Copy the following files to the appropriate directory:
	
	From: D:\ to: C:\Encarta
	
	- Swapfile.hlp
	
	From: D:\Aamsstp\Msinfo to: C:\Windows\System
	
	- Ctl3dv2.dll
	- Msinfo.exe
	
	From: D:\Aamsstp\Win32s to: C:\Windows\System
	
	- Mfc40.dll
	- Msvcrt40.dll
	- Ole2prox.dll
	- Ole2conv.dll
	- Compobj.dll
	- Ole2disp.dll
	- Storage.dll
	- Ole2nls.dll
	- Typelib.dll
	- Ole2.dll
	- Winhlp32.exe
	- W32sys.dll
	- Winmm16.dll
	- Windows.hlp
	- Winhlp32.hlp
	- Olecli.dll
	- Win32s16.dll
	
	From: D:\Aamsstp\Win32s to: C:\Windows\System\Win32s
	
	- Win32s.exe
	- L_intl.nls
	- L_trk.nls
	- P_037.nls
	- P_10000.nls
	- P_10006.nls
	- P_10007.nls
	- P_10029.nls
	- P_10079.nls
	- P_10081.nls
	- P_1026.nls
	- P_500.nls
	- P_737.nls
	- P_875.nls
	- P_1250.nls
	- P_1251.nls
	- P_1252.nls
	- P_1253.nls
	- P_1254.nls
	- P_855.nls
	- P_866.nls
	- P_869.nls
	- P_437.nls
	- P_850.nls
	- P_852.nls
	- P_857.nls
	- P_860.nls
	- P_861.nls
	- P_863.nls
	- P_865.nls
	- Sorttbls.nls
	- Lz32.dll
	- Ctype.nls
	- Shell32.dll
	- Winspool.drv
	- Olesvr32.dll
	- Sck16thk.dll
	- Netapi32.dll
	- Wsock32.dll
	- Olecli32.dll
	- Unicode.nls
	- Locale.nls
	- W32s.386
	- Version.dll
	- Ntmsg.dll
	- Comdlg32.dll
	- Winmm.dll
	- W32skrnl.dll
	- P_10001.nls
	- P_932.nls
	- P_936.nls
	- P_949.nls
	- P_950.nls
	- Crtdll.dll
	- Riched32.dll
	- W32scomb.dll
	- Comctl32.dll
	- Ftsrch.dll
	- Sortkey.nls
	- Stdole.tlb
	- Stdole32.tlb
	- Ole2thk.dll
	- Oledlg.dll
	- Oleaut32.dll
	- Ole32.dll
	
	From: D:\Aamsstp\System16 to: C:\Windows\System
	
	- ACMCMPRS.DLL
	- AVICAP.DLL
	- AVIFILE.DLL
	- DISPDIB.DLL
	- DVA.386
	- ICCVID.DRV
	- IMAADPCM.ACM
	- INDEO.INI
	- INDEOV.DRV
	- IR21_R.DLL
	- IR32.DLL
	- MAP_WIN.HLP
	- MCIAVI.DRV
	- MCIOLE.DLL
	- MPLAYER.EXE
	- MPLAYER.HLP
	- MSACM.DLL
	- MSACM.DRV
	- MSADPCM.ACM
	- MSRLE.DRV
	- MSVIDC.DRV
	- MSVIDEO.DLL
	- MSGSM610.ACM
	- VSHARE.386
	
	From: D:\Aamsstp\Encarta to: C:\Encarta
	
	- ENCRES97.DLL
	- ENCAPI32.DLL
	- DECO_32.DLL
	- EEUIL10.DLL
	- ENC16.DLL
	- ENC97.HLP
	- ENC97.CNT
	- DISCS.HLP
	- ENC97F.STR
	- ENCART97.DAT
	
	From: D:\Aamsstp\Encarta\Updates to: C:\Encarta\Updates
	
	- ARTLNK.EWL
	- CATLNK.EWL
	- LNKOFF.EWL
	- MASTER.EWL
	- MVFILTER.EWL
	- URLDATA.EWL
	
	From: D:\Aamsstp\Encarta to: C:\Encarta
	
	- ENC97.EXE
	- ENCBOOT.EXE
	
	5. Rename the following files as directed. Use the MS-DOS rename command if
	no other method is available. For example, at the MS-DOS prompt type the
	following:
	
	  ren c:\encarta\enc97.exe c:\encarta\enc97.bin
	
	Rename the following:
	
	From                 To
	----                 ---
	
	Enc97.exe                     Enc97.bin
	
	Encboot.exe                   Enc97.exe
	
	Installing Fonts
	----------------
	
	1. Open the Windows Control Panel, usually located in the Main program
	  group of Program Manager.
	
	2. On Settings menu, click Fonts.
	
	3. Check the list of installed fonts for the following:
	
	     Arial (TrueType)
	     MS Reference 1 (TrueType)
	     MS Reference 2 (TrueType)
	     Phonetic
	     Symbol (TrueType)
	
	  NOTE: If any of the above fonts are not listed, note which ones are
	  missing and continue with Step 4. If they all already installed, skip
	  to the "Edit or Create the Encarta.ini File" section below.
	
	4. Click Add.
	
	5. Change the drive letter to match the letter of your CD-ROM drive.
	
	6. In the Directories area, double-click the Aamsstp folder, then
	  double-click the Fonts folder.
	
	7. Select the missing fonts, and then click OK.
	
	  NOTE: You can make multiple selections by holding down the CTRL key
	  while clicking each font.
	
	Edit or Create the Encarta.ini File
	-----------------------------------
	
	Use a text editor, such as Microsoft Notepad, to make the following
	changes to the Encarta.ini file, which is located in the Windows
	folder.
	
	NOTE: If the Encarta.ini file does not already exist, create one
	in the Windows folder with these same entries:
	
	  [97Options]
	  MSINFO=C:\WINDOWS\MSAPPS\MSINFO\MSINFO.EXE
	  INSTPATH=C:\ENCARTA\ 
	  CODEPATH=C:\ENCARTA\ 
	  DATPATH=C:\ENCARTA\ 
	  BOOKPATH=E:\ENCYC97\ 
	  UPDATESPATH=C:\ENCARTA\UPDATES\ 
	  SHOWTITLESCREEN=1
	  INTROPLAYSOUNDS=1
	  SAVEWINDOWLAYOUT=0
	  SETBOOKMARKONEXIT=1
	  USERNAME=<Enter your name here.>
	  WORDPROCESSOR=C:\WINDOWS\WRITE.EXE
	  JUMPCOLOR=255
	  PID=<Product ID number goes here. See Note below>
	  SHOWINFO=1
	  NUMDISCS=<If you have Standard =1, if you have Deluxe =2>
	  DISCPATH0=D:\ 
	  DISCPATH1=D:\ <NOTE: Used for the Deluxe version only>
	  CONFIRMWEBLINK=1
	  DELUXE=<If Standard =0, if Deluxe =1>
	  WEBDOMAIN=HTTP://ENCARTA.MSN.COM/ 
	  LASTPOSITION=0,8,0
	
	  NOTE: To generate a valid Product ID number (PID), run Setup. Once a
	  valid PID is generated, write it down and enter it here.
	
	Edit the Win.ini file
	---------------------
	
	  [MCI Extensions]
	  mmm=MMMovie
	  avi=AVIVideo
	
	Edit the System.ini file
	------------------------
	
	  [boot]
	  device=winmm16.dll
	
	  [386enh]
	  device=C:\Windows\system\win32s\w32s.386
	  device=dva.386
	  device=vshare.386
	
	  [mci]
	  AVIVideo=mciavi.drv
	  MMMovie=mcimmp.drv
	
	  [drivers]
	  MSACM.msgsm610=msgsm610.acm
	  MSACM.msadpcm=msadpcm.acm
	  MSACM.imaadpcm=imaadpcm.acm
	  VIDC.MSVC=msvidc.drv
	  VIDC.RT21=indeov.drv
	  VIDC.CVID=iccvid.drv
	  VIDC.IV31=ir32.dll
	  VIDC.MRLE=msrle.drv
	  VIDC.YVU9=indeov.drv
	  VIDC.IV32=ir32.dll
	  WaveMapper=msacm.drv
	
	Control.ini File Changes
	------------------------
	
	  [drivers.desc]
	  msacm.drv=Microsoft Sound Mapper V2.00
	  msadpcm.acm=Microsoft ADPCM Codec V2.00
	  imaadpcm.acm=Microsoft IMA ADPCM Codec V2.00
	
	Edit the Mplayer.ini file
	-------------------------
	
	Use a text editor to create or modify the following sections in the
	Mplayer.ini file, which is located in the Windows directory. The
	sections should appear as follows:
	
	  [Options]
	  MMMOVIE=61
	
	  [Devices]
	  MMMOVIE=286, Microsoft Multimedia Movie Player
	
	Edit or create the Win32s.ini file
	----------------------------------
	
	  [Win32S]
	  Setup=1
	  Version=1.30.172
	
	  [Nls]
	  AnsiCP=1252
	
	NOTE: The Win32s.ini file needs to be located in the C:\Windows\System
	
	Register OLE Information
	------------------------
	
	1. From the File menu in the Program Manager, click Run.
	
	2. Type the following on the Command line and click OK after each line:
	
	     regedit d:\aamsstp\system16\mplayer.reg
	
	     regedit d:\aamsstp\win32s\ole2.reg
	
	     regedit d:\aamsstp\system16\cleanup.reg
	
	NOTE: If the registration is successful, you will receive the following
	message:
	
	  REGISTRATION INFO EDITOR
	  Information in <FILENAME> has been successfully
	  registered in the Registration Database.
	
	Click OK. Repeat for each registration file.
	
	Register Encarta Files
	----------------------
	
	1. In Program Manager, on the File menu, click Run.
	
	2. Type the following, and then press ENTER:
	
	     regedit
	
	3. When Registration Info Editor appears, on the Edit menu, click
	      Add File Type.
	
	4. Type the following data into the corresponding fields:
	
	     Field           Data
	     -----           ----
	     Identifier      Enc97.Alist
	     File Type       Encarta Encyclopedia Article List
	     Action          Open
	     Command         C:\encarta\enc97.exe /l %1
	
	5. Click Uses DDE to clear the checkbox.
	
	6. Click OK.
	
	7. Repeat steps 3-6 again for the following:
	
	  Field           Data
	  -----           ----
	  Identifier      Enc97.MList
	  File Type       Encarta Encyclopedia Media List
	  Action          Open
	  Command         C:\encarta\enc97.exe /l %1
	
	  Field           Data
	  -----           ----
	  Identifier      Enc97.eyb
	  File Type       Encarta Encyclopedia Updates
	  Action          Open
	  Command         C:\encarta\enc97.exe /u %1
	
	8. Exit the Editor.
	
	Create the Encarta Program Group in Program Manager
	---------------------------------------------------
	
	1. Open the Microsoft Reference group. If this group does not already
	  exist, create it as follows:
	
	  a. On the File menu, click New.
	
	  b. Click Program Group, and then click OK.
	
	  c. In the Description box, type the following, and then click OK:
	
	        Microsoft Reference
	
	2. On the File menu, click New.
	
	3. Click Program Item, and then click OK.
	
	4. Type the following Description and Command Line information, and then
	  click OK:
	
	     Description:       Encart 97 Encyclopedia
	     Command Line:      c:\encarta\enc97.exe
	
	5. Repeat steps 2-4 for each of the following items:
	
	     Item 2
	     ------
	
	     Description:       Encarta 97 Encyclopedia Read Me
	     Command Line:      c:\encarta\readme.hlp
	
	     Item 3
	     ------
	
	     Description:       Uninstall Encarta 97 Encyclopedia
	     Command Line:      c:\windows\unenc97.exe
	
	     Item 4
	     ------
	
	     Description:       Microsoft Multimedia Catalog
	     Command Line:      d:\mmcat\mmcat.exe
	
	6. Restart Windows. Setup is complete.
	
	Additional query words: 1997 multi media multimedia multi-media mmtitles kbmm wfw 3.10 3.11
	
	======================================================================
	Keywords          : kbhowto 
	Technology        : kbOSWinSearch kbHomeProdSearch kbHomeMMsearch kbZNotKeyword6 kbEncartaSearch kbEncartaEncycSearch kbEncartaEnCyc1997 kbEncartaEnCyc1997Del kbOSWin310 kbOSWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	

{% endraw %}
