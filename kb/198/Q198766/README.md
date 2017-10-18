---
layout: page
title: "Q198766: SMS: How MIF Files Are Processed in Version 2.0"
permalink: kb/198/Q198766/
---

## Q198766: SMS: How MIF Files Are Processed in Version 2.0

	Article: Q198766
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbsms200
	Last Modified: 22-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Systems Management Server 2.0 MIF processing is similar in functionality to
	Systems Management Server 1.2. However, there are a number of questions that
	need clarification. This article's intent is to answer common questions, such as
	the following:
	
	- BADMIFS: In Systems Management Server 1.2, if a MIF is rejected by Inventory
	  Dataloader and is then placed into the BADMIFs folder. MIFs placed into
	  BADMIFs are not re-evaluated by Inventory Dataloader and will have to be
	  removed manually.
	
	- When No DDR Is Received: In Systems Management Server 2.0, if the item is of
	  a discovered architecture but is not found in the discovery database, the
	  Inventory Dataloader rejects this MIF and places it in the ORPHANS directory.
	  It then writes a Data Discovery Record (DDR) to the Discovery Data Manager's
	  (DDM) inbox, and retries the contents of the ORPHANS directory every 10
	  minutes until the item is processed. This process is necessary to ensure that
	  the discovery item has the same key as the inventory data.
	
	- When the MIF Is Too large: The default Max MIF size is set to 5,000,000 bytes
	  on the site server. If a MIF exceeds the value defined on the site server,
	  the MIF is rejected and placed into BADMIFs folder in Systems Management
	  Server 2.0.
	
	- Set the Default Max MIF Size: You can increase the maximum MIF size value in
	  the registry on the Site Server. The registry key is:
	
	  hkey_local_machine/software/microsoft/sms/components/SMS_Inventory_Dataloader/Max
	  MIF Size
	
	WARNING: If you increase this value in the registry, the disk space usage on the
	site server may quickly increase. The default setting allows almost a 5 MB MIF
	to be processed for each client. The larger the MIF size allowed, the longer it
	takes for the Inventory DataLoader to process, and the more resources are used
	on the site server.
	
	
	MORE INFORMATION
	================
	
	For more information on MIF processing, please refer to the Back Office Resource
	Kit.
	
	Additional query words: prodsms hw32
	
	======================================================================
	Keywords          : kbsms200 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbinfo
	
	=============================================================================
	
