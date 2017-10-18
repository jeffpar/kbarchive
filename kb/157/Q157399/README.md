---
layout: page
title: "Q157399: Inconsistent Descriptions When Using Event Viewer"
permalink: kb/157/Q157399/
---

## Q157399: Inconsistent Descriptions When Using Event Viewer

	Article: Q157399
	Product(s): Microsoft Windows NT
	Version(s): 3.5 3.51 4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use Event Viewer located in Administrative Tools, the event viewer may
	display different description information under Event Details for the same event
	ID number. This problem occurs when either viewing an event log of a remote
	computer or viewing a log file saved from a different computer locally.
	
	CAUSE
	=====
	
	When an event is triggered in Windows NT, the event ID is written to the log
	file, not the event description. Because of updated ERROR_CODEs and improvements
	to Windows NT through service packs, the order and description codes have
	changed.
	
	When an event is triggered in Windows NT, the ID number of the event is written
	to the log file to minimize the size of the log file, the text description
	corresponding to the ID is not written to the log file but is looked up in a
	.dll file when the event is opened. The .dll file that is used is dependent on
	the event. As a result, when the event viewer is run, a lookup of the event ID
	is referenced locally and the appropriate event ID text is displayed. This can
	cause an event to have multiple meanings according to the versions of the system
	and event log that is running.
	
	
	RESOLUTION
	==========
	
	To avoid inconsistent error messages when reading the event log of a remote
	computer, make sure all systems match according to version number and service
	pack level. This can be verified by running WINMSD from within Windows NT and
	selecting Version.
	
	Additional query words: prodnt
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.5 3.51 4.0
	
	=============================================================================
	
