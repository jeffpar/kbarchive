---
layout: page
title: "Q250485: PRB: Setupmgx.dll Could Not Be Loaded or Corrupt Err Msg"
permalink: /kb/250/Q250485/
---

## Q250485: PRB: Setupmgx.dll Could Not Be Loaded or Corrupt Err Msg

	Article: Q250485
	Product(s): Microsoft Windows NT
	Version(s): WINDOWS:
	Operating System(s): 
	Keyword(s): kbsetup kbOSWin2000 kbDSupport
	Last Modified: 24-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 2000 Advanced Server 
	- Microsoft Windows 2000 Server 
	- Microsoft Windows 2000 Professional 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you open the Support\tools\Deploy.cab folder and click Setupmgr.exe [as is
	stated in the OEM Preinstalation Kit (OPK) User's Guide] a "Browse For Folder"
	screen is displayed. You can use this screen to save the Setupmgr.exe file in
	any folder that you select on the hard disk.
	
	However, when you save the Setupmgr.exe file in any folder and then click the
	file to run Setup Manager Wizard, the following error message is displayed:
	
	  The file <drive letter>\<folder_name>\SETUPMGX.DLL could not be
	  loaded or corrupt.The Setup Manager cannot continue.
	
	CAUSE
	=====
	
	The Setupmgx.dll file is missing.
	
	RESOLUTION
	==========
	
	To resolve the problem:
	
	1. Open the Support\tools\Deploy.cab folder.
	
	2. On the Edit menu in the Explorer window, click Select All.
	
	3. Right-click any of the files in the Support\tools\Deploy.cab folder, and
	  click Extract.
	
	4. The "Browse For Folder" screen is displayed. Click the folder on your local
	  hard disk in which you want to save the files.
	
	If you click the Setupmgr.exe file, you do not receive the error message shown in
	the "Summary" section.
	
	MORE INFORMATION
	================
	
	For more information on OEM Preinstallation Kit (OPK) Tools, please refer to the
	OPK User's Guide
	
	  http://oem.microsoft.com/general/techsupp/Win2000_opk.asp
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsetup kbOSWin2000 kbDSupport 
	Technology        : kbwin2000AdvServ kbwin2000AdvServSearch kbwin2000Serv kbwin2000ServSearch kbwin2000Search kbwin2000ProSearch kbwin2000Pro kbWinAdvServSearch
	Version           : WINDOWS:
	Issue type        : kbprb
	
	=============================================================================
	
