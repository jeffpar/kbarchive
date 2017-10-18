---
layout: page
title: "Q146635: Recursive File Collection When SMS Performs Inventory"
permalink: kb/146/Q146635/
---

## Q146635: Recursive File Collection When SMS Performs Inventory

	Article: Q146635
	Product(s): Microsoft Windows NT
	Version(s): winnt:1.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When a large Systems Management Server site performs inventory of files, the
	files are placed in the FILES.COL directory. When the site server performs a
	local inventory of files, it cannot distinguish the files in the FILES.COL
	directory. Therefore, the files are collected again, which creates extremely
	large .MIF files. The creation of large .MIF files causes the SMS Executive
	service to process for a long period of time (which causes backlogs of other
	processes).
	
	Each time the site server performs inventory, duplicate files are collected,
	which creates duplicate .MIF files.
	
	WORKAROUND
	==========
	
	To work around this problem, do one of the following:
	
	- Do not collect files
	
	  -or-
	
	- Manually remove the collected files frequently to reduce the number of files
	
	  -or-
	
	- Disable the Inventory Agent service on the site server.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.1. It has been fixed in Systems Management Server version 1.2.
	
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          :  
	Technology        : kbSMSSearch kbSMS110
	Version           : winnt:1.1
	
	=============================================================================
	
