---
layout: page
title: "Q122474: Encarta 1995: Manual Installation Instructions for Windows 3.x"
permalink: /kb/122/Q122474/
---

## Q122474: Encarta 1995: Manual Installation Instructions for Windows 3.x

{% raw %}

	Article: Q122474
	Product(s): Microsoft Home Multimedia Titles
	Version(s): 1995 editions; WINDOWS:3.x
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Encarta 95 The Complete Interactive Multimedia Encyclopedia 
	- the operating system: Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article provides instructions on how to manually set up Microsoft Encarta
	1995 on Microsoft Windows operating system version 3.x.
	
	CAUTION: Do not use these steps if your are using Microsoft Windows 95 or
	Microsoft Windows NT. The manual installation uses a batch file that copies
	Windows 3.x system files onto your hard drive. Allowing the system files to be
	overwritten in Windows 95 or Windows NT may cause improper system performance.
	
	This installation is equivalent to the "Faster" Setup option, which requires up
	to 9.7 megabytes (MB) of disk space and provides the best performance.
	
	The steps below assume the following:
	
	- Your destination directory is C:\ENCARTA.
	
	- Windows is in C:\WINDOWS.
	
	- Your CD-ROM drive is drive X.
	
	MORE INFORMATION
	================
	
	Copying Files
	-------------
	
	1. Exit from Windows.
	
	2. At the MS-DOS command prompt, change to the X:\AAMSSTP\MANUAL directory and
	  run MANUAL.BAT by entering the following command:
	
	  "manual.bat c:\windows c:\encarta" (without the quotation marks)
	
	  This will copy and decompress the Compressed Audio, OLE and Video for Windows
	  system files.
	
	3. Type the following command:
	
	  "ren c:\windows\system\msref1.ttf msref2.ttf" (without the quotation marks)
	
	4. Create the directory C:\WINDOWS\MSAPPS\MSINFO if it does not already exist.
	
	5. Change to the directory X:\AAMSSTP and enter the following command:
	
	  "decomp -f x:\aamsstp\fonts\msref1.tt_ c:\windows\system\msref1.ttf" (without
	  the quotation marks)
	  "decomp -f x:\aamsstp\system\ctl3dv2.dl_ c:\windows\system\ctl3dv2.dll"
	  (without the quotation marks)
	  "decomp -f x:\aamsstp\system\msvidc.dr_ c:\windows\system\msvidc.drv" (without
	  the quotation marks)
	  "decomp -f x:\aamsstp\system\msinfo.ex_ c:\windows\msapps\msinfo\msinfo.exe"
	  (without the quotation marks)
	
	Changes to the WIN.INI File
	---------------------------
	
	Use a text editor, such as Windows Notepad, to make the following changes to the
	WIN.INI file, which is located in the Windows directory:
	
	1. Find the [mci extensions] section in the file, and add the following lines if
	  they are not already present:
	
	        AVI=AVIVideo
	        MMM=MMMovie
	        WAV=WaveAudio
	        MID=Sequencer
	
	2. Create a section labeled [Microsoft System Info] and add the following line,
	  unless the section and line are already present:
	
	  "MSINFO=C:\WINDOWS\MSAPPS\MSINFO\MSINFO.EXE" (without the quotation marks)
	
	Changes to the SYSTEM.INI File
	------------------------------
	
	Use a text editor to make the following changes to the SYSTEM.INI file, which is
	located in the Windows directory:
	
	1. Find the [Drivers] section, and add or modify lines so that the section
	  appears as follows:
	
	        MSACM.msgsm610=msgsm610.acm
	        WaveMapper=msacm.drv
	        VIDC.MSVC=msvidc.drv
	        VIDC.RT21=indeov.drv
	        VIDC.CVID=iccvid.drv
	        VIDC.IV31=ir32.dll
	        MSACM.msadpcm=msadpcm.acm
	        MSACM.imaadpcm=imaadpcm.acm
	        VIDC.MRLE=msrle.drv
	        VIDC.YVU9=indeov.drv
	        VIDC.IV32=ir32.dll
	
	2. Find the [386Enh] section, and add the following lines if they are not
	  already present:
	
	       device=vshare.386
	       device=dva.386
	
	3. Find the [mci] section, and add the following lines if they are not already
	  present:
	
	      AVIVideo=mciavi.drv
	      MMMovie=mcimmp.drv
	
	Changes to the MPLAYER.INI File
	-------------------------------
	
	Use a text editor to create or modify the following sections in the MPLAYER.INI
	file, which is located in the Windows directory. The sections should appear as
	follows:
	
	     [Options]
	     MMMovie=61
	
	     [Devices]
	     MMMovie=286, Microsoft Multimedia Movie Player
	
	Changes to the ENCARTA.INI File
	-------------------------------
	
	Use a text editor to create or modify the ENCARTA.INI file, which is located in
	the Windows directory. The section should appear as follows:
	
	     [95Options]
	     CodePath=C:\ENCARTA\ 
	     SpellFile=C:\ENCARTA\encart95.lex
	     InstPath=C:\ENCARTA\ 
	     BookPath=X:\encyc95\ 
	     DateTable=X:\encyc95\ 
	     ShowTitleScreen=1
	     IntroPlaySounds=1
	     SaveWindowLayout=0
	     SetBookmarkOnExit=1
	     WordProcessor=C:\WINDOWS\write.exe
	     JumpColor=255
	     DictPath=X:\encyc95\dict\ 
	     ShowInfo=1
	
	Install Fonts
	-------------
	
	The Encarta Setup program installs special fonts. Perform the following steps to
	install these fonts manually:
	
	1. In the Microsoft Windows Control Panel, choose Fonts from the Settings menu.
	
	2. Check the list of fonts for the following:
	
	  Arial (TrueType)
	  MS Reference 1 (TrueType)
	  MS Reference 2 (TrueType)
	  Phonetic
	  Symbol (TrueType)
	
	  If any of the above fonts are not in the list, note which ones and continue
	  with step 3.
	
	3. Choose the Add button.
	
	4. In the Add Fonts dialog box, from the Directories list, select the
	  C:\WINDOWS\SYSTEM subdirectory.
	
	5. Select the missing fonts and then choose the OK button.
	
	NOTE: You can make multiple selections by holding down the CTRL key while you
	click each font.
	
	Register OLE Information
	------------------------
	
	1. From the File menu in the Program Manager, choose Run.
	
	2. Type the following commands, choosing OK after each line:
	
	  "regedit x:\encarta\encarta.reg" (without the quotation marks)
	  "regedit c:\windows\mplayer.reg" (without the quotation marks)
	  "regedit c:\windows\system\cleanup.reg" (without the quotation marks)
	  "regedit c:\windows\system\ole2.reg" (without the quotation marks)
	
	  NOTE: If the operation is successful, the following message is displayed:
	
	  Registration Info Editor
	  Information in <filename> has been successfully
	  registered in the registration database.
	
	  Choose OK.
	
	Create the Encarta Program Group in Program Manager
	---------------------------------------------------
	
	1. In Program Manager, create a new group called "Microsoft Multimedia" (if it
	  does not already exist).
	  a. From the File menu in the Program Manager, choose New.
	
	  b. Select New Program Group and choose OK.
	
	  c. In the Program Group Properties dialog box, type "Microsoft Multimedia"
	     (without the quotation marks) in the Description field and choose OK.
	
	2. Create the following two items in the Microsoft Multimedia group. To create
	  an item, choose New from the Program Manager File menu, then select Program
	  Item and choose OK. Copy the information into the fields of the Program Item
	  Properties dialog box, then choose OK:
	
	  Item 1:
	  Description:     Microsoft Encarta '95
	  Command Line:    C:\ENCARTA\ENCART95.EXE
	
	  Item 2:
	  Description:     READ ME: Encarta Tips
	  Command Line:    WRITE.EXE X:\README.WRI
	
	Restart Windows
	---------------
	
	After restarting, the manual installation is complete.
	
	Additional query words: kbhowto msn_encarta 1995 multi media multimedia multi-media wfw 3.10 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbOSWinSearch kbHomeProdSearch kbHomeMMsearch kbZNotKeyword6 kbEncartaEncycSearch kbEncarta1995 kbOSWin310 kbOSWin311 kbOSWin300 kbOSWin300a
	Version           : :1995 editions; WINDOWS:3.x
	
	=============================================================================
	

{% endraw %}
