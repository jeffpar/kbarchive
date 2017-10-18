---
layout: page
title: "Q134324: File Manager Displays Day And Minutes As &quot;d&quot; and &quot;mm&quot;"
permalink: kb/134/Q134324/
---

## Q134324: File Manager Displays Day And Minutes As &quot;d&quot; and &quot;mm&quot;

	Article: Q134324
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If you change the Short Date Format and Time Format separators to a single
	apostrophe (') in Control Panel International, File Manager displays the date
	and time in the following respective format:
	
	  7d95 3mm40
	
	NOTE: The day and minutes are replaced with d and mm respectively. Other Windows
	NT applications display the date and time correctly.
	
	
	WORKAROUND
	==========
	
	To work around this problem, modify the Registry.
	
	WARNING: Using Registry Editor incorrectly can cause serious, system-wide
	problems that may require you to reinstall Windows NT to correct them. Microsoft
	cannot guarantee that any problems resulting from the use of Registry Editor can
	be solved. Use this tool at your own risk.
	
	1. Run Registry Editor (REGEDT32.EXE).
	
	2. From the HKEY_CURRENT_USER subtree, go to the following key:
	
	  \Control Panel\International
	
	3. Highlight sShortDate.
	
	4. From the Edit menu, select String. Change the string to the following and
	  choose OK:
	
	  M''''d''''yy
	
	5. Highlight sTimeFormat.
	
	6. From the Edit menu, select String. Change the string to the following and
	  choose OK:
	
	  h''''mm''''s tt
	
	7. Quit the Registry Editor.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT versions 3.5 and
	3.51. We are researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	Additional query words: prodnt cpl quote winfile
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	
	=============================================================================
	
