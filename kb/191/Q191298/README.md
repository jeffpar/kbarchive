---
layout: page
title: "Q191298: SMS: Inventory May Stop Responding on Windows 3.1 LanMan Client"
permalink: kb/191/Q191298/
---

## Q191298: SMS: Inventory May Stop Responding on Windows 3.1 LanMan Client

	Article: Q191298
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2
	Operating System(s): 
	Keyword(s): kbInventory smsinv
	Last Modified: 25-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When running Smsls.bat for a LANMAN client by using a logon script, you may see
	the following errors before the client restarts:
	
	  Run-time error R6000 stack overflow
	
	  -and-
	
	  Run-time error R6001 null pointer assignment
	
	If you set the client to run in verbose mode, by configuring the environment
	variable 'set smsls=1', and then run Runsms.bat, you will see the client stop
	responding at:
	
	  'c:\ms\sms\bin\ipconfig.exe > c:\ms\sms\temp\ipconfig.sms". Ipconfig.sms
	  contains "error: this program must be run from within Windows'
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.2. This problem has been corrected in the latest U.S. service pack for
	Systems Management Server version 1.2. For information on obtaining the service
	pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	Additional query words: prodsms SP SP4 hang hangs hung
	
	======================================================================
	Keywords          : kbInventory smsinv 
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
