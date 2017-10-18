---
layout: page
title: "Q246791: SMS: Status Filter Rule Property Page Is Unresponsive"
permalink: kb/246/Q246791/
---

## Q246791: SMS: Status Filter Rule Property Page Is Unresponsive

	Article: Q246791
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0,2.0 SP1
	Operating System(s): 
	Keyword(s): kbDatabase kbMMC kbsms200 kbsms200bug kbQuery kbStatSum
	Last Modified: 26-JUL-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0, 2.0 SP1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to configure a status message filter rule, the System
	Management Server (SMS) Administrator Console appears to stop responding every
	time it retrieves the possible values for a drop-down box.
	
	NOTE: When the Administrator Console becomes unresponsive, the hourglass icon is
	not present.
	
	CAUSE
	=====
	
	When you configure a status message filter rule, the property sheet queries the
	status messages stored in the database to retrieve all possible values to
	populate the drop-down boxes. In an environment with a large number of status
	messages, this query can take several minutes to complete.
	
	In addition, the data is not cached after the first retrieval which causes every
	subsequent attempt to use a drop-down box to result in a similar delay.
	
	WORKAROUND
	==========
	
	To keep the delay to a minimum, configure the site to keep a minimum number of
	status messages in the site database. For more information on configuration of
	the status message system, please refer to Chapter 20 of the Microsoft Systems
	Management Administrator's Guide.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0.
	
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbDatabase kbMMC kbsms200 kbsms200bug kbQuery kbStatSum 
	Technology        : kbSMSSearch kbSMS200 kbSMS200SP1
	Version           : winnt:2.0,2.0 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
