---
layout: page
title: "Q162344: SMS Administrator Misinterprets Multiple Site Selections"
permalink: kb/162/Q162344/
---

## Q162344: SMS Administrator Misinterprets Multiple Site Selections

	Article: Q162344
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2
	Operating System(s): 
	Keyword(s): kbsetup kbSCMan smssetup smssiteconfigman
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	It is possible to use the CTRL key and the mouse to select multiple non-
	sequential secondary sites for deletion in the Systems Management Server
	Administrator program UI. After you select the sites and press the DELETE key,
	Systems Management Server will present a confirmation box that asks "Are you
	sure you want to delete the selected item(s)?" but does not list the sites that
	are going to be deleted.
	
	Upon confirming the deletion, the Systems Management Server Administrator program
	UI begins the deletion of all sites listed between the first and last item
	selected, whether or not they were highlighted.
	
	For example, if you have six secondary sites, and select sites 1, 3, and 5 for
	deletion, Systems Management Server will remove sites 1 through 5, including
	sites 2 and 4.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.2. We are researching this problem and will post new information here
	in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: Hierarchy manager service scman adminui GUI prodsms
	
	======================================================================
	Keywords          : kbsetup kbSCMan smssetup smssiteconfigman 
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	Issue type        : kbbug
	
	=============================================================================
	
