---
layout: page
title: "Q207566: SMS: Client Remote Installation Account Cannot Be Deleted"
permalink: /kb/207/Q207566/
---

## Q207566: SMS: Client Remote Installation Account Cannot Be Deleted

	Article: Q207566
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bugkbfaq
	Last Modified: 25-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Systems Management Server Client Remote Installation Account cannot be
	deleted or cleared after it has been set.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0.
	
	MORE INFORMATION
	================
	
	If you no longer want to use a Client Remote Installation Account, enter a
	non-existent account in the Windows NT Remote Client Installation properties
	dialog box.
	
	To disable client remote installation altogether, perform the following steps:
	
	1. Run the Systems Manangement Server Administrator console.
	
	2. Locate the Site Database, Site Hierarchy, Site Code, Site Name, Site
	  Settings, and Client Installation Methods.
	
	3. Double-click "Windows NT Remote Client Installation".
	
	4. Clear the "Enable Windows NT Remote Client Installation" check box and click
	  OK.
	
	Additional query words: prodsms sms20 smssec
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug kbfaq
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
