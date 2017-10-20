---
layout: page
title: "Q114138: PRB: FoxPro Icon in .EXE Won't Install with Norton Desktop 3.0"
permalink: /kb/114/Q114138/
---

## Q114138: PRB: FoxPro Icon in .EXE Won't Install with Norton Desktop 3.0

{% raw %}

	Article: Q114138
	Product(s): Microsoft FoxPro
	Version(s): 2.5x,2.6
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FoxPro for Windows Distribution Kit, versions 2.5x, 2.6 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	By using ADDICON.APP, you can embed an icon in a FoxPro for Windows .EXE file.
	If you use the Setup Wizard to create a set of setup disks, you can specify
	which group the icon should appear in inside Program Manager. However, after a
	user runs the Setup program, the icon that is installed is the standard FoxPro
	icon, not the icon you specified in ADDICON.APP. No error message is received
	during installation.
	
	CAUSE
	=====
	
	Norton Desktop 3.0 is running instead of the Windows Program Manager.
	
	The SETUP.EXE file used by FoxPro uses Windows API function calls to set up the
	icon in the Program Manager. Norton Desktop does not recognize these calls and
	uses the FoxPro default icon instead.
	
	RESOLUTION
	==========
	
	If the Setup disks are to work correctly, Program Manager must be used as the
	Windows shell.
	
	To set up the icon, do one of the following:
	
	Method 1
	--------
	
	Have the user change the icon manually using Norton Desktop.
	
	Method 2
	--------
	
	1. Open the user's SYSTEM.INI file.
	
	2. In the [boot] section, put a semicolon (;) at the beginning of the
	  "SHELL=NDW.EXE" line. This will comment the line out.
	
	3. In the same section, add the following line:
	
	        SHELL=PROGMAN.EXE
	
	4. Restart Windows.
	
	5. Reinstall the .EXE file built with FoxPro.
	
	This will correctly install the icon. Once this is done, reenable Norton Desktop
	by commenting out the "SHELL=PROGMAN.EXE" line and uncommenting the
	"SHELL=NDW.EXE" line and then restarting Windows.
	
	MORE INFORMATION
	================
	
	Norton Desktop is manufactured by a vendor independent of Microsoft; we make no
	warranty, implied or otherwise, regarding this product's performance or
	reliability.
	
	Additional query words: FoxWin 2.50 2.50a 2.50b 2.60 NDW Desk Top dk
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbFoxproSearch kbFoxProDK250xSearch kbFoxProDKSearch
	Version           : :2.5x,2.6
	
	=============================================================================
	

{% endraw %}
