---
layout: page
title: "Q81584: Novell Broadcast Message Locks Keyboard in DOS Virtual Machine"
permalink: /kb/081/Q81584/
---

## Q81584: Novell Broadcast Message Locks Keyboard in DOS Virtual Machine

{% raw %}

	Article: Q81584
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you run an MS-DOS virtual machine (VM) in a window in Microsoft Windows 3.0
	enhanced mode, and you receive a Novell broadcast message through NWPOPUP, your
	keyboard may lock up.
	
	CAUSE
	=====
	
	This problem only occurs in Windows 3.0 running in 386 enhanced mode. It occurs
	because MS-DOS-based applications cannot run in a window when Windows 3.0 is
	running in real or standard mode.
	
	WORKAROUND
	==========
	
	1. Press the ALT+ENTER keys to place the MS-DOS-based application into
	  full-screen mode.
	
	2. Press the ALT+ENTER keys a second time to return the application to a window.
	
	This reactivates the keyboard for use in the MS-DOS virtual machine.
	
	If ESC and CTRL+BREAK are the only keys affected by the broadcast message, then
	press the ALT+TAB key combination twice to reactivate the keys.
	
	STATUS
	======
	
	Microsoft and Novell are researching this problem and will post new information
	here as it becomes available.
	
	MORE INFORMATION
	================
	
	The Novell products included here are manufactured by a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding these products'
	performance or reliability.
	
	Additional query words: 3.00
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	

{% endraw %}
