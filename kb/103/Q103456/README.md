---
layout: page
title: "Q103456: PC Win: Mail Will Not Start Minimized from Word Macro"
permalink: /kb/103/Q103456/
---

## Q103456: PC Win: Mail Will Not Start Minimized from Word Macro

	Article: Q103456
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0,3.0b,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for Windows, versions 3.0, 3.0b, 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You cannot use a Microsoft Word for Windows macro to start version 3.0, 3.0b, or
	3.2 of Microsoft Mail for Windows minimized with the Shell command. For example,
	when you use the following query, Mail launches, but it is not minimized.
	
	  shell "c:\msmail\msmail.exe", 0
	
	CAUSE
	=====
	
	To find out if it should launch minimized, Mail checks for the flag
	SW_SHOWMINNOACTIVE, which is ordinal 7. However, the Word for Windows Shell
	command only passes ordinals 0 to 4 to another application. The Shell command
	passing out a 0 is equivalent to sending the flag SW_SHOWMINIMIZED, but Mail
	does not check that flag.
	
	Mail should check SW_SHOWMINIMIZED instead of (or in addition to)
	SW_SHOWMINNOACTIVE.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in versions 3.0, 3.0b, and 3.2 of
	Microsoft Mail for Windows. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	
	Additional query words: 3.00 3.00b 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMail300 kbMail320 kbMail300b
	Version           : WINDOWS:3.0,3.0b,3.2
	
	=============================================================================
	
