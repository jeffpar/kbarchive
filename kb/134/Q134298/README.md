---
layout: page
title: "Q134298: Older Disk Controllers Incompatible with Protected-Mode Driver"
permalink: /kb/134/Q134298/
---

## Q134298: Older Disk Controllers Incompatible with Protected-Mode Driver

{% raw %}

	Article: Q134298
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
	
	After you install Windows 95 on a Compaq DeskPro 16 computer (circa 1988), you
	may receive the following error message:
	
	  Your system is not configured for its fastest performance
	
	If you click the Details button, you receive the following message:
	
	  Drive C: using MS-DOS Compatibility mode
	
	CAUSE
	=====
	
	Certain older computers with proprietary disk controllers exhibit this behavior.
	Windows 95 protected-mode disk drivers are not guaranteed to work with IDE
	controllers using proprietary firmware to access drives.
	
	The proprietary firmware in some older IDE disk controllers is not designed to
	work correctly with the Windows 95 INT 13 interface.
	
	RESOLUTION
	==========
	
	You must disable protected-mode support for older IDE controllers that exhibit
	this problem. To do so, disable the IDE/ESDI controller in Device Manager.
	
	STATUS
	======
	
	This situation is most likely caused by design changes in Windows 95. Microsoft
	has confirmed that it is not caused by a problem in Windows 95.
	
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	

{% endraw %}
