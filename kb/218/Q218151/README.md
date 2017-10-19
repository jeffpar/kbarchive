---
layout: page
title: "Q218151: SBS: Network Installation Is Not Available for SBS 4.5 Server"
permalink: /kb/218/Q218151/
---

## Q218151: SBS: Network Installation Is Not Available for SBS 4.5 Server

	Article: Q218151
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.5
	Operating System(s): 
	Keyword(s): kbsetup
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft BackOffice Small Business Server version 4.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Small Business Server (SBS) 4.5 does not support installing SBS from a command
	line using the "/b" switch.
	
	MORE INFORMATION
	================
	
	You can perform a network installation in Microsoft Windows NT 3.51 or 4.0 by
	specifying an unattended Setup script file at a command line to install the
	server. For example:
	
	  <x>:\winnt.exe /u:unattend.txt /s:<x>:\i386 /b
	
	SBS 4.5 does not support installing SBS in this manner. SBS 4.5 requires new
	installations to be performed using the three Setup floppy disks.
	
	To upgrade to SBS 4.5 from SBS 4.0a, run Setup.exe from the root folder of SBS
	4.5 CD-ROM 1. Because Windows NT is already installed, there is no need to
	perform an unattended upgrade of SBS using the command line listed above.
	
	
	
	Additional query words: smallbiz
	
	======================================================================
	Keywords          : kbsetup 
	Technology        : kbAudDeveloper kbSBServSearch kbSBServ450
	Version           : winnt:4.5
	Issue type        : kbinfo
	
	=============================================================================
	
