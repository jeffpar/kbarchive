---
layout: page
title: "Q185913: SMS: MIF Attribute Case Change May Cause MIF to Be Rejected"
permalink: kb/185/Q185913/
---

## Q185913: SMS: MIF Attribute Case Change May Cause MIF to Be Rejected

	Article: Q185913
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2
	Operating System(s): 
	Keyword(s): kbDataLoader smsdataloader
	Last Modified: 30-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you change the case of an attribute in a custom MIF, the Dataloader utility
	does not process the MIF and places it into the Badmifs subdirectory. You may
	see an entry similar to the following in the Datalodr.log file:
	
	     CDefinedGroup::InsertDefinedAttribute - attribute Operational Group
	     Index already in AttributeMap
	     CGroup::DefineAttributes - couldn't define attribute
	     CGroup::DefineGroupAndAttributes - couldn't define attributes for
	     SMS|TableName|002
	     finished processing current machine.
	     ~Cannot process MIF X00000000.MIF, moving it to BADMIFS
	
	CAUSE
	=====
	
	Systems Management Server does not allow you to change the case of a column name
	after the column name has been created.
	
	WORKAROUND
	==========
	
	To work around the problem, you can delete the Group Class (Table) using the
	Systems Management Server Database Manager (Dbclean.exe), and force the client
	to resend the MIF to re-create the table.
	
	NOTE: Deleting any standard Systems Management Server Group Classes using the
	Systems Management Server Database Manager is not recommended. Doing so may
	require that you restore from a backup or reinstall so that the Group Classes
	(Tables) are re-created.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.2. This problem has been corrected in the latest U.S. service pack for
	Systems Management Server version 1.2. For information on obtaining the service
	pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbDataLoader smsdataloader 
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
