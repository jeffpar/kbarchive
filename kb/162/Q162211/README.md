---
layout: page
title: "Q162211: &quot;Fatal Exception 0E&quot; May Occur During Critical Suspend"
permalink: kb/162/Q162211/
---

## Q162211: &quot;Fatal Exception 0E&quot; May Occur During Critical Suspend

	Article: Q162211
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): kberrmsg kbhw osr1 win95 kbHardwarekbfixlist
	Last Modified: 25-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Windows 95 OEM Service Release, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	On a computer equipped with advanced power management (APM), a "Fatal Exception
	0E" error may occur in VPOWERD if a critical suspend occurs while the computer
	is already in the process of suspending normally.
	
	CAUSE
	=====
	
	The Windows 95 power-management driver does not properly handle a new critical
	suspend request while it is processing a normal suspend request.
	
	RESOLUTION
	==========
	
	
	STATUS
	======
	
	This problem no longer occurs in Windows 98. To resolve this problem, install
	the current version of Windows. For information about the current version of
	Windows, visit http://www.microsoft.com/windows.
	
	MORE INFORMATION
	================
	
	This issue may occur if you manually suspend the computer when the computer's
	battery is critically low. Under such conditions, the low- battery condition
	could cause a critical suspend request to be issued by the computer's BIOS. If a
	critical suspend request is issued while Windows 95 is already processing the
	normal suspend request, the problem can occur.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg kbhw osr1 win95 kbHardware kbfixlist
	Technology        : kbWin95search kbOPKSearch kbZNotKeyword3
	Version           : :1.0
	Issue type        : kbprb
	
	=============================================================================
	
