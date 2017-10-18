---
layout: page
title: "Q256278: &quot;Setup Could Not Modify the Registry&quot; During Index Server Setup"
permalink: kb/256/Q256278/
---

## Q256278: &quot;Setup Could Not Modify the Registry&quot; During Index Server Setup

	Article: Q256278
	Product(s): Internet Information Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-AUG-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Index Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you reinstall Index Server, the following error message may occur:
	
	  Setup could not modify the registry
	
	After Setup, the Index Server search pages do not function correctly.
	
	
	CAUSE
	=====
	
	This error message occurs when there are newer versions of the Index Server DLLs
	on the computer and Setup is not allowed to overwrite them. The mismatched DLLs
	break both the Index Server Setup and the search pages.
	
	RESOLUTION
	==========
	
	To resolve this problem, perform the following steps:
	
	1. Run the Windows NT Option Pack Setup program. To uninstall Index Server,
	  click to uncheck the Index Server check box.
	
	2. In the Winnt/System32 folder, remove the Idq.dll, Infosoft.dll, and Query.dll
	  files if they exist.
	
	3. Run the Windows Option Pack Setup. Click the Index Server check box to
	  install it.
	
	4. During installation, if you are prompted to overwrite newer files, click Yes.
	  This will install all the original index files on the computer.
	
	Note: You need to re-apply any Windows NT Service Packs that were on the computer
	before removing Index Server.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbIdxServSearch kbAudDeveloper kbIdxServ200
	Version           : winnt:2.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	
