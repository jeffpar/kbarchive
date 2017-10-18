---
layout: page
title: "Q254019: &quot;Unable to Create Symbolic Link&quot; Error When Installing Modem"
permalink: kb/254/Q254019/
---

## Q254019: &quot;Unable to Create Symbolic Link&quot; Error When Installing Modem

	Article: Q254019
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kberrmsg kbtool
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you install a modem on a COM port, you may receive the following error
	message in Event Viewer:
	
	  Unable to create symbolic link for COM<x>
	
	This problem can occur with any COM port listing.
	
	CAUSE
	=====
	
	This behavior can occur if you are using an incorrect I/O address or IRQ.
	
	RESOLUTION
	==========
	
	To resolve this issue, use the appropriate method.
	
	Method 1: Remove the COM Port and Let Windows NT Redetect the Port
	------------------------------------------------------------------
	
	1. Start the Ports tool in Control Panel.
	
	2. Click the COM port listing, and then click Delete.
	
	3. Click OK, and then click Close.
	
	4. Restart Windows NT.
	
	Method 2: Change the I/O Address or IRQ of the COM Port
	-------------------------------------------------------
	
	1. Start the Ports tool in Control Panel.
	
	2. Click the COM port listed in the error message.
	
	3. Click Setting.
	
	4. In the "Inside Setting for COM<x>" section, click Advanced.
	
	5. Change the BASE I/O Port Address to a location that you are not using.
	
	NOTE: You can refer to Windows NT diagnostics to find out which I/O port
	addresses are in use. By default, COM1 uses 03F8-03FE, and COM2 uses 02F8-02FE.
	
	Method 3: Change the IRQ
	------------------------
	
	1. Start the Ports tool in Control Panel.
	
	2. Click the COM port listed in the error message.
	
	3. Click Setting.
	
	4. In the "Inside Setting for COM<x>" section, click Advanced.
	
	5. Change the COM port to an IRQ that you are not using.
	
	NOTE: You can refer to Windows NT diagnostics to find out which I/O port
	addresses are in use. By default, COM1 uses IRQ 4, and COM2 uses IRQ 3.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg kbtool 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	
