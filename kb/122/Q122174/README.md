---
layout: page
title: "Q122174: Err Msg: MEFLIB.DLL Is Not a Valid NT Image File"
permalink: /kb/122/Q122174/
---

## Q122174: Err Msg: MEFLIB.DLL Is Not a Valid NT Image File

{% raw %}

	Article: Q122174
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	3.10 3.50
	
	WINDOWS
	
	kbinterop kberrmsg
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After installing Windows NT into a Windows or Windows for Workgroups directory,
	you receive the following error message while running Microsoft Workgroup Mail
	(MSMAIL32.EXE):
	
	  MEFLIB.DLL is not a valid NT image file
	
	CAUSE
	=====
	
	This problem occurs if you previously used Microsoft Eforms on the Windows or
	Windows for Workgroups platform.
	
	RESOLUTION
	==========
	
	To correct this problem, you must modify the Windows NT Registry.
	
	  WARNING: Using Registry Editor incorrectly can cause serious, system-wide
	  problems that may require you to reinstall Windows NT to correct them.
	  Microsoft cannot guarantee that any problems resulting from the use of
	  Registry Editor can be solved. Use this tool at your own risk.
	
	1. Start REGEDT32.EXE and locate the following Registry subkey:
	
	  HKEY_CURRENT_USER\SOFTWARE\Microsoft\Mail
	
	2. In the Custom Messages subkey, remove all entries that refer to Eforms.
	
	3. In the Custom Commands subkey, remove the last four entries that refer to the
	  MEFLIB.DLL file.
	
	4. Remove the Eforms Cache subkey.
	
	5. Exit from the Registry Editor.
	
	6. Restart MSMAIL32.
	
	Additional query words: wfw wfwg prodnt 3.10
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW310 kbWinNTSsearch kbWinNTS350 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS350search kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	
	=============================================================================
	

{% endraw %}
