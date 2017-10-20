---
layout: page
title: "Q153942: Saving Key in RegEdt32 May Cause Access Denied Error"
permalink: /kb/153/Q153942/
---

## Q153942: Saving Key in RegEdt32 May Cause Access Denied Error

{% raw %}

	Article: Q153942
	Product(s): Microsoft Windows NT
	Version(s): 3.5,3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 21-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to save a Registry key within Registry Editor you receive the
	following error message:
	
	  Access Denied: Insufficient Privilege To Save Key.
	
	CAUSE
	=====
	
	This error occurs by design when the top level of a Registry hive is selected
	for a Save Key operation. This occurs even if you are logged on as the
	Administrator with Full Control permissions on the top level of each Registry
	key.
	
	This error also occurs because these hives, HKEY_USERS and HKEY_LOCAL_MACHINE,
	consist of other hives, namely HKEY_CURRENT_USER or HKEY_CLASSES_ROOT.
	
	NOTE: This error does not occur when HKEY_CURRENT_USER and HKEY_CLASSES_ROOT is
	selected and Save Key is selected.
	
	RESOLUTION
	==========
	
	You can successfully save subhives elsewhere in the tree, or save the complete
	Registry. To save the complete Registry, you must either perform a complete tape
	backup with the Backup Registry option selected, or use the Regback utility
	included as part of the Microsoft Windows NT Resource Kit.
	
	
	Additional query words: 3.50 3.51
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : :3.5,3.51
	
	=============================================================================
	

{% endraw %}
