---
layout: page
title: "Q247085: XWEB: Error: Failed to Connect to the Microsoft Exchange Server"
permalink: kb/247/Q247085/
---

## Q247085: XWEB: Error: Failed to Connect to the Microsoft Exchange Server

	Article: Q247085
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook Web Access, version 5.5 Service Packs 1, 2, 3 
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you log on to a Microsoft Exchange Server computer by using Microsoft Outlook
	Web Access (OWA), the following error message may be displayed:
	
	  Failed to connect to the Microsoft Exchange Server, (<servername>)
	
	CAUSE
	=====
	
	The Mapisvc.inf file, in the Winnt\System32 folder, is modified or missing.
	
	RESOLUTION
	==========
	
	Replace the Mapisvc.inf file with an unmodified copy of the original, or add the
	following section to the existing file:
	
	  
	
	  [MSEMS]
	  PR_DISPLAY_NAME=Microsoft Exchange Server
	  Sections=MSEMS_MSMail_Section
	  PR_SERVICE_DLL_NAME=emsui.dll
	  PR_SERVICE_ENTRY_NAME=EMSCfg
	  PR_RESOURCE_FLAGS=SERVICE_SINGLE_COPY
	  WIZARD_ENTRY_NAME=EMSWizardEntry
	  Providers=ems_dsa, ems_mdb_public, ems_mdb_private
	  PR_SERVICE_SUPPORT_FILES=emsui.dll, emsabp.dll, emsmdb.dll
	
	MORE INFORMATION
	================
	
	The Mapisvc.inf file is created when Exchange Server is installed. To fix the
	problem, replace the Mapisvc.inf file with a copy of the file from another
	Exchange Server computer.
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbExchangeSearch kbExchange550 kbZNotKeyword2 kbOWASearch kbOWA550SP1 kbOWA550SP2 kbOWA550SP3
	Version           : WINDOWS:5.5
	Issue type        : kbinfo
	
	=============================================================================
	
