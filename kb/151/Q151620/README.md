---
layout: page
title: "Q151620: Inventory Scan Intervals Off by One Day"
permalink: kb/151/Q151620/
---

## Q151620: Inventory Scan Intervals Off by One Day

	Article: Q151620
	Product(s): Microsoft Systems Management Server
	Version(s): 1.0,1.1,1.2
	Operating System(s): 
	Keyword(s): kbnetwork kbInventory kbsmsAdmin smsadmin smsinv
	Last Modified: 19-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1, 1.2 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Clients scan hardware or software at every logon even though Every 1 Days is
	specified in the Inventory section of the Site Properties. If the interval every
	two days is specified, the scan occurs daily. If the interval specified is every
	three days, the scan occurs as expected.
	
	CAUSE
	=====
	
	The Sms.ini SoftwareScanInterval or HardwareScanInterval is set at a value one
	greater than it should be.
	
	The SoftwareScanInterval or HardwareScanInterval, when set at every one (1) day,
	will be set to one (that is, always) in the Sms.ini, although it should be set
	at two.
	
	When set at two days, the SoftwareScanInterval or HardwareScanInterval will be
	set at two (that is, daily) in the SMS.INI, although it should be set at three.
	
	When set at three days, the SoftwareScanInterval or HardwareScanInterval will be
	set at three (interval), and scans every 3 days.
	
	WORKAROUND
	==========
	
	To work around this problem:
	
	- To specify daily scans, type "Every 2 Days."
	
	- To specify scans every three days or less frequently, type the interval as
	  you normally would.
	
	NOTE: this problem precludes specifying an interval of two days.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	versions 1.0, 1.1 and 1.2. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbnetwork kbInventory kbsmsAdmin smsadmin smsinv 
	Technology        : kbSMSSearch kbSMS100 kbSMS110 kbSMS120
	Version           : :1.0,1.1,1.2
	
	=============================================================================
	
