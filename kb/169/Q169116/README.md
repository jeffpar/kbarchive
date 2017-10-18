---
layout: page
title: "Q169116: Troubleshooting TCP/IP CP Error 2 ERROR_FILE_NOT_FOUND"
permalink: kb/169/Q169116/
---

## Q169116: Troubleshooting TCP/IP CP Error 2 ERROR_FILE_NOT_FOUND

	Article: Q169116
	Product(s): Microsoft Windows NT
	Version(s): 3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 30-OCT-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The following error message may be returned when a Remote Access Service (RAS)
	connection fails.
	
	  TCPIP CP Error 2 ERROR_FILE_NOT_FOUND
	
	This failure may be intermittent. Additional symptoms include an installed
	network adapter that cannot be removed through the Control Panel Network tool.
	This adapter may appear as unavailable, have no description, or be identified
	only by an ID such as (10).
	
	CAUSE
	=====
	
	This problem may be caused by an invalid network adapter entry in the registry.
	
	RESOLUTION
	==========
	
	The phantom adapter can only be removed by editing the registry and deleting all
	references to it.
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall your operating system. Microsoft cannot guarantee that
	problems resulting from the incorrect use of Registry Editor can be solved. Use
	Registry Editor at your own risk.
	
	For information about how to edit the registry, view the "Changing Keys And
	Values" Help topic in Registry Editor (Regedit.exe) or the "Add and Delete
	Information in the Registry" and "Edit Registry Data" Help topics in
	Regedt32.exe. Note that you should back up the registry before you edit it.
	
	To remove this invalid network adapter registry entry, perform the following
	steps:
	
	1. Run Registry Editor (Regedt32.exe) and go to the following keys in the
	  registry:
	
	Registry Hive A:
	
	  HKEY_LOCAL_MACHINE\Software\Microsoft\WindowsNT\CurrentVersion\ 
	  NetworkCards\<number>
	
	Registry Hive B:
	
	  HKEY_LOCAL_MACHINE\System\CurrentControlSet\Enum\Root\ 
	  Legacy_<adapter name>
	
	Registry Hive C:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\ 
	  <adapter name>
	
	Registry Hive D:
	
	  HKEY_LOCAL_MACHINE\SOFTWARE\<adapter name>
	
	2. Select the registry key for the entry you wish to remove, and from the Edit
	  menu, click Delete. This will remove the registry key.
	
	NOTE: In most cases successfully removing the phantom adapter will solve the RAS
	connection issue if there are no other problems.
	
	It may be necessary to remove and reinstall RAS, other installed adapters, and
	any installed protocols if removing the phantom adapter alone fails to resolve
	the RAS connection issue.
	
	For additional information about how to remove a network adapter from the
	registry, click the article number below to view the article in the Microsoft
	Knowledge Base:
	
	  Q146333 How to Remove Network Adapters from the Registry
	
	Additional query words: phantom nic
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : :3.5,3.51,4.0
	
	=============================================================================
	
