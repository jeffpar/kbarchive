---
layout: page
title: "Q119661: Ancient Lands: Manual Installation Instructions"
permalink: /kb/119/Q119661/
---

## Q119661: Ancient Lands: Manual Installation Instructions

{% raw %}

	Article: Q119661
	Product(s): Microsoft Home Multimedia Titles
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Ancient Lands for Windows, version 1.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article provides instructions to manually install Ancient Lands.
	
	MORE INFORMATION
	================
	
	These instructions assume:
	
	- Your hard disk is drive C
	
	- Your destination folder is C:\Mslands
	
	- Your Windows folder is C:\Windows
	
	- Your CD-Rom drive is drive D
	
	If your hard disk drive, destination folder, Windows folder, or CD-ROM drive
	letters are different, replace the drive letters and folder names throughout
	this article with the drive letters and folder names on your computer.
	
	NOTE: The following instructions discuss copying, editing, and modifying folders
	and files. For more information about accomplishing these tasks in Windows, see
	your Windows printed documentation or online Help.
	
	Steps for Windows or Windows for WorkGroups, Versions 3.x
	---------------------------------------------------------
	
	If you are running Microsoft Windows 3.x, follow these steps. When copying files,
	exit Windows and copy from the MS-DOS command prompt. Allow MS-DOS to overwrite
	any files it finds already on your hard drive.
	
	1. Create a folder named C:\Mslands on your hard drive.
	
	  For example, type the following at the MS-DOS command prompt and press the
	  ENTER key at the end of the line:
	
	  "md C:\mslands" (without the quotation marks)
	
	2. Copy all the files from the D:\Xfiles\App folder to the C:\Mslands folder.
	  The files are:
	   - Explore.exe
	
	   - Mslands.exe
	
	   - Readme.txt
	
	   - Mslands.dll
	
	   - Mslands.the
	
	   - Pidholdr.dll
	
	     For example, to copy Mslands.exe, type the following at the MS-DOS command
	     prompt and press ENTER at the end of the line:
	
	  "copy d:\xfiles\mslands.exe c:\mslands" (without the quotation marks)
	
	3. Copy the following files located in the D:\Xfiles\System folder to the
	  C:\Windows\System folder:
	   - Acmcmprs.dll
	
	   - Iccvid.drv
	
	   - Mcimmp.drv
	
	   - Msrle.drv
	
	   - Avicap.dll
	
	   - Imaadpcm.acm
	
	   - Mciole.dll
	
	   - Msvidc.drv
	
	   - Avifile.dll
	
	   - Indeov.drv
	
	   - Mmp.dll
	
	   - Msvideo.dll
	
	   - Cleanup.reg
	
	   - Ir21_R.dll
	
	   - Mplayer.reg
	
	   - Ole2.dll
	
	   - Compobj.dll
	
	   - Ir32.dll
	
	   - Msacm.dll
	
	   - Ole2.reg
	
	   - Dispdib.dll
	
	   - Map_Win.hlp
	
	   - Msacm.drv
	
	   - Ole2conv.dll
	
	   - Dva.386
	
	   - Mciavi.drv
	
	   - Msadpcm.acm
	
	   - Ole2disp.dll
	
	   - Ole2nls.dll
	
	   - Stdole.tlb
	
	   - Typelib.dll
	
	   - Ver.dll
	
	   - Ole2prox.dll
	
	   - Storage.dll
	
	   - Vbrun200.dll
	
	   - Vshare.386
	
	4. Copy the following files from the D:\Xfiles\System folder to the C:\Windows
	  folder:
	   - Mplayer.exe
	
	   - Mplayer.hlp
	
	   - Indeo.ini
	
	5. Use a text editor, such as Microsoft Notepad, to make the following changes
	  to the Mslands.ini file, which is located in the Windows folder. If the
	  Mslands.ini file does not already exist, create one in the Windows folder
	  with these entries:
	
	        [MICROSOFT ANCIENT LANDS]
	        CD=X:
	        DIRECTORY=C:\MSLANDS\ 
	        DISABLESOUNDEFFECTS=0
	        VIDEOINWINDOW=0
	        FIRSTVIDEOINWINDOW=0
	        DISABLENARRATION=0
	        PRINTHIGHQUALITY=1
	        PRINTPORTRAIT=0
	        COMMAND=C:\MSLANDS\MSLANDS.THE
	        WINDOW=195,134
	        DEMO=0
	
	6. Use a text editor to make the following changes to the Windows information
	  files, which are located in the Windows folder:
	
	  Changes to the Win.ini File
	  ---------------------------
	
	    [MCI EXTENSIONS]
	    avi=avivideo
	
	  Changes to the System.ini File
	  ------------------------------
	
	     [Drivers]
	     wavemapper=msacm.drv
	     vidc.msvc=msvidc.drv
	     vidc.cvid=iccvid.drv
	
	     [MSACM]
	     install=msadpcm.acm
	
	     [MCI]
	     avivideo=mciavi.drv
	
	7. Add the Ancient Lands icons to Program Manager by following the instructions
	  at the end of this article.
	
	8. Exit Windows and restart the computer. The installation is now complete.
	
	Steps for Windows 95 or Windows NT
	----------------------------------
	
	Follow these steps if you are using Microsoft Windows 95 or Microsoft Windows NT.
	When copying files, DO NOT overwrite ANY existing files.
	
	CAUTION: Allowing the system files to be overwritten in Windows 95 or Windows NT
	may cause improper system performance.
	
	1. Create a folder on your hard drive named C:\Mslands.
	
	2. Copy all the files from the D:\Xfiles\App folder to C:\Mslands.
	
	3. Copy the following files from the D:\Xfiles\System folder to the
	  C:\Windows\System (System32 in NT) folder:
	
	  Mmp.dll
	  Mcimmp.drv
	
	4. Follow step 5 in the section above to create or edit the Mslands.ini file.
	
	5. Add the program icons or shortcuts using the appropriate section below as a
	  guide.
	
	Create the Start Menu Shortcuts
	-------------------------------
	
	If you are using Windows 95, add Ancient Lands to the Start Menu by following
	these instructions:
	
	1. Click the Start button, point to Settings, and then click the Taskbar.
	
	2. Click the Start Menu Programs tab.
	
	3. Click Add.
	
	4. Type the following in the Command Line box, and then click Next:
	
	  "c:\mslands\mslands.exe" (without the quotation marks)
	
	5. In the Select Program Folder dialog box, click on the Microsoft Multimedia
	  folder to select it, and then click Next.
	
	  NOTE: If Microsoft Multimedia is not listed, create it as follows:
	  a. Click New Folder
	
	  b. Type the following, and then click Next:
	
	  "Microsoft Multimedia" (without the quotation marks)
	
	6. In the Select A Title For The Program dialog box, type the following, and
	  then click Finish:
	
	  "Ancient Lands" (without the quotation marks)
	
	Create Program Manager Icons
	----------------------------
	
	If you use the Windows Program Manager, create the Ancient Lands icons as
	follows:
	
	1. Open the Microsoft Multimedia group. If this group does not already exist,
	  create it as follows:
	  a. On the File menu, click New.
	
	  b. Click Program Group, and then click OK.
	
	  c. In the Description box, type the following, and then click OK:
	
	  "Microsoft Multimedia" (without the quotation marks)
	
	2. On the File menu, click New.
	
	3. Click Program Item, and then click OK.
	
	4. Type in the Description and Command Line as listed below, and then click OK:
	
	     Description:       Ancient Lands
	     Command Line:      c:\mslands\mslands.exe
	
	Additional query words: kbhowto 1.0multi media multimedia multi-media mmtitles kbmm install create 3.1 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbHomeProdSearch kbZNotKeyword kbAncientLands
	Version           : WINDOWS:1.0
	
	=============================================================================
	

{% endraw %}
