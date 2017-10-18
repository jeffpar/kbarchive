---
layout: page
title: "Q194633: How to Add Additional Host Security Domains"
permalink: kb/194/Q194633/
---

## Q194633: How to Add Additional Host Security Domains

	Article: Q194633
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:4.0 SP1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, version 4.0 SP1 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, make sure you understand how to restore it if
	a problem occurs. For information about how to do this, view the "Restoring
	the Registry" Help topic in Regedit.exe or the "Restoring a Registry Key"
	Help topic in Regedt32.exe.
	
	SUMMARY
	=======
	
	When you install the Windows NT Account Synchronization service (the service
	must be installed on a Primary Domain Controller [PDC]), setup asks for a list
	of domains in which the Host Account Caches are to exist. Usually, in a single
	domain model, this will be the domain name of the domain in which the PDC is a
	member. However, if installing in a Multi- Domain environment, such as a master
	domain model, the Windows NT Account Synchronization service will be installed
	on the PDC of the accounts domain and the Host Account Cache service(s) will
	exist in each resource domain.
	
	MORE INFORMATION
	================
	
	However, it may be necessary to add a resource domain to the list after the
	service is configured and running. To add additional Host Security Domains
	without removing and reinstalling the Windows NT Account Synchronization
	service, you must modify the Windows NT Registry. To do this, perform the
	following steps:
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall your operating system. Microsoft cannot guarantee that
	problems resulting from the incorrect use of Registry Editor can be solved. Use
	Registry Editor at your own risk.
	
	For information about how to edit the registry, view the "Changing Keys And
	Values" Help topic in Registry Editor (Regedit.exe) or the "Add and Delete
	Information in the Registry" and "Edit Registry Data" Help topics in
	Regedt32.exe. Note that you should back up the registry before you edit it.
	
	1. Start Registry Editor (Regedt32.exe).
	
	2. Locate the MdbDomains value under the following subkey in the registry:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\ 
	     SnaPMP\Parameters
	
	  NOTE: The above registry key is one path; it has been wrapped for readability.
	
	3. On the Edit menu, click Multi String, type on a new line the name of a single
	  resource domain. Press Enter after each new entry, and then click OK.
	
	4. Quit Registry Editor.
	
	The Windows NT Account Synchronization service must be restarted for the change
	to take effect.
	
	For more information, please see the following Microsoft Knowledge Base article:
	
	  Q194695 How to Configure Host Security for a Multi-Domain Environment
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ400SP1
	Version           : WINDOWS:4.0 SP1
	Issue type        : kbhowto
	
	=============================================================================
	
