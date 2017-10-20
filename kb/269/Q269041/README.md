---
layout: page
title: "Q269041: Baseball 2001 Error Message: One or More of the Parameters..."
permalink: /kb/269/Q269041/
---

## Q269041: Baseball 2001 Error Message: One or More of the Parameters...

{% raw %}

	Article: Q269041
	Product(s): Microsoft Home Games
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): kberrmsg kbsetup kbimu msgame
	Last Modified: 12-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Baseball 2001, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to install Microsoft Baseball 2001, you may receive the
	following error message:
	
	  One or more of the parameters passed to the function are incorrect.
	
	CAUSE
	=====
	
	This behavior can occur if any of the following conditions are true:
	
	- An antivirus program is running on your computer.
	
	- An outdated video driver for your video adapter is installed on your
	  computer.
	
	- Your installation of Microsoft DirectX is damaged or outdated.
	
	RESOLUTION
	==========
	
	To resolve this issue, use the appropriate methods in the order in which they
	are presented.
	
	Quit Unnecessary Programs
	-------------------------
	
	Quit all unnecessary programs before you attempt to install the program. To do
	this:
	
	1. Press CTRL+ALT+DELETE.
	
	2. In the Close Program dialog box, click any program except Explorer or
	  Systray, which are components of Microsoft Windows, and then click End Task.
	
	  If you are receive a message stating the program has stopped responding, click
	  End Task again.
	
	3. Repeat steps 1 and 2 to quit all programs except Explorer and Systray.
	
	4. Disable any anti-virus or disk tool programs that are installed on the
	  computer. For information about how to disable these programs, see the
	  printed or online documentation for the program.
	
	If the issue continues to occur, proceed to the next method.
	
	Clean Boot the Computer
	-----------------------
	
	Clean boot the computer to determine if the issue is caused by a program or a
	driver that starts automatically when you start the computer. To do this, use
	the appropriate method for your version of Microsoft Windows.
	
	Microsoft Windows Millennium Edition:
	
	For additional information about how to perform a clean boot, click the article
	number below to view the article in the Microsoft Knowledge Base:
	
	  Q267288 How to Perform a Clean Boot in Windows Millennium Edition
	
	Microsoft Windows 98:
	
	1. Click Start, and then click Run.
	
	2. In the Open box, type "msconfig" (without the quotation marks), and then
	  click OK.
	
	3. Click "Selective startup", and then click to clear the following check
	  boxes:
	
	   - "Process Config.sys file"
	   - "Process Autoexec.bat file"
	   - "Process Winstart.bat file" (if available)
	   - "Load startup group items"
	
	  NOTE: If any of these check boxes are unavailable, the related file is empty
	  or does not exist.
	
	4. Click the Win.ini tab.
	
	5. Click the plus sign (+) next to Windows to expand the branch.
	
	6. Click to clear the "load=" and the "run=" check boxes, and then click OK.
	
	7. When you are prompted to restart the computer, do so.
	
	NOTE: To restore your original Startup options, click Normal Startup on the
	General tab in the System Configuration Utility tool.
	
	For more information about how to clean boot a Windows 98-based computer, please
	see the "Narrowing the Focus" section in the following article in the Microsoft
	Knowledge Base:
	
	  Q192926 How to Perform Clean-Boot Troubleshooting for Windows 98
	
	Microsoft Windows 95:
	
	1. Restart the computer. When you see the "Starting Windows 95" message, press
	  the F8 key, and then select Command Prompt Only from the Startup menu.
	
	2. At the command prompt, type "win" (without the quotation marks), and then
	  press ENTER. Press and hold down the SHIFT key until the Windows startup
	  sequence is complete. This prevents any programs from being loaded
	  automatically when Windows starts.
	
	3. Disable any anti-virus or disk tool programs installed on the computer. For
	  information about how to disable these programs, see the printed or online
	  documentation for the program.
	
	4. Quit all running programs except Explorer and Systray. To do this, see the
	  "Quit Unnecessary Programs" method in this article.
	
	For additional information about how to clean boot Windows 95, click the article
	number below to view the article in the Microsoft Knowledge Base:
	
	  Q177604 Multimedia: Troubleshooting Using Clean Boot of Windows 95
	
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
	
	Download and Install the Latest Version of DirectX in Safe Mode
	---------------------------------------------------------------
	
	Download and install the latest version of Microsoft DirectX from the following
	Microsoft Web site:
	
	  http://www.microsoft.com/directx/homeuser/downloads/default.asp
	
	Save the file to your desktop, and then install DirectX in Safe mode.
	
	To restart your computer in Safe mode, use the appropriate method for your
	version of Microsoft Windows.
	
	Microsoft Windows 98 or Microsoft Windows Millennium Edition:
	
	Restart your computer, press and hold down the CTRL key when your computer
	completes the Power On Self Test (POST), and then select Safe Mode from the
	Startup menu.
	
	Microsoft Windows 95:
	
	Restart the computer. When you see the "Starting Windows 95" message, press the
	F8 key, and then select Safe Mode from the Startup menu.
	
	To install DirectX:
	
	1. When Windows starts in Safe mode, click OK.
	
	2. Double-click the DirectX file that you saved to your desktop.
	
	  NOTE: For DirectX 8.0, this file is named DX80eng.exe.
	
	3. Follow the instructions on the screen to install DirectX.
	
	4. Restart your computer.
	
	Additional query words: 1.00 msgame bb2001 bball norton anti virus nav mcafee
	
	======================================================================
	Keywords          : kberrmsg kbsetup kbimu msgame 
	Technology        : kbHomeProdSearch _IKkbbogus kbGamesSearch kbBaseballSearch kbBaseBall2001
	Version           : :1.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
