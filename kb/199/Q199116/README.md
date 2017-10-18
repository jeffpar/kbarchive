---
layout: page
title: "Q199116: SMS: Software Inventory Will Not Scan for an Individual File"
permalink: kb/199/Q199116/
---

## Q199116: SMS: Software Inventory Will Not Scan for an Individual File

	Article: Q199116
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbsms200 kbInventorykbfaq
	Last Modified: 25-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Software Inventory in Systems Management Server version 2.0 will scan only for
	file extensions that are defined in the user interface (UI), not for a specific
	file.
	
	MORE INFORMATION
	================
	
	If you need to query for and find a specific file, the extension for that file
	must be defined in the Systems Management Server 2.0 UI. After inventory is
	taken and all of the files with the defined extension are found, you can run a
	query on the inventoried files to find the specific file you need.
	
	Additional query words: prodsms SWIinv32
	
	======================================================================
	Keywords          : kbsms200 kbInventory kbfaq
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbinfo
	
	=============================================================================
	
