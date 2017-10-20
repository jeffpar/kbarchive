---
layout: page
title: "Q188655: NetBIOS CacheTimeout Explanation"
permalink: /kb/188/Q188655/
---

## Q188655: NetBIOS CacheTimeout Explanation

{% raw %}

	Article: Q188655
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, make sure you understand how to restore it if
	a problem occurs. For information on how to do this, view the "Restoring
	the Registry" online Help topic in Regedit.exe or the "Restoring a Registry
	Key" online Help topic in Regedt32.exe.
	
	SYMPTOMS
	========
	
	There is an error in the documentation of the NetBIOS cachetimout registry
	entry. In both the TCP/IP Implementation Details Version 2.0 white paper and the
	Windows NT Resource Kit, the low end of the valid range is documented as being
	in decimal and the high end of the range is documented in hex, as seen below:
	
	  CacheTimeout
	  Key: Netbt\Parameters
	  Value Type: REG_DWORD - Time in milliseconds
	  Valid Range: 60000 to 0xFFFFFFFF
	  Default: 0x927c0 ( 600000 milliseconds = 10 minutes)
	
	  Description: This value determines the time interval that names are
	  cached in the remote name table.
	
	RESOLUTION
	==========
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall your operating system. Microsoft cannot guarantee that
	problems resulting from the incorrect use of Registry Editor can be solved. Use
	Registry Editor at your own risk.
	
	For information about how to edit the registry, view the "Changing Keys And
	Values" online Help topic in Registry Editor (Regedit.exe) or the "Add and
	Delete Information in the Registry" and "Edit Registry Data" online Help topics
	in Regedt32.exe. Note that you should back up the registry before you edit it.
	
	The correct entry should look like:
	
	  CacheTimeout
	  Key: Netbt\Parameters
	  Value Type: REG_DWORD - Time in milliseconds
	  Valid Range: 0xEA60 to 0xFFFFFFFF
	  Default: 0x927c0 ( 600000 milliseconds = 10 minutes)
	
	  Description: This value determines the time interval that names are
	  cached in the remote name table.
	
	
	Additional query words: cache
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
