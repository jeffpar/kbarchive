---
layout: page
title: "Q224809: Streets and Trips 2000 Err Msg: Unable to Open Response File..."
permalink: /kb/224/Q224809/
---

## Q224809: Streets and Trips 2000 Err Msg: Unable to Open Response File...

	Article: Q224809
	Product(s): Microsoft Automap
	Version(s): WINDOWS:
	Operating System(s): 
	Keyword(s): kbenv kberrmsg kbsetup kbimu
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Expedia Streets and Trips 2000 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you install Microsoft Expedia Streets and Trips 2000, you may receive the
	following error message when you restart your computer:
	
	  Unable to open response file C:\Windows\Temp\Odbcconf.tmp
	
	CAUSE
	=====
	
	This behavior can occur if any of the following conditions are true:
	
	- Your computer is configured to automatically delete files in the Temp folder
	  when you restart your computer.
	
	- An anti-virus or system monitoring program was running when you installed the
	  program.
	
	RESOLUTION
	==========
	
	To resolve this issue, use the following methods in the order in which they are
	presented.
	
	Prevent Files in the Temp Folder from Being Deleted
	---------------------------------------------------
	
	To prevent files in the Temp folder from being deleted when you restart the
	computer, use the appropriate method for your version of Microsoft Windows.
	
	Microsoft Windows 98:
	
	1. Click Start, point to Programs, point to Accessories, point to System Tools,
	  and then click System Information.
	
	2. On the Tools menu, click System Configuration Utility.
	
	3. On the Autoexec.bat tab, click to clear the check box for any line that
	  starts with "deltree."
	
	4. On the Autoexec.bat tab, click to clear the check box for any line that
	  starts with "for" or "call."
	
	5. Click OK.
	
	6. Reinstall Expedia Streets and Trips 2000, and then restart the computer.
	
	Microsoft Windows 95:
	
	1. Click Start, and then click Run.
	
	2. In the Open box, type "sysedit" (without the quotation marks), and then click
	  OK.
	
	3. In the Autoexec.bat window, type "rem" (without the quotation marks), and
	  then press the SPACEBAR at the beginning of any line that starts with
	  "deltree."
	
	4. In the Autoexec.bat window, type "rem" (without the quotation marks), and
	  then press the SPACEBAR at the beginning of any line that starts with "for"
	  or "call."
	
	5. On the File menu, click Exit. When you are prompted to save the changes,
	  click Yes.
	
	6. Reinstall Expedia Streets and Trips 2000, and then restart the computer.
	
	If the issue continues to occur, continue to the next method.
	
	Remove Expedia Streets and Trips 2000
	-------------------------------------
	
	To remove Expedia Streets and Trips 2000, follow these steps:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click Add/Remove Programs.
	
	3. Click Microsoft Expedia Streets and Trips 2000, and then click Add/Remove.
	
	4. Follow the instructions on the screen to remove the program. When you are
	  prompted to restart the computer, click No.
	
	5. Click Start, click Shut Down, click Restart In MS-DOS Mode, and then click
	  Yes.
	
	6. At the command prompt, type the following line, and then press ENTER
	
	  cd\<windows>\temp
	
	  where <windows> is the folder in which Windows is installed.
	
	7. At the command prompt, type "del *.tmp" (without the quotation marks), and
	  then press ENTER. If you are prompted to delete the files, press Y (Yes) or A
	  (Yes To All).
	
	8. At the command prompt, type the following line (including the quotation
	  marks), and then press ENTER:
	
	  "cd\Program Files\Common Files\Microsoft Shared"
	
	9. At the command prompt, type the following line, and then press ENTER:
	
	  deltree pushpins
	
	  If you are prompted to delete the files, press Y (Yes) or A (Yes To All).
	
	10. At the command prompt, type the following line, and then press ENTER:
	
	  cd\windows\system
	
	11. At the command prompt, type the following lines, pressing ENTER after you
	  type each line:
	
	  ren msvcrt.dll msvcrt.old
	  ren mfc42.dll mfc42.old
	  ren msvcp60.dll msvcp60.old
	
	12. At the command prompt, type "exit" (without the quotation marks), and then
	  press ENTER.
	
	13. Click Start, and then click Run.
	
	14. In the Open box, type the following line (including the quotation marks),
	  and then click OK
	
	  "<drive>:\Program Files"
	
	  where <drive> is the letter of the hard disk on which Expedia Streets
	  and Trips 2000 is installed.
	
	15. Right-click the Microsoft Streets And Trips folder, and then click Delete.
	
	Clean Boot Your Computer
	------------------------
	
	To clean boot your computer, use the appropriate steps for your version of
	Windows.
	
	Windows 98:
	
	1. Click Start, point to Programs, point to Accessories, point to System Tools,
	  and then click System Information.
	
	2. On the Tools menu, click System Configuration Utility.
	
	3. On the General tab, click Selective Startup, and then click to clear the
	  following check boxes:
	
	   - Process Config.sys File
	   - Process Autoexec.bat File
	   - Process Winstart.bat File (if available)
	   - Process Win.ini File
	   - Load Startup Group Items
	
	4. Click OK. When you are prompted to restart the computer, do so.
	
	NOTE: To restore your original Startup options, click Normal Startup on the
	General tab in the System Configuration Utility tool.
	
	For additional information about how to clean boot Windows 98, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q192926 How to Perform Clean-Boot Troubleshooting for Windows 98
	
	
	Windows 95:
	
	1. Restart the computer. When you see the "Starting Windows 95" message, press
	  the F8 key, and then select Command Prompt Only from the Startup menu.
	
	2. At the command prompt, type "win" (without the quotation marks), and then
	  press ENTER. Press and hold down the SHIFT key until the Windows startup
	  sequence is complete. This prevents any programs from being loaded
	  automatically when Windows starts.
	
	3. Quit all running programs except Explorer and Systray. To do this, follow
	  these steps:
	
	  a. Press CTRL+ALT+DELETE.
	
	  b. Click the program you want to quit, and then click End Task.
	
	  c. If you receive a message that the program is busy or not responding, click
	     End Task again.
	
	  Repeat this step until you have quit all programs except Explorer and Systray.
	
	4. Disable any anti-virus or disk tool programs installed on the computer. For
	  information about how to disable these programs, see the printed or online
	  documentation for the program.
	
	For additional information about how to clean boot Windows 95, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q177604 Multimedia: Troubleshooting Using Clean Boot of Windows 95
	
	Reinstall Expedia Streets and Trips 2000
	----------------------------------------
	
	To reinstall Expedia Streets and Trips 2000, follow these steps:
	
	1. Insert the Expedia Streets and Trips 2000 CD-ROM into your CD-ROM drive, and
	  then reinstall the program.
	
	2. When the installation process is complete, click OK. If you are prompted to
	  restart Windows, do so.
	
	
	Additional query words: multi multi-media media mm auto-map amap
	
	======================================================================
	Keywords          : kbenv kberrmsg kbsetup kbimu 
	Technology        : kbHomeProdSearch kbExpediaSearch kbExpediaStreets2000
	Version           : WINDOWS:
	Issue type        : kbprb
	
	=============================================================================
	
