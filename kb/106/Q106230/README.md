---
layout: page
title: "Q106230: Cinemania 1994: Manual Installation Instructions"
permalink: kb/106/Q106230/
---

## Q106230: Cinemania 1994: Manual Installation Instructions

	Article: Q106230
	Product(s): Microsoft Home Multimedia Titles
	Version(s): 1994 edition
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Cinemania for Windows 1994 edition 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following describes how to manually set up Cinemania 1994.
	
	These instructions assume:
	
	- Your hard disk drive is drive C.
	
	- Your destination folder (directory) is C:\Cinmania
	
	- Your Windows folder is C:\Windows
	
	- Your CD-Rom drive is drive D.
	
	If your hard disk drive, destination folder, Windows folder, and/or CD-ROM drive
	letters and directories are different, replace the drive letters and folder
	names throughout this article with the drive letters and folder names on your
	computer.
	
	NOTE: The following manual installation instructions discuss copying, editing,
	and modifying directories and files. For more information about accomplishing
	these tasks in Windows, see your Windows printed documentation or online Help.
	
	MORE INFORMATION
	================
	
	1. Copy all the files from the D:\Drivers folder on your Cinemania 1994 compact
	  disc to the C:\Windows\System folder on your hard disk.
	
	  Note: If you are using Windows 95 and get a message stating that the file you
	  are tyring to copy is older than the one on the system, do not let Windows
	  change it.
	
	2. Copy all the files from the D:\Viewer folder on your Cinemania 1994 compact
	  disc to the C:\Windows\System folder on your hard disk.
	
	3. Copy the following files from the D:\Misc folder on your Cinemania 1994
	  compact disc to the C:\Windows\System folder on your hard disk:
	
	  V1sp.fon
	  V2sp.fon
	  V3sp.fon
	  V4sp.fon
	  V7sp.fon
	
	4. Create a folder called Cinmania on your hard disk drive.
	
	5. Copy the following files from the D:\Misc folder on your compact disc to the
	  C:\Cinmania folder on your hard drive:
	
	  Cnmnia94.dll
	  Cinmania.ico
	  Cinlst94.dll
	  Cinlst94.exe
	  Cnftsui2.dll
	
	6. Use a text editor to make the following three changes to your System.Ini file
	  in your Windows folder.
	   - Find the [mci] section in the file and add the following line if it is not
	     already present:
	
	  "AVIVideo=mciavi.drv" (without the quotation marks)
	
	   - Find the [drivers] section in the file and add the following lines if they
	     are not already present:
	
	  "Wavemapper=msacm.drv
	  VIDC.MSVC=msvidc.drv
	  VIDC.CVID=iccvid.drv" (without the quotation marks)
	
	   - Find the [msacm] section in the file and add the following line if it is
	     not already present:
	
	  "Install=msadpcm.acm" (without the quotation marks)
	
	7. Use a text editor to make the following three changes to the WIN.INI file
	  located in your Windows folder:
	   - Find the [mci extensions] section in the file and add the following line
	     if it is not already present:
	
	  "avi=AVIVideo" (without the quotation marks)
	
	   - If you want to set colors for the popup and jump text in the Cinemania
	     1994 Help, find the [Multimedia Viewer] section in the file and add the
	     following two lines:
	
	  "JumpColor=0 0 127
	  PopupColor=0 0 127" (without the quotation marks)
	
	   - Find the [Cinemania] section (or create it if necessary) and add the
	     following line:
	
	  "Cin94Path=C:\CINMANIA" (without the quotation marks)
	
	   - Find the [Fonts] section, and add the following lines to it:
	
	  "V1 Lucida Sans=V1SP.FON
	  V2 Lucida Sans=V2SP.FON
	  V3 Lucida Sans=V3SP.FON
	  V4 Lucida Sans=V4SP.FON
	  V7 Lucida Sans=V7SP.FON" (without the quotation marks)
	
	8. Use a text editor to make the following changes to the Viewer.ini file
	  located in your Windows folder.
	   - Find the [files] section and add the following lines:
	
	          CTL3D.DLL=C:\WINDOWS\SYSTEM\, Viewer file missing - please
	          reinstall Cinemania '94 CD
	
	          MVBRKR2.DLL=C:\WINDOWS\SYSTEM\, Viewer file missing - please
	          reinstall Cinemania '94 CD
	
	          MMP.DLL=C:\WINDOWS\SYSTEM\, Viewer file missing - please
	          reinstall Cinemania '94 CD
	
	          MVAPI2.DLL=C:\WINDOWS\SYSTEM\, Viewer file missing - please
	          reinstall Cinemania '94 CD
	
	          MVBMP2.DLL=C:\WINDOWS\SYSTEM\, Viewer file missing - please
	          reinstall Cinemania '94 CD
	
	          MVFS2.DLL=C:\WINDOWS\SYSTEM\, Viewer file missing - please
	          reinstall Cinemania '94 CD
	
	          MVMCI2.DLL=C:\WINDOWS\SYSTEM\, Viewer file missing - please
	          reinstall Cinemania '94 CD
	
	          MVSRCH2.DLL=C:\WINDOWS\SYSTEM\, Viewer file missing - please
	          reinstall Cinemania '94 CD
	
	          MVTITLE2.DLL=C:\WINDOWS\SYSTEM\, Viewer file missing - please
	          reinstall Cinemania '94 CD...
	
	          CNMNIA94.DLL=C:\CINMANIA\, Cinemania file missing - please
	          reinstall Cinemania '94 CD
	
	          CINLST94.DLL=C:\CINMANIA\, Cinemania file missing - please
	          reinstall Cinemania '94 CD
	
	          CNFTSUI2.DLL=C:\CINMANIA\, Cinemania file missing - please
	          reinstall Cinemania '94 CD
	
	          CNMNIA94.MVB=D:\, Please insert the Cinemania '94 CD into drive
	          D:
	
	          CIN94HLP.MVB=D:\, Please insert the Cinemania '94 CD into drive
	          D:
	
	          CIN94IDX.MVB=D:\, Please insert the Cinemania '94 CD into drive
	          D:
	
	CREATE THE CINEMANIA PROGRAM GROUP IN PROGRAM MANAGER
	-----------------------------------------------------
	
	If you use the Windows Program Manager, create the Cinemania icons as follows:
	
	1. In Program Manager, create a new group called "Microsoft Multimedia" if it
	  does not already exist.
	
	  To create a new group:
	  a. On the File menu click New.
	
	  b. Click Program Group, then click OK.
	
	  c. Enter "Microsoft Multimedia" (without the quotation marks) in the
	     Description area in the Program Group Properties dialog box and click OK.
	
	2. Create the following two items in the Microsoft Multimedia group. To create
	  an item:
	  a. On the File menu, click New, then click OK.
	
	  b. Copy the information below into the fields of the Program Item Properties
	     dialog box, then click OK.
	
	        Item 1
	        Description:       Cinemania '94
	        Command line:      MVIEWER2.EXE CNMNIA94.MVB
	        Working directory: C:\CINMANIA
	
	     Click the Change Icon button and type the following information in the File
	     Name box, then click OK.
	
	        C:\CINMANIA\CINMANIA.ICO
	
	        Item 2
	        Description:       Read Me: Cinemania '94 Tips
	        Command line:      D:\MISC\CNMNIA94.TXT
	        Working directory: D:\MISC
	
	     Click the Change Icon button and type the following information in the File
	     Name box, click choose OK:
	
	  "NOTEPAD.EXE" (without the quotation marks)
	
	Windows 95 - Create the Start Menu Shortcuts
	--------------------------------------------
	
	If you are using Windows 95, add Cinemania to the Start Menu by following these
	instructions:
	
	1. Secondary-click on the taskbar, then click Properties.
	
	2. Click the Start Menu Programs tab, then click Advanced.
	
	3. Double-click the Programs folder
	
	4. Add a Microsoft Multimedia folder if it does not already exist:
	  a. On the File menu, point to New and click Folder.
	
	  b. Type in the following and then press the Enter key:
	
	  "Microsoft Multimedia" (without the quotation marks)
	
	5. Double-click the Microsoft Multimedia folder to open it up.
	
	6. Add a shortcut icon for each item listed below as follows:
	
	        Item 1
	        ------
	        Command line       MVIEWER2.EXE CNMNIA94.MVB
	        Name               Cinemania '94
	        Start In           C:\CINMANIA
	        Icon File Name     C:\CINMANIA\CINMANIA.ICO
	
	        Item 2
	        ------
	        Command line       D:\MISC\CNMNIA94.TXT
	        Name               Read Me: Cinemania '94 Tips
	
	  a. On the File menu, point to New and click Shortcut.
	
	  b. Type the information for the Command Line, then click Next.
	
	  c. Type the information for the name, then click Finish
	
	7. Change the properties of the Cinemania '94 icon as follows:
	  a. Secondary-click the Cinemania '94 shortcut, then click Properties.
	
	  b. Click the Shortcut tab, then click Change Icon
	
	  c. Type the information for the Start In box (as listed above).
	
	  d. Click Change Icon, then type in the information for the File Name.
	
	  e. Click OK, then click OK again to finish.
	
	Restart Windows
	---------------
	
	Exit or Shut Down Windows and restart the computer. The installation is now
	complete.
	
	Additional query words: kbhowto install setup set up manually Viewer 2.0
	
	======================================================================
	Keywords          :  
	Technology        : kbHomeProdSearch kbHomeMMsearch kbCineManiaSearch kbCinemania1994
	Version           : :1994 edition
	
	=============================================================================
	
