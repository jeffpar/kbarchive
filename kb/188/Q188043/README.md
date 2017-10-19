---
layout: page
title: "Q188043: SMS Admin Shows Incomplete List of Paths for Software Inventory"
permalink: /kb/188/Q188043/
---

## Q188043: SMS Admin Shows Incomplete List of Paths for Software Inventory

	Article: Q188043
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2
	Operating System(s): 
	Keyword(s): kbInventory kbsmsAdmin smsadmin smsinv
	Last Modified: 25-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When the client Inventory Agent (for example, Invwin32 and/or Invdos) performs a
	software inventory, it will scan the local drives for files that match the
	criteria defined in the Inventory Package properties.
	
	If you create an Inventory Package to search for multiple files that exist in the
	same directory on the client, Systems Management Server will only report the
	first file that is found. This occurs regardless of the search logic. It makes
	no difference whether you use the AND operator or the OR operator.
	
	Software inventory does continue to search the directory for other files that
	have been defined, but it does not actually report the information about the
	other files found in SMS Admin. If multiple files are present, only the first
	file defined in the Software Inventory package will be displayed in the client's
	Packages icon in Personal Computer Properties.
	
	WORKAROUND
	==========
	
	Create a separate Software Inventory package for each file that you need to
	locate.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.2.
	
	
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbInventory kbsmsAdmin smsadmin smsinv 
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	
