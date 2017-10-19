---
layout: page
title: "Q249333: SMS: LSM Performs a Full Work Cycle on SMS Executive Restart"
permalink: /kb/249/Q249333/
---

## Q249333: SMS: LSM Performs a Full Work Cycle on SMS Executive Restart

	Article: Q249333
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0,2.0 SP1
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug kbsms200sp2fix
	Last Modified: 17-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0, 2.0 SP1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Although Logon Server Manager (LSM) is set to use a polling cycle that is
	defined by the logon point update interval for Windows Networking Logon Client
	Installation/Windows Networking Logon Discovery in the Systems Management Server
	(SMS) Administrator console, it performs an unscheduled polling cycle when you
	start SMS Executive.
	
	This may be a problem if a number of SMS sites exist within a domain that spans
	wide-area network (WAN) links with many domain controllers. If one or more SMS
	site servers perform an unscheduled LSM polling cycle, excessive network traffic
	may be produced during domain enumeration. If a number of SMS sites share a
	single domain, it may cause that domain enumeration not to succeed.
	
	CAUSE
	=====
	
	This behavior occurs if the site server is unable to create the Nt_logon.tok
	file in the primary domain controller's Smslogon\Sitescfg folder because another
	site is currently performing a domain enumeration. Only one site at a time can
	successfully perform an LSM polling cycle because of the required file
	manipulation on the primary domain controller's logon point. If a number of site
	servers share the same Microsoft Windows NT-based domain, it may become
	difficult for a single site to obtain the lock (the Nt_logon.tok file) on the
	primary domain controller for domain enumeration and file manipulation.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Systems Management
	Server version 2.0. For additional information, please see the following article
	in the Microsoft Knowledge Base:
	
	  Q236325 How to Obtain the Latest Systems Management Server 2.0 Service Pack
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0. This problem was first corrected in Systems Management Server
	version 2.0 Service Pack 2.
	
	MORE INFORMATION
	================
	
	The functionality of SMS_NT_LOGON_SERVER_MANAGER has been changed so that it
	does not perform a polling cycle when you stop and restart SMS Executive. A
	polling cycle begins under the following circumstances:
	
	- A polling cycle is actually due.
	
	- A polling cycle was due to take place while LSM was stopped.
	
	- A site control file property for LSM has changed since it was stopped.
	
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug kbsms200sp2fix 
	Technology        : kbSMSSearch kbSMS200 kbSMS200SP1
	Version           : :2.0,2.0 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
