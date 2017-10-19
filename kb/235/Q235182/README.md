---
layout: page
title: "Q235182: SMS: Unable to Edit Inventory Names Tab for Child Sites"
permalink: /kb/235/Q235182/
---

## Q235182: SMS: Unable to Edit Inventory Names Tab for Child Sites

	Article: Q235182
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbConfig kbDatabase kbMMC kbServer kbsms200 kbsms200bug kbInventory kbsmsAdmin
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you make changes on the Inventory Names tab of the Software Inventory
	Client Agent for a parent site, those changes are not replicated to child sites.
	In addition, the Inventory Names tab is not displayed when you edit the Software
	Inventory Client Agent properties for a child primary or secondary site.
	
	CAUSE
	=====
	
	Changes made to the Inventory Names tab under Software Inventory Client Agent
	properties can be made only when you are connected directly to the site database
	for that site.
	
	WORKAROUND
	==========
	
	Currently the Inventory Names tab cannot be modified for secondary sites. To
	change child primary site properties, follow these steps:
	
	1. On the Microsoft Systems Management Server Administrator Console, right-click
	  Systems Management Server, point to All Tasks, and then click "Connect to
	  Site Database".
	
	2. When the Database Connection Wizard appears, click Next.
	
	3. Click "Connect to the site database for this site server".
	
	4. Type the child site server name, click Next, and then click Finish.
	
	  The Systems Management Server Administrator console now lists both the parent
	  site and the child site as first-level folders under Systems Management
	  Server.
	
	5. Expand the child site folder, and then navigate to the Software Inventory
	  Client Agent in the child site Site Settings folder.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Systems Management
	Server version 2.0.
	
	MORE INFORMATION
	================
	
	If the child site is in a trusted or non-trusted domain, you may have to edit
	Security Rights settings on the child site before your account has the required
	permissions on the child site.
	
	
	Additional query words: prodsms cannot
	
	======================================================================
	Keywords          : kbConfig kbDatabase kbMMC kbServer kbsms200 kbsms200bug kbInventory kbsmsAdmin 
	Technology        : kbSMSSearch kbSMS200
	Version           : :2.0
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
