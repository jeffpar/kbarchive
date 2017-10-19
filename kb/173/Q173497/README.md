---
layout: page
title: "Q173497: XADM: Session Timeout Settings for Outlook Web Access"
permalink: /kb/173/Q173497/
---

## Q173497: XADM: Session Timeout Settings for Outlook Web Access

	Article: Q173497
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	
	In Microsoft Outlook Web Access (OWA), the session timeout defaults to 60 minutes
	for authenticated users and 20 minutes for anonymous users. This can be changed
	using the following registry entries:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\MSExchangeWeb\Parameters
	
	  AuthenticatedSessionTimeout
	  AnonymousSessionTimeout
	
	Both are DWORD values and are in minutes
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall your operating system. Microsoft cannot guarantee that
	problems resulting from the incorrect use of Registry Editor can be solved. Use
	Registry Editor at your own risk.
	
	For information about how to edit the registry, view the "Changing Keys And
	Values" Help topic in Registry Editor (Regedit.exe) or the "Add and Delete
	Information in the Registry" and "Edit Registry Data" Help topics in
	Regedt32.exe. Note that you should back up the registry before you edit it.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbhowto
	
	=============================================================================
	
