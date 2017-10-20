---
layout: page
title: "Q155620: ATAPI Devices Listed in SCSI Adapters Tool"
permalink: /kb/155/Q155620/
---

## Q155620: ATAPI Devices Listed in SCSI Adapters Tool

{% raw %}

	Article: Q155620
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbhw kbui kbHardware
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you open the SCSI Adapters tool in Control Panel, IDE hard disks and CD-ROM
	drives are listed.
	
	MORE INFORMATION
	================
	
	Atapi.sys is the device driver that drives IDE devices, and Atapi.Sys is marked
	in Windows NT as a SCSI device driver. The SCSI Adapters tool scans this entry
	when it displays devices.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbhw kbui kbHardware 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	
	=============================================================================
	

{% endraw %}
