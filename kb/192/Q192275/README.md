---
layout: page
title: "Q192275: Outlook Express Is Not an Available MSN E-mail Client"
permalink: /kb/192/Q192275/
---

## Q192275: Outlook Express Is Not an Available MSN E-mail Client

	Article: Q192275
	Product(s): The Microsoft Network
	Version(s): WINDOWS:2.5,2.51,2.52,2.6,4.0,5
	Operating System(s): 
	Keyword(s): kbinterop kbsetup kbmsn
	Last Modified: 09-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Network versions 2.5, 2.51, 2.52, 2.6 
	- Microsoft Internet Explorer versions 4.0, 5 for Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Microsoft Outlook Express may not be an available e-mail client in MSN, The
	Microsoft Network, or in Microsoft Internet Explorer.
	
	CAUSE
	=====
	
	This behavior can occur if you install Microsoft Outlook 97 after you install
	Outlook Express.
	
	RESOLUTION
	==========
	
	To resolve this issue you must first remove Outlook Express and then reinstall
	Internet Explorer which will then reinstall Outlook Express.
	
	Uninstall Outlook Express
	-------------------------
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click Add/Remove Programs.
	
	3. Double-click Microsoft Outlook Express, and then click Add/Remove.
	
	4. Follow the instructions on the screen to remove Outlook Express.
	
	5. Restart the computer.
	
	6. Press CTRL+ALT+DELETE to open the Close Program dialog box.
	
	7. Quit all programs except Explorer and Systray (which are parts of Windows).
	  To quit a program, click the program, and then click End Task.
	
	8. Repeat steps 6-7 until you have quit all programs except Explorer and
	  Systray.
	
	9. Disable any anti-virus or disk tool programs installed on the computer. For
	  information about how to disable these programs, see the printed or online
	  documentation for the program.
	
	Reinstall Microsoft Internet Explorer 4.0
	-----------------------------------------
	
	1. Insert the MSN CD-ROM into the CD-ROM drive. Press and hold down the SHIFT
	  key when you insert the CD-ROM to prevent the MSN Setup program from starting
	  automatically.
	
	2. Click Start, point to Settings and then click Files Or Folders.
	
	3. In the Named box, type ie4setup.exe.
	
	4. In the Look In box, click the CD-ROM drive that contains the Microsoft
	  Network CD-ROM.
	
	5. Click Find Now.
	
	6. In the list of found files, double click ie4setup.exe. Follow the
	  instructions on the screen. When you are prompted to select an installation
	  option, click Standard Installation, and then click Next.
	
	7. Click Upgrade Only Newer Items, and then click OK.
	
	8. If you are prompted to restart the computer, do so.
	
	Reinstall Microsoft Internet Explorer 5.0
	-----------------------------------------
	
	1. Insert your Microsoft Internet Explorer 5.0 CD-ROM into your CD-ROM
	  drive.Press and hold down the SHIFT key when you insert the CD-ROM to prevent
	  the Setup program from starting automatically.
	
	2. Click Start, point to Settings and then click Files Or Folders.
	
	3. In the Named box, type ie5setup.exe.
	
	4. In the Look In box, click the CD-ROM drive that contains the Internet
	  Explorer CD-ROM.
	
	5. Click Find Now.
	
	6. In the list of found files, double click on ie5setup.exe and follow the
	  prompts to reinstall the program.
	
	7. If you are prompted to restart the computer, do so.
	
	This can also occour if the Windows Registry contains incorrect information. To
	resolve this issue for Microsoft Windows 95 or 98, follow these steps:
	
	1. Press CTRL+ALT+DELETE to open the Close Program dialog box.
	
	2. Quit all programs except Explorer and Systray (which are parts of Windows).
	  To quit a program, click the program, and then click End Task.
	
	3. Repeat step 2 until you have quit all programs except Explorer and Systray.
	
	4. Click Start and then click Run.
	
	5. In the open box type C:\Progra~1\Outloo~1\msimn.exe /reg.
	
	6. Click OK, and then restart the computer.
	
	Additional query words: 4.0 msnet msnetwork microsoft-net m.s.n. ol97
	
	======================================================================
	Keywords          : kbinterop kbsetup kbmsn 
	Technology        : kbIEsearch kbMSNSearch kbIE95Search kbIE500Search kbZNotKeyword3 kbIE400Win95 kbIE500Win95 kbMSN252 kbMSN251 kbMSN260 kbMSN250
	Version           : WINDOWS:2.5,2.51,2.52,2.6,4.0,5
	Issue type        : kbprb
	
	=============================================================================
	
