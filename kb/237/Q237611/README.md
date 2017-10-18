---
layout: page
title: "Q237611: SMS Executive Components Hang or Perform Slowly"
permalink: kb/237/Q237611/
---

## Q237611: SMS Executive Components Hang or Perform Slowly

	Article: Q237611
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug
	Last Modified: 25-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Components of the SMS Executive service on a Systems Management Server 2.0 site
	may stop responding (hang) or experience performance degradation when the
	SMSExec_Prochist.dat file grows to a large size. This file is located in the
	SMS\Data\Prochist folder on a Systems Management Server 2.0 site server.
	
	CAUSE
	=====
	
	The SMS Executive service does not delete the SMSExec_Prohist.dat file when the
	service is started.
	
	WORKAROUND
	==========
	
	On the Systems Management Server site server exhibiting this problem:
	
	1. Stop the SMS Executive service.
	
	2. Delete the SMSExec_Prochist.dat file in the SMS\Data\Prochist folder.
	
	3. Start the SMS Executive service.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0.
	
	MORE INFORMATION
	================
	
	Because of the nature of this problem, it is not easily noticed. Consequences of
	this problem might include packages taking too long to get distributed in the
	site or to other sites, or client component upgrades at the site might not get
	propagated to Client Access Point servers in a timely manner.
	
	The process history file (SMSExec_Prochist.dat) is used in conjunction with
	status messages reported by the components of the SMS Executive service. Before
	creating a status message, the component thread scans the file. If the file has
	grown to a size larger than 500 kilobytes (KB), there may be an adverse affect
	on the overall performance of the site server. In severe cases, certain
	components may appear to have completely stopped without producing any error
	messages.
	
	This condition may affect the following components:
	
	- Client Install Data Manager
	- Inbox Manager
	- Inbox Manager Assistant
	- LAN Sender
	- NT Logon Server Manager
	- NT Logon Installation Manager
	- Winnt Server Discovery Agent
	- Scheduler
	
	This problem does not apply to SMS components that are not part of the SMS
	Executive service.
	
	Additional query words: prodsms freeze sleep status performance smsexec degraded slow smsfaqtop
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
