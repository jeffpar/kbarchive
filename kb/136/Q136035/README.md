---
layout: page
title: "Q136035: How to Reinitialize Registry Entries For Mail and Schedule+"
permalink: /kb/136/Q136035/
---

## Q136035: How to Reinitialize Registry Entries For Mail and Schedule+

{% raw %}

	Article: Q136035
	Product(s): Microsoft Windows NT
	Version(s): 3.1 3.5 3.51
	Operating System(s): 
	Keyword(s): kbnetwork kbtool
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to re-install Windows NT Mail (MSMAIL32.EXE) and
	Schedule Plus (SCHDPL32.EXE). You can accomplish this by modifying the Windows
	NT Registry.
	
	MORE INFORMATION
	================
	
	To re-install the Windows NT Workgroup Mail and Schedule Plus, do the
	following:
	
	WARNING: Using Registry Editor incorrectly can cause serious, system-wide
	problems that may require you to reinstall Windows NT to correct them. Microsoft
	cannot guarantee that any problems resulting from the use of Registry Editor can
	be solved. Use this tool at your own risk.
	
	1. Back up all Mail message files (*.MMF) and Schedule Plus (*.CAL) files.
	
	2. Run Registry Editor (REGEDT32.EXE).
	
	3. From the HKEY_CURRENT_USER subtree, go to the following key for Mail:
	
	  \Software\Microsoft\Mail
	
	  For Schedule Plus, go to the following key:
	
	  \Software\Microsoft\Schedule+
	
	4. Back up the keys listed in Step 3. To do this, select Save Key from Registry
	  menu in the Registry Editor. Enter a file name for each key and choose OK.
	
	5. Select the key and select Delete from the Edit menu. Choose Yes to confirm
	  the deletion of the key. This operation removes the key and all its subkeys.
	
	6. Select the Microsoft key. From the Edit menu, select Add Key. For the Key
	  name, enter the following and choose OK:
	
	  Mail
	
	7. Repeat Step 5 for Schedule Plus. For the Key name, enter the following and
	  choose OK:
	
	  Schedule+
	
	8. Quit Registry Editor and restart Mail and Schedule Plus.
	
	Additional query words: prodnt msmail setup Workgroup
	======================================================================
	Keywords          : kbnetwork kbtool 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTW310 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS351search kbWinNTS350search kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : 3.1 3.5 3.51
	
	=============================================================================
	

{% endraw %}
