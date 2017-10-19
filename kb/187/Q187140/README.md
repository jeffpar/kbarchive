---
layout: page
title: "Q187140: Client Num Lock Key Is Not Turned On by Keybd_event Function"
permalink: /kb/187/Q187140/
---

## Q187140: Client Num Lock Key Is Not Turned On by Keybd_event Function

	Article: Q187140
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run a program that calls the Keybd_event() function and does Keydown
	and Keyup for Vk_Numlock, the Num Lock key on keyboard is not turned on.
	
	CAUSE
	=====
	
	This function works on Microsoft Windows NT-based computers, but not Microsoft
	Windows 9x-based computers. Windows 9x does not handle the Num Lock key
	correctly using this function. However the Caps Lock works without any problem.
	
	
	STATUS
	======
	
	This behavior is by design.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServSearch
	Version           : WinNT:4.0
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
