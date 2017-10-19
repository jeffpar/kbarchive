---
layout: page
title: "Q136964: Event File Not Saved After Choosing No To Clear All Events"
permalink: /kb/136/Q136964/
---

## Q136964: Event File Not Saved After Choosing No To Clear All Events

	Article: Q136964
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	The Windows NT Event Viewer Clear All Events option allows you to clear
	the contents of the current Event Viewer log. If you choose this option,
	Event Viewer will ask you if you want to save the log before clearing it.
	If you choose yes to save the log before clearing it, you will be
	presented the Save As common dialog box. After you enter the file name and
	desired destination of the file and choose the OK button, the Save As
	dialog is cleared and Event Viewer asks if you are sure you want to clear
	the log. Choosing the Yes button results in the file being saved and the
	log being cleared. However, if you choose No, the file is not saved and the
	log not cleared.
	
	This behavior is by design, however, it may be confusing because the Save
	File action is tied to the Clear All Events action.
	
	Additional query words: 3.10 prodnt system application security
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTW310 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS351search kbWinNTS350search kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	
	=============================================================================
	
