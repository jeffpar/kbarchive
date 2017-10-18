---
layout: page
title: "Q194590: XFOR: Lotus Notes Connector Diagnostic Logging Registry Settings"
permalink: kb/194/Q194590/
---

## Q194590: XFOR: Lotus Notes Connector Diagnostic Logging Registry Settings

	Article: Q194590
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 26-APR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to set the diagnostics logging levels for the Lotus
	Notes Connector through the registry without using the Microsoft Exchange
	Administrator program.
	
	This article applies to Exchange Server 5.5 Service Pack 1 with the WEB 2 release
	version of the Lotus Notes Connector or later. This version, or later versions
	of the connector, are easily distinguished by the presence of the Diagnostic
	Logging tab in the properties of the connector.
	
	MORE INFORMATION
	================
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall your operating system. Microsoft cannot guarantee that
	problems resulting from the incorrect use of Registry Editor can be solved. Use
	Registry Editor at your own risk.
	
	For information about how to edit the registry, view the "Changing Keys And
	Values" Help topic in Registry Editor (Regedit.exe) or the "Add and Delete
	Information in the Registry" and "Edit Registry Data" Help topics in
	Regedt32.exe. Note that you should back up the registry before you edit it.
	
	The diagnostics logging information for the Microsoft Exchange Lotus Notes
	Connector is saved in the following location of the Windows NT registry (in the
	components key):
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\LMS-NOTES
	
	The Diagnostics subkey contains values for each of the logging categories. Each
	of these values has data of type REG_DWORD.
	
	The following are the possible data values for each category:
	
	  0   - None
	  1   - Minimum Logging
	  3   - Medium Logging
	  5   - Maximum Logging
	
	Each connector has a subkey named Diagnostics that holds the diagnostics logging
	information. Entries 1 through 5 correspond with the above settings on the
	Diagnostics Logging Tab in the properties of the connector.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbinfo
	
	=============================================================================
	
