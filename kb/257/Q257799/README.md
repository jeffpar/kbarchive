---
layout: page
title: "Q257799: SMS: How to Use Heartbeat Discovery"
permalink: kb/257/Q257799/
---

## Q257799: SMS: How to Use Heartbeat Discovery

	Article: Q257799
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0,2.0 SP1
	Operating System(s): 
	Keyword(s): kbenv kbClient kbConfig kbMMC kbsms200 kbDiscovery kbInventory kbsmsAdmin kbsmsUtil
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0, 2.0 SP1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes the process and value of using Heartbeat Discovery.
	
	MORE INFORMATION
	================
	
	Heartbeat Discovery is a discovery method for existing Systems Management Server
	(SMS) clients only. You can use this method to generate discovery data for
	computers that do not log on to the network very often, to keep the database
	information updated.
	
	With SMS 2.0, you can enable maintenance tasks that periodically clean up your
	database (for example, Delete Aged Discovery Data). If you have client computers
	that do not periodically send the site servers new Data Discovery Records
	(DDRs), they are removed from the database after the old discovery record
	reaches the age that is specified in the Delete Aged Discovery task.
	
	By default, aged DDRs are removed every 90 days. To change this value, use the
	following steps:
	
	1. Locate the Database Maintenance node under Site Settings.
	
	2. Click Tasks, click the Delete Aged Discovery data task, and then modify the
	  value.
	
	  NOTE: If you use Heartbeat Discovery as your primary method of maintaining the
	  database, do not set the Delete Aged Discovery task to a value that is less
	  than or equal to the Heartbeat Reporting Interval, as this could cause your
	  client records to be removed from the database.
	
	Key points about Heartbeat Discovery:
	
	- You need to install the computer as an SMS client before Heartbeat Discovery
	  creates a DDR for the client.
	
	- The Discovery Agent resides and runs on the client and is not initiated from
	  the site server.
	
	- Heartbeat Discovery is defined on the site server and runs on a preset
	  schedule of 7 days by default.
	
	- The client sends the DDR to the Client Access Point (CAP).
	
	- Logon Installation uses Heartbeat Discovery to send a DDR to the CAP for its
	  assigned site.
	
	- The DDR is sent up at the 23-hour client Client Component Installation
	  Manager (CCIM) cycle, so any setting in the heartbeat schedule that is less
	  than one day is not effective.
	
	- The date of the last DDR that is sent to the CAP is kept in the registry of
	  the client computer. The next DDR generation is based on that date and the
	  next heartbeat cycle.
	
	  NOTE: This information is kept in the DDR Refresh Interval entry in the
	  following registry key:
	
	  HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\SMS\Client\Sites\Shared\<sitecode>\Configuration\Client
	  Properties
	
	  You can translate and use this entry by using the Readsche.exe tool from the
	  Support\Reskit\Bin\<platform>\Diagnose folder of the SMS 2.0 CD-ROM.
	  For information about how to use this tool, refer to page 376 of the Systems
	  Management Server 2.0 Resource Kit.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbenv kbClient kbConfig kbMMC kbsms200 kbDiscovery kbInventory kbsmsAdmin kbsmsUtil 
	Technology        : kbSMSSearch kbSMS200 kbSMS200SP1
	Version           : winnt:2.0,2.0 SP1
	Issue type        : kbinfo
	
	=============================================================================
	
