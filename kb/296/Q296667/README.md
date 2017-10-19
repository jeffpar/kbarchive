---
layout: page
title: "Q296667: SMS: French SMS 2.0 SP3 Contains an Incorrect Colleval.dll File"
permalink: /kb/296/Q296667/
---

## Q296667: SMS: French SMS 2.0 SP3 Contains an Incorrect Colleval.dll File

	Article: Q296667
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0 SP3
	Operating System(s): 
	Keyword(s): kbsms120 kbsms120bug kbsms200preSP4fix
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 SP3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If Collection Evaluator logging is enabled, the Colleval.log file may contain
	the following error message:
	
	  Failed to manage files in inbox. Will retry in 120 minutes
	
	CAUSE
	=====
	
	The French release of Systems Management Server (SMS) 2.0 Service Pack 3 (SP3)
	includes an incorrect Colleval.dll file. This results in a backlog of .psd files
	on secondary sites that have been upgraded to SP3.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Systems Management
	Server version 2.0. For additional information, click the following article
	number to view the article in the Microsoft Knowledge Base:
	
	  Q288239 SMS: How to Obtain the Latest Systems Management Server 2.0 Service
	  Pack
	
	
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in the Microsoft products that
	are listed at the beginning of this article. This problem was first corrected in
	Systems Management Server 2.0 Service Pack 4.
	
	Note that the SMS 2.0 SP 3 French download that is available from
	http://www.microsoft.com/smsmgmt/downloads/sms20sp3.asp has been updated to
	include this fix.
	
	MORE INFORMATION
	================
	
	For additional information about how to enable logging for the Collection
	Evaluator component, see the "Sophisticated Logging Capabilities" section of the
	following Microsoft Knowledge Base article:
	
	  Q241001 SMS: Troubleshooting Server, Component, and Hierarchy Issues
	
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms120 kbsms120bug kbsms200preSP4fix 
	Technology        : kbSMSSearch kbSMS200SP3
	Version           : :2.0 SP3
	Hardware          : x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
