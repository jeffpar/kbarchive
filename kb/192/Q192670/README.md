---
layout: page
title: "Q192670: SMSINST: HKEY_USERS Values Not Scanned for During Repackage"
permalink: kb/192/Q192670/
---

## Q192670: SMSINST: HKEY_USERS Values Not Scanned for During Repackage

	Article: Q192670
	Product(s): Microsoft Systems Management Server
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): smsinst
	Last Modified: 18-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server Installer version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When Systems Management Server Installer does a repackage, it scans for changes
	in the HKEY_USERS key and its subkeys in the registry, but does not scan for
	changes in the values contained in those keys.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	Installer version 1.0.
	
	
	A supported fix is now available, but has not been fully regression- tested and
	should be applied only to systems experiencing this specific problem. Unless you
	are severely impacted by this specific problem, Microsoft recommends that you
	wait for the next Service Pack that contains this fix. Contact Microsoft Product
	Support Services for more information.
	
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : smsinst 
	Technology        : kbSMSSearch kbSMSI100
	Version           : WINDOWS:1.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
