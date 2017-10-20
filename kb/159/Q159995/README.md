---
layout: page
title: "Q159995: Windows NT Does Not Detect Previous WinNT 3.5x Install"
permalink: /kb/159/Q159995/
---

## Q159995: Windows NT Does Not Detect Previous WinNT 3.5x Install

{% raw %}

	Article: Q159995
	Product(s): Microsoft Windows NT
	Version(s): WinNT:3.51,4.0
	Operating System(s): 
	Keyword(s): kbsetup
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to upgrade your current version of Windows NT, the following
	error message may appear:
	
	  A previous version of Windows NT could not be found on the system, Press F3
	  to exit.
	
	If you are using the Upgrade CD-ROM Media, the following error message may
	appear:
	
	  No previous version of Windows NT could be found on your computer. Setup is
	  unable to verify that you qualify to use this upgrade product. Press F3 to
	  exit.
	
	If you have a previous version of Windows NT, Setup lets you install a new copy
	of Windows NT 4.0, but Setup will not allow you to upgrade to Windows NT 4.0.
	
	RESOLUTION
	==========
	
	Use the Registry Editor (Regedt32.exe) to modify the following values:
	
	WARNING: Using Registry Editor incorrectly can cause serious, system-wide
	problems that may require you to reinstall Windows NT to correct them. Microsoft
	cannot guarantee that any problems resulting from the use of Registry Editor can
	be solved. Use this tool at your own risk.
	
	1. Start Registry Editor (Regedt32.exe) and locate the following subkey:
	
	  Hkey_Local_Machine\System\Setup\SystemSetupInProgress
	  Hkey_Local_Machine\System\Setup\UpgradeInProgress
	
	2. Double-click SystemSetupInProgress and change the value from 1 to 0.
	
	3. Locate the following subkey:
	
	  Hkey_Local_Machine\Software\Microsoft\WindowsNT\ 
	  CurrentVersion\
	
	4. Verify the following registry entry is set to 3.5 or 3.51.
	
	  CurrentVersion:REG_SZ:3.5 or 3.51
	
	5. Quit Registry Editor and then restart your computer for these changes to take
	  effect.
	
	Clearing both to zero will allow Windows NT to prompt for the previous
	installation upgrade.
	
	NOTE: For additional information on difficulty upgrading Windows NT 4.0, please
	see the following articles in the Microsoft Knowledge Base:
	
	  ARTICLE-ID: Q154538
	  TITLE: Windows NT 4.0 Upgrade CD Will Not Upgrade NT 4.0 Installation
	
	  ARTICLE-ID: Q160175
	  TITLE: What Does WinNT 4.0 look for in a Valid WinNT 3.51 Install
	
	
	MORE INFORMATION
	================
	
	During the upgrade process, Windows NT Setup verifies the following before
	providing an upgrade option to existing installations. If the above steps do not
	resolve the upgrade option, verify the following components are present and/or
	correct.
	
	- Ensure the current version of Windows NT is bootable before proceeding with
	  an upgrade.
	
	- Make sure the SCSI or IDE controller detected by Windows NT 4.0 Setup is the
	  correct driver. (You may need to select F6 during setup do manually install
	  the correct driver.)
	
	- The Boot.ini file must contain a valid ARC path for the current system
	  partition.
	
	- A valid Setup.log file must be present in the %SystemRoot%\Repair directory.
	
	- You must break any mirror sets on the boot or system partition before
	  upgrading.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	Additional query words: could not detect previous installation step-up stepup prodnt
	======================================================================
	Keywords          : kbsetup 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT400search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search
	Version           : WinNT:3.51,4.0
	
	=============================================================================
	

{% endraw %}
