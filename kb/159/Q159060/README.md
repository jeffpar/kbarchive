---
layout: page
title: "Q159060: Mouse Cursor Freezes or Fails with Microsoft IntelliMouse"
permalink: kb/159/Q159060/
---

## Q159060: Mouse Cursor Freezes or Fails with Microsoft IntelliMouse

	Article: Q159060
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbhw kbHardwarekbbuglist kbfixlist
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Microsoft IntelliMouse mouse cursor may freeze or the mouse control
	functions may begin to fail. You must restart your computer to regain control of
	your mouse.
	
	CAUSE
	=====
	
	The I8042prt device driver misinterprets a valid data packet from the mouse as a
	self-test return code and waits for additional self-test data. Since this same
	data packet can be a valid data stream for IntelliMouse, the device driver
	becomes unstable.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. This
	problem was corrected in the latest Microsoft Windows NT 4.0 U.S. Service Pack.
	For information on obtaining the service pack, query on the following word in
	the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: prodnt 4.00 wheel
	
	======================================================================
	Keywords          : kbhw kbHardware kbbuglist kbfixlist
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbbug
	
	=============================================================================
	
