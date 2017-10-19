---
layout: page
title: "Q136182: Multimedia AutoStart: Setup Continuously Restarts Windows"
permalink: /kb/136/Q136182/
---

## Q136182: Multimedia AutoStart: Setup Continuously Restarts Windows

	Article: Q136182
	Product(s): Microsoft Home Multimedia Titles
	Version(s): 1.0,1.0a,2.0
	Operating System(s): 
	Keyword(s): kbfaq
	Last Modified: 18-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft 500 Nations, version 1.0 
	- Microsoft Dogs for Windows, version 1.0 
	- Microsoft Oceans for Windows, version 1.0 
	- Microsoft Wine Guide for Windows, versions 1.0a, 2.0 
	- Microsoft World of Flight for Windows, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you insert the CD-ROM or run Setup for any of the programs listed at the
	top of this article, the Setup program begins. You are prompted to restart
	Windows so Setup can complete. However, after you restart and Setup runs, you
	are again prompted to restart Windows.
	
	This behavior becomes an infinite loop and the program does not run.
	
	RESOLUTION
	==========
	
	To resolve this problem in 500 Nations, Dogs, or Oceans, upgrade to the most
	recent version of these products (see the list below) or follow the steps in the
	"Additional Resolutions" section.
	
	- Microsoft 500 Nations for Windows, version 1.0a
	
	
	- Microsoft Dogs for Windows, version 1.0b
	
	
	- Microsoft Oceans for Windows, version 1.0a
	
	
	Additional Resolutions
	----------------------
	
	To resolve this issue, follow the steps below one at a time. After you attempt a
	step, try to run the program listed at the top of the article again to see if
	you solved the problem. If that step doesn't work, move onto the next step.
	
	The steps below require editing, copying, and renaming files and folders
	(directories). For more information about how to perform these tasks in Windows,
	see your Windows printed documentation or online Help.
	
	1. Search the hard disk for files named:
	
	     Ver.dll
	
	  Only one copy of the file Ver.dll should be found, This file should be located
	  in the Windows System folder. If other copies of the file are found, remove
	  them from the system.
	
	2. Remove the read-only attribute from all the files located in the
	  Windows\System folder.
	
	  To remove the read-only attribute, type the following command from MS-DOS
	  prompt within the Windows\System folder and press ENTER:
	
	     attrib -r *.*
	
	3. Remove all Windows terminate-and-stay-resident (TSR) programs.
	
	  Use a text editor, such as Notepad, to make the following changes to the
	  Win.ini file. The Win.ini file is located in the Windows folder.
	
	  Place a semicolon (;) at the beginning of the lines:
	
	     load=
	     run=
	
	  Save the file.
	
	4. Remove all icons from the Windows Startup group.
	
	5. Search the Windows folder for a file named:
	
	     Winstart.bat
	
	  If found, rename the file to Winstart.bak.
	
	6. Check to see which video display driver is installed. If your installed video
	  display driver is not the standard Super VGA driver, install the SVGA
	  driver.
	
	  NOTE: While most video cards supports the standard SVGA driver, some do not.
	  Contact the hardware vendor for more information.
	
	  NOTE: Before you change the video driver, make a backup copy of the System.ini
	  file located in the Windows folder.
	
	  Changing to SVGA in Windows 95:
	
	  a. Click the Start button, point to Settings, and then click Control Panel.
	
	  b. Double-click Display.
	
	  c. Click the Settings tab.
	
	  d. Click Change Display Type.
	
	  e. Click the Change button next to the Adapter Type.
	
	  f. Click Show All Devices. In the Manufacturer area, click (Standard display
	     types). This is at the top of the list.
	
	  g. In the Models area, click Super VGA.
	
	  h. Click OK, then Close, then click Close again.
	
	  i. Follow the screen directions. When you are prompted to restart your
	     computer, click Yes.
	
	  Changing to SVGA in Windows 3.x:
	
	  a. Double-click the Windows Setup icon, usually located in the Main group of
	     Program Manager.
	
	  b. On the Options menu, click Change System Settings.
	
	  c. Select the Super VGA (640x480, 256 colors) entry, click OK.
	
	  d. Follow the on-screen directions. When prompted to restart your computer,
	     click Yes.
	
	7. Change your 16-bit audio card settings to use a low DMA channel. If you are
	  using a SoundBlaster, please see one of the following article in the
	  Microsoft Knowledge Base:
	
	  Q124869 Software Reconfiguration of SoundBlaster 16 Hardware Settings
	
	  Q136675 Changing SoundBlaster 16 HDMA Setting in Windows 95
	
	8. Perform a manual installation of the program using the following steps:
	
	  1. Delete the program's initialization (.ini) file, which is located in the
	     Windows folder. The .ini file is:
	
	     500 Nations   Nations.ini
	     Oceans        Msoceans.ini
	     Dogs          Msdogs.ini
	     Wine Guide    Mswine.ini
	
	  2. Use a text editor, such as Notepad, to make the following changes to the
	     Win.ini file. The Win.ini file is located in the Windows folder.
	
	     Delete all entries in the sections:
	
	     [Drawdib]
	     [WinG]
	
	  Follow the manual installation instructions for the specific program as
	  outlined in Microsoft Knowledge Base articles. Query on the following key
	  words in the Microsoft Knowledge Base:
	
	  homemm manual installation <product name>
	
	9. Create an icon or shortcut that bypasses setup:
	
	  a. If you are using Windows 95:
	
	     1) With the right mouse button, click on your desktop (wallpaper).
	     2) Point to New, and click Shortcut.
	
	  b. If you are using Program Manager:
	
	     1) Open the Microsoft Multimedia group in Program Manager.
	     2) On the File menu, click New.
	     3) Click Program Item, and then click OK.
	     4) In the Command Line area, type the appropriate command:
	
	     500 Nations command (the following is one line):
	
	           d:\nations\_setup\app\explor16.exe nation16.dll /w
	        d:\nations\_setup\app\wavout16.dll nations.the
	
	     Dogs command (the following is one line):
	
	           d:\data\setup\app\dogexp16.exe dogs16.dll /w
	           d:\data\setup\app\dogwav16.dll msdogs.the
	
	     Oceans command (the following is one line):
	
	           d:\data\00setup\app\explor16.exe oceans16.dll /w
	           d:\data\00setup\app\ocewav16.dll msoceans.the
	
	     Wine Guide 1.0a command (the following is one line):
	
	           d:\data\00setup\app\wineeng.exe
	
	     World of Flight command (the following is one line)
	
	           d:\data\00setup\app\flyexp16.exe flight16.dll /w
	           d:\data\00setup\app\flywav16.dll msflight.the
	
	     5) Click OK.
	     6) In Windows 95, click Next, and then click Finish.
	
	MORE INFORMATION
	================
	
	
	Winstart.bat Explained
	----------------------
	
	If only Windows applications use a the memory-resident program, you can start if
	from the Winstart.bat file. Winstart.bat contains a batch program that Windows
	runs after starting in 386 enhanced mode. It is not created by Windows, so if
	you use it, you need to create it and place it in your Windows folder.
	
	When you start a program from Winstart.bat, that program is available to Windows
	applications, but not to non-Windows applications. This prevents the program
	from taking memory away from non-Windows applications.
	
	Some memory-resident programs do not work when started from Winstart.bat. For
	more information, see the documentation that came with the program.
	
	Additional query words: multi media multimedia multi-media mmtitles kbmm buglist1.0 Autoplay loops cannot start load
	
	======================================================================
	Keywords          :  kbfaq
	Technology        : kbHomeProdSearch kbZNotKeyword kbKidsSearch kb500Nations100 kbDogs100 kbWine100a kbWine200 kbWorldofFlight kbOceans
	Version           : :1.0,1.0a,2.0
	
	=============================================================================
	
