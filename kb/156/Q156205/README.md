---
layout: page
title: "Q156205: SMS: Windows NT Inventory Agent Detects ATAPI Drives as SCSI"
permalink: kb/156/Q156205/
---

## Q156205: SMS: Windows NT Inventory Agent Detects ATAPI Drives as SCSI

	Article: Q156205
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.1,1.2
	Operating System(s): 
	Keyword(s): kbhw kbInventory smsinv kbHardware
	Last Modified: 25-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.1, 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	
	When a Windows NT system that contains an Enhanced IDE or ATAPI drive is
	inventoried, the Systems Management Server (SMS) inventory report shows that it
	has a SCSI drive instead.
	
	CAUSE
	=====
	
	Windows NT uses a SCSI "wrapper" to abstract the IDE interface. This was
	designed so large IDE drives that exceed the standard BIOS limitations could be
	used with Windows NT. This also allows Windows NT to easily handle other drive
	interfaces that may be introduced by the industry.
	
	When SMS hardware inventory is done on a Windows NT system, the registry is read
	to determine what hardware is available. Because the internal representation of
	the IDE interface in the Windows NT registry shows as a SCSI device for the IDE
	hard disk drive, SMS reports this drive as a SCSI drive to the SMS database.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.2. This problem has been corrected in the latest U.S. Service Pack for
	Microsoft Systems Management Server version 1.2. For information on obtaining
	the Service Pack, query on the following word in the Microsoft Knowledge Base:
	
	  " SERVPACK" (without the quotation marks)
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbhw kbInventory smsinv kbHardware 
	Technology        : kbSMSSearch kbSMS110 kbSMS120
	Version           : winnt:1.1,1.2
	
	=============================================================================
	
