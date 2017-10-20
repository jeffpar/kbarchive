---
layout: page
title: "Q231227: SMS: Credentials Request Does Not Succeed"
permalink: /kb/231/Q231227/
---

## Q231227: SMS: Credentials Request Does Not Succeed

{% raw %}

	Article: Q231227
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug kbsms200sp2fix
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to use the Remote Control feature on a properly installed
	client, you may be prompted to provide credentials despite being on the
	Permitted Viewers list. When this behavior occurs, you cannot start the Remote
	Control session no matter what credentials you provide.
	
	CAUSE
	=====
	
	This behavior is caused by improper handling of the Permitted Viewers list by
	the client agent. This behavior occurs only on sites with a large Permitted
	Viewers list (specifically a list that is larger than 512 bytes).
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Systems Management
	Server version 2.0. For additional information, click the following article
	number to view the article in the Microsoft Knowledge Base:
	
	  Q236325 How to Obtain the Latest Systems Management Server 2.0 Service Pack
	
	WORKAROUND
	==========
	
	To work around this behavior, remove unnecessary entries from the Permitted
	Viewers list so that the total number of characters in the list is less than 512
	characters:
	
	1. In the SMS Administrator console, expand the Site Hierarchy entry, and then
	  expand the <site code> - <site name> entry.
	
	2. Expand the Site Settings entry, and then click Client Agents.
	
	3. Right-click Remote Control Client Agent, and then click Properties.
	
	4. Click the Security tab, and then click a permitted viewer in the Permitted
	  Viewers list. To remove the selected name, click Delete.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0. This problem was first corrected in Systems Management Server
	version 2.0 Service Pack 2.
	
	MORE INFORMATION
	================
	
	When you calculate the size of the Permitted Viewers list, include a null
	character at the beginning and end of each entry, as well as one additional
	character between each entry.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug kbsms200sp2fix 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
