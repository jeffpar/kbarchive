---
layout: page
title: "Q140228: BUG: NET.EXE Sorts International Names Incorrectly"
permalink: /kb/140/Q140228/
---

## Q140228: BUG: NET.EXE Sorts International Names Incorrectly

	Article: Q140228
	Product(s): Microsoft Windows NT
	Version(s): 3.51 4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If you create user or group accounts in User Manager that contain or start with
	international characters, they are sorted as expected. However, when you use
	"NET USER," "NET GROUP," or "NET LOCALGROUP" from the command line, those names
	are sorted to the end of the list.
	
	CAUSE
	=====
	
	NET.EXE uses a simple string compare and does not take account of locale
	information.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT Workstation and
	Server versions 3.51 and 4.0. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: prodnt winnt
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT400search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search
	Version           : 3.51 4.0
	
	=============================================================================
	
