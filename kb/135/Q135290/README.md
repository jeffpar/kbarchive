---
layout: page
title: "Q135290: Troubleshooting Application Exception Error in File Manager"
permalink: kb/135/Q135290/
---

## Q135290: Troubleshooting Application Exception Error in File Manager

	Article: Q135290
	Product(s): Microsoft Windows NT
	Version(s): 3.5,3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The following error message appears when you start File Manager:
	
	  Application Exception Occurred: App:EXE/WINFILE.DBG [PID+135] <time>
	  <date> Exception # C0000005 [Access Violation]
	
	CAUSE
	=====
	
	WINFILE.EXE is either corrupt or there is a corrupt registry entry. To determine
	if the registry is corrupt:
	
	1. Log off Windows NT.
	
	2. Log on as another user.
	
	3. Run File Manager.
	
	If file manager starts without an error, the problem may be caused by a corrupt
	registry.
	
	RESOLUTION
	==========
	
	To correct a corrupt registry entry:
	
	WARNING: Using Registry Editor incorrectly can cause serious, system-wide
	problems that may require you to reinstall Windows NT to correct them. Microsoft
	cannot guarantee that any problems resulting from the use of Registry Editor can
	be solved. Use this tool at your own risk.
	
	1. Run Registry Editor (REGEDT32.EXE).
	
	2. From the HKEY_CURRENT_USER subtree, go to the following key:
	
	  \Software\Microsoft\File Manager.
	
	3. Delete the Settings key.
	
	4. Restart File Manager. It will now run with the default settings.
	
	If the above procedure does not correct the problem, use the following steps to
	troubleshoot for corrupt files:
	
	1. Run Chkdsk /f
	
	2. Use the Emergency Repair Disk to verify System files.
	
	3. Rename the existing WINFILE.EXE and expand a new copy from original setup
	  media.
	
	NOTE: If any Service Packs have been applied to system, you need to reapplied
	them if you run the Emergency Repair Disk against System Files or replace files
	using the original setup media as the source.
	
	
	Additional query words: prodnt logoff logon
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : :3.5,3.51
	
	=============================================================================
	
