---
layout: page
title: "Q162557: SMS: Sharing Violations When Creating Inventory RAW Files"
permalink: kb/162/Q162557/
---

## Q162557: SMS: Sharing Violations When Creating Inventory RAW Files

	Article: Q162557
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2
	Operating System(s): 
	Keyword(s): kbnetwork kbInventory smsinvkbfixlist
	Last Modified: 25-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When multiple clients log in and run inventory from the same logon server in the
	same period, they may experience sharing violation errors when the inventory
	agents tries to create the .raw files.
	
	CAUSE
	=====
	
	The sharing violations stem from the process by which the Inventory Agent finds
	a unique file name for both the .tmp and .raw files. There is enough of a time
	lag between the time the inventory agent does a directory search to determine a
	unique filename and the time the file is actually created, that another client
	may be using the same file name.
	
	WORKAROUND
	==========
	
	To work around this problem, obtain the hotfix mentioned below. With the hotfix,
	the inventory agent uses the client's SMSID as the file name for the .tmp and
	.raw files, instead of scanning the Logon.srv\Inventry.box directory to find an
	unused file name.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.2.
	
	
	A supported fix is now available, but is not fully regression-tested and should
	be applied only to systems experiencing this specific problem. Unless you are
	severely impacted by this specific problem, Microsoft recommends that you wait
	for the next Service Pack that contains this fix. Contact Microsoft Technical
	Support for more information.
	
	
	Additional query words: prodsms invdos abort retry fail
	
	======================================================================
	Keywords          : kbnetwork kbInventory smsinv kbfixlist
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	Issue type        : kbbug
	
	=============================================================================
	
