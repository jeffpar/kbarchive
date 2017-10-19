---
layout: page
title: "Q199729: SMS: Missing Records in WorkstationStatus Table Generate Badmif"
permalink: /kb/199/Q199729/
---

## Q199729: SMS: Missing Records in WorkstationStatus Table Generate Badmif

	Article: Q199729
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2
	Operating System(s): 
	Keyword(s): kbDatabase kbsms120bug kbDataLoader
	Last Modified: 21-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If, for an undetermined reason, there is no existing record in the
	WorkstationStatus table when dataloader attempts to load a MIF, the MIF will be
	moved to the Badmifs directory. The following appears in the datalodr.log: (This
	example shows SQL tracing enabled.)
	
	> Updating No-History group: MICROSOFT|WORKSTATION_STATUS|1.0... >
	SMS_INVENTORY_DATA_LOADER 12/23/98 1:03:02 PM 126 > SQL>>> select
	'X' from WorkstationStatus where datakey = 47471 > SMS_INVENTORY_DATA_LOADER
	12/23/98 1:03:02 PM 126 > SQL>>>>> Done.
	SMS_INVENTORY_DATA_LOADER 12/23/98 1:03:02 PM > 126 > QL>>>
	insert into WorkstationStatus (Files_Not_Installed0, >
	System_Files_Not_Modified0, LastHWScan, LastSWScan, >
	Failed_Hardware_Checks0, Standalone_Workstation0, datakey, ComponentName) >
	values ("None", "None", "19981223 12:50:37", "19981223 12:50:38", "None", >
	"No", 47471, "Workstation") SMS_INVENTORY_DATA_LOADER 12/23/98 > 1:03:02 PM
	126 > SQL>>>>> Done. SMS_INVENTORY_DATA_LOADER 12/23/98
	1:03:02 PM > 126 > CMachineDataTable::AddToMachineDataTable - entry
	already in table > SMS_INVENTORY_DATA_LOADER 12/23/98 1:03:02 PM 126 >
	CGroup::ProcessNoHistoryGroup - couldn't insert new group data >
	SMS_INVENTORY_DATA_LOADER 12/23/98 1:03:02 PM 126 > finished processing
	current machine. SMS_INVENTORY_DATA_LOADER > 12/23/98 1:03:02 PM 126 >
	Cannot process MIF X00000007.MIF, moving it to BADMIFS >
	SMS_INVENTORY_DATA_LOADER 12/23/98 1:03:02 PM
	
	WORKAROUND
	==========
	
	Two options are available to work around this problem:
	
	- The badmifs exhibiting this particular problem can be moved back to the
	  process directory. Dataloader will process them correctly the second time.
	
	- The badmifs exhibiting this particular behavior could be deleted (the
	  information will be lost), and the next inventory cycle should process
	  properly.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.2.
	
	Additional query words: prodsms hinv32 smssql
	
	======================================================================
	Keywords          : kbDatabase kbsms120bug kbDataLoader 
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	Issue type        : kbbug
	
	=============================================================================
	
