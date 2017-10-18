---
layout: page
title: "Q194344: Multimedia: Hangs While Updating Files or Program Does Not Start"
permalink: kb/194/Q194344/
---

## Q194344: Multimedia: Hangs While Updating Files or Program Does Not Start

	Article: Q194344
	Product(s): Microsoft Home Multimedia Titles
	Version(s): WINDOWS:
	Operating System(s): 
	Keyword(s): kbenv kberrmsg kbsetup kbimukbfaq
	Last Modified: 05-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Bookshelf 99 
	- Microsoft Encarta Encyclopedia 99 
	- Microsoft Encarta Reference Suite 99 
	- Microsoft Encarta Virtual Globe 99 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you install any of the programs listed earlier in this article, your
	computer may stop responding (hang) when the following message is displayed:
	
	  Please wait while Setup updates your computer...
	
	In addition, when you attempt to start Encarta Virtual Globe 99, you may see the
	product's logo (splash) screen, but the program does not continue to load after
	this screen disappears.
	
	CAUSE
	=====
	
	This behavior can occur if your computer is using real mode (16-bit) drivers to
	access your CD-ROM drive, or if the CD-ROM drive is operating in MS-DOS
	Compatibility mode.
	
	RESOLUTION
	==========
	
	To resolve this issue, use the following methods in the order in which they are
	presented.
	
	Determine if You Are Using Protected Mode CD-ROM Drivers
	--------------------------------------------------------
	
	To determine if you are using protected mode (32-bit) CD-ROM drivers, follow
	these steps:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click System.
	
	3. Click the Performance tab, and then verify that the File System entry is
	  32-bit. If the File System entry is "Some drives are using MS-DOS
	  compatibility," you may be using real mode (16-bit) CD-ROM drivers. Contact
	  the manufacturer of your CD-ROM drive to obtain protected mode drivers for
	  your CD-ROM drive.
	
	NOTE: Encarta Virtual Globe does not start if you are using real mode drivers to
	access your CD-ROM drive. To start Encarta Virtual Globe, you must obtain
	protected mode (32-bit) CD-ROM drivers.
	
	If the issue continues to occur, proceed to the next method.
	
	Force Axdist.exe and Sw61inst.exe to Quit
	-----------------------------------------
	
	1. Insert the programs CD-ROM into the CD-ROM drive, and then follow the
	  instructions on the screen to start the installation process.
	
	2. When your computer stops responding (you may hear a system beep), press
	  CTRL+ALT+DELETE to open the Close Program dialog box.
	
	3. Click one of the following entries in the Close Program dialog box:
	
	   - Axdist
	   - Sw61inst
	
	4. Click End Task.
	
	5. The Setup program should now continue. Repeat steps 2-4 if the computer stops
	  responding again.
	
	6. When the Setup program is finished, follow the instructions in the "Install
	  Sw61inst Separately" section later in this article.
	
	Install Sw61inst Separately
	---------------------------
	
	1. Click Start, and then click Run.
	
	2. In the Open box, type the following line, and then click OK:
	
	  "<drive>:\Support\Shkwave" (without the quotation marks)
	
	  where <drive> is the drive letter of the CD-ROM drive.
	
	3. Double-click Sw61inst.exe.
	
	  NOTE: If you receive the following error message
	
	  Error registering the OCX
	  C:\Windows\System\Macromed\Director\SwDir.dll
	
	  follow the instructions in the "Run the Axdist Installer" section later in
	  this article.
	
	Run the Axdist Installer
	------------------------
	
	1. Click Start, and then click Run.
	
	2. In the Open box, type the following line, and then click OK:
	
	  "<drive>:\Aref\System" (without the quotation marks)
	
	  where <drive> is the drive letter of the CD-ROM drive.
	
	3. Double-click Axdist.exe.
	
	4. Repeat the steps in the "Install Sw61inst Separately" section earlier in this
	  article.
	
	
	MORE INFORMATION
	================
	
	The programs listed earlier in this article do not run properly with real mode
	(16-bit) CD-ROM drivers. These programs require native Microsoft Windows 95/98
	or Microsoft Windows NT CD-ROM drivers.
	
	
	Axdist.exe installs the following files on your hard disk:
	
	- Wininet.dll
	- Inloader.dll
	- Schannel.dll
	- Urlmon.dll
	- Hlink.dll
	- Hlinkprx.dll
	- Oleaut32.dll
	- Stdole2.tlb
	
	For additional information about this file, please see the following article in
	the Microsoft Knowledge Base:
	
	  Q159891 Readme.txt for the ActiveX SDK
	
	
	Additional query words: multi-media bs99 ee99 evg crash freeze
	
	======================================================================
	Keywords          : kbenv kberrmsg kbsetup kbimu kbfaq
	Technology        : kbHomeProdSearch kbHomeMMsearch kbEncartaSearch kbBookshelfSearch kbEncartaEncycSearch kbBookShelf1999 kbEncartaEnCyc1999 kbEncartaReference99
	Version           : WINDOWS:
	Issue type        : kbprb
	
	=============================================================================
	
