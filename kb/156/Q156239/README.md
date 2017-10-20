---
layout: page
title: "Q156239: Encarta 97: Startup Error with IntelliType/IntelliPoint"
permalink: /kb/156/Q156239/
---

## Q156239: Encarta 97: Startup Error with IntelliType/IntelliPoint

{% raw %}

	Article: Q156239
	Product(s): Microsoft Home Multimedia Titles
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): kbfaq
	Last Modified: 21-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Encarta 97 Encyclopedia for Windows 
	- Microsoft Encarta Encyclopedia 97 Deluxe for Windows 
	- the operating system: Microsoft Windows 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to run Encarta Encyclopedia 1997 with Windows 3.11 or Windows
	for Workgroups 3.11, you receive the following error message:
	
	  IntelliType for the Microsoft Natural Keyboard is installed on your machine.
	  This software is incompatible w/ Encarta Encyclopedia. You must uninstall
	  this software before running the encyclopedia.
	
	CAUSE
	=====
	
	Encarta Encyclopedia 1997 is incompatible with the Microsoft IntelliPoint and
	IntelliType software.
	
	RESOLUTION
	==========
	
	You may need to download a file that upgrades your copy of Encarta Encyclopedia.
	The file, or patch, allows Encarta Encyclopedia to disable Pointer.exe. Download
	the patch if the following conditions are true:
	
	- You're using Windows 3.1 or 3.11.
	- The error message appears and does not include a Help button.
	
	Downloading the Patch
	---------------------
	
	The following file is available for download from the Microsoft Download Center:
	
	  Enc97fix.exe
	  (http://download.microsoft.com/download/encarta97win/Update/2/WIN98/EN-US/Enc97fix.exe)
	
	Release Date: Oct-17-1996
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	NOTE: If you are unable to download the patch file, see the WORKAROUND section at
	the end of this section.
	
	Workaround
	----------
	
	If you are unsuccessful use the following information to help you disable
	Pointer.exe. To disable the software, you need to modify Windows configuration
	files. For more information about how modifying file in Windows, see your
	Windows printed documentation of online Help.
	
	Disabling Pointer.exe
	---------------------
	
	Disabling the software requires you to determine what version of the software is
	installed on your machine.
	
	
	
	The following is an example of the Windows default configuration:
	
	     System.ini
	     ----------
	     [boot]
	     mouse.drv=mouse.drv
	
	     [boot.description]
	     mouse.drv=Microsoft, or IBM PS/2
	     keyboard.typ=Enhanced 101 or 102 key US and Non US keyboards
	
	     [386Enh]
	     keyboard=*vkd
	
	     Win.ini
	     -------
	     [Windows]
	     load=
	
	The configuration changes made by Setup Mouse 9.01 are:
	
	     System.ini
	     ----------
	     [boot]
	     mouse.drv=C:\MOUSE\MOUSE.DRV
	
	     [386Enh]
	     keyboard=C:\MOUSE\MOUSEvkd.386
	
	     Win.ini
	     -------
	     [Windows]
	     load=C:\MOUSE\POINTER.EXE
	
	The configuration changes made by IntelliPoint 1.0 are:
	
	     System.ini
	     ----------
	     [boot]
	     mouse.drv=c:\msinput\msinput.drv
	
	     [boot.description]
	     mouse.drv=Microsoft IntelliPoint version 1.0
	
	     [386enh]
	     keyboard=c:\msinput\msinput.386
	
	     Win.ini
	     -------
	     [windows]
	     load=c:\msinput\pointer.exe
	
	The configuration changes made by IntelliPoint 1.1 are:
	
	NOTE: IntelliPoint 1.1 offers an automatic Uninstall option for all supported
	operating systems. This feature, Uninstal.exe, removes the IntelliPoint
	software, and where appropriate, restores the system to the Windows defaults.
	Uninstall is not capable of restoring previous third- party mouse driver
	installations.
	
	     System.ini
	     ----------
	     [boot]
	     mouse.drv=c:\msinput\msinput.drv
	
	     [boot.description]
	     mouse.drv=Microsoft IntelliPoint version 10.1
	
	     [386enh]
	     keyboard=c:\msinput\msinput.386
	
	The configuration changes made by IntelliType are the following:
	
	NOTE: IntelliType offers an automatic Uninstall option for all supported
	operating systems in the form of Uninstal.exe. Uninstall simply removes the
	IntelliType software and where appropriate, restores the system to Windows
	defaults.
	
	     System.ini
	     ----------
	     [boot]
	     keyboard.drv=c:\msinput\kbd.drv
	     taskman.exe=tasksw16.exe (no default for this entry)
	
	     [boot.description]
	     keyboard.typ=Microsoft Natural Keyboard
	
	     [386Enh]
	     keyboard=c:\msinput\msinput.386
	
	    Win.ini
	    -------
	    [windows]
	    load=c:\msinput\pointer.exe
	
	Removing IntelliType
	--------------------
	
	1. If you have IntelliType 1.1, use the Uninstall.exe to remove.
	
	2. If you have older versions, comment out the Pointer.exe from win.ini
	
	MORE INFORMATION
	================
	
	The following are frequently asked questions about Pointer.exe:
	
	Q. WHAT FUNCTIONS DOES POINTER.EXE CONTROL?
	
	A.
	
	- Mouse SnapTo
	- Mouse Sonar
	- MouseKeys
	- Windows key functionality
	- Custom button selection
	- Custom speed settings
	- Multiple pointer support in EasyBall (supports six pointing devices)
	
	Q. WHAT PRODUCTS USE POINTER.EXE?
	
	A.
	
	- Microsoft Mouse 2.0
	- Microsoft Mouse software version 8.0
	- Microsoft Mouse software version 9.0
	- Microsoft Mouse software version 10.0
	- Microsoft IntelliType 1.0
	- Microsoft Natural Keyboard (IntelliType v1.0 and v1.1)
	- Microsoft EasyBall Mouse
	- Microsoft BallPoint Mouse
	- Microsoft Home Mouse
	
	Q. HOW DOES ENCARTA DISABLE POINTER.EXE?
	
	A. Encarta Encyclopedia removes Pointer.exe from memory for the current Windows
	session. The encyclopedia does not remove Pointer.exe from your hard disk or
	permanently disable the program.
	
	Q. How can I re-enable Pointer.exe?
	
	A. Do not re-enable Pointer.exe while Encarta Encyclopedia is open, or the
	encyclopedia will no longer function normally. You can enable Pointer.exe in one
	of two ways:
	
	- In Program Manager, open the Mouse control panel. This causes Pointer.exe to
	  run.
	
	- Restart Windows. This causes Pointer.exe to run.
	
	Q. DOES THIS CONFLICT OCCUR UNDER WINDOWS 95 OR WINDOWS NT?
	
	A. No, the conflict occurs only under Windows 3.1 or 3.11. No conflict occurs
	under Windows 95 or Windows NT.
	
	Additional query words: 1997 multi media multimedia multi-media mmtitles kbmm intelitype intelipoint kbimu mm
	
	======================================================================
	Keywords          :  kbfaq
	Technology        : kbOSWinSearch kbHomeProdSearch kbHomeMMsearch kbZNotKeyword6 kbEncartaSearch kbEncartaEncycSearch kbEncartaEnCyc1997 kbEncartaEnCyc1997Del kbOSWin311
	Version           : WINDOWS:3.1,3.11
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
