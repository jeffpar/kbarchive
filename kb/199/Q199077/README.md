---
layout: page
title: "Q199077: SMS: How to Set Thresholds in Healthmon"
permalink: /kb/199/Q199077/
---

## Q199077: SMS: How to Set Thresholds in Healthmon

	Article: Q199077
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbsms200 kbsmsUtil
	Last Modified: 22-FEB-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	A server monitoring tool known as HealthMon is a new feature in Systems
	Management Server 2.0. The HealthMon management console is a stand-alone
	component that provides a centralized, graphical, and real-time status view of
	your Microsoft Windows NT Server 4.0 and Microsoft BackOffice Server computers.
	Based on color-coded severity levels, you can view operational conditions,
	including both normal and exception status.
	
	As events are received, HealthMon organizes and displays them according to
	predefined monitored object groups (MMC nodes).
	
	MORE INFORMATION
	================
	
	You can set thresholds for generating exception and normal status. To do so, use
	the following steps:
	
	1. Right-click the Managed Component whose threshold you would like to change.
	
	2. Click Properties and then click the specific monitored item.
	
	3. Click the Threshold tab and set the threshold required for the item.
	
	HealthMon generates an
	
	  Unable to detect
	
	message when the performance counter or service that a component is monitoring,
	is not available.
	
	To avoid receiving these messages, install the required service or counter as
	appropriate.
	
	- Services
	  To install the Exchange Server, Internet Information Server, SQL Server, SNA
	  Server, or Systems Management Server services, follow the directions in the
	  product documentation for that component.
	  NOTE: SQL Server does not start the Microsoft Distributed Transaction
	  Coordinator (MS DTC) service until it is needed. To start it, you must change
	  the Startup settings for this service (in Control Panel, double-click the
	  Services icon, and change the Startup setting to Automatic).
	
	- Physical Disk or Logical Disk
	  For information about configuring physical disk and logical disk counters, at
	  the command prompt, type "diskperf.exe" (without the quotation marks).
	
	- Network Interface
	  Install the Windows NT 4.0 Resource Kit network counters component or install
	  the SNMP service, and then reinstall Service Pack 4 for Windows NT 4.0.
	
	For further information on HealthMon installation and usage, please refer to the
	Systems Management Server 2.0 Release notes, Readme.htm file, and the Systems
	Management Server 2.0 online help.
	
	Additional query words: prodsms healthmon
	
	======================================================================
	Keywords          : kbsms200 kbsmsUtil 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbinfo
	
	=============================================================================
	
