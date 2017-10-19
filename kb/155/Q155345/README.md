---
layout: page
title: "Q155345: How To Re-Create Administrative Shares in Windows NT"
permalink: /kb/155/Q155345/
---

## Q155345: How To Re-Create Administrative Shares in Windows NT

	Article: Q155345
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use Server Manager or the "NET USE /D" command to stop sharing a
	shared, administrative folder (such as ADMIN$ or C$), users are unable to access
	files or folders on the shared location.
	
	RESOLUTION
	==========
	
	You can re-establish the share by using one of the following procedures:
	
	- Type the following commands from a command prompt:
	
	  net share sharename$
	
	- If you run Microsoft Windows NT 4.0, you can also use System Policy Editor
	  (Poledit.exe) to specify the "Create hidden drive shares" option in the
	  Computer\Windows NT Network\Sharing\Create hidden drive shares folder.
	
	- Restart the computer.
	
	These shares behave as standard administrative shares. For example, you cannot
	configure permissions on them.
	
	Additional query words: recreate
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbNTTermServ400 kbNTTermServSearch kbWinNTS351search kbWinNTS350search
	Version           : winnt:3.5,3.51,4.0
	Issue type        : kbprb
	
	=============================================================================
	
