---
layout: page
title: "Q177655: Negative Values in Performance Monitor Data"
permalink: /kb/177/Q177655/
---

## Q177655: Negative Values in Performance Monitor Data

	Article: Q177655
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbWinNT400sp4fix
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, make sure you understand how to restore it if
	a problem occurs. For information about how to do this, view the "Restoring
	the Registry" Help topic in Regedit.exe or the "Restoring a Registry Key"
	Help topic in Regedt32.exe.
	
	SYMPTOMS
	========
	
	Performance Monitor data exported to a file may include negative values. These
	values will correspond to extreme spikes when viewed in Chart view and cannot be
	scaled down. The Pages/sec counter of the Memory object is one example. Other
	counters will be affected as well.
	
	CAUSE
	=====
	
	A condition exists where negative values are not reset to 0. Negative values can
	occur when a counter rolls over. The maximum value for any counter is
	0xFFFFFFFF.
	
	MORE INFORMATION
	================
	
	Values are determined by taking the old value and subtracting it from the new
	one. The resulting difference is the data point. The following example uses the
	Pages/sec counter.
	
	If the last value was 0x100 and the new value is 0x200, the pages per second is
	0x100. If the last value is 0xFFFFFF80 and the ULONG rolls over to 0xC0 (that is
	0x140 pages between samples), a negative value occurs (0xC0 - 0xFFFFFF80 =
	negative number).
	
	Resetting unreadable or uninterpretable data (such as negative values) can mask
	problems in the counters themselves. The registry parameter below determines
	whether Performance Monitor logs error and warning events in the Event Viewer
	event log when it fails to retrieve data or when it retrieves unreadable or
	uninterpretable data (such as negative time). By default, this value entry does
	not appear in the registry and Performance Monitor does not log data errors or
	notify the user that it has received bad data; it just displays 0 or 100%,
	depending on the counter. Perform the following steps to enable logging:
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall your operating system. Microsoft cannot guarantee that
	problems resulting from the incorrect use of Registry Editor can be solved. Use
	Registry Editor at your own risk.
	
	For information about how to edit the registry, view the "Changing Keys And
	Values" Help topic in Registry Editor (Regedit.exe) or the "Add and Delete
	Information in the Registry" and "Edit Registry Data" Help topics in
	Regedt32.exe. Note that you should back up the registry before you edit it.
	
	1. Run Registry Editor (Regedt32.exe).
	
	2. Go to the following key:
	
	  HKEY_CURRENT_USER\Software\Microsoft\PerfMon
	
	3. Click Add Value on the Edit menu.
	
	4. Add the following value:
	
	  Value Name: ReportEventsToEventLog
	  Data Type: REG_DWORD
	  Range: 0 or 1
	  Default: 0
	  Set the data value to 1.
	
	5. Click OK and then quit Registry Editor.
	
	6. Shut down and restart Windows NT.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	Windows NT Server 4.0, Terminal Server Edition. For additional information,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0 and Windows NT
	Server 4.0, Terminal Server Edition. This problem was first corrected in Windows
	NT 4.0 Service Pack 4.0 and Windows NT Server 4.0, Terminal Server Edition
	Service Pack 4.
	
	
	Additional query words: export 4.00 .tsv -1.#I/O
	======================================================================
	Keywords          : kbWinNT400sp4fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : WinNT:4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	
	=============================================================================
	
