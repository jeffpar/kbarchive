---
layout: page
title: "Q140583: How to Configure CD-ROM Caching for Windows 95"
permalink: kb/140/Q140583/
---

## Q140583: How to Configure CD-ROM Caching for Windows 95

	Article: Q140583
	Product(s): Microsoft Home Multimedia Titles
	Version(s): 1995
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article explains how to set CD-ROM caching in Windows 95 for optimal system
	performance.
	
	MORE INFORMATION
	================
	
	Use the steps below to configure CD-ROM caching:
	
	Determine Driver Type
	---------------------
	
	Determine if your computer is using protected-mode (native) Windows 95 32- bit
	CD-ROM drivers or real mode (MS-DOS) CD-ROM drivers. Caching is configured
	differently for each type of driver.
	
	To determine the type of cache configuration, do the following:
	
	1. Click the Start button, point to Settings, and then click Control Panel.
	
	2. Double click the System icon.
	
	3. On the Performance tab, examine the Performance Status screen.
	
	  If the setting in the File System section is 32-bit, you are using 32- bit
	  CD-ROM drivers.
	
	  If the File System setting is:
	
	  Some drives are using MS-DOS compatibility, examine the area below the listed
	  items for detailed information.
	
	  If the drive letter for your CD-ROM is listed, then you are using real mode
	  drivers. If your CD-ROM letter is not listed, then you are using 32-bit
	  drivers.
	
	Use the steps below to optimize your type of cache configuration.
	
	32-Bit Caching
	--------------
	
	1. On the Performance tab in System Properties, click File System (in Advanced
	  Settings).
	
	2. Click the CD-ROM tab.
	
	3. In the Optimize Access Pattern For: section of the Setting window, select the
	  entry corresponding to your CD-ROM drive. For example, if you have a double
	  speed drive, select Double-Speed Drives.
	
	  NOTE: If you only have 4 MB of RAM or are using hardware caching, you may want
	  to select No Read-Ahead. This is the recommended setting if RAM memory is
	  needed for other uses.
	
	4. In the Supplemental Cache Size area, move the slider to the desired setting.
	  The Small setting frees up RAM for other uses, while the Large setting gives
	  the best CD-ROM performance.
	
	5. Click OK, and then click Close. If you are prompted to restart Windows, click
	  Yes.
	
	6. Edit the Autoexec.bat file and check for any references to SmartDrive
	  (Smartdrv or Smartdrv.exe).
	
	  For more information about how to accomplish this task in Windows, see your
	  Windows printed documentation or online help.
	
	  If none of your drives are using MS-DOS compatibility mode, do the following
	  to turn off Smartdrv:
	
	  - At the beginning of the line containing the Smartdrv entry, type:
	
	  REM
	
	  Follow REM with a blank space.
	
	  If any of your drives, such as your hard drive, are using MS-DOS compatibility
	  mode, you can turn off SmartDrive CD-ROM caching by adding "/u" (without the
	  quotation marks) at the end of the Smartdrv line.
	
	  For more information about the "/u" (without the quotation marks) command,
	  please see your Windows printed documentation or online Help.
	
	Caching for Drives Using MS-DOS Compatibility Mode
	--------------------------------------------------
	
	Install Microsoft SmartDrive to cache CD-ROM drives using Real Mode drivers.
	
	To install SmartDrive, do the following:
	
	1. Using a text editor such as Microsoft Notepad, edit the Autoexec.bat file and
	  add the following line if it does not already exist:
	
	     c:\windows\smartdrv.exe
	
	  NOTE: SmartDrive version 5.0 and above does not require the LoadHigh command.
	  By default, SmartDrv loads into Upper Memory if space is available.
	
	  Place this line after the line for Mscdex or Mscdex.exe
	
	2. Save the changes to Autoexec.bat, and restart Windows 95.
	
	For more information about SmartDrive, type the following at the MS-DOS prompt:
	
	  smartdrv /?
	
	-or-
	
	  help smartdrv
	
	For more information on editing Autoexec.bat, please see your Windows printed
	documentation or online Help.
	
	Troubleshooting CD-ROM Problems
	-------------------------------
	
	If you are having problems running compact disc-based programs, use the following
	caching configurations for troubleshooting purposes:
	
	- Disable all references to smartdrive or smartdrv /u in the Autoexec.bat file.
	
	- Turn off read-ahead for 32-bit CD-ROM drivers. If you are already using No
	  read-ahead, change to the setting that corresponds to your CD- ROM drive
	  (single, double, triple or quad-speed).
	
	- Turn off all third-party disk caching software.
	
	- Turn off hardware caching if the option is supported by your CD-ROM
	  controller. For more information about how to accomplish this task, see your
	  CD-ROM user's guide or contact your CD-ROM manufacturer.
	
	
	Additional query words: multi media multimedia multi-media mmtitles kbmm kbhowto 95core 1995
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 1995
	
	=============================================================================
	
