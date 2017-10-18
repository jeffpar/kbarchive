---
layout: page
title: "Q226858: SMS:License &amp; Calculated Trend Balancing Not Off in Offline Mode"
permalink: kb/226/Q226858/
---

## Q226858: SMS:License &amp; Calculated Trend Balancing Not Off in Offline Mode

	Article: Q226858
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug
	Last Modified: 13-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	License balancing and Calculated Trend balancing operations are not turned off
	as expected in Offline mode. For example, in the following scenario, License
	balancing operations consumed immense bandwidth and Microsoft SQL Server
	resources:
	
	- One cycle delivered a 28-megabyte (MB) SQL Server log file and required more
	  than an hour to complete because of writing to the log.
	
	- Network usage repeatedly exceeded 30 percent during the cycle on a
	  100-megabits per second (Mbps) network when not writing to the log.
	
	Software metering performs License balancing and Calculated Trend balancing
	when:
	
	- The site is in Offline mode.
	
	  This is unnecessary because:
	
	   - No licenses are pushed from the site in Offline mode.
	
	   - Denials are not possible in Offline mode.
	
	   - Software metering servers have no licenses; therefore, there are no
	     licenses to balance.
	
	- There are no licenses in the system.
	
	Note that the only time License balancing and Calculated Trend balancing should
	run is in Online mode, when there are licenses in the system.
	
	WORKAROUND
	==========
	
	If the site is running in either of the states described in the "Symptoms"
	section, set the schedule to once a year.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0.
	
	MORE INFORMATION
	================
	
	Microsoft Systems Management Server (SMS) depends on SQL Server as its database
	engine. The database device configuration of SQL Server and the resource needs
	of SMS are linked and have hardware interdependencies. The performance of SMS is
	directly related to the performance of SQL Server.
	
	If you configure SMS clients to run in Online mode, the Software Metering Client
	Agent contacts a software metering server whenever a user starts or quits a
	program. Online mode enables you to control software usage through permissions
	or license availability. In Online metering mode, you must provide sufficient
	capacity of software metering servers to respond in real time to the peaks that
	you have charted.
	
	If you configure SMS clients to run in Online mode, consider the following
	ramifications:
	
	- Network traffic increases because of the immediate reporting of the client
	  agent to the software metering server.
	
	- Demand for product licenses from clients in real time increases the load on
	  software metering servers.
	
	- Each software metering server can serve a significantly lower number of users
	  in Online mode than in Offline mode.
	
	The key to measuring software metering capacity requirements is to estimate the
	number of program starts and quits over a known period (per hour, day, or week).
	For example, if 120 clients each run two metered programs, and they all start
	and quit the programs during the same hour, that is equivalent to 480 metering
	events per hour.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug 
	Technology        : kbSMSSearch kbSMS200
	Version           : :2.0
	Issue type        : kbbug
	
	=============================================================================
	
