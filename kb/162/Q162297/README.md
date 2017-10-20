---
layout: page
title: "Q162297: How to Disable SAP 64E"
permalink: /kb/162/Q162297/
---

## Q162297: How to Disable SAP 64E

{% raw %}

	Article: Q162297
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): winnt:1.0,2.0,3.0,3.51,4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.51, 4.0 
	- Microsoft Internet Information Server versions 1.0, 2.0, 3.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, make sure you understand how to restore it if
	a problem occurs. For information about how to do this, view the "Restoring
	the Registry" Help topic in Regedit.exe or the "Restoring a Registry Key"
	Help topic in Regedt32.exe.
	
	SUMMARY
	=======
	
	Internet Information Server (IIS) uses SAP 64E to broadcast its services
	throughout the network. You can disable the SAP broadcast using Registry Editor
	to add the entry indicated below:
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall your operating system. Microsoft cannot guarantee that
	problems resulting from the incorrect use of Registry Editor can be solved. Use
	Registry Editor at your own risk.
	
	For information about how to edit the registry, view the "Changing Keys And
	Values" Help topic in Registry Editor (Regedit.exe) or the "Add and Delete
	Information in the Registry" and "Edit Registry Data" Help topics in
	Regedt32.exe. Note that you should back up the registry before you edit it.
	
	MORE INFORMATION
	================
	
	If you do not want to see SAP 64E, you must modify the registry by performing
	the following steps for each IIS service.
	
	1. Start Registry Editor (Regedt32.exe), and go to the following subkey:
	
	     HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services
	     \<ServiceName>\Parameters
	
	  NOTE: The above registry key is one path; it has been wrapped for
	  readability.
	
	  Where <servicename> is MSFTPSVC, FTP Service, GOPHERSVC, Gopher Service,
	  W3SVC, and the HTTP Service.
	
	2. Add the following information:
	
	  " EnableSvcLoc REG_DWORD
	  Range: 0, 1 Default:1
	  Description:
	  " (without the quotation marks)
	
	IIS services register themselves with a service locator so that the service can
	be discovered by administrative utilities and clients. This parameter controls
	such registration. If it is set to 0, then the service will forego registration
	of the service. Otherwise, it registers the service for service locations.
	Administrators planning on having a private server should consider setting the
	value of this parameter to 0.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search kbiisSearch kbiis300 kbiis200 kbiis100
	Version           : winnt:1.0,2.0,3.0,3.51,4.0
	
	=============================================================================
	

{% endraw %}
