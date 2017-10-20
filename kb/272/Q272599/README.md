---
layout: page
title: "Q272599: MapPoint 2000 Err Msg: Unable to Register or Unregister the File"
permalink: /kb/272/Q272599/
---

## Q272599: MapPoint 2000 Err Msg: Unable to Register or Unregister the File

{% raw %}

	Article: Q272599
	Product(s): Microsoft Automap
	Version(s): 
	Operating System(s): 
	Keyword(s): kberrmsg kbsetup kbimu
	Last Modified: 14-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Expedia Streets and Trips 2000 
	- Microsoft MapPoint 2000 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to install one of the programs listed at the beginning of this
	article, you may receive one of the following error messages:
	
	   - Unable to register or unregister the file Geodb72.dll.
	
	   - Unable to register or unregister the file Ppmgr72.dll.
	
	CAUSE
	=====
	
	This behavior can occur if a program running in the background, such as an
	antivirus program, is interfering with the installation process.
	
	RESOLUTION
	==========
	
	To resolve this issue, clean boot your computer before you attempt to install
	the program. To clean boot your computer, use the appropriate method for your
	version of Microsoft Windows.
	
	Microsoft Windows 98
	--------------------
	
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
	
	
	Microsoft Windows 95
	--------------------
	
	1. Restart the computer. When you see the "Starting Windows 95" message, press
	  the F8 key, and then select Command Prompt Only from the Startup menu.
	
	2. At the command prompt, type "win" (without the quotation marks), and then
	  press ENTER. Press and hold down the SHIFT key until the Windows startup
	  sequence is complete. This prevents any programs from being loaded
	  automatically when Windows starts.
	
	3. Quit all running programs except Explorer and Systray. To do this:
	
	  a. Press CTRL+ALT+DELETE.
	
	  b. Click the program you want to quit, and then click End Task.
	
	  c. If you receive a message that the program is busy or not responding, click
	     End Task again.
	
	  Repeat steps A through C until you have quit all programs except Explorer and
	  Systray.
	
	4. Disable any anti-virus or disk tool programs installed on the computer. For
	  information about how to disable these programs, see the printed or online
	  documentation for the program.
	
	For additional information about how to clean boot Windows 95, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q177604 Multimedia: Troubleshooting Using Clean Boot of Windows 95
	
	NOTE: To restore your original Startup options, restart the computer normally,
	and then enable any anti-virus or disk tool programs installed on the computer.
	For information about how to enable these programs, see the printed or online
	documentation for the program.
	
	
	
	Additional query words: est2000 mp2000 auto-map amap installs fails cannot
	
	======================================================================
	Keywords          : kberrmsg kbsetup kbimu 
	Technology        : kbHomeProdSearch kbExpediaSearch kbMapptSearch kbMapPoint2000 kbExpediaStreets2000
	Version           : :
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
