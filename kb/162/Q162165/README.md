---
layout: page
title: "Q162165: SMS: Client Inventory Data Entered Under a New SMSID"
permalink: /kb/162/Q162165/
---

## Q162165: SMS: Client Inventory Data Entered Under a New SMSID

	Article: Q162165
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.1,1.2
	Operating System(s): 
	Keyword(s): kbnetwork kbDatabase kbInventory smsinv smsdatabasekbfixlist
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.1, 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When the Systems Management Server Inventory Agent (INVDOS) is run on a computer
	running Windows 3.1, Windows for Workgroups 3.x, or Windows 95, the inventory
	may report data to a new SMSID without modifying the Systems Management Server
	Unique ID value in the client's Sms.ini file.
	
	CAUSE
	=====
	
	Under certain conditions, the inventory agent fails in checking the SMSID in the
	Sms.ini file. In this case, a new ID is generated. This ID is reflected in the
	generated MIF file, and therefore the data is written into the database with the
	new ID. The inventory agent does not write the new ID to the client's Sms.ini
	file.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	versions 1.1 and 1.2.
	
	
	A supported fix is now available for version 1.1, but is not fully
	regression-tested and should be applied only to systems experiencing this
	specific problem. Unless you are severely impacted by this specific problem,
	Microsoft recommends that you wait for the next Service Pack that contains this
	fix. Contact Microsoft Technical Support for more information.
	
	
	Additional query words: prodsms getdata
	
	======================================================================
	Keywords          : kbnetwork kbDatabase kbInventory smsinv smsdatabase kbfixlist
	Technology        : kbSMSSearch kbSMS110 kbSMS120
	Version           : winnt:1.1,1.2
	Issue type        : kbbug
	
	=============================================================================
	
