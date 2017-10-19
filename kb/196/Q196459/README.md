---
layout: page
title: "Q196459: Terminal Server Upgrading IE 4.0 from Either IE 3.0 or IE 2.0"
permalink: /kb/196/Q196459/
---

## Q196459: Terminal Server Upgrading IE 4.0 from Either IE 3.0 or IE 2.0

	Article: Q196459
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, make sure you understand how to restore it if
	a problem occurs. For information on how to do this, view the "Restoring
	the Registry" online Help topic in Regedit.exe or the "Restoring a Registry
	Key" online Help topic in Regedt32.exe.
	
	SYMPTOMS
	========
	
	When you try to install Internet Explorer 4.0 or 4.01 on Windows Terminal Server
	using the Active Setup Wizard, you may receive the following error message:
	
	  Setup was unable to install all the components.
	
	CAUSE
	=====
	
	This problem occurs because there is some combination of the following DLLs that
	causes Internet Explorer 4.0 to exit without trying to install.
	
	When you look at the Setup Wizard log file, Active Setup Log.txt, you will see
	some DLLs found and some missing as listed below in the log file:
	
	  Logging information for IE4Setup.exe ...
	  Checking for IE4 version.
	  File Version :C:\WTSRV\System32\SHELL32.DLL: Version:4.0.1381.32772
	  File Version :C:\WTSRV\System32\shdocvw.dll: Version:0.0.0.0
	  Version of ActiveX files.
	  File Version :C:\WTSRV\System32\wininet.dll: Version:4.70.0.1215
	  File Version :C:\WTSRV\System32\urlmon.dll: Version:4.70.0.1215
	  File Version :C:\WTSRV\System32\shdocvw.dll: Version:0.0.0.0
	  File Version :C:\WTSRV\System32\shlwapi.dll: Version:0.0.0.0
	  Version of trust files.
	  File Version :C:\WTSRV\System32\Wintrust.dll: Version:4.75.1381.32772
	  File Version :C:\WTSRV\System32\digsig.dll: Version:4.73.1381.40
	  File Version :C:\WTSRV\System32\INSENG.DLL: Version:4.72.3110.6
	  File Version :C:\WTSRV\System32\JOBEXEC.DLL: Version:4.72.3110.7
	
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
	
	1. Delete all above DLLs outlined above except Shell32.dll
	
	2. In Registry Editor, export the following registry key to the desktop (for
	  backup purposes):
	
	  HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Active Setup
	
	3. Delete the following registry key:
	
	  HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Active Setup
	
	4. Quit Registry Editor.
	
	5. Verify that the Oleaut32.dll file is present in the Windows\System32 folder.
	  If this file is not present, extract a new copy from the installation
	  distribution.
	
	6. In the <systemroot> folder, rename the following file with a .old file
	  extension:
	
	  Active Setup Log.txt
	
	7. Rerun setup.
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServSearch
	Issue type        : kbprb
	
	=============================================================================
	
