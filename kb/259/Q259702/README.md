---
layout: page
title: "Q259702: SMS: Loss of Status Messages During Software Distribution"
permalink: /kb/259/Q259702/
---

## Q259702: SMS: Loss of Status Messages During Software Distribution

	Article: Q259702
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0 SP1,2.0 SP2
	Operating System(s): 
	Keyword(s): kbsms200fix kbReplMgr kbsms200sp2fix kbsms200preSP3fix kbsms200SP3fix
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0 SP1, 2.0 SP2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you advertise a program to a collection, some clients in your site may not
	report a status message stating whether the program was run successfully even
	though each client ran the program successfully and each component reported a
	status message (.svf file).
	
	Another symptom is the loss of any file encapsulated in a Replication Manager
	(.rpl) file.
	
	CAUSE
	=====
	
	Replication Manager discards some .rpl files when the target component is not
	active. For example, status summaries received by a site in which the
	summarizers are disabled are deleted. This behavior is recorded in the
	Replication Manager log file (Replmgr.log) by the following entry:
	
	  Component <name> is not active, throw away replication file.
	
	Each deleted file is kept in a list and the list is not properly cleared. When
	Replication Manager deletes the files stored in the list, any new file created
	with a name already stored in the list can then be deleted.
	
	
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
	Systems Management Server 2.0 Service Pack 3.
	
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200fix kbReplMgr kbsms200sp2fix kbsms200preSP3fix kbsms200SP3fix 
	Technology        : kbSMSSearch kbSMS200SP1 kbSMS200SP2
	Version           : :2.0 SP1,2.0 SP2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
