---
layout: page
title: "Q247087: XWEB: Error Message: Unable to Get Public Folder"
permalink: kb/247/Q247087/
---

## Q247087: XWEB: Error Message: Unable to Get Public Folder

	Article: Q247087
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
	
	When you try to access public folders using Outlook Web Access (OWA), you may
	receive the following error message:
	
	  Unable to get public folder.
	
	CAUSE
	=====
	
	The Mapisvc.inf file located in the Winnt\System32 folder on the Exchange Server
	computer has been modified or is missing.
	
	RESOLUTION
	==========
	
	Replace the file with an unmodified copy of the original or add the following
	section to the existing file:
	
	  [EMS_MDB_public]
	  PR_RESOURCE_TYPE=MAPI_STORE_PROVIDER
	  PR_PROVIDER_DLL_NAME=EMSMDB.DLL
	  PR_RESOURCE_FLAGS=STATUS_NO_DEFAULT_STORE
	  66090003=06000000
	  660A0003=03000000
	  34140102=78b2fa70aff711cd9bc800aa002fc45a
	  PR_DISPLAY_NAME=Public Folders
	  PR_PROVIDER_DISPLAY=Microsoft Exchange Message Store
	
	MORE INFORMATION
	================
	
	The Mapisvc.inf file is created during the installation of Microsoft Exchange
	Server. Replacing this file with one from another Exchange Server computer may
	solve this specific problem.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbOWASearch kbOWA550SP1 kbOWA550SP2 kbOWA550SP3
	Version           : WINDOWS:5.5
	Issue type        : kbprb
	
	=============================================================================
	
