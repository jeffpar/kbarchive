---
layout: page
title: "Q134585: Terminal Window Displays Random Characters During Logon"
permalink: kb/134/Q134585/
---

## Q134585: Terminal Window Displays Random Characters During Logon

	Article: Q134585
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): dun win95 kbDialUp
	Last Modified: 28-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you connect to a Dial-Up Networking server that requires you to enter logon
	information in a Terminal window, the Terminal window may display random
	characters instead of the logon information.
	
	CAUSE
	=====
	
	The Terminal window supports only ASCII text. If the server you are connecting
	to uses terminal emulation and does not send ASCII text, you see random
	characters. Terminal emulation is not supported by the Terminal window in
	Windows 95.
	
	RESOLUTION
	==========
	
	Contact the server's administrator to determine whether it can be changed to
	send only ASCII text.
	
	======================================================================
	Keywords          : dun win95 kbDialUp 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	
