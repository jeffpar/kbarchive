---
layout: page
title: "Q245184: Cannot Run 16-Bit Programs on a Windows NT 4.0-Based Computer."
permalink: /kb/245/Q245184/
---

## Q245184: Cannot Run 16-Bit Programs on a Windows NT 4.0-Based Computer.

	Article: Q245184
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to run a 16-bit program on a computer running Microsoft Windows
	NT 4.0 Service Pack 3, the program may quit immediately, or you may receive the
	following error message:
	
	  Hidden Console of WOW VDM
	  The NTVDM CPU has encountered an illegal instruction.
	  CS: 04c3 IP:3937 OP:c71c 9d 37 00
	  Choose Close to terminate the application.
	
	When you click Close, you may receive several similar error messages.
	
	CAUSE
	=====
	
	This behavior can occur if you use an incorrect version of the Command.com file.
	For example, this issue is known to occur if you use a Command.com file included
	in Microsoft Windows 95, dated 7/11/95.
	
	RESOLUTION
	==========
	
	To resolve this issue, replace the Command.com file in the Winnt\System32 folder
	with the same file from another computer that is running Windows NT Workstation
	4.0 or Windows NT Server 4.0, and then make sure that there are no Command.com
	files dated 7/11/95 on the computer. You can also replace the Command.com file
	on the computer with the same file on the Windows NT installation CD-ROM.
	
	Additional query words: NT simulate emulate 95
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	
