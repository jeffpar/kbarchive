---
layout: page
title: "Q155729: SCSI Devices May Not Be Enumerated Correctly"
permalink: /kb/155/Q155729/
---

## Q155729: SCSI Devices May Not Be Enumerated Correctly

{% raw %}

	Article: Q155729
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): kbhw win95 kbHardwarekbfixlist
	Last Modified: 25-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	SCSI devices may not be enumerated correctly, especially when there are multiple
	buses upon which the devices may be located. Configuration Manager may not
	display SCSI devices that are installed.
	
	CAUSE
	=====
	
	There is a problem in the Scsiport.pdr file, in which the bus number is not
	correctly reported to the dependent miniport drivers. Instead, Scsiport.pdr
	always reports a bus number of 0.
	
	RESOLUTION
	==========
	
	
	STATUS
	======
	
	This problem no longer occurs in Windows 98. To resolve this problem, install
	the current version of Windows. For information about the current version of
	Windows, visit http://www.microsoft.com/windows.
	
	MORE INFORMATION
	================
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbhw win95 kbHardware kbfixlist
	Technology        : kbWin95search kbZNotKeyword3
	Version           : :
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
