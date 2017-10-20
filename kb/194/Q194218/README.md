---
layout: page
title: "Q194218: XFOR: cc:Mail Migration Wizard Fails to Migrate cc:Mail User"
permalink: /kb/194/Q194218/
---

## Q194218: XFOR: cc:Mail Migration Wizard Fails to Migrate cc:Mail User

{% raw %}

	Article: Q194218
	Product(s): Microsoft Exchange
	Version(s): WinNT:5.5
	Operating System(s): 
	Keyword(s): exc55sp2fix
	Last Modified: 25-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The Migration wizard will fail, and no mailbox is created on the Exchange Server
	computer for the Lotus cc:Mail user if following condition met:
	
	- The Lotus cc:Mail user has a custom recipient existing in Exchange Server,
	  and the cc:Mail user does not have any mail message in the cc:Mail post
	  office.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server
	version 5.5. For more information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the Latest Exchange Server 5.5 Service Pack
	
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Component: Migration Wizard
	
	  File Name     Version
	  ------------------------
	  Mlmig32.dll   5.5.2419.0
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5.
	
	MORE INFORMATION
	================
	
	This should only be a problem with DB8, which does not create a MAILMESSAGE
	section for users without mail. The same problem will occur if the user elects
	to not migrate mail. The MAILMESSAGE section is used by the importer to convert
	custom recipients to mailboxes. The fix is to create a MAILMESSAGE section for
	each user, regardless of whether they have mail, or whether mail is being
	migrated.
	
	Additional query words: Event ID 238 8149 8002
	
	======================================================================
	Keywords          : exc55sp2fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : WinNT:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
