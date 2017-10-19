---
layout: page
title: "Q189115: Macfile Menu May Not Appear in Winfile with SFM Installed"
permalink: /kb/189/Q189115/
---

## Q189115: Macfile Menu May Not Appear in Winfile with SFM Installed

	Article: Q189115
	Product(s): Microsoft Windows NT
	Version(s): WINNT:3.51,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, make sure you understand how to restore it if
	a problem occurs. For information about how to do this, view the "Restoring
	the Registry" Help topic in Regedit.exe or the "Restoring a Registry Key"
	Help topic in Regedt32.exe.
	
	SYMPTOMS
	========
	
	The Macfile Menu may not appear in File Manager (Winfile.exe) after installing
	Services for Macintosh (SFM) on a Windows NT Server.
	
	RESOLUTION
	==========
	
	To correct this problem, use one or both of the following methods:
	
	Method 1
	--------
	
	Re-expand the files, Sfmmgr.cpl and Sfmapi.dll, from the Windows NT compact disc
	into the %SystemRoot%\System32 folder.
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  ARTICLE-ID: Q173132
	  TITLE : Replacing Missing Control Panel Icons
	
	Method 2
	--------
	
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
	
	1. Run Registry Editor (Regedt32.exe).
	
	2. Go to the following key:
	
	  HKEY_LOCAL_MACHINESOFTWARE\Microsoft\Windows NT\CurrentVersion
	  \File Manager\Addons
	
	  NOTE: The above registry key is one path; it has been wrapped for readability.
	
	3. Add or change the following value:
	
	  Value Name: AFP Manager
	  Data Type : REG_SZ
	  Data      : Sfmmgr.cpl
	
	4. Go to the following key:
	
	  HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows NT\Current Version
	  \Network\SMAddOns
	
	  NOTE: The above registry key is one path; it has been wrapped for readability.
	
	5. Add or change the following value:
	
	  Value Name: AFP Manager
	  Data Type : REG_SZ
	  Data      : Sfmmgr.cpl
	
	Additional query words: Macintosh Apple SFM mac
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search
	Version           : WINNT:3.51,4.0
	Issue type        : kbprb
	
	=============================================================================
	
