---
layout: page
title: "Q120057: Adding RINGIN and RINGOUT for Chat"
permalink: /kb/120/Q120057/
---

## Q120057: Adding RINGIN and RINGOUT for Chat

{% raw %}

	Article: Q120057
	Product(s): Microsoft Windows NT
	Version(s): 3.1 3.5 3.51 4.0
	Operating System(s): 
	Keyword(s): kbenv
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	WARNING: Using the Registry Editor incorrectly can cause serious, system-
	wide problems that may require you to reinstall Windows NT to correct them.
	Microsoft cannot guarantee that any problems resulting from the use of the
	Registry Editor can be solved. Use this tool at your own risk.
	
	SUMMARY
	=======
	
	To add ringin and ringout to Chat, follow these steps to add entries to control
	panel sounds on a Windows NT or Windows NT Advanced Server:
	
	1. Start the Registry editor (REGEDT32.EXE).
	
	2. Find this key:
	
	  \HKEY_CURRENT_USER\Control Panel\Sounds
	
	3. Choose Edit from the menu, then choose Add Value.
	
	4. Type "Ringin" (without the quotation marks).
	
	5. Choose the type Reg_SZ and select OK.
	
	6. Type "ringin.wav, incoming call" (without the quotation marks) and select OK.
	
	7. Choose Edit from the menu, then choose Add Value. (Repeat of step 3.)
	
	8. Type "Ringout" (without the quotation marks).
	
	9. Choose the type Reg_SZ and select OK.
	
	10. Type "ringout.wav, outgoing call" (without the quotation marks) and select
	  OK.
	
	Close the Registry Editor, then shut down and restart your computer. When you
	open control panel sounds you should see entries for incoming and outgoing
	calls.
	
	Additional query words: prodnt
	======================================================================
	Keywords          : kbenv 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTW310 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS351search kbWinNTS350search kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : 3.1 3.5 3.51 4.0
	
	=============================================================================
	

{% endraw %}
