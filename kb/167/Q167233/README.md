---
layout: page
title: "Q167233: Windows NT Boot Error Msg: Missing Last Known Good Menu"
permalink: /kb/167/Q167233/
---

## Q167233: Windows NT Boot Error Msg: Missing Last Known Good Menu

{% raw %}

	Article: Q167233
	Product(s): Microsoft Windows NT
	Version(s): 4.0,4.0a,4.5
	Operating System(s): 
	Keyword(s): kberrmsg
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft BackOffice Small Business Server versions 4.0, 4.0a, 4.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When your computer running Windows NT starts up, you may receive on of the
	following error messages:
	
	  Windows NT could not start because the following file is missing or corrupt:
	  \%systemroot%\SYSTEM32\CONFIG\SYSTEMHardware Profile/Last Known Good menu.
	
	  -or-
	
	  Windows NT could not start because the following are missing or corrupt:
	  \Winnt.sbs\system32\config\SYSTEMware profile/last known good menu.
	  You can attempt to repair this file by starting Windows NT setup.
	
	  -or-
	
	  Windows NT could not start because the following are missing or corrupt:
	  \Winnt\system32\config\SYSTEMware profile/last known good menu.
	  You can attempt to repair this file by starting Windows NT setup.
	
	NOTE: %systemroot% is the installation directory for Windows NT.
	
	CAUSE
	=====
	
	Both the System and System.alt registry files are corrupted or missing.
	
	RESOLUTION
	==========
	
	Use the emergency repair disk (ERD) and select "inspect registry files" on the
	first menu selection screen. On the second menu selection screen select "replace
	SYSTEM configuration." This will replace the damaged System registry hive in the
	%systemroot%\System32\Config directory with the System hive on the ERD.
	
	NOTE: Any system changes made after the ERD was last updated will be lost.
	
	For additional information, please see the following article(s) in the Microsoft
	Knowledge Base:
	
	  ARTICLE-ID: Q103280
	  TITLE : Using an Emergency Repair Disk Created by Windows NT
	
	If there is no ERD, a restore from a tape that contains a backup of the registry
	will be needed.
	
	If you do not have an ERD or backup tape, you can recover the System hive by
	expanding it from the %systemroot%\repair directory using the following steps:
	
	1. Install a parallel copy of Windows NT to an NTTemp directory.
	
	2. From a command line prompt, go to the repair directory of the original
	  Windows NT installation.
	
	  For example: CD \winnt\repair
	
	3. Use Expand.exe to expand the System._ file to System.
	
	  Expand SYSTEM._ SYSTEM
	
	4. Copy the expanded SYSTEM file to the %systemroot%\System32\Config directory.
	
	  Copy System c:\winnt\system32\config
	
	5. Try to boot back into the original Windows NT installation.
	
	MORE INFORMATION
	================
	
	During the boot process, if the system hive is corrupted, Windows NT will try to
	use Last Known Good by accessing System.alt. If both the System and System.alt
	files are corrupted, Windows NT will not be able to boot.
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbAudDeveloper kbSBServSearch kbSBServ400 kbSBServ400a kbSBServ450
	Version           : :4.0,4.0a,4.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
