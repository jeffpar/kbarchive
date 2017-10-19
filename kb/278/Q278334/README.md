---
layout: page
title: "Q278334: SMS: Component Status Reports &quot;Stopped&quot; for Remote Site Systems"
permalink: /kb/278/Q278334/
---

## Q278334: SMS: Component Status Reports &quot;Stopped&quot; for Remote Site Systems

	Article: Q278334
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbConfig kbMMC kbServer kbsms200 kbsms200bug kbCAP kbsmsAdmin kbStatSum
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you view the Component Status section in the Microsoft Systems Management
	Server (SMS) Administrator console, remote site systems may report incomplete or
	incorrect information. The State value may be set to Stopped, and no information
	may be reported for the Next Scheduled, Last Started, and Last Message values.
	
	The Component Status Summarizer log (Compsumm.log) reports messages similar to:
	
	  Warn>: Received a status message from SMS_EXECUTIVE, a non-SMS component
	  on SERVER1. Ignoring message. $$<SMS_COMPONENT_STATUS_SUMMARIZER>
	  Warn>: Received a status message from SMS_INBOX_MANAGER_ASSISTANT, a
	  non-SMS component on SERVER1. Ignoring message.
	  $$<SMS_COMPONENT_STATUS_SUMMARIZER>
	
	CAUSE
	=====
	
	This issue can occur because the Component Status Summarizer does not report
	status for remote site systems that have been added manually through the Site
	Systems node within the SMS Administrator console, and that contain a lowercase
	server or share name.
	
	WORKAROUND
	==========
	
	To work around this issue, always enter remote site systems server or share
	names in all uppercase letters. For example, when you add a remote Client Access
	Point (CAP) server called "Server1," type the server name as "SERVER1" (without
	the quotation marks) (not "Server1" (without the quotation marks) or "server1"
	(without the quotation marks)).
	
	If a site system already exists with a lowercase name, follow these steps:
	
	1. Remove any shares or disable all site system roles from the server.
	
	  IMPORTANT: Do not disable the Systems Management Server Component Server role;
	  this role cannot be removed from the server.
	
	2. Delete the server from the Site Systems node.
	
	3. Re-create the server or share with an uppercase name.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbConfig kbMMC kbServer kbsms200 kbsms200bug kbCAP kbsmsAdmin kbStatSum 
	Technology        : kbSMSSearch kbSMS200
	Version           : :2.0
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
