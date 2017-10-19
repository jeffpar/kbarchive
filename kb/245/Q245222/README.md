---
layout: page
title: "Q245222: INFO: Event ID in Win32_NTLogEvent, NT Event Viewer Don't Match"
permalink: /kb/245/Q245222/
---

## Q245222: INFO: Event ID in Win32_NTLogEvent, NT Event Viewer Don't Match

	Article: Q245222
	Product(s): Microsoft Windows NT
	Version(s): WINDOWS:; winnt:1.0,1.1,1.5,4.0
	Operating System(s): 
	Keyword(s): kbOSWinNT400 kbOSWin2000 kbWMI100 kbWMI110 kbWMI150
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 2000 Advanced Server 
	- Microsoft Windows 2000 Server 
	- Microsoft Windows 2000 Professional 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The value returned by Win32_NTLogEvent.EventIdentifier does not match the event
	ID posted in the Event Viewer.
	
	For example, an event may show event ID=9 under Event Viewer, but WMI reports
	that:
	
	  Win32_NTLogEvent.EventIdentifier=3221487625
	
	Or an event may have event ID=3013 under Event Viewer, but WMI reports:
	
	  Win32_NTLogEvent.EventIdentifier=2147486661
	
	MORE INFORMATION
	================
	
	Event identifiers are 32-bit values. However, Event Viewer only uses the lower
	16 bits in its display.
	
	WMI 1.5 added the EventCode property to the Win32_NTLogEvent class to provide the
	lower 16 bits of the EventIdentifier value.
	
	For earlier versions of WMI, you can mask the value of EventIdentifier with
	0xFFFF to obtain the value shown in Event Viewer.
	
	Additional query words: Win32_NTLogEvent event EventIdentifier "Event ID" WMI WBEM
	
	======================================================================
	Keywords          : kbOSWinNT400 kbOSWin2000 kbWMI100 kbWMI110 kbWMI150 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbwin2000AdvServ kbwin2000AdvServSearch kbwin2000Serv kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbwin2000ServSearch kbwin2000Search kbwin2000ProSearch kbwin2000Pro kbWinAdvServSearch
	Version           : WINDOWS:; winnt:1.0,1.1,1.5,4.0
	Issue type        : kbinfo
	
	=============================================================================
	
