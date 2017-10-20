---
layout: page
title: "Q186400: SMS: Msapps32.pdf Does Not Support Windows NT Clients"
permalink: /kb/186/Q186400/
---

## Q186400: SMS: Msapps32.pdf Does Not Support Windows NT Clients

{% raw %}

	Article: Q186400
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2
	Operating System(s): 
	Keyword(s): kbPGC smsappman smsinst smspgc kbSMSAppMan
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you send a shared package using the default settings for Msapps32.pdf, the
	package is only distributed to clients running Windows 95. Windows NT clients do
	not receive the package.
	
	CAUSE
	=====
	
	The Msapps32.pdf file that is included with Microsoft Systems Management Server
	version 1.2 does not automatically support distribution to client computers
	running Windows NT that have Intel-based processors. This can cause Program
	Group Control to fail on these types of client computers.
	
	WORKAROUND
	==========
	
	For Windows NT clients to receive the package, manually add the following to the
	SupportedPlatforms line of the Msapps32.pdf file:
	
	  Windows NT 3.1 (x86)
	
	NOTE: Although Systems Management Server searches for the string "Windows NT 3.1
	(x86)", it will still find client computers running Windows NT 4.0.
	
	After making this change, the line should be similar to the following:
	
	     SupportedPlatforms=Windows95, Windows NT 3.1 (x86)
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.2. This problem has been corrected in the latest U.S. service pack for
	Systems Management Server version 1.2. For information on obtaining the service
	pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	Additional query words: prodsms office off95 office95 off97 office97 shared network
	
	======================================================================
	Keywords          : kbPGC smsappman smsinst smspgc kbSMSAppMan 
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
