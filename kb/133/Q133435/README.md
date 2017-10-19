---
layout: page
title: "Q133435: Cannot Install Windows 95 Drivers"
permalink: /kb/133/Q133435/
---

## Q133435: Cannot Install Windows 95 Drivers

	Article: Q133435
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you install an OEM driver (such as a printer or display driver), you
	cannot later update the OEM driver with the Windows 95 version of the same
	driver if you reinstall Windows 95. You cannot therefore revert back to the
	original Windows 95 driver.
	
	CAUSE
	=====
	
	Windows 95 cannot load a Windows 95 driver over an OEM driver of the same name.
	
	RESOLUTION
	==========
	
	Manually extract the Windows 95 version of the driver from the Windows 95 disks
	or CD-ROM and copy it over the OEM driver of the same name. For information
	about extracting files, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q129605 How to Extract Original Compressed Windows Files
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Windows 95. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	This problem does not occur if the OEM driver does not have exactly the same
	name as the Windows 95 driver it replaces.
	
	Additional query words: retrograde downgrade
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	
