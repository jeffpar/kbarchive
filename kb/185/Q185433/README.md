---
layout: page
title: "Q185433: ERROR: Unable to Open Msvcrt40.dll"
permalink: kb/185/Q185433/
---

## Q185433: ERROR: Unable to Open Msvcrt40.dll

	Article: Q185433
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0,3.0 SP1,3.0 SP2,3.0 SP3,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0 SP1, 3.0 SP2, 3.0 SP3, 4.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, make sure you understand how to restore it if
	a problem occurs. For information about how to do this, view the "Restoring
	the Registry" Help topic in Regedit.exe or the "Restoring a Registry Key"
	Help topic in Regedt32.exe.
	
	SYMPTOMS
	========
	
	When you trying to install the Windows 95 SNA client on a computer running
	Windows NT, it may cause the following error with Msvcrt40.dll:
	
	  Unable to open <drive:>\path\system\MSVCRT40.DLL.
	  File may be in use by another application.
	
	CAUSE
	=====
	
	This problem occurs after detecting mismatched versions of Msvcrt40.dll, which
	are dependent during the setup process.
	
	WORKAROUND
	==========
	
	Make sure there are no applications running that may have a lock on Msvcrt40.dll
	by doing the following:
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall your operating system. Microsoft cannot guarantee that
	problems resulting from the incorrect use of Registry Editor can be solved. Use
	Registry Editor at your own risk.
	
	For information about how to edit the registry, view the "Changing Keys And
	Values" Help topic in Registry Editor (Regedit.exe) or the "Add and Delete
	Information in the Registry" and "Edit Registry Data" Help topics in
	Regedt32.exe. Note that you should back up the registry before you edit it. If
	you are running Windows NT, you should also update you Emergency Repair Disk
	(ERD).
	
	1. Start Registry Editor (REGEDIT), and go to the following subkey:
	
	  HKEY_LOCAL_MACHINE\Software\Microsoft\Windows\CurrentVersion\Run
	
	2. Export the Run key by selecting it, then from the Registry menu, click Export
	  Registry File, and then save it to the root of your hard drive as Run.reg.
	
	3. Delete all the keys on the right-hand pane in:
	
	  HKEY_Local_Machine\Software\Microsoft\Windows\CurrentVersion\Run
	
	  except for the <Default> key.
	
	4. Restart the workstation, log back on to the domain, and press the Shift key
	  to bypass the Startup group entries.
	
	5. Press Ctrl+Alt+Del, and click Task Manager in the Windows NT Security dialog
	  box, and then end all tasks except Explorer.
	
	At this point, any applications that might have had a lock on Msvcrt40.dll are
	not in use. If an older version of Msvcrt40.dll is located in the system path,
	this version should be renamed and replaced with the default version of the .dll
	file included on the Windows NT 4.0 or SNA Server CD.
	
	To do this, perform the following steps:
	
	1. Run the PATH command at an MS-CMD prompt to check the current system path.
	
	2. Locate all instances of Msvcrt40.dll that exist in the system path.
	
	  NOTE: The system path may span several drives.
	
	3. Run the DEPENDS program against these .dll files and compare their versions
	  with the ones listed in this document.
	
	4. Rename any old versions of Msvcrt40.dll that may exist, and replace with the
	  one on the Windows NT or SNA Server CD. If multiple copies of the same .dll
	  file exists, in the system path, rename all duplicate copies and leave a
	  single instance in the <ntroot>\system32 directory.
	
	5. Proceed to install the SNA Client.
	
	6. After installation is complete, double-click on Run.reg to import key used by
	  other applications back into the registry.
	
	MORE INFORMATION
	================
	
	The following Microsoft VC++ .dll files are the ones that ship with Windows NT
	4.0, SNA Server 3.0 and 4.0. The Base and Product Version can be viewed using
	the DEPENDS program, or right-click on each .dll file and click Properties, then
	click the Version tab:
	
	  Module        Base        Product Version  Product
	
	  MSVCRT40.DLL  0x779D0000  4.20.0.6172      Windows NT 4.0
	  MSVCRT40.DLL  0x779D0000  4.20.0.6164      SNA Server 3.0 and 4.0
	
	The setup error occurred because the following Msvcrt40.dll was installed on the
	system by another application (with the other .dll files matching the versions
	listed above.
	
	  Module        Base        Product Version  Product
	
	  MSVCRT40.DLL  0x10200000  4.0.0.5270       Unknown
	
	Msvcrt40.dll supports C runtime library functions, which may be used and
	distributed by other applications developed using Microsoft Visual C++. If other
	applications happen to install MSVCRT40.DLL and replace the version installed by
	the Windows 95 SNA client, see the following articles in the Microsoft Knowledge
	Base:
	
	  Q182882 Upgrading SNA 3.0 to 4.0 May Cause Failure on File MFC42U.DLL
	
	  Q168006 TN3270 Fails with Access Violation in ntdll!RtlFreeHeap
	
	You can obtain the Dependency Walker (Depends.exe) from the Platform SDK CD-ROM
	that comes with the MSDN. It can also be downloaded from the following URL:
	
	  http://www.microsoft.com/msdownload/platformsdk/sdktools.htm
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ400 kbSNAServ300SP3 kbSNAServ300SP1 kbSNAServ300SP2
	Version           : WINDOWS:3.0,3.0 SP1,3.0 SP2,3.0 SP3,4.0
	Issue type        : kbhowto
	
	=============================================================================
	
