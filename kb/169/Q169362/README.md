---
layout: page
title: "Q169362: Incomplete Directory Listing Returned from Server to Client"
permalink: /kb/169/Q169362/
---

## Q169362: Incomplete Directory Listing Returned from Server to Client

{% raw %}

	Article: Q169362
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): WINDOWS:3.11; winnt:3.5,3.51,4.0; :2.2c
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	- Microsoft LAN Manager, version 2.2c 
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, make sure you understand how to restore it if
	a problem occurs. For information on how to do this, view the "Restoring
	the Registry" online Help topic in Regedit.exe or the "Restoring a Registry
	Key" online Help topic in Regedt32.exe.
	
	SYMPTOMS
	========
	
	When a Windows 3.11, Windows for Workgroups, or a MS-DOS client requests a
	directory listing from a command prompt, the list returned is missing some of
	the entries from time to time. This situation can occur with 16-bit applications
	running on a client but getting some of its files from the server. This prevents
	the application from locating some of its files, even though the files are
	there.
	
	An example would be an application that goes out to a directory and does a search
	for all DLLs and then, based on what is found, loads only those DLLs found. But
	not all the DLL names were returned in the directory search so not all the DLLs
	load.
	
	
	CAUSE
	=====
	
	If you take a network trace of the activity between the clients and the server,
	you will see that SMB 81 is used to get a directory search. The file names
	returned from this SMB will be truncated part of the time, which makes the
	problem intermittent.
	
	RESOLUTION
	==========
	
	To resolve the problem, increase the value in the registry that controls the
	number of outstanding directory search requests the server can handle at one
	time.
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall your operating system. Microsoft cannot guarantee that
	problems resulting from the incorrect use of Registry Editor can be solved. Use
	Registry Editor at your own risk.
	
	For information about how to edit the registry, view the "Changing Keys And
	Values" online Help topic in Registry Editor (Regedit.exe) or the "Add and
	Delete Information in the Registry" and "Edit Registry Data" online Help topics
	in Regedt32.exe. Note that you should back up the registry before you edit it.
	
	1. Run Regedt32.exe and navigate to the following registry key:
	
	     HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\LanManServer
	     \Parameters\ 
	
	  NOTE: The above registry key is one path; it has been wrapped for readability.
	
	2. Make the following changes:
	
	     Entry: MaxGlobalOpenSearch
	     Type: REG_DWORD
	     Default: 2048
	     Max: ffffffff
	     Min: 1
	
	Additional query words: networking
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search kbAudDeveloper kbLanManSearch kbWFWSearch kbWFW311 kbLanMan220c
	Version           : WINDOWS:3.11; winnt:3.5,3.51,4.0; :2.2c
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
