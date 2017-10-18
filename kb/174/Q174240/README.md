---
layout: page
title: "Q174240: The Microsoft Network Setup Stops Responding"
permalink: kb/174/Q174240/
---

## Q174240: The Microsoft Network Setup Stops Responding

	Article: Q174240
	Product(s): The Microsoft Network
	Version(s): WINDOWS:2.0
	Operating System(s): 
	Keyword(s): kbsetup
	Last Modified: 12-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Network version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are installing MSN, The Microsoft Network, Setup may be slow or may
	stop responding (hang).
	
	CAUSE
	=====
	
	This behavior can occur for either of the following reasons:
	
	- You are running background terminate-and-stay-resident programs (TSRs) or
	  other programs that are causing a problem with the installation.
	
	- The MSN CD-ROM is not being read properly.
	
	RESOLUTION
	==========
	
	To resolve this issue, use the appropriate method:
	
	Disable TSRs and Quit Running Programs
	--------------------------------------
	
	1. Restart your computer. When you see the "Starting Windows 95" message, press
	  the F8 key, and then choose Command Prompt Only from the Startup menu.
	
	2. Start Windows 95 by typing "win" (without the quotation marks) and holding
	  down the SHIFT key for the duration of Windows startup. This prevents any
	  programs from loading automatically at startup.
	
	3. Press CTRL+ALT+DELETE to open the Close Program dialog box.
	
	4. Close all programs except Explorer and Systray (which are parts of Windows
	  95). To close a program, click the program, and then click End Task.
	
	5. Repeat steps 3-4 until all unnecessary programs have been closed.
	
	6. Disable any anti-virus or disk tool programs installed on the computer. For
	  information about how to disable these programs, consult the documentation
	  for your program.
	
	7. Insert the MSN CD-ROM. On the screen that appears, click Go to MSN Setup.
	
	Run Setup from the Hard Disk
	----------------------------
	
	Note that you should have a minimum of 110 megabytes (MB) of free hard disk space
	before beginning these steps. To determine the amount of free hard disk space,
	double-click the My Computer icon on the desktop, right- click a hard disk, and
	then click Properties. The free disk space appears on the General tab.
	
	1. Quit all running programs. To do this, follow steps 1-6 in the "Disable TSRs
	  and Quit Running Programs" section above.
	
	2. Click Start, point to Programs, and then click MS-DOS Prompt.
	
	3. At the command prompt, type the following lines, pressing ENTER after each
	  line:
	
	  "cd\" (without the quotation marks)
	  "md msnsetup" (without the quotation marks)
	
	4. Insert the MSN CD-ROM into the CD-ROM drive, and then close the Welcome To
	  MSN Setup screen if it appears.
	
	5. At the command prompt, type the following line, and then press ENTER
	
	  "copy <drive>:\msnsetup\*.* c:\msnsetup" (without the quotation marks)
	
	  where <drive> is the drive letter assigned to your CD-ROM drive.
	
	6. Click Start, and then click Run.
	
	7. In the Open box, type the following line, and then click OK:
	
	  "c:\msnsetup\msnsetup.exe" (without the quotation marks)
	
	8. Follow the instructions on the screen to complete the installation of MSN.
	
	Manually Install MSN
	--------------------
	
	1. Quit all running programs. To do this, follow steps 1-6 in the "Disable TSRs
	  and Quit Running Programs" section above.
	
	2. Insert the MSN CD-ROM into the CD-ROM drive, and then close the Welcome To
	  MSN Setup screen if it appears.
	
	3. Double-click the My Computer icon on the desktop.
	
	4. Right-click the CD-ROM drive, and then click Open.
	
	5. Double-click the MSNSetup folder, and then double-click the Compnts folder.
	
	6. Double-click the following files to install MSN. Click No when you are
	  prompted to restart the computer:
	
	  Msie301.exe
	  Coreui.exe
	  Newcore.exe
	  Swinst4.exe
	  Setupslt.exe
	  Comiccht.exe
	  Mailnews.exe
	  Vrmlocx.exe
	  Controls.exe
	  Optional.exe
	  Imthart.exe
	  Rifffe01.exe
	  Rifffmn1.exe
	  Rifffmn2.exe
	
	7. Restart the computer.
	
	8. Quit all running programs. To do this, follow steps 1-6 in the "Disable TSRs
	  and Quit Running Programs" section above.
	
	9. Double-click the My Computer icon on the desktop.
	
	10. Right-click the CD-ROM drive, and then click Open.
	
	11. Double-click the MSNSetup folder, and then double-click the Compnts folder.
	
	12. Double-click the following files to finish installing MSN. Click No when you
	  are prompted to restart the computer.
	
	  Amov4ie.exe
	  Msn13.exe
	
	13. Restart the Computer.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsetup 
	Technology        : kbMSNSearch kbMSN200
	Version           : WINDOWS:2.0
	
	=============================================================================
	
