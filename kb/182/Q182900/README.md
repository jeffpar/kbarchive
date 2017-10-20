---
layout: page
title: "Q182900: XADM: Windows NT Account Is Able To Access All Mailboxes"
permalink: /kb/182/Q182900/
---

## Q182900: XADM: Windows NT Account Is Able To Access All Mailboxes

{% raw %}

	Article: Q182900
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Some Windows NT accounts may be able to access all mailboxes on an Exchange
	Server computer, even though they were not intended to have full access.
	
	CAUSE
	=====
	
	This occurs because the Windows NT account or group has mailbox owner
	permissions on the site object. This can occur if the Windows NT account is
	given the User role or Service Account Admin role on the site object. By
	default, the User role and Service Account Admin role include the Mailbox Owner
	right.
	
	RESOLUTION
	==========
	
	To remove the Mailbox Owner permissions, perform the following steps:
	
	1. Start the Exchange Administrator program.
	
	2. From the Tools menu, select Options and then click the Permissions tab.
	
	3. Make sure the "Show Permissions page for all objects" and "Display rights for
	  roles on Permissions page" boxes are marked with a check.
	
	4. Highlight the site object.
	
	5. From the File menu, select Properties and then click the Permissions tab.
	
	6. Highlight the account you want to change in the "Windows NT accounts with
	  permissions" window.
	
	7. Remove the Mailbox Owner right for the account by unchecking the Mailbox
	  Owner box.
	
	Additional query words: open modify
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
