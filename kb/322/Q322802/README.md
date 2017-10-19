---
layout: page
title: "Q322802: SMS: Extended Hardware Inventory Classes Are Not Replicated"
permalink: /kb/322/Q322802/
---

## Q322802: SMS: Extended Hardware Inventory Classes Are Not Replicated

	Article: Q322802
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbsms200
	Last Modified: 20-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you extend the Hardware Inventory functionality by adding additional classes
	in the Sms_def.mof file and by setting the reporting value to "True," the SMS
	database contains additional tables that hold the additional inventory
	information that is collected. Also, the GroupMap table is updated with
	additional rows for the new inventory classes. This extended information may not
	be replicated up the hierarchy to a parent site that does not contain this
	extended information in its database. All inventory information with the new
	inventory classes that is received by the parent site is placed in the Badmifs
	folder. The new inventory classes are not visible in Resource Explorer.
	
	CAUSE
	=====
	
	The parent site cannot add the extended inventory information because the parent
	site does not contain the additional tables or group classes.
	
	WORKAROUND
	==========
	
	To work around this issue, place the modified Sms_def.mof file on a client in
	the parent site, and then force a Hardware Inventory process to occur. When the
	hardware inventory is processed, the new group classes and tables are created.
	Later replication of the extended inventory information is successful.
	
	MORE INFORMATION
	================
	
	When inventory information is collected from a modified Sms_def.mof file, two
	additional tables are created for each inventory class that you add. One table
	contains the current data for the class. The other table contains the history.
	
	One example of a situation in which this issue might occur is a three-tier
	hierarchy on which you modify the Sms_def.mof file in the middle tier to collect
	additional inventory classes. Because the parent site does not contain the
	additional tables, the attempt to insert the table rows does not succeed. The
	.mif file is placed in the Badmifs folder. An error is recorded in the status
	for the Inventory Data Loader component.
	
	This issue does not occur if the child site with extended inventory information
	is a secondary site. Because a secondary site does not have a database, all
	database actions occur on the primary parent site. When the inventory
	information from a child secondary site is processed at the parent site, the
	database is extended.
	
	It is a good idea to use the same Sms_def.mof file on all sites to prevent this
	issue from occurring.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200 
	Technology        : kbSMSSearch kbSMS200
	Version           : :2.0
	Issue type        : kbprb
	
	=============================================================================
	
