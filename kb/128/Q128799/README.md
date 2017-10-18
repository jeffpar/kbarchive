---
layout: page
title: "Q128799: Unable to Log On After Changing Keyboard Layout"
permalink: kb/128/Q128799/
---

## Q128799: Unable to Log On After Changing Keyboard Layout

	Article: Q128799
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): kbenv kberrmsg
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	- Microsoft Windows NT Workstation versions 3.5, 4.0 
	- Microsoft Windows NT Server versions 3.5, 4.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, make sure you understand how to restore it
	if a problem occurs. For information about how to do this, view the
	"Restoring the Registry" Help topic in Regedit.exe or the "Restoring a
	Registry Key" Help topic in Regedt32.exe.
	
	SYMPTOMS
	========
	
	If you install Windows NT with a US-Dvorak keyboard layout and change the
	keyboard to a standard US-QWERTY keyboard and match the configuration in the
	International or Regional Settings tool in Control Panel, you may receive the
	following error message when you attempt to log on:
	
	  The system could not log you on. Make sure your username and domain are
	  correct, then type your password again. Letters in passwords must be typed
	  using the correct case. Make sure that Caps Lock is not accidentally on.
	
	CAUSE
	=====
	
	Only the current user profile contains the correct keyboard layout. The default
	user profile and the system profile contain the previous keyboard layout.
	
	RESOLUTION
	==========
	
	  WARNING: Using Registry Editor incorrectly can cause serious problems that
	  may require you to reinstall your operating system. Microsoft cannot
	  guarantee that problems resulting from the incorrect use of Registry Editor
	  can be solved. Use Registry Editor at your own risk.
	
	For information about how to edit the registry, view the "Changing Keys And
	Values" Help topic in Registry Editor (Regedit.exe) or the "Add and Delete
	Information in the Registry" and "Edit Registry Data" Help topics in
	Regedt32.exe. Note that you should back up the registry before you edit it.
	
	To resolve this issue, use the appropriate method:
	
	Windows NT version 3.1 and 3.5
	------------------------------
	
	Save the current user profile information as the system default profile and as a
	default user profile using the User Profile Editor.
	
	Windows NT version 4.0
	----------------------
	
	1. Log on to Windows NT using the Dvorak keyboard layout.
	
	2. Using Registry Editor, change the "Preload" value to 00000409 in the
	  following registry key:
	
	  HKey_Users\.Default\KeyboardLayout\
	
	MORE INFORMATION
	================
	
	The Preload value for the Dvorak U.S. English keyboard layout is 00010409.
	The Preload value for the standard U.S. English keyboard layout is 00000409.
	
	Additional query words: prodnt 3.10 kbd
	
	======================================================================
	Keywords          : kbenv kberrmsg 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW310 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS350 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS350search kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Issue type        : kbprb
	
	=============================================================================
	
