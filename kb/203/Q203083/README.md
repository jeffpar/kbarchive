---
layout: page
title: "Q203083: SMS: Site System Status Does Not Show Current Database Size"
permalink: /kb/203/Q203083/
---

## Q203083: SMS: Site System Status Does Not Show Current Database Size

	Article: Q203083
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbDatabase kbMMC kbsms200 kbsms200bug kbsmsAdmin
	Last Modified: 17-JUN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In the Systems Management Server Administrator console, the site system status
	pane does not display the correct database size.
	
	CAUSE
	=====
	
	The Site System Status Summarizer polls the database according to the schedule
	set in Site System Status Summarizer properties.
	
	WORKAROUND
	==========
	
	Use Services in Control Panel on the server to stop and restart the
	SMS_EXECUTIVE service; this action updates the database size in the site system
	status pane.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0 for Microsoft Windows 2000.
	
	MORE INFORMATION
	================
	
	For more information about about viewing the System Status Summarizer schedule,
	click Microsoft Systems Management Server Help on the Help menu, type "status
	summarizers configuration" (without the quotation marks) in the Office Assistant
	or the Answer Wizard, and then click Search to view the topic.
	
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbDatabase kbMMC kbsms200 kbsms200bug kbsmsAdmin 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
