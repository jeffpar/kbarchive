---
layout: page
title: "Q190122: Err Msg: Please Insert the Disk Labeled: 'Generic FDC Driver...'"
permalink: /kb/190/Q190122/
---

## Q190122: Err Msg: Please Insert the Disk Labeled: 'Generic FDC Driver...'

{% raw %}

	Article: Q190122
	Product(s): Microsoft Windows NT
	Version(s): WINNT:4.0
	Operating System(s): 
	Keyword(s): kberrmsg kbdocerr
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you attempt to install floppy enabler drivers for a Conner 2 megabits per
	second (Mbps) Integrated Device Electronics (IDE) controller by following the
	steps in the Readme.txt file located in the Drvlib\Storage\Fenb\Conner folder on
	the Windows NT 4.0 CD-ROM, you may receive the following error message after you
	retype the path to the Drvlib folder in step 5:
	
	  Please insert the disk labeled: 'Generic FDC Driver Disk' into <CD-ROM
	  drive letter>
	
	When you click OK, you receive the error message again.
	
	RESOLUTION
	==========
	
	To work around this behavior, follow these steps:
	
	1. Copy the files from the Drvlib\Storage\Fenb\Conner folder on the Windows NT
	  4.0 CD-ROM to a floppy disk.
	
	  For information about how to copy files, click Start, click Help, click the
	  Index tab, type "copying" (without quotation marks), and then click the
	  "Files" topic.
	
	2. Follow the steps in the Readme.txt file again, but in step 4, select the
	  floppy disk that contains the drivers you copied.
	
	MORE INFORMATION
	================
	
	The Windows NT 4.0 Hardware Compatibility List (HCL) states that drivers for the
	Conner 2 Mbps IDE controller are located in the Drvlib\Storage\Fenb\Conner
	folder on the Windows NT 4.0 CD-ROM.
	
	======================================================================
	Keywords          : kberrmsg kbdocerr 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WINNT:4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
