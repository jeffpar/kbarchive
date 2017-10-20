---
layout: page
title: "Q174914: Encarta 98 Does Not Display Home Screen or Play Animations"
permalink: /kb/174/Q174914/
---

## Q174914: Encarta 98 Does Not Display Home Screen or Play Animations

{% raw %}

	Article: Q174914
	Product(s): Microsoft Home Multimedia Titles
	Version(s): WINDOWS:
	Operating System(s): 
	Keyword(s): kbhw kbmm kbprb kbHardwarekbfaq
	Last Modified: 25-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Encarta 98 Encyclopedia for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run Encarta 98 Encyclopedia, you may experience one or more of the
	following symptoms:
	
	- When you start Encarta 98, it may open directly to the Articles screen
	  instead of the Home screen.
	- When you start Encarta 98, it may stop responding (hang).
	- If you click the Home button on the Articles screen, Encarta 98 may stop
	  responding (hang).
	- When you attempt to play an InterActivity or Collage in Encarta 98, nothing
	  may happen.
	- When you play an animation, Encarta 98 may stop responding (hang).
	
	CAUSE
	=====
	
	This behavior can occur if Macromedia Director or Macromedia ShockWave Flash is
	not installed correctly. Encarta 98 uses Macromedia Director and Macromedia
	ShockWave Flash to display animations and InterActivities.
	
	RESOLUTION
	==========
	
	To resolve this issue, use the following troubleshooting methods in the order in
	which they are given. After you complete each method, try the program again. If
	the issue continues to occur, proceed to the next method.
	
	Change Display Settings
	-----------------------
	
	Change the display settings. To do so, follow these steps:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click Display.
	
	3. Click the Settings tab.
	
	4. In the Color Palette or Colors box, click 256 Colors.
	
	5. Move the Desktop Area or Screen Area slider all the way to the left (the 640
	  X 480 setting).
	
	6. Click OK. If you are prompted to restart the computer, click Yes.
	
	Try a Clean Restart
	-------------------
	
	To perform a clean restart, follow the appropriate steps below for your version
	of Windows.
	
	Windows 95:
	
	1. Restart the computer. When the Starting Windows 95 screen appears, press and
	  hold down the SHIFT key until Windows finishes loading.
	
	2. Press CTRL+ALT+DELETE.
	
	3. In the Close Program window, click a program, and then click End Task.
	
	  NOTE: Do not close Explorer or Systray.
	
	4. If you receive a Program Not Responding dialog box, click End Task.
	
	5. Repeat steps 2-4 for each program you want to close.
	
	Windows 98:
	
	1. Quit any programs you have running.
	
	2. Press CTRL+ALT+DELETE to open the Close Program dialog box.
	
	3. Quit all programs except Explorer and Systray (which are parts of Windows).
	  To quit a program, click the program, and then click End Task.
	
	4. Repeat steps 2-3 until all unnecessary programs are no longer running.
	
	5. Disable any anti-virus or disk tool programs installed on the computer. For
	  information about how to disable these programs, see the printed or online
	  documentation for the program.
	
	Remove and Reinstall Encarta 98 and ShockWave Flash
	---------------------------------------------------
	
	To remove and reinstall Encarta 98 and ShockWave Flash, follow these steps:
	
	1. Insert the Encarta 98 CD-ROM into the CD-ROM drive. Press and hold down the
	  SHIFT key when you insert the CD-ROM to prevent Encarta 98 from starting
	  automatically.
	
	2. Click Start, point to Settings, then click Control Panel.
	
	3. Double-click Add/Remove Programs.
	
	4. On the Install/Uninstall tab, click Microsoft Encarta 98 Encyclopedia, and
	  then click Add/Remove.
	
	5. Follow the directions on the screen to remove Encarta 98.
	
	6. Rename all copies of the Swflash.ocx file on your computer. To do so, follow
	  these steps:
	
	  a. Right-click Start, and then click Find.
	
	  b. In the Named box, type "swflash.ocx" (without the quotation marks), and
	     then click Find Now.
	
	  c. In the list of found files, right-click the Swflash.ocx file, and then
	     click Rename.
	
	  d. Type "swflash.old" (without the quotation marks), and then press ENTER.
	
	  Repeat these steps for each copy of the Swflash.ocx file in the list of found
	  files.
	
	7. Delete the Encarta Encyclopedia folder from the following location
	
	  <drive>:\Program Files\Microsoft Reference
	
	  where <drive> is the letter of the hard disk on which Encarta 98 is
	  installed.
	
	  For information about how to delete folders, click Start, and then click Help.
	  On the Index tab, type "deleting" (without the quotation marks), and then
	  double-click the "Deleting files or folders" topic.
	
	8. Click Start, and then click Run.
	
	9. In the Open box, type the following line, and then click OK:
	
	  <cdrom>:\setup.exe
	
	  where <cdrom> is the letter of the CD-ROM drive that contains the
	  Encarta 98 CD-ROM.
	
	10. Follow the instructions on the screen to install Encarta 98.
	
	Clean Restart and Manually Copy Files
	-------------------------------------
	
	To manually install the ActiveX, Shockwave Flash, and Macromedia Director
	components required by Encarta 98, follow these steps:
	
	1. Perform a clean restart of the computer. To do so, follow the instructions in
	  the "Try a Clean Restart" section, above.
	
	2. Click Start, and then click Run.
	
	3. In the Open box, type the following line, and then click OK
	
	  <cdrom>:\aamsstp
	
	  where <cdrom> is the letter of the CD-ROM drive that contains the
	  Encarta 98 CD-ROM.
	
	4. Double-click the Axdist.exe file. Follow the directions on the screen to
	  install the ActiveX software.
	
	5. Double-click the Flash2in.exe file. Follow the directions on the screen to
	  install the Macromedia ShockWave Flash software.
	
	6. Double-click the Swiex6.exe file. Follow the directions on the screen to
	  install the Macromedia Director 6.0 software.
	
	7. Restart the computer.
	
	Reduce Hardware Acceleration
	----------------------------
	
	To reduce the Hardware Acceleration setting for the display adapter, follow these
	steps:
	
	1. Right-click My Computer, and then click Properties.
	
	2. On the Performance tab, click Graphics.
	
	3. Note that the Hardware Acceleration slider has four settings (Full, Most,
	  Basic, and None).
	
	4. Move the slider until it is one notch to the right of None (Basic).
	
	5. Click OK, and then click Close.
	
	6. When you are prompted to restart the computer, click Yes.
	
	
	Additional query words: multi multi-media media mm
	
	======================================================================
	Keywords          : kbhw kbmm kbprb kbHardware kbfaq
	Technology        : kbHomeProdSearch kbHomeMMsearch kbEncartaSearch kbEncartaEncycSearch kbEncartaEnCyc1998
	Version           : WINDOWS:
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
