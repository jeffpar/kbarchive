---
layout: page
title: "Q180016: DNS Manager Lists DNS Servers After Reinstalling DNS Service"
permalink: kb/180/Q180016/
---

## Q180016: DNS Manager Lists DNS Servers After Reinstalling DNS Service

	Article: Q180016
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, make sure you understand how to restore it if
	a problem occurs. For information about how to do this, view the "Restoring
	the Registry" Help topic in Regedit.exe or the "Restoring a Registry Key"
	Help topic in Regedt32.exe.
	
	SYMPTOMS
	========
	
	When you uninstall and then reinstall the Domain Name System (DNS) Server
	service in Windows NT Server, some of the previously created DNS servers may
	still be listed in the DNS Manager.
	
	CAUSE
	=====
	
	This behavior can occur because some of the registry keys are not removed when
	you uninstall the DNS Server service. Specifically, the registry keys that
	define the DNS servers that can be administered through the local DNS Manager
	may not be removed.
	
	RESOLUTION
	==========
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall your operating system. Microsoft cannot guarantee that
	problems resulting from the incorrect use of Registry Editor can be solved. Use
	Registry Editor at your own risk.
	
	For information about how to edit the registry, view the "Changing Keys And
	Values" Help topic in Registry Editor (Regedit.exe) or the "Add and Delete
	Information in the Registry" and "Edit Registry Data" Help topics in
	Regedt32.exe. Note that you should back up the registry before you edit it.
	
	To reinstall the DNS Server service without previous DNS servers listed in the
	DNS Manager, uninstall the DNS Server service, use Registry Editor to delete the
	DNS Administrator key under the following registry key, and then reinstall the
	DNS Server service:
	
	HKEY_CURRENT_USER\Software\Microsoft
	
	MORE INFORMATION
	================
	
	The above registry key is created when the DNS Server service is installed and
	at least one server is created in the DNS Administrator. The registry key may
	not be deleted when the DNS Server service is removed. This key includes
	information for the servers added into DNS Manager, including the server's name
	and Internet Protocol (IP) address. Registry entries are created for each server
	that DNS Manager lists.
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	
	=============================================================================
	
