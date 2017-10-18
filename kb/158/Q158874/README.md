---
layout: page
title: "Q158874: Finding Extensible Counters Used by Performance Monitor"
permalink: kb/158/Q158874/
---

## Q158874: Finding Extensible Counters Used by Performance Monitor

	Article: Q158874
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbtool
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When troubleshooting objects and counters being used by Performance Monitor, you
	need to locate all the Extensible Counters. Extensible Counters are counters
	that are added to Performance Monitor by applications. Examples of applications
	that add counters to Windows NT are SQL Server and Microsoft Exchange. Both of
	those applications install extensible counters to Windows NT.
	
	MORE INFORMATION
	================
	
	Use Exctrlst.exe, which comes in the Windows NT 4.0 Resource Kit, to bring up a
	list of all of the Extensible Counters found in the Registry. The location of
	the counters is:
	
	Hkey_Local_Machine\System\CurrentControlSet\Services\ 
	ServiceName\Performance\Library
	
	Exctrlst.exe can be run locally or remotely.
	
	If you believe that one of the Extensible Counters is causing a problem on your
	computer, please see the following article in the Microsoft Knowledge Base:
	
	  ARTICLE-ID: Q152513
	  TITLE : Troubleshooting Performance Monitor Counter Problems.
	
	Additional query words: access violation RPC error SSD 1.18 prodnt
	======================================================================
	Keywords          : kbtool 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : 4.0
	
	=============================================================================
	
