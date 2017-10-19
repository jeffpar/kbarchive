---
layout: page
title: "Q140388: LPD L Command Is Not Passed with EnableBannerPages Disabled"
permalink: /kb/140/Q140388/
---

## Q140388: LPD L Command Is Not Passed with EnableBannerPages Disabled

	Article: Q140388
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): winnt:3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If EnableBannerPages has been disabled for TCP/IP printing, the L command is not
	sent and the print job will not be passed through the Windows NT server.
	
	WORKAROUND
	==========
	
	Enable the Banner Page setting to restore "l" control command. The Windows NT
	Print Manager LPR Port monitor software sends the "l" control command by default
	(because most jobs sent through Print Manager come from Windows- based
	applications). Because Windows-based applications use a Windows NT printer
	driver to fully render the print job, the "l" control command is used to
	indicate that the LPD server should pass the job through unaltered.
	
	NOTE: The above reference to "l" is a lowercase "L".
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. This
	problem has been corrected in the latest U.S. Service Pack for Windows NT
	version 3.51. For information on obtaining the Service Pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : winnt:3.51
	
	=============================================================================
	
