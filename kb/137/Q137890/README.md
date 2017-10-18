---
layout: page
title: "Q137890: HOWTO: Create a User-Defined Service"
permalink: kb/137/Q137890/
---

## Q137890: HOWTO: Create a User-Defined Service

	Article: Q137890
	Product(s): Microsoft Windows NT
	Version(s): 2000,3.51,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.51, 4.0 
	- Microsoft Windows 2000 Advanced Server 
	- Microsoft Windows 2000 Server 
	- Microsoft Windows 2000 Professional 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, make sure you understand how to restore it
	if a problem occurs. For information on how to do this, view the "Restoring
	the Registry" or the "Restoring a Registry Key" online Help topics in
	Registry Editor.
	
	SUMMARY
	=======
	
	The Windows NT Resource Kit provides two utilities that allow you to create a
	Windows NT user-defined service for Windows NT applications and some 16-bit
	applications (but not for batch files).
	
	Instrsrv.exe installs and removes system services from Windows NT and Srvany.exe
	allows any Windows NT application to run as a service.
	
	MORE INFORMATION
	================
	
	To create a Windows NT user-defined service, perform the following steps:
	
	1. At a MS-DOS command prompt(running CMD.EXE), type the following command:
	
	  <path>\INSTSRV.EXE <My Service> <path>\SRVANY.EXE
	
	  where <path> is the drive and directory of the Windows NT Resource Kit
	  (i.e., C:\RESKIT) and <My Service> is the name of the service you are
	  creating.
	
	  WARNING: Using Registry Editor incorrectly can cause serious problems that may
	  require you to reinstall your operating system. Microsoft cannot guarantee
	  that problems resulting from the incorrect use of Registry Editor can be
	  solved. Use Registry Editor at your own risk.
	
	  For information about how to edit the registry, view the "Changing Keys And
	  Values" online Help topic or the "Add and Delete Information in the Registry"
	  and "Edit Registry Data" online Help topics in Registry Editor.
	
	  NOTE: You should back up the registry before you edit it.
	
	2. Run Registry Editor (Regedt32.exe)and locate the following subkey:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\<My Service>
	
	3. From the Edit menu, click Add Key. Type the following and click OK:
	
	  Key Name: Parameters
	  Class : <leave blank>
	
	4. Select the Parameters key.
	
	5. From the Edit menu, click Add Value. Type the following and click OK:
	
	  Value Name: Application
	  Data Type : REG_SZ
	  String : <path>\<application.ext>
	
	  where <path>\<application.ext> is the drive and full path to the
	  application executable including the extension (i.e., C:\WinNT\Notepad.exe)
	
	6. Close Registry Editor.
	
	By default, a newly created service it configured to run Automatically when the
	system is restarted. To change this setting to Manual, run the Services applet
	from Control Panel and change the Startup value to Manual. A service set to
	Manual can be started in one of several ways:
	
	  - From the Services applet in Control Panel
	
	  - From a MS-DOS command prompt, type the following:
	
	  NET START <My Service>
	
	  - Use the Sc.exe utility from the Resource Kit. Type the following from a
	  MS-DOS command prompt:
	
	  <path>\Sc.exe start <My Service>
	
	  where <path> is the drive and directory of the Windows NT Resource Kit
	  (i.e., C:\Reskit).
	
	For more information on installing and removing a user-defined service, please
	see the Srvany.wri document provided with the Windows NT Resource Kit utilities
	(i.e., C:\Reskit\Srvany.wri). This document can also be found on the Windows NT
	Resource Kit CD in the Common\Config directory.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT400search kbWinNTW351search kbWinNTW351 kbwin2000AdvServ kbwin2000AdvServSearch kbwin2000Serv kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbwin2000ServSearch kbwin2000Search kbwin2000ProSearch kbwin2000Pro kbWinNTS351search kbWinAdvServSearch
	Version           : :2000,3.51,4.0
	Issue type        : kbhowto
	
	=============================================================================
	
