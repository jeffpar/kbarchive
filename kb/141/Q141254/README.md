---
layout: page
title: "Q141254: Encarta 1995: Manual Installation for Windows 95 and NT"
permalink: /kb/141/Q141254/
---

## Q141254: Encarta 1995: Manual Installation for Windows 95 and NT

{% raw %}

	Article: Q141254
	Product(s): Microsoft Home Multimedia Titles
	Version(s): 3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 25-OCT-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Encarta 95 The Complete Interactive Multimedia Encyclopedia 
	- the operating system: Microsoft Windows 95 
	- the operating system: Microsoft Windows NT 3.51 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following article provides instructions to manually install the 1995 edition
	of Microsoft Encarta for Windows on computers running Microsoft Windows 95 or
	Microsoft Windows NT 3.51.
	
	MORE INFORMATION
	================
	
	The following instructions assume:
	
	- Your hard drive is drive C.
	
	- Your destination folder is C:\Encarta.
	
	- Your Windows folder is C:\Windows.
	
	- Your CD-ROM drive is drive D.
	
	If your hard drive, destination folder, Windows folder, or CD-ROM
	drive letters are different, replace the drive letters and folder names
	in this article with the drive letter and folder names on your
	computer.
	
	NOTE: These instructions discuss copying, editing, and modifying
	folders (directories) and files. For more information about performing
	these tasks in Windows, see your Windows printed documentation or online
	Help.
	
	Copying Files
	-------------
	
	1. Create the following folder: C:\Encarta
	
	2. Create a folder: C:\Working.
	
	3. Create a folder in the C:\Working folder named: System.
	
	4. At the MS-DOS command prompt, change to the D:\Aamsstp\Manual folder
	  type the following command and then press Enter:
	
	     manual.bat c:\working c:\encarta
	
	  This copies and decompresses the audio, OLE, and Video
	  for Windows, system files.
	
	5. Change to the C:\Working folder and copy all files in this folder to
	  the C:\Windows folder. For example, type the following command at the
	  MS-DOS command prompt and then press Enter:
	
	     copy *.* c:\windows
	
	  If you are prompted to overwrite any existing files, type "N" without
	  the quotation marks.
	
	  CAUTION: Allowing the system files to be overwritten in Windows 95
	  or Windows NT may cause improper system performance.
	
	6. Change to the C:\Working\System folder and copy all files in this
	  folder to the C:\Windows\System folder. For example, type the following
	  command at the MS-DOS command prompt and then press Enter:
	
	     copy *.* c:\windows\system
	
	  Do NOT overwrite any existing files.
	
	7. Type the following at the MS-DOS command prompt and then press Enter:
	
	     ren c:\windows\system\msref1.ttf  msref2.ttf
	
	8. Create the following folder if it does not already exist:
	
	    C:\Windows\Msapps\Msinfo
	
	9. Change to the D:\Aamsstp folder and at the MS-DOS command prompt type
	  the following commands and then press Enter at the end of each line:
	
	  decomp -f d:\aamsstp\fonts\msref1.tt_ c:\windows\system\msref1.ttf
	  decomp -f d:\aamsstp\system\ctl3dv2.dl_ c:\windows\system\ctl3dv2.dll
	  decomp -f d:\aamsstp\system\msvidc.dr_ c:\windows\system\msvidc.drv
	  decomp -f d:\aamsstp\system\msinfo.ex_
	c:\windows\msapps\msinfo\msinfo.exe
	
	10. Delete the following folder from your hard drive:
	
	  C:\Working
	
	Changes to the Win.ini File
	---------------------------
	
	Use a text editor, such as Windows Notepad, or WordPad and make the
	following changes to the Win.ini file located in the Windows folder:
	
	1. Locate the [mci extensions] section and add the following lines if they
	  are not already present:
	
	  AVI=AVIVideo
	  MMM=MMMovie
	  WAV=WaveAudio
	  MID=Sequencer
	
	2. Create a section labeled [Microsoft System Info] and add the following
	  lines, if they are not are already present:
	
	  [Microsoft System Info]
	  MSINFO=C:\WINDOWS\MSAPPS\MSINFO\MSINFO.EXE
	
	NOTE: The entry is not case sensitive.
	
	Changes to the System.ini File
	------------------------------
	
	Use a text editor to make the following changes to the System.ini file
	in the Windows folder:
	
	Locate the [mci] section, and add the following lines if they are not
	already present:
	
	  AVIVideo=mciavi.drv
	  MMMovie=mcimmp.drv
	
	Changes to the Encarta.ini File
	-------------------------------
	
	Use a text editor to create or modify the Encarta.ini file in the
	Windows folder. The section should appear as follows:
	
	  [95Options]
	  CodePath=C:\ENCARTA\ 
	  SpellFile=C:\ENCARTA\encart95.lex
	  InstPath=C:\ENCARTA\ 
	  BookPath=D:\encyc95\ 
	  DateTable=D:\encyc95\ 
	  ShowTitleScreen=1
	  IntroPlaySounds=1
	  SaveWindowLayout=0
	  SetBookmarkOnExit=1
	  WordProcessor=C:\WINDOWS\write.exe
	  JumpColor=255
	  DictPath=D:\encyc95\dict\ 
	  ShowInfo=1
	
	Installing  Fonts
	-----------------
	
	The Encarta Setup program installs special fonts. Perform the following
	steps to manually install these fonts:
	
	1. Click the Start button, point to Settings, and then click Control Panel.
	
	NOTE: In Windows NT, double-click the Control Panel icon. The icon is
	     usually found in the Main group of Program Manager.
	
	2. Double-click the Fonts icon.
	
	3. View the list of fonts to see if the following are listed:
	
	     Arial (TrueType)
	     MS Reference 1 (TrueType)
	     MS Reference 2 (TrueType)
	     Phonetic
	     Symbol (TrueType)
	
	  If any of these fonts are not listed, note the missing fonts
	  and continue with step 4.
	
	4. On the File menu, click Install New Font.
	
	  NOTE: For Windows NT, click Add.
	
	5. From the list of folders, select the C:\Windows\System folder.
	
	6. Select the missing fonts from the list. You can make multiple selections
	  by pressing and holding down the keyboard CTRL key while you click each
	  font.
	
	7. Make sure the Copy Fonts To Fonts Folder box contains a check.
	
	8. Click OK or Close.
	
	Creating Start Menu Shortcuts
	-----------------------------
	
	If you are using Windows 95, add Encarta 1995 to the Start Menu. To add to
	the Start Menu do the following:
	
	1. Click the Start button, point to Settings, and then click Taskbar.
	
	2. Click the Start Menu Programs tab.
	
	3. Click Add.
	
	4. Type the following in the Command Line box, and then click Next:
	
	     Destination\encart95.exe
	
	5. In the Select Program Folder dialog box, select the Microsoft Multimedia
	  folder, and then click Next.
	
	  NOTE: If the Microsoft Multimedia folder is not listed, create it using
	  the following steps:
	
	  a. Click New Folder.
	
	  b. Type "Microsoft Multimedia" (without quotation marks) and then click
	     Next.
	
	6. In the Select A Title For The Program box, type the following,
	  and then click Finish:
	
	     Microsoft Encarta '95
	
	7. Repeat steps 3 through 6 to create shortcuts for the following items:
	
	  Command Line:                    c:\encarta\readme.wri
	  Select A Title For The Program:  Read Me Encarta Tips
	
	  Command Line:                    c:\windows\catstub.exe
	  Select A Title for the Program:  Microsoft Multimedia Catalog
	
	Creating Program Manager Icons
	------------------------------
	
	If you are using Program Manager, create the Encarta 1995 icons as
	follows:
	
	1. Open the Microsoft Multimedia group. If this group does not already
	  exist, create it as follows:
	
	  a. On the File menu, click New.
	
	  b. Click Program Group, and then click OK.
	
	  c. In the Description box, type the following, and then click OK:
	
	        Microsoft Multimedia
	
	2. On the File menu, click New.
	
	3. Click Program Item, and then click OK.
	
	4. Type in the Description and Command Line as listed below, and then click
	  OK:
	
	     Description:       Microsoft Encarta '95
	     Command Line:      Destination\encart95.exe
	
	5. Repeat steps 2 - 4 for each item listed below:
	
	     Description:       Read Me Encarta Tips
	     Command Line:      c:\encarta\readme.wri
	
	     Description:       Microsoft Multimedia Catalog
	     Command Line:      c:\windows\catstub.exe
	
	Add Audio and Video Compression
	-------------------------------
	
	1. Click the Start button, point to Settings and then click Control Panel.
	
	2. Double-click Add/Remove Programs.
	
	3. Click the Windows Setup tab,and then select Multimedia from the list of
	  components.
	
	4. Click Details.
	
	5. Examine the list of Multimedia components. If the boxes next to Audio
	  Compression and Video Compression do not conatin a check mark, click
	  inside each box to select these components.
	
	6. Click OK, then click Apply.
	
	7. Restart Windows.
	
	8. The manual installation is complete.
	
	Additional query words: 1995 multi media multimedia multi-media mmtitles kbmm
	
	======================================================================
	Keywords          :  
	Technology        : kbOSWin95 kbOSWinSearch kbHomeProdSearch kbOSWinNT351 kbHomeMMsearch kbEncartaEncycSearch kbOSWinNTSearch kbEncarta1995
	Version           : :3.51
	
	=============================================================================
	

{% endraw %}
