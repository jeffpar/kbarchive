---
layout: page
title: "Q165748: How to Disable a Service or Device that Prevents NT from Booting"
permalink: kb/165/Q165748/
---

## Q165748: How to Disable a Service or Device that Prevents NT from Booting

	Article: Q165748
	Product(s): Microsoft Windows NT
	Version(s): WINDOWS:2000; winnt:3.51,4.0
	Operating System(s): 
	Keyword(s): kb3rdparty kbenv
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.51, 4.0 
	- Microsoft Windows 2000 Server 
	- Microsoft Windows 2000 Professional 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If a service or device driver is started automatically and is incompatible with
	the current version of Windows NT, the service or device driver may not allow
	Windows NT to remain booted long enough for you to shut the service off or
	disable the outdated device driver.
	
	CAUSE
	=====
	
	This may occur when Windows NT is upgraded to a new version prior to removing or
	stopping third-party devices or services.
	
	RESOLUTION
	==========
	
	Perform the following steps to resolve this problem:
	
	WARNING: Using Registry Editor incorrectly can cause serious, system-wide
	problems that may require you to reinstall Windows NT to correct them. Microsoft
	cannot guarantee that any problems resulting from the use of Registry Editor can
	be solved. Use this tool at your own risk.
	
	1. Install a parallel copy of Windows NT to a different folder on your local
	  hard disk.
	
	NOTE: For the procedure and additional information on parallel installation,
	click the article number below to view the article in the Microsoft Knowledge
	Base:
	
	  Q259003 How and Why to Perform a Parallel Installation of Windows NT 4.0
	
	2. Run Regedt32.exe from the newly installed version of Windows NT and go to the
	  following key:
	
	  HKEY_LOCAL_MACHINE
	
	3. On the Registry menu, click Load Hive, and then open the following registry
	  file in the original Windows NT installation:
	
	     %SystemRoot%\System32\Config\System
	
	  Assign it a name other than System (such as "Test") in the next dialog box
	  (the Key Name dialog box).
	
	  NOTE: The file must be open before the key name is changed.
	
	4. Go to the following registry key and note the value for Current:REG_DWORD
	  (this selects which ControlSet00x to load when booting and is the one that
	  needs modification):
	
	  HKEY_LOCAL_MACHINE\TEST\Select
	
	5. Perform the following steps to disable a service:
	
	  a. Go to the following registry key:
	
	     HKEY_LOCAL_MACHINE\TEST\ControlSet00x\Services
	     \<Name of suspected service>
	
	     Where x is the value of Current:REG_DWORD
	
	  b. Change the value of Start:REG_DWORD: to 0x4.
	
	     NOTE: Other Valid Services start options are:
	
	        Automatic   0X2
	        Manual      0x3
	        Disabled    0x4
	
	6. Perform the following steps to disable a device driver:
	
	  a. Go to the following registry key:
	
	     HKEY_LOCAL_MACHINE\TEST\ControlSet00x\Services
	     \<Name of suspect Driver>
	
	     Where x is the value of Current:REG_DWORD
	
	  b. Change the value of Start:REG_DWORD: to 0x4.
	
	     NOTE: Other Valid Services start options are:
	
	        Boot        0x0
	        System      0x1
	        Automatic   0X2
	        Manual      0x3
	        Disabled    0x4
	
	  c. After you have made the necessary changes, go to the following registry
	     key and then click Unload Hive on the Registry menu:
	
	     HKEY_LOCAL_MACHINE\TEST
	
	  d. Exit Registry Editor, exit the parallel version of Windows NT, and then
	     reboot the original version of Windows NT. The service or device that
	     corresponds to the edited key are now disabled.
	
	Additional query words: 3.50
	
	======================================================================
	Keywords          : kb3rdparty kbenv 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT400search kbWinNTW351search kbWinNTW351 kbwin2000Serv kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbwin2000ServSearch kbwin2000Search kbwin2000ProSearch kbwin2000Pro kbWinNTS351search
	Version           : WINDOWS:2000; winnt:3.51,4.0
	
	=============================================================================
	
