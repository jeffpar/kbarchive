---
layout: page
title: "Q165962: WinNT Spooler Service Verifies Printer Drivers Are Correct"
permalink: /kb/165/Q165962/
---

## Q165962: WinNT Spooler Service Verifies Printer Drivers Are Correct

{% raw %}

	Article: Q165962
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbprint
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	CAUSE
	=====
	
	Windows NT printer drivers are stored in specific directories depending on the
	hardware platform for which they were compiled. For example, drivers for the
	Intel platform are stored in %Winnt%\System32\Spool\Drivers\W32x86.
	
	Prior to Windows NT version 4.0 Service Pack 2, it was possible to install a
	printer driver into a subdirectory for a specific hardware platform when that
	printer driver was compiled for a different hardware platform. Installing a
	printer driver for a hardware platform into the wrong subdirectory in Windows NT
	now causes incorrect printer output.
	
	RESOLUTION
	==========
	
	When installing printer drivers in Windows NT 4.0 Service Pack 2, Windows NT
	Spooler service will verify the drivers are the correct architecture for the
	platform that is running Windows NT.
	
	Windows NT Spooler service will validate the architecture type after the driver
	has been copied. If the architecture type does not match, the Install dialog box
	will be displayed again.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. This
	problem was corrected in the latest U.S. Service Pack for Microsoft Windows NT
	version 4.0. For information on obtaining the Service Pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbprint 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
