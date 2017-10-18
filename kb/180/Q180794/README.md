---
layout: page
title: "Q180794: How to Restore DNS Zones When Deleted from DNS Manager"
permalink: kb/180/Q180794/
---

## Q180794: How to Restore DNS Zones When Deleted from DNS Manager

	Article: Q180794
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you delete zones from DNS Manager, the Domain Name Service (DNS) in Windows
	NT Server does not actually delete the zone files.
	
	When you create DNS zones using DNS Manager, the information is stored in .dns
	files located in your %SystemRoot%\System32\DNS folder. When DNS Manager deletes
	zones it does not remove these files; they still exist in the DNS folder. To
	recover the original zone information, re-create your zones using the exact
	names for the zones and the zone files. DNS Manager will load the .dns files and
	all of the previous information will appear.
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	Issue type        : kbinfo
	
	=============================================================================
	
