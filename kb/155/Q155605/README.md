---
layout: page
title: "Q155605: Pressing PRINT SCREEN During Setup Causes Reboot"
permalink: /kb/155/Q155605/
---

## Q155605: Pressing PRINT SCREEN During Setup Causes Reboot

{% raw %}

	Article: Q155605
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbsetup
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If you press the PRINT SCREEN key during the text-based portion of Windows NT
	4.0 Setup, your computer may reboot, or you may receive an EMM386 exception
	error message.
	
	MORE INFORMATION
	================
	
	Windows NT text-based Setup screens cannot be sent to the printer using the
	PRINT SCREEN key.
	
	When you install Windows NT from MS-DOS or Windows 95 using Winnt.exe, special
	input keys such as PRINT SCREEN are not disabled. This is done in case you
	terminate Setup and return to your current operating system. However, pressing
	PRINT SCREEN within Windows NT Setup can cause the situation described above.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbsetup 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	
	=============================================================================
	

{% endraw %}
