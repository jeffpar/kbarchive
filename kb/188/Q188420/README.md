---
layout: page
title: "Q188420: XADM: Adding Recipients To a Form May Change Display Name"
permalink: /kb/188/Q188420/
---

## Q188420: XADM: Adding Recipients To a Form May Change Display Name

{% raw %}

	Article: Q188420
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55sp2fix
	Last Modified: 06-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An application such as Electronic Forms Designer uses MAPI to resolve a list of
	display names. If you add names to a form and some of the names have already
	been resolved during a previous instance, the display names that had been
	previously resolved will have their display name changed to the internal
	Microsoft Exchange Server distinguished name. A display name may look like the
	following:
	
	  James Smith
	
	After you add a new name to the form, a distinguished name for this fictitious
	user will look like the following:
	
	  =EX:/p=YourPrmd/ou=YourOrgUnit/cn=Recipients/cn=SmithJ
	
	CAUSE
	=====
	
	The distinguished name for the addressee was erroneously being saved to the
	display name property.
	
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server
	version 5.5. For more information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the Latest Exchange Server 5.5 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Exchange Server version 5.5.This
	problem was first corrected in Exchange Server 5.5 Service Pack 2.
	
	
	
	Additional query words: mapi32 e-form garbled corrupt
	======================================================================
	Keywords          : exc55sp2fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
