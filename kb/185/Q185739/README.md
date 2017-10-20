---
layout: page
title: "Q185739: How to Disable Restarting GUI Mode Setup"
permalink: /kb/185/Q185739/
---

## Q185739: How to Disable Restarting GUI Mode Setup

{% raw %}

	Article: Q185739
	Product(s): Microsoft Windows NT
	Version(s): 2000,3.1,3.5,3.51,4.0,4.0a
	Operating System(s): 
	Keyword(s): sbs
	Last Modified: 16-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.1, 3.5, 3.51, 4.0 
	- Microsoft BackOffice Small Business Server versions 4.0, 4.0a 
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows 2000 Advanced Server 
	- Microsoft Windows 2000 Server 
	- Microsoft Windows 2000 Professional 
	- Microsoft Small Business Server 2000 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, make sure that you understand how to restore it if
	a problem occurs. For information about how to do this, see the "Restoring the
	Registry" Help topic in Regedit.exe or the "Restoring a Registry Key" Help topic
	in Regedt32.exe.
	
	SUMMARY
	=======
	
	When you choose to perform an in-place upgrade over an existing Windows NT
	installation, Windows NT Text-mode Setup adds or modifies some or all of
	following Windows NT Registry values:
	
	- HKEY_LOCAL_MACHINE\SYSTEM\Setup
	
	  RestartSetup:REG_DWORD:0x1
	  SystemSetupInProgress:REG_DWORD:0x1
	  UpgradeInProgress:REG_DWORD:0x1
	  SetupType:REG_DWORD:0x0
	
	- HKEY_LOCAL_MACHINE\System\CurrentControlSet\Control\Session Manager
	
	  BootExecute:REG_MULTI_SZ: autocheck autochk* sprestrt
	
	When you restart the computer, you automatically enter GUI-mode Setup.
	
	
	MORE INFORMATION
	================
	
	If it is desirable to back out of the in place upgrade, you will need to modify
	the Windows NT registry to reset the values back to the default or replace the
	SYSTEM hive from a current emergency repair disk:
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall your operating system. Microsoft cannot guarantee that
	problems resulting from the incorrect use of Registry Editor can be solved. Use
	Registry Editor at your own risk.
	
	For information about how to edit the registry, view the "Changing Keys And
	Values" online Help topic in Registry Editor (Regedit.exe) or the "Add and
	Delete Information in the Registry" and "Edit Registry Data" online Help topics
	in Regedt32.exe. Note that you should back up the registry before you edit it.
	
	1. Install a parallel copy of Windows NT to a different folder on your local
	  hard disk.
	
	2. Run Regedt32.exe from the newly installed version of Windows NT and go to the
	  following key:
	
	  HKEY_LOCAL_MACHINE
	
	3. Click Load Hive on the Registry menu and open the following registry file on
	  the original Windows NT installation:
	
	  %SystemRoot%\System32\Config\System
	
	  Assign it a name other than System (such as Test).
	
	4. Go to the following registry key and note the value for Current:REG_DWORD
	  (this selects which ControlSet00x to load when booting and is the one that
	  needs modification):
	
	  HKEY_LOCAL_MACHINE\TEST\Select
	
	5. Go to the following registry key
	
	  HKEY_LOCAL_MACHINE\TEST\ControlSet00x\Control\Session Manager
	
	  where x is the value of Current:REG_DWORD
	
	6. Double-click the following entry:
	
	  BootExecute:REG_MULTI_SZ: autocheck autochk* sprestrt
	
	  Remove the entry sprestrt from the multi-string editor box, and then click OK.
	
	7. Go to the following registry key:
	
	  HEY_LOCAL_MACHINE\test\Setup
	
	8. Reset all of the following Registry entries to have a value of 0x0:
	
	  RestartSetup:REG_DWORD:0x0
	  SystemSetupInProgress:REG_DWORD:0x0
	  UpgradeInProgress:REG_DWORD:0x0
	  SetupType:REG_DWORD:0x0
	
	9. After you have made the necessary changes, go to the following registry key
	  and then click Unload Hive on the Registry menu:
	
	  HKEY_LOCAL_MACHINE\TEST
	
	10. Exit Registry Editor, exit the parallel version of Windows NT, and then
	  restart the original version of Windows NT. The Setup program should NOT
	  restart.
	
	11. After you are back in the original Windows NT installation, you will need to
	  re-enable any disabled devices and services the upgrade process turned off.
	
	12. Run Regedit (Windows 95 registry editor) and select the following key:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services
	
	13. From the Edit menu, select Find, and then type OldStart in the Find What
	  box.
	
	14. For every disabled device or service, change the Start value to equal the
	  OldStart value, pressing F3 to find the next value until all devices and
	  services are set back to default values.
	
	15. Exit Regedit and restart the computer. You should be back to an operational
	  system
	
	Additional query words: smallbiz kbhowto winnt
	
	======================================================================
	Keywords          : sbs 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbwin2000AdvServ kbwin2000AdvServSearch kbwin2000Serv kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS310 kbwin2000ServSearch kbwin2000Search kbwin2000ProSearch kbwin2000Pro kbWinNTS351search kbWinNTS350search kbWinNTS310search kbAudDeveloper kbWinNT310Search kbSBServSearch kbWinAdvServSearch kbZNotKeyword3 kbSBServ400 kbSBServ400a kbSBServ2000
	Version           : :2000,3.1,3.5,3.51,4.0,4.0a
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
