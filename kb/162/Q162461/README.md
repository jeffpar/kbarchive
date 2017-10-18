---
layout: page
title: "Q162461: WinNT Err Msg: The Streams Environment is Currently in Use. . ."
permalink: kb/162/Q162461/
---

## Q162461: WinNT Err Msg: The Streams Environment is Currently in Use. . .

	Article: Q162461
	Product(s): Microsoft Windows NT
	Version(s): WinNT:3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): kberrmsg kbnetwork
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to remove the Streams protocol you receive the following Error
	message:
	
	  The streams environment is currently in use by another network protocol.
	  Please remove the streams-based protocols first.
	
	RESOLUTION
	==========
	
	To successfully remove the Streams protocol, you will need to remove keys from
	the registry using the following steps:
	
	WARNING: Using Registry Editor incorrectly can cause serious, system-wide
	problems that may require you to reinstall Windows NT to correct them. Microsoft
	cannot guarantee that any problems resulting from the use of Registry Editor can
	be solved. Use this tool at your own risk.
	
	1. Start Registry Editor (Regedt32.exe) and select the following subkey:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\Streams
	
	2. From the Edit menu, Click Delete, and then click Yes in the confirmation
	  dialog box.
	
	3. Repeat steps 1 and 2 for the following subkey:
	
	  HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Streams
	
	4. Go to the following subkey:
	
	  HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Ncpa\CurrentVersion
	
	5. Select the BindfileEx value, click Modify from the Edit menu, and change
	  String to "()" (without the quotes), and then click OK.
	
	6. Exit Registry Editor and restart your computer.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51 and 4.0.
	We are researching this problem and will post new information in the Microsoft
	Knowledge Base as it becomes available.
	
	Additional query words: manually manual disable
	======================================================================
	Keywords          : kberrmsg kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : WinNT:3.5,3.51,4.0
	
	=============================================================================
	
