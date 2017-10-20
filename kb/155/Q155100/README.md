---
layout: page
title: "Q155100: Error Message Trying to Run King's Quest 7 in Windows NT"
permalink: /kb/155/Q155100/
---

## Q155100: Error Message Trying to Run King's Quest 7 in Windows NT

{% raw %}

	Article: Q155100
	Product(s): Microsoft Windows NT
	Version(s): 3.51,4.0
	Operating System(s): 
	Keyword(s): kb3rdparty
	Last Modified: 13-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.51, 4.0 
	- Microsoft Windows NT Workstation versions 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you try to run King's Quest 7 by Sierra, you receive the following error
	message:
	
	  Application Error: <program path>\Sierraws.exe
	  A privileged instruction was executed at address 004738F5
	
	CAUSE
	=====
	
	The program is attempting to disable interrupts. This is not allowed by Windows
	NT.
	
	RESOLUTION
	==========
	
	Run the game in MS-DOS or Windows 95 by dual-booting the computer or by booting
	the computer with a bootable floppy disk.
	
	MORE INFORMATION
	================
	
	By design, Windows NT denies direct access to the hardware to all programs.
	Program cannot use direct hardware calls in Windows NT.
	
	The third-party product discussed in this article is manufactured by a vendor
	independent of Microsoft; we make no warranty, implied or other- wise, regarding
	this product's performance or reliability.
	
	Additional query words:
	
	======================================================================
	Keywords          : kb3rdparty 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT400search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search
	Version           : :3.51,4.0
	
	=============================================================================
	

{% endraw %}
