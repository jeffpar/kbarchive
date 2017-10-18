---
layout: page
title: "Q88100: MRU Limits for File Manager, Print Manager in WFWG"
permalink: kb/088/Q88100/
---

## Q88100: MRU Limits for File Manager, Print Manager in WFWG

	Article: Q88100
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 23-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Windows for Workgroups maintains lists of the most recently used (MRU) network
	drives and network printer connections. This feature allows up to 12 network
	drive connections and 12 network printer connections to be maintained.
	
	MORE INFORMATION
	================
	
	The network drive connection information is stored in the [MRU_Files] section of
	the WIN.INI file. The network printer information is stored in the
	[MRU_Printers] section of the WIN.INI file.
	
	The network drive connections list is accessed by opening the Disk menu in File
	Manager. Choose the down arrow on the Path box to see the list of maintained
	network drive connections.
	
	The network printer connections list can be accessed by opening the Printer menu
	in Print Manager. Choose the down arrow on the Path box to see the list of
	maintained network printer connections.
	
	There are no entries in the [MRU_Files] and [MRU_Printers] sections by default.
	
	Additional query words: 3.10 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310 kbWFW311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
