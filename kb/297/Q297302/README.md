---
layout: page
title: "Q297302: STOP 0x00000050 After Installing PCAnywhere 8.0"
permalink: /kb/297/Q297302/
---

## Q297302: STOP 0x00000050 After Installing PCAnywhere 8.0

{% raw %}

	Article: Q297302
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kb3rdparty kbenv kberrmsg
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you install Symantec pcAnywhere 8.0 and the computer restarts, you may
	receive the following error message:
	
	  Stop 0X00000050 (0XE2C3F0E8, 0X00000000, 0X00000000, 0X00000002)
	  PAGE_FAULT_IN_NONPAGED_AREA
	
	The computer may continuously restart, display the same error message, and then
	restart again.
	
	CAUSE
	=====
	
	This behavior can occur because pcAnywhere 8.0 files are incompatible with the
	currently installed Windows NT 4.0 ATI video driver.
	
	RESOLUTION
	==========
	
	To resolve this behavior, contact Symantec to obtain an updated version of
	pcAnywhere that is compatible with Windows NT 4.0. Visit the Symantec Web site
	at:
	
	  http://www.symantec.com/
	
	WORKAROUND
	==========
	
	To work around this behavior, remove pcAnywhere 8.0:
	
	1. When the computer restarts, select [VGA mode].
	
	2. Use the Add/Remove Programs tool in Control Panel to remove pcAnywhere 8.0.
	
	3. Restart the computer in Standard mode.
	
	MORE INFORMATION
	================
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	For information about how to contact Symantec Corporation, click the appropriate
	article number below to view the article in the Microsoft Knowledge Base:
	
	  Q65416 Hardware and Software Third-Party Vendor Contact List, A-K
	
	  Q60781 Hardware and Software Third-Party Vendor Contact List, L-P
	
	  Q60782 Hardware and Software Third-Party Vendor Contact List, Q-Z
	
	Additional query words:
	
	======================================================================
	Keywords          : kb3rdparty kbenv kberrmsg 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search
	Version           : :4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
