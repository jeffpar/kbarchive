---
layout: page
title: "Q216684: Error Message: The System Is Not Fully Installed"
permalink: /kb/216/Q216684/
---

## Q216684: Error Message: The System Is Not Fully Installed

	Article: Q216684
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbWinNT400sp5fix
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	When you use the System Preparation tool (Sysprep) on a computer running Windows
	NT, you may receive the following error message after rebooting:
	
	  Windows Message:
	  The system is not fully installed.
	  Please run setup again.
	
	CAUSE
	=====
	
	The registry setting that Sysprep uses to mark its progress is incorrectly set
	when some third-party network clients are installed on the computer.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	the individual software update. For information on obtaining the latest service
	pack, please go to:
	
	- http://www.microsoft.com/Windows/ServicePacks/
	
	-or-
	
	- Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	For information on obtaining the individual software update, contact Microsoft
	Product Support Services. For a complete list of Microsoft Product Support
	Services phone numbers and information on support costs, please go to the
	following address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	
	WORKAROUND
	==========
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	NOTE: The following steps are to be used with the non-hotfixed version of
	Sysprep.exe only.
	
	To prevent this issue from occurring, remove the third-party network client from
	the computer before making the image or running Sysprep.
	
	To work around this issue, install a parallel installation of Windows NT 4.0 in a
	different partition and then use Registry Editor to change the data value of the
	SystemSetupInProgress value from 1 to 0:
	
	1. Start Registry Editor (Regedt32.exe).
	
	2. On the Window menu, click HKEY_LOCAL_MACHINE.
	
	3. On the Registry menu, click Load Hive.
	
	4. Click the %SystemRoot%\System32\Config\System file, and then click Open.
	
	5. Type a name for the key, and then click OK.
	
	6. Double-click the name you chose in the previous step.
	
	7. Double-click the Setup key.
	
	8. Double-click the SystemSetupInProgress value in the right pane.
	
	9. Change the data value from 1 to 0, and then click OK.
	
	10. Click the key name you chose in step 5, and then click Unload Hive on the
	  Registry menu.
	
	11. Quit Registry Editor and then restart the computer.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbWinNT400sp5fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
