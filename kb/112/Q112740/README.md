---
layout: page
title: "Q112740: Encarta Err Msg: Could Not Write to File Named CTL3D.DLL"
permalink: kb/112/Q112740/
---

## Q112740: Encarta Err Msg: Could Not Write to File Named CTL3D.DLL

	Article: Q112740
	Product(s): Microsoft Home Kids Products
	Version(s): 1994 edition
	Operating System(s): 
	Keyword(s): 
	Last Modified: 26-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Encarta 1994 The Complete Multimedia Encyclopedia 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If the Ctl3d.dll file is loaded in your system, you may receive the following
	error when installing Encarta:
	
	  Could not write to the file named <Windir>\SYSTEM\CTL3D.DLL. The file
	  is currently being used by another application. Please shut down your other
	  applications.
	
	where <Windir> is your Windows folder (such as C:\Windows).
	
	The Ctl3d.dll file could have been loaded by a Windows shell other than Program
	Manager or by a terminate-and-stay-resident (TSR) program that uses the file.
	
	
	RESOLUTION
	==========
	
	If the version of the Ctl3d.dll file on the system is the same or later than the
	version on the Encarta CD, Encarta Setup will not attempt to write to it. Try
	one of the following resolutions:
	
	Install Encarta's version of the file into the <Windir>\System folder, as
	follows:
	
	1. Exit Windows. If you are running Windows 95:
	  a. Click Start, and then click Shut Down.
	
	  b. Click Restart The Computer In MS-DOS Mode, and then click Yes.
	
	2. At the MS-DOS command prompt, type the the following, and press the Enter key
	  at the end of the line:
	
	  "copy <cd drive>:\encarta\ctl3d.dll \<windir>\system" (without
	  the quotation marks)
	
	  where <cd drive> is the CD drive letter and <windir> is the path
	  to the Windows folder.
	
	3. Restart Windows.
	
	4. Run Encarta Setup again to complete the installation.
	
	-or-
	
	Do the following to start your system "clean":
	
	1. Edit the Win.ini file in a text editor such as Notepad.
	
	2. Place a semicolon (;) as the first character on the RUN= or LOAD= lines. For
	  example:
	
	  ";LOAD=C:\MOUSE\POINTER.EXE atikey.exe" (without the quotation marks)
	
	3. Save and close the Win.ini file.
	
	4. Edit the System.ini file in a text editor such as Notepad.
	
	5. Change the SHELL= line to read:
	
	  "SHELL=PROGMAN.EXE" (without the quotation marks)
	
	6. Save and close the System.ini file.
	
	7. Restart Windows.
	
	8. Run Encarta Setup again to complete the installation.
	
	-or-
	
	Remove Ctl3d.dll from memory and run Encarta Setup:
	
	1. Exit Windows.
	
	2. Change to the Windows\System folder.
	
	3. Rename Ctl3d.dll To Ctl3d.old. For more information about how to perform this
	  task in Windows, see your Windows printed documentation or online Help.
	
	4. Restart Windows and run the Encarta Setup again.
	
	MORE INFORMATION
	================
	
	This error occurs when Encarta Setup finds an earlier version of the Ctl3d.dll
	file on the system and tries to update the file, but cannot because another
	application is using it.
	
	Additional query words: multi media multimedia multi-media msscenes screen saver screensaver cleanboot clean boot
	
	======================================================================
	Keywords          :  
	Technology        : kbHomeProdSearch kbEncartaSearch kbEncartaEncycSearch kbEncartaEnCyc1994
	Version           : :1994 edition
	
	=============================================================================
	
