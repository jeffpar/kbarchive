---
layout: page
title: "Q293225: SMS: All Hardware Inventory Goes to BADMIFS Folder After Upgrade"
permalink: kb/293/Q293225/
---

## Q293225: SMS: All Hardware Inventory Goes to BADMIFS Folder After Upgrade

	Article: Q293225
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbenv kbtool kbui kbsms200 kbsms200bug kbsms120 kbsms120bug
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you upgrade from Systems Management Server (SMS) version 1.2 to SMS
	version 2.0, all new hardware inventory files may go to the BADMIFS folder. When
	you view Resource Explorer, it may not display any inventory for the client
	computers. The DataLoader log file (Dataldr.log) may contain the following
	entry:
	
	  Processing file 7LXAWNST.MIF
	  Processing machine MACHINE
	  File successfully parsed. Processing item (GUID =
	  GUID:D9343DC0-254F-11D3-84BA-00105AA9F6DE)
	  CGroup::DefineAttributes - will widen SYSTEM column SMSID from 8 to 48
	  CSqlTable::CreateIndex - these columns are already indexed
	  CDefinedGroup::WidenDefinedAttribute - could not change data type.
	  CGroup::DefineAttributes - unable to widen attributes
	  CGroup::DefineGroupAndAttributes - couldn't define attributes for SYSTEM
	  CMachineSource::InsertMachine - could not validate machine
	  Cannot process MIF X7LXAWNST.MIF, moving it to
	  C:\SMS\inboxes\dataldr.box\BADMIFS\W2A8VMG9.MIF
	
	CAUSE
	=====
	
	The Inventory Dataloader is unable to widen a column in a table and create an
	index on that column because another index already exists for that column.
	Removing this index causes this action to succeed.
	
	WORKAROUND
	==========
	
	Contact Microsoft Product Support Services (PSS) for assistance with removing
	the index from the SMS database.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	Additional query words: prodsms badmif 2716 2703
	
	======================================================================
	Keywords          : kbenv kbtool kbui kbsms200 kbsms200bug kbsms120 kbsms120bug 
	Technology        : kbSMSSearch kbSMS200
	Version           : :2.0
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
