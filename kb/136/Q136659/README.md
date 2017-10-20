---
layout: page
title: "Q136659: Iomega Zip Drive Appears Twice in My Computer"
permalink: /kb/136/Q136659/
---

## Q136659: Iomega Zip Drive Appears Twice in My Computer

{% raw %}

	Article: Q136659
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you open My Computer, an Iomega Zip Drive connected to a parallel port may
	appear twice, once as a floppy disk drive, and once as a removable media drive.
	Both icons provide access to the Iomega Zip Drive.
	
	CAUSE
	=====
	
	Both the real- and protected-mode drivers for the drive are loaded.
	
	RESOLUTION
	==========
	
	Disable the real-mode driver for the Iomega Zip Drive. For information about how
	to do so, please consult the drive's documentation or manufacturer.
	
	MORE INFORMATION
	================
	
	The Iomega Zip Drive is a removable media drive that connects to an external
	SCSI port or a parallel port.
	
	Additional query words: guest
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	

{% endraw %}
