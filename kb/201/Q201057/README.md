---
layout: page
title: "Q201057: XADM: Event ID 5002"
permalink: /kb/201/Q201057/
---

## Q201057: XADM: Event ID 5002

{% raw %}

	Article: Q201057
	Product(s): Microsoft Exchange
	Version(s): winnt:5.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to enable Bulk Enrollment for users who have already been
	enabled for Advanced Security through Exchange Server's Key Management Server,
	you receive the following error message:
	
	  The user is in the wrong state for this operation.
	  Microsoft Exchange Administrator
	  ID no: c1031d9c
	
	In addition, an Event ID 5002 from MSExchangeKMS will appear in the application
	log, such as:
	
	  KMS admin DomainName\Administrator failed to enable security for mailbox
	  o=OrganizationName,ou=SiteName,cn=Recipients,cn=MailboxName.
	
	CAUSE
	=====
	
	The Bulk Enrollment option in the Exchange Administrator program is only for the
	initial setup of Advanced Security; it is not designed to recover lost keys.
	
	WORKAROUND
	==========
	
	When a user loses his/her password, an Exchange Server administrator will need
	to go into the Exchange Administrator program to recover the user's token. This
	is done from the Security tab of the mailbox properties. Select Recover Security
	Key, and type in the Key Management Server password.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbZNotKeyword2
	Version           : winnt:5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
