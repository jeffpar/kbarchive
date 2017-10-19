---
layout: page
title: "Q165591: SMS: SNMP Traps Are Not Sent If Trap Throttle Is Too Strict"
permalink: /kb/165/Q165591/
---

## Q165591: SMS: SNMP Traps Are Not Sent If Trap Throttle Is Too Strict

	Article: Q165591
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2
	Operating System(s): 
	Keyword(s): kbnetwork kbSNMP smssnmp
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If you apply a trap throttle that is too rigid, you will find that no traps are
	sent, and you will see information similar to the following in the Snmpelea.trc
	file:
	
	     03/06/1997 14:51:24 SnmpEvLogProc: Event detected log record written for
	     Security - 1 - 00148440
	
	     03/06/1997 14:51:24 SnmpEvLogProc: Performance threshold flag is on. No
	     data will be processed.
	
	     03/06/1997 14:51:24 SnmpEvLogProc: Allocating memory for log event
	     record
	
	The trap throttle is a mechanism to prevent SNMP traps from flooding your
	network.
	
	To correct the problem and begin sending traps again from a specific client, do
	the following from the Systems Management Server Administrator:
	
	1. Open the Personal Computer Properties for the affected client.
	
	2. From the Windows NT Administrative Tools group, start the Event to Trap
	  Translator program.
	
	3. Click Settings and select Don't Apply Throttle. Click OK twice to save the
	  settings to the client computer's registry.
	
	4. Start the Event to Trap Translator program for the client again and click
	  Settings.
	
	5. Select Apply Throttle and define an acceptable level (the default is 500
	  traps in 300 seconds).
	
	6. Click Reset and then click OK twice to update the client computer's registry.
	
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbnetwork kbSNMP smssnmp 
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	Issue type        : kbinfo
	
	=============================================================================
	
