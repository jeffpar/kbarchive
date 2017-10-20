---
layout: page
title: "Q176872: Streets 98 Err Msg: Unable to Register File Abico11.dll..."
permalink: /kb/176/Q176872/
---

## Q176872: Streets 98 Err Msg: Unable to Register File Abico11.dll...

{% raw %}

	Article: Q176872
	Product(s): Microsoft Automap
	Version(s): WINDOWS:98
	Operating System(s): 
	Keyword(s): kberrmsg kbsetup kbimukbfaq
	Last Modified: 28-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Expedia Streets 98, version 98 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to install Microsoft Expedia Streets 98, you may receive an
	error message similar to the following:
	
	  Microsoft Expedia Streets 98
	
	  Unable to register file Abico11.dll. Please reinstall.
	
	If you attempt to reinstall Expedia Streets 98, the same error message is
	displayed.
	
	CAUSE
	=====
	
	You may be running background terminate-and-stay-resident (TSR) programs or
	other programs that are interfering with the installation.
	
	RESOLUTION
	==========
	
	To resolve this issue, quit all unnecessary programs that are running before you
	attempt to reinstall Expedia Streets. To do so, use the following steps:
	
	1. Restart the computer at a command prompt. To do so, follow the steps in the
	  appropriate section below:
	
	  Microsoft Windows 95
	  --------------------
	
	  Restart your computer. When you see the "Starting Windows 95" message, press
	  the F8 key, and then choose Command Prompt Only from the Startup menu.
	
	  Microsoft Windows 98
	  --------------------
	
	  Restart your computer, press and hold down the CTRL key after your computer
	  completes the Power On Self Test (POST), and then choose Command Prompt Only
	  from the Startup menu.
	
	2. Start Windows by typing "win" (without the quotation marks) and holding down
	  the SHIFT key for the duration of Windows startup. This prevents any programs
	  from being loaded automatically when Windows starts.
	
	3. Press CTRL+ALT+DELETE to open the Close Program dialog box.
	
	4. Quit all programs except Explorer and Systray (which are parts of Windows).
	  To quit a program, click the program, and then click End Task.
	
	5. Repeat steps 3-4 until all unnecessary programs are no longer running.
	
	6. Disable any anti-virus or disk tool programs installed on the computer. For
	  information about how to disable these programs, see the printed or online
	  documentation for the program.
	
	
	After you complete these steps, you should be able to reinstall Expedia Streets
	without any further problems.
	
	MORE INFORMATION
	================
	
	TSR programs, such as anti-virus and uninstallation programs, can often
	interfere with the successful installation of a program.
	
	Additional query words: auto map automap auto-map mmtitles abicoll.dll multi multi-media media mm
	
	======================================================================
	Keywords          : kberrmsg kbsetup kbimu kbfaq
	Technology        : kbHomeProdSearch kbExpediaSearch kbExpediaStreets98
	Version           : WINDOWS:98
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
