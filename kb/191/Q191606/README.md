---
layout: page
title: "Q191606: Dell 3c905b Oemsetup.inf File Has Errors"
permalink: /kb/191/Q191606/
---

## Q191606: Dell 3c905b Oemsetup.inf File Has Errors

{% raw %}

	Article: Q191606
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Dell is shipping new 3C905B network adapter cards. This driver's Oemsetup.inf
	does not work properly in conjunction with an unattended installation of Windows
	NT Server or Workstation 4.0. The Oemsetup.inf file exhibits no problems if
	installation is done using the OEM-supplied floppy disks, but will affect
	installation if done during an unattended installation. Setup will hang during
	an unattended installation when it attempts to load network drivers.
	
	CAUSE
	=====
	
	The original Oemsetup.inf file does not support unattended installations. During
	the unattended installation, setup searches for files in an incorrect location
	(path,) which prevents the loading of the correct driver.
	
	RESOLUTION
	==========
	
	Dell has rewritten the Oemsetup.inf file for the 3C905B network interface card.
	Please contact Dell support for the updated file.
	
	
	MORE INFORMATION
	================
	
	The third-party products discussed here are manufactured by vendors independent
	of Microsoft; we make no warranty, implied or otherwise, regarding these
	products' performance or reliability.
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
