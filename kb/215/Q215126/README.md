---
layout: page
title: "Q215126: SMS: &quot;Status Message Queries&quot; Displays Values Instead of Names"
permalink: kb/215/Q215126/
---

## Q215126: SMS: &quot;Status Message Queries&quot; Displays Values Instead of Names

	Article: Q215126
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbDatabase kbMMC kbRemote kbsms200 kbsms200bug kbHelpDesk kbQuery kbsmsAdmin kbStatSum
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you view Status Message Queries for the "Remote Tools Activity Targeted at
	a Specific System" selection, a prompt is displayed advising that all existing
	values for the prompt will be loaded. After the values are loaded, you may see a
	series of numeric files and values displayed in the drop-down list instead of
	the expected machine names. For example:
	
	  Inboxes\sitectrl.box\history\00000009.ct0
	  1
	  1127
	  1143
	  2000 10 1 23 04 00 00 000
	  2000 10 1 09 04 00 00 000
	
	CAUSE
	=====
	
	The query being used is designed to return all values for the insertion strings
	representing the "Remote Tools Activity Targeted at a Specific System"
	selection. As a result, all values returned are listed in the drop-down list.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Systems Management
	Server version 2.0.
	
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbDatabase kbMMC kbRemote kbsms200 kbsms200bug kbHelpDesk kbQuery kbsmsAdmin kbStatSum kbRemoteProg 
	Technology        : kbSMSSearch kbSMS200
	Version           : :2.0
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
