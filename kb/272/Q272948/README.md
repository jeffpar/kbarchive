---
layout: page
title: "Q272948: Asheron's Call Error Message: Invalid Argument Count"
permalink: /kb/272/Q272948/
---

## Q272948: Asheron's Call Error Message: Invalid Argument Count

{% raw %}

	Article: Q272948
	Product(s): Microsoft Home Games
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): kberrmsg kbimu msgame
	Last Modified: 16-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Asheron's Call, version 1.0 
	- Microsoft Asheron's Call: Dark Majesty, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to start Microsoft Asheron's Call, you may receive the
	following error message:
	
	  Invalid argument count.
	
	CAUSE
	=====
	
	This behavior can occur if either of the following conditions is true:
	
	- The Asheron's Call game files are damaged.
	
	- The video driver for your video adapter driver is outdated.
	
	RESOLUTION
	==========
	
	To resolve this issue, uninstall Asheron's Call, clean boot the computer, and
	then reinstall Asheron's Call.
	
	To do this, use the following methods:
	
	Uninstall Asheron's Call
	------------------------
	
	To uninstall Asheron's Call:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click Add/Remove Programs.
	
	3. Click Microsoft Asheron's Call, and then click Add/Remove.
	
	4. Follow the instructions on the screen to uninstall Asheron's Call.
	
	Delete the Asheron's Call Folder
	--------------------------------
	
	To delete the Asheron's Call folder:
	
	1. Click Start, point to Find, and then click "Files or Folders".
	
	2. In the Named box, type "asheron's call" (without the quotation marks).
	
	3. In the "Look in" box, click My Computer.
	
	4. Make sure that the "Include subfolders" check box is selected.
	
	5. Click Find Now.
	
	6. Right-click the Asheron's Call folder, click Delete, and then click Yes.
	
	7. Close the Find: Files Named Asheron's Call window.
	
	Clean Boot the Computer
	-----------------------
	
	To clean boot the computer, use the appropriate method for your version of
	Microsoft Windows.
	
	Microsoft Windows 98:
	
	1. Click Start, and then click Run.
	
	2. In the Open box, type "msconfig" (without the quotation marks), and then
	  click OK.
	
	3. On the General tab, click Selective Startup, and then click to clear the
	  following check boxes:
	
	   - Process Config.sys File
	   - Process Autoexec.bat File
	   - Process Winstart.bat File (if available)
	   - Process Win.ini File
	   - Load Startup Group Items
	
	4. Click OK. When you are prompted to restart the computer, do so.
	
	For additional information about how to clean boot Windows 98, click the article
	number below to view the article in the Microsoft Knowledge Base:
	
	  Q192926 How to Perform Clean-Boot Troubleshooting for Windows 98
	
	
	NOTE: To restore your original Startup options, click Normal Startup on the
	General tab in System Configuration Utility.
	
	Microsoft Windows 95:
	
	1. Restart the computer. When you see the "Starting Windows 95" message, press
	  the F8 key, and then select Command Prompt Only from the Startup menu.
	
	2. At the command prompt, type "win" (without the quotation marks), and then
	  press ENTER. Press and hold down the SHIFT key until the Windows startup
	  sequence is complete.
	
	3. Disable any anti-virus or disk tool programs installed on the computer.
	
	  For information about how to disable these programs, see the printed or online
	  documentation for the program.
	
	4. Quit all running programs except Explorer and Systray. To do this, press
	  CTRL+ALT+DELETE, click the program that you want to quit, and then click End
	  Task. If you receive a message that the program is busy or not responding,
	  click End Task again. Repeat this step to quit all programs except Explorer
	  and Systray.
	
	For additional information about how to clean boot Windows 95, click the article
	number below to view the article in the Microsoft Knowledge Base:
	
	  Q177604 Multimedia: Troubleshooting Using Clean Boot of Windows 95
	
	NOTE: To restore your original Startup options, restart the computer normally,
	and then enable any anti-virus or disk tool programs installed on the computer.
	For information about how to enable these programs, see the printed or online
	documentation for the program.
	
	Reinstall Asheron's Call
	------------------------
	
	Insert the Asheron's Call CD-ROM into your CD-ROM drive, and then follow the
	instructions on the screen to reinstall Asheron's Call.
	
	MORE INFORMATION
	================
	
	If the issue continues to occur, use the following methods in the order in which
	they are presented.
	
	Obtain an Updated Video Driver for Your Video Adapter
	-----------------------------------------------------
	
	Contact the manufacturer of your video adapter to inquire about how to obtain and
	install the latest version of the video driver for your video adapter.
	
	To identify the manufacturer and the model of your video adapter:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click System.
	
	3. On the Device Manager tab, click the plus sign (+) next to "Display adapters"
	  to expand the branch.
	
	4. In the "Display adapters" branch, note the manufacturer and the model of your
	  video adapter, and then click OK.
	
	5. Close Control Panel.
	
	For information about how to contact the manufacturer of your video adapter,
	click the appropriate article number below to view the article in the Microsoft
	Knowledge Base:
	
	  Q65416 Hardware and Software Third-Party Vendor Contact List, A-K
	
	  Q60781 Hardware and Software Third-Party Vendor Contact List, L-P
	
	  Q60782 Hardware and Software Third-Party Vendor Contact List, Q-Z
	
	If the issue continue to occur, proceed to the next method.
	
	Reduce the Graphics Hardware Acceleration
	-----------------------------------------
	
	To reduce the graphics hardware acceleration:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click System.
	
	3. Click the Performance tab, and then click Graphics.
	
	4. Move the Hardware Acceleration slider until it is one notch to the right of
	  None (the Basic acceleration setting).
	
	5. Click OK, and then click Close.
	
	6. When you are prompted to restart the computer, click Yes.
	
	  NOTE: If you encounter any problems after you reduce the hardware acceleration
	  setting, follow these steps to restore the original setting:
	
	  a. Restart Windows in Safe mode. To do this, use the appropriate method for
	     your version of Microsoft Windows:
	
	     Windows 95:
	
	     Restart your computer. When you see the "Starting Windows 95" message,
	     press the F8 key, and then choose Safe Mode from the Startup menu.
	
	     Windows 98:
	
	     Restart your computer, press and hold down the CTRL key after the computer
	     completes the Power On Self Test (POST), and then select Safe Mode from
	     the Startup menu.
	
	  b. When Windows starts in Safe mode, click OK.
	
	  c. Repeat steps 1-6, but in step 4 move the Hardware Acceleration slider back
	     to its original setting.
	
	Additional query words: 1.00 msgame igz msngz ashcall ac corrupted asherons
	
	======================================================================
	Keywords          : kberrmsg kbimu msgame 
	Technology        : kbHomeProdSearch _IKkbbogus kbGamesSearch kbMSNSearch kbAsheronSearch kbAsheron100 kbAsheronDarkMaj
	Version           : :1.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
