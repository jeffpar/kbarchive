---
layout: page
title: "Q243869: Using More Than Eight LUNs Per SCSI ID"
permalink: /kb/243/Q243869/
---

## Q243869: Using More Than Eight LUNs Per SCSI ID

{% raw %}

	Article: Q243869
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0 SP4,4.0 SP5,4.0 SP6,4.0 SP6a
	Operating System(s): 
	Keyword(s): kbenv kbhw kbHardware
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 4.0 SP4, 4.0 SP5, 4.0 SP6, 4.0 SP6a 
	- Microsoft Windows NT Workstation versions 4.0 SP4, 4.0 SP5, 4.0 SP6, 4.0 SP6a 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you 
	modify the registry, make sure to back it up and make sure that you understand how to restore 
	the registry if a problem occurs. For information about how to back up, restore, and edit the 
	registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SUMMARY
	=======
	
	Windows NT 4.0 with Service Pack 4 (SP4) or later supports a new registry value
	that allows more than 8 logical unit numbers (LUNs). With this new registry
	setting, up to 255 LUNs are supported.
	
	MORE INFORMATION
	================
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	To enable this feature, add the following registry value
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\<Driver_Name>\Parameters\<Device#>\LargeLuns:
	  REG_DWORD: 0x1
	
	where <Driver_Name> is the SCSI driver name and <Device#> is the SCSI
	adapter number (0 for the first adapter, 1 for the second adapter, and so on)
	controlled by this specific driver.
	
	NOTE: You can omit the <Device#> key, but if it is present, it represents
	the adapter instance number. If <Device#> is not present, the LargeLuns
	registry value applies to all the adapters described by <Driver_Name>. To
	disable large LUN support, either delete the LargeLuns registry value or change
	the data value to 0 (zero).
	
	Note that this feature works only if the SCSI controller and devices support the
	REPORT_LUNS command. If not, you see only LUNS 0 through 7, no matter what you
	set the LargeLuns value to. If the SCSI controller for the computer does not
	support the REPORT_LUNS command, Windows NT uses only LUNs 0 through 7.
	
	Contact your OEM SCSI controller manufacturer to determine how many LUNs your
	SCSI controller supports.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv kbhw kbHardware 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400search kbWinNT400search kbWinNTW400sp5 kbWinNTW400sp4 kbWinNTSsearch kbWinNTS400sp6 kbWinNTS400sp5 kbWinNTS400sp4 kbWinNTS400search kbWinNTW400sp6 kbWinNTW400SP6a
	Version           : winnt:4.0 SP4,4.0 SP5,4.0 SP6,4.0 SP6a
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
