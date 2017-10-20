---
layout: page
title: "Q168093: SMS: Group Class Is Not Re-Created After Being Deleted"
permalink: /kb/168/Q168093/
---

## Q168093: SMS: Group Class Is Not Re-Created After Being Deleted

{% raw %}

	Article: Q168093
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.1,1.2
	Operating System(s): 
	Keyword(s): kbnetwork kbDatabase kbDataLoader kbInventory smsinv smsdatabase smsdataloaderkbfaq
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1, 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you delete a group from the Personal Computer Architecture using Systems
	Management Server Database Manager, then attempt to re-create the group by
	reloading the MIF, the attributes for that group do not reappear in the Personal
	Computer Properties window, even if you quit and restart the Systems Management
	Server Administrator program as required. Inventory is reported, but the group
	and its attributes never reappear.
	
	CAUSE
	=====
	
	The Inventory Dataloader does not re-create the group class in the Systems
	Management Server database.
	
	You can diagnose this problem by monitoring the Datalodr.log file for activity
	similar to the following:
	
	     Waiting for a MIF...
	     Processing a machine...
	     Requesting license for client S0100001
	     CMachine::FindMachine - Searching for matching SMS Unique IDs
	     Defining attributes for group GROUPTEST|MYTEST|1.0...
	     CGroupMap::AddColumnToSpecificTable - couldn't add column to table
	     CDefinedArchitecture::InsertDefinedAttribute - could not add column
	     CGroup::DefineAttributes - couldn't defined attribute
	     CGroup::DefineGroupAndAttributes - couldn't define attributes for
	     GROUPTEST|MYTEST|1.0
	     finished processing current machine.
	     SQL problem detected, terminating the thread.
	     SQL problem detected, terminating MIF processing thread.
	
	The Systems Management Server Executive service caches Defined Architecture in
	memory. When Dataloader receives a MIF that contains a group that existed the
	last time the Systems Management Server Executive was initialized, it sees the
	table(s) defined for this group class in cache, even though it has been deleted
	using Database Manager. Instead of re-creating the group class, it attempts to
	add to it. This results in the failure noted in the log example above. The MIF
	is not placed in the Badmifs subdirectory.
	
	WORKAROUND
	==========
	
	Stop and start the SMS_Executive service on the site server. Doing this flushes
	and reinitializes the cache. Inventory Dataloader will then be able to correctly
	process the MIF and re-create the group class. It may also be necessary to force
	inventory or remove the appropriate computer history file for the data to appear
	immediately.
	
	
	Additional query words: prodsms dbclean dbclean.exe
	
	======================================================================
	Keywords          : kbnetwork kbDatabase kbDataLoader kbInventory smsinv smsdatabase smsdataloader kbfaq
	Technology        : kbSMSSearch kbSMS100 kbSMS110 kbSMS120
	Version           : winnt:1.0,1.1,1.2
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
