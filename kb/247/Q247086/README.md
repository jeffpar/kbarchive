---
layout: page
title: "Q247086: XWEB: Outlook Web Access Error Message: Failed to Get Inbox"
permalink: kb/247/Q247086/
---

## Q247086: XWEB: Outlook Web Access Error Message: Failed to Get Inbox

	Article: Q247086
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook Web Access, version 5.5 Service Packs 1, 2, 3 
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you log on to a Microsoft Exchange Server computer by using Outlook Web
	Access (OWA), the following error message may be displayed:
	
	  Failed to get Inbox.
	
	CAUSE
	=====
	
	The Mapisvc.inf file, which is located in the Winnt\System32 folder, has been
	modified or is missing.
	
	RESOLUTION
	==========
	
	Either replace the Mapisvc.inf file with an unmodified copy of the original
	file, or add the following sections to the file:
	
	  [EMS_MDB_private]
	  PR_PROVIDER_DLL_NAME=EMSMDB.DLL
	  PR_RESOURCE_TYPE=MAPI_STORE_PROVIDER
	  PR_RESOURCE_FLAGS=STATUS_PRIMARY_IDENTITY|STATUS_DEFAULT_STORE|STATUS_PRIMARY_STORE
	  66090003=0C000000
	  660A0003=01000000
	  34140102=5494A1C0297F101BA58708002B2A2517
	  PR_DISPLAY_NAME=Private Folders
	  PR_PROVIDER_DISPLAY=Microsoft Exchange Message Store
	  [EMS_DSA]
	  PR_DISPLAY_NAME=Microsoft Exchange Directory Service
	  PR_PROVIDER_DISPLAY=Microsoft Exchange Directory Service
	  PR_PROVIDER_DLL_NAME=EMSABP.DLL
	  PR_RESOURCE_TYPE=MAPI_AB_PROVIDER
	
	MORE INFORMATION
	================
	
	The Mapisvc.inf file is created during the installation of Exchange Server. You
	may be able to solve this problem by copying the Mapisvc.inf file from another
	Exchange Server computer.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbOWASearch kbOWA550SP1 kbOWA550SP2 kbOWA550SP3
	Version           : WINDOWS:5.5
	Issue type        : kbprb
	
	=============================================================================
	
