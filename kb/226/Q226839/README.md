---
layout: page
title: "Q226839: SMS: Win 3.x Computers Can't Run Hardware Inventory"
permalink: /kb/226/Q226839/
---

## Q226839: SMS: Win 3.x Computers Can't Run Hardware Inventory

{% raw %}

	Article: Q226839
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug kbInventory
	Last Modified: 22-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Microsoft Windows 3.x computers may not run hardware inventory if the computer
	has less than 350 kilobytes (KB) of conventional memory.
	
	CAUSE
	=====
	
	Hardware inventory uses WinExec() to start the program information file (PIF),
	which in turn starts Invdos.exe. One of the parameters in the Invdos.exe file is
	the memory requirement. This parameter is set to 350 KB, which is the size of
	Invdos.exe plus the size of largest .exe file that Invdos.exe loads and runs,
	and an additional 50 KB for buffer and allocations.
	
	WORKAROUND
	==========
	
	To work around this issue, adjust the limit by using Pifedit.exe on a 16-bit
	computer, load Invds932.pif, and then replace the 350-KB limit parameter.
	
	MORE INFORMATION
	================
	
	This information also applies to the Japanese version of Windows 3.x clients.
	
	When hardware inventory starts the PIF, Windows takes over and, as part of the
	command box creation process, checks for available MS-DOS memory (low memory).
	If there is insufficient MS-DOS memory (as opposed to Windows virtual memory),
	Windows produces a "INVDS932" message that there is not enough memory.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug kbInventory 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
