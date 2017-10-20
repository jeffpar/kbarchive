---
layout: page
title: "Q120205: Stravinsky: Manual Installation Instructions"
permalink: /kb/120/Q120205/
---

## Q120205: Stravinsky: Manual Installation Instructions

{% raw %}

	Article: Q120205
	Product(s): Microsoft Home Multimedia Titles
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Multimedia Stravinsky for Windows, version 1.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article provides instructions to manually install Microsoft Stravinsky
	version 1.0.
	
	MORE INFORMATION
	================
	
	These instructions assume:
	
	- Your hard disk is drive C
	
	- Your destination folder is C:\Strav
	
	- Your Windows folder is C:\Windows
	
	- Your CD-Rom drive is drive D
	
	If your hard disk drive, destination folder, Windows folder, or CD-ROM drive
	letters are different, replace the drive letters and folder names throughout
	this article with the drive letters and folder names on your computer.
	
	NOTE: The following instructions discuss copying, editing, and modifying folders
	and files. For more information about accomplishing these tasks in Windows, see
	your Windows printed documentation or online Help.
	
	Steps for Windows or Windows for Workgroups, Versions 3.x
	---------------------------------------------------------
	
	If you are running Microsoft Windows 3.x, follow these steps. When copying files,
	exit Windows and copy from the MS-DOS command prompt. Allow MS-DOS to overwrite
	any files it finds already on your hard drive.
	
	1. Create a folder on your hard disk called C:\Strav. For example, type the
	  following at the MS-DOS command prompt and press ENTER at the end of the
	  line:
	
	  "md c:\strav" (without the quotation marks)
	
	2. Copy all the files from the D:\Strav folder to the C:\Strav folder. The files
	  are:
	   - Glossary.idx
	
	   - Index.dat
	
	   - Index.map
	
	   - Index.nam
	
	   - Readme.txt
	
	   - Strav.exe
	
	   - Strav.map
	
	   - Strav.mgf
	
	   - Strav.mpf
	
	  For example, to copy Strav.exe, type the following at the MS-DOS command
	  prompt and press ENTER at the end of the line:
	
	  "copy d:\strav\strav.exe c:\strav" (without the quotation marks)
	
	3. Create a folder in C:\Strav called Illus256.
	
	  For example, type the following at the MS-DOS command prompt and press ENTER
	  at the end of the line:
	
	  "md c:\strav\illus256" (without the quotation marks)
	
	4. Create a folder named Hd in the folder created in step 3.
	
	  For example, type the following at the MS-DOS command prompt and press ENTER
	  at the end of the line:
	
	  "md c:\strav\illus256\hd" (without the quotation marks)
	
	5. Copy all the files from the D:\Strav\Illus256\Hd folder to the
	  C:\Strav\Illus256\Hd folder. Use the XCOPY command since there is a 0-byte
	  file that is not copied using the COPY command. For example:
	
	  "xcopy d:\strav\illus256\hd c:\strav\illus256\hd" (without the quotation
	  marks)
	
	6. Copy all the files in the D:\Strav\Msstp\Shared folder to the
	  C:\Windows\System folder.
	
	7. Copy all the files in the D:\Strav\Msstp\System folder to the
	  C:\Windows\System folder.
	
	8. Install the font through Control Panel using the following steps:
	  a. Double-click on the Fonts icon.
	
	  b. Click the Add button.
	
	  c. From the C:\Windows\System folder, click on the following font:
	
	  V1 Lucida Sans
	
	  d. Click OK.
	
	9. Use a text editor, such as Microsoft Notepad, to make the following changes
	  to the Strav.ini file, which is located in the Windows folder. If the
	  Strav.ini file does not already exist, create one in the Windows folder with
	  these entries:
	
	     [strav]
	     Cdpath=D:\Strav
	     Hdpath=C:\Strav
	
	10. Use a text editor to make the following changes to the Windows information
	  files, which are located in the Windows folder:
	
	  Changes to the Win.ini File
	  ---------------------------
	
	      [MCI EXTENSIONS]
	      wav=waveaudio
	
	      [fonts]
	      V1 Lucida Sans=V1sp.fon
	
	  Changes to the System.ini File
	  ------------------------------
	
	      [Drivers]
	      Wavemapper=msacm.drv
	
	      [MSACM]
	      Install=msadpcm.acm
	
	      [MCI]
	      cdaudio=mcicda.drv
	      waveaudio=mciwave.drv
	
	11. Add the Stravinsky icons to Program Manager by following the instructions at
	  the end of this article.
	
	12. Exit Windows and restart the computer. The installation is now complete.
	
	Steps for Windows 95
	--------------------
	
	Follow these steps if you are using Microsoft Windows 95. When copying files, DO
	NOT overwrite ANY existing files.
	
	CAUTION: Allowing the system files to be overwritten in Windows 95 may cause
	improper system performance.
	
	1. Follow steps 1 through 6 in the Windows 3.x section above to copy program and
	  shared files.
	
	2. DO NOT follow step 7 above. Step 7 is for Windows 3.x systems.
	
	3. Install the font with Control Panel using the following steps:
	  a. From the Control Panel window, double-click Fonts.
	
	  b. On the File menu, click Install New Font.
	
	  c. Change the drive to your CD-Rom drive.
	
	  d. Double-click the Strav folder, then the Msstp folder, followed by the
	     Shared folder.
	
	  e. Click on the V1 Lucida Sans font listed.
	
	  f. Make sure the "Copy fonts to..." box is checked.
	
	  g. Click the OK button.
	
	4. Follow Step 9 above to Edit or Create the Strav.ini file.
	
	5. Add the program icons or shortcuts using the appropriate section below as a
	  guide.
	
	Create the Start Menu Shortcuts
	-------------------------------
	
	If you are using Windows 95, add Stravinsky to the Start Menu by following these
	instructions:
	
	1. Click the Start button, point to Settings, and then click the Taskbar.
	
	2. Click the Start Menu Programs tab.
	
	3. Click Add.
	
	4. Type the following in the Command Line box, and then click Next:
	
	  "c:\Strav\Strav.exe" (without the quotation marks)
	
	5. In the Select Program Folder dialog box, click on the Microsoft Multimedia
	  folder to select it, and then click Next.
	
	  NOTE: If Microsoft Multimedia is not listed, create it as follows:
	  a. Click New Folder
	
	  b. Type in the following, and then click Next:
	
	  "Microsoft Multimedia" (without the quotation marks)
	
	6. In the Select A Title For The Program dialog box, type the following, and
	  then click Finish:
	
	  "Microsoft Stravinsky" (without the quotation marks)
	
	7. Repeat steps 1 through 6 using the following information:
	
	  Step 4 - Command Line: Notepad.exe C:\Strav\Readme.txt
	  Step 6 - Select A Title For The Program: Read Me_Stravinsky Tips
	
	8. Click on OK
	
	Create Program Manager Icons
	----------------------------
	
	If you use the Windows Program Manager, create the Stravinsky icons as follows:
	
	1. Open the Microsoft Multimedia group. If this group does not already exist,
	  create it as follows:
	  a. On the File menu, click New.
	
	  b. Click Program Group, and then click OK.
	
	  c. In the Description box, type the following, and then click OK:
	
	  "Microsoft Multimedia" (without the quotation marks)
	
	2. On the File menu, click New.
	
	3. Click Program Item, and then click OK.
	
	4. Type in the Description and Command Line as listed below, and then click OK:
	
	  Description:      Microsoft Stravinsky
	  Command Line:     C:\Strav\Strav.exe
	
	  Description:      Read Me: Stravinsky Tips
	  Command Line:     C:\Windows\Notepad.exe C:\Strav\Readme.Txt
	
	Additional query words: kbhowto 1.00multi media multimedia multi-media mmtitles kbmm
	
	======================================================================
	Keywords          :  
	Technology        : kbHomeProdSearch kbHomeMMsearch kbZNotKeyword kbMMStravinsky
	Version           : WINDOWS:1.0
	
	=============================================================================
	

{% endraw %}
