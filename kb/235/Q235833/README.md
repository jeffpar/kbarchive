---
layout: page
title: "Q235833: SMS: Unable to View Status Messages Because of Message Aging"
permalink: kb/235/Q235833/
---

## Q235833: SMS: Unable to View Status Messages Because of Message Aging

	Article: Q235833
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbConfig kbDatabase kbMMC kbServer kbsms200 kbsms200bug kbQuery kbReport kbsmsAdmin kbS
	Last Modified: 22-MAR-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You may be unable to view status messages as expected for a Microsoft Systems
	Management Server (SMS) component.
	
	CAUSE
	=====
	
	This behavior can occur because the default status filter rules keep Audit
	messages for 180 days and all other messages for 30 days. The status viewer may
	fail when a status query returns too many messages, thereby filling up the
	Microsoft SQL Server tempdb database.
	
	Online Help may indicate that the default Status Filter Rules setting advises
	that messages will be kept for only seven days. This default applies to new
	rules only and not to existing or default Status Filter rules.
	
	WORKAROUND
	==========
	
	To work around this issue, follow these steps:
	
	1. Use the SMS Administrator console to open the Site Settings folder for your
	  site.
	
	2. Expand the Status Filter Rules folder.
	
	3. Right-click the "Write all other messages to the site database and keep them
	  for 30 days" rule, and then click Properties.
	
	  On the Actions tab, note that "Keep messages for" is set to 30 days.
	
	4. Set this number to something smaller, and then click OK.
	
	5. Right-click the "Write audit messages to the site database and keep them for
	  180 days" rule, and then click Properties.
	
	  On the Actions tab, note that "Keep messages for" is set to 180 days.
	
	6. Set this number to something smaller, and then click OK.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbConfig kbDatabase kbMMC kbServer kbsms200 kbsms200bug kbQuery kbReport kbsmsAdmin kbStatSum 
	Technology        : kbSMSSearch kbSMS200
	Version           : :2.0
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
