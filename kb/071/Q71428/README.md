---
layout: page
title: "Q71428: Network Pop-Up Message Hangs Standard, Real Mode Windows 3.0"
permalink: /kb/071/Q71428/
---

## Q71428: Network Pop-Up Message Hangs Standard, Real Mode Windows 3.0

	Article: Q71428
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 25-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you run Microsoft Windows 3.0 on a Microsoft LAN Manager 2.0 Enhanced (or
	100-percent compatible) network, it is possible to receive pop-up messages in
	the WinPopup display panel. However, if you run Windows in real or standard mode
	and close WinPopup, Windows stops responding (hangs) and the screen becomes
	corrupted if a network pop-up message is received.
	
	NOTE: This does not occur if you run Windows in 386 enhanced mode.
	
	CAUSE
	=====
	
	This problem occurs because NetPopup (the network message handler) attempted to
	display the message without being able to queue the message through WinPopup
	(the Windows message handler).
	
	WORKAROUND
	==========
	
	Reboot the computer and restart Windows, but do not close WinPopup if you are
	running in real or standard mode.
	
	MORE INFORMATION
	================
	
	If you attempt to create a permanent swapfile by running Windows in real mode
	and closing WinPopup, your system will hang if a pop-up message is received by
	the workstation. To avoid problems during the rare times you are creating or
	modifying a permanent swapfile, do not start the network.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Windows version 3.0.
	We are researching this problem and will post new information here as it becomes
	available.
	
	Additional query words: 3.0 3.00 win30 3.00a
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	
