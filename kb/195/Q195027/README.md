---
layout: page
title: "Q195027: STOP 0xC000021A in Winlogon Caused by PCAnywhere"
permalink: /kb/195/Q195027/
---

## Q195027: STOP 0xC000021A in Winlogon Caused by PCAnywhere

{% raw %}

	Article: Q195027
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, make sure you understand how to restore it if
	a problem occurs. For information on how to do this, view the "Restoring
	the Registry" online Help topic in Regedit.exe or the "Restoring a Registry
	Key" online Help topic in Regedt32.exe.
	
	SYMPTOMS
	========
	
	After you install Symantec's pcANYWHERE version 8.0, your computer may stop
	responding (hang) and display the following error message when you restart the
	computer:
	
	  STOP 0xC000021A: The Windows Logon Process terminated unexpectedly with
	  status 0x00000xxx
	
	NOTE: If this problem occurs after you upgrade a computer running Windows NT 3.51
	and pcANYWHERE to Windows NT 4.0, see the following Microsoft Knowledge Base
	article:
	
	  Q158636 STOP 0x1E in Win32k.sys Upgrading from WinNT 3.51 to WinNT 4.0
	
	CAUSE
	=====
	
	pcANYWHERE replaces the default Graphical Identification and Authentication
	(GINA) file, Msgina.dll, with the Awgina.dll file. This replacement does not
	interact properly with the Winlogon process.
	
	RESOLUTION
	==========
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall your operating system. Microsoft cannot guarantee that
	problems resulting from the incorrect use of Registry Editor can be solved. Use
	Registry Editor at your own risk.
	
	For information about how to edit the registry, view the "Changing Keys And
	Values" Help topic in Registry Editor (Regedit.exe) or the "Add and Delete
	Information in the Registry" and "Edit Registry Data" Help topics in
	Regedt32.exe. Note that you should back up the registry before you edit it. If
	you are running Windows NT, you should also update your Emergency Repair Disk
	(ERD).
	
	To resolve this issue, follow these steps:
	
	1. Perform a parallel installation of Windows NT to provide access in renaming
	  the file or follow the steps found in the following Microsoft Knowledge Base
	  article:
	
	  Q164471 Replacing System Files Using a Modified Emergency Repair Disk.
	
	2. Restart the computer using the new Windows NT installation.
	
	3. Install the latest Windows NT 4.0 service pack. This may be required if you
	  need to replace files from the prior installation.
	
	4. Disable the pcANYWHERE service in the prior installation so that pcANYWHERE
	  does not initialize by following the steps found in the following Microsoft
	  Knowledge Base article:
	
	  Q165748 How to Disable a Service or Device that Prevents NT from Booting
	
	5. After disabling the pcANYWHERE service, click Start, click Run, type
	  REGEDT32, and then click OK.
	
	6. Click the Window menu and then click HKEY_LOCAL_MACHINE on Local Machine.
	  Click Registry menu, and then click Load Hive. Type in the path to the System
	  hive of the prior installation (%systemroot%\system32\config\system), and
	  then click Open.
	
	7. When prompted for the name of the key, enter "TEST" (without quotation
	  marks).
	
	8. Scroll down to the following registry entry:
	
	  HKEY_LOCAL_MACHINE\TEST\ControlSetXXX\Services\AW_HOST
	
	  Double-click the Start value, type the numeral four into the Data field, and
	  then click OK. This will disable the AW_HOST service in the prior
	  installation.
	
	9. Scroll down to the following registry entry:
	
	  HKEY_LOCAL_MACHINE\TEST\ControlSetXXX\Services\AWHOST32
	
	  Double-click the Start value, type the numeral four into the Data field, and
	  then click OK. This will disable the AW_HOST service in the prior
	  installation.
	
	10. Double-click the minus sign in the folder representing the TEST key and
	  select the TEST key. Go to the Registry menu and select unload hive. This
	  will save the registry changes to the prior installation's SYSTEM hive.
	
	At this point, it is possible that disabling the services will allow Windows NT
	to start properly. Shut down the parallel installation and try to boot using the
	prior version of Windows NT. If you still cannot log on successfully, and
	continue to receive STOP 0xC000021A errors, it is recommended that you modify
	the GINA startup value in the registry. To do this:
	
	1. Restart the computer using the newer Windows NT installation.
	
	2. Click Start, click Run, type REGEDT32, and then click OK.
	
	3. Click the Window menu and then click HKEY_LOCAL_MACHINE on Local Machine.
	  Click Registry menu, and then click Load Hive. Type in the path to the
	  Software hive of the prior installation
	  (%systemroot\system32\config\software), and then click Open.
	
	4. When prompted for the name of the key, enter "TEST" (without quote marks).
	
	5. Scroll down to the following registry entry:
	
	  HKEY_LOCAL_MACHINE\TEST\Microsoft\Windows NT\Current Version\WinLogon
	
	6. Double-click the GinaDLL value, replace the Awgina.dll text with Msgina.dll,
	  and then click OK.
	
	7. Verify that the Windows NT 4.0 Service Pack 3 version of the Msgina.dll file
	  is in the path specified by this registry entry. If it is not, copy this file
	  from the newer installation to the prior installation.
	
	8. Double-click the minus sign in the folder representing the TEST key and
	  highlight the TEST key. Go to the Registry menu and select unload hive. This
	  will save the registry changes to the prior installation's SYSTEM hive.
	
	9. Exit REGEDT32 and restart the computer using the prior installation of
	  Windows NT.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	MORE INFORMATION
	================
	
	For more information on troubleshooting Stop errors, please refer to the
	following Microsoft Knowledge Base articles:
	
	  Q156669 How to Troubleshoot a Stop 0xC000021A
	
	
	You may also contact Symantec Technical Support for further information regarding
	this issue at (541) 465-8430 or visit their Web site at:
	
	  http://www.symantec.com/
	
	The third-party contact information included in this article is provided to help
	you find the technical support you need. This contact information is subject to
	change without notice. Microsoft in no way guarantees the accuracy of this
	third-party contact information.
	
	NOTE: The third-party products discussed here are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words: remote control
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
