---
layout: page
title: "Q184583: XADM: Owner and Permissions on Distribution List Object"
permalink: /kb/184/Q184583/
---

## Q184583: XADM: Owner and Permissions on Distribution List Object

{% raw %}

	Article: Q184583
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Adding or deleting members of a distribution list (DL) from the Exchange client
	does not modify the actual distribution list membership within the Microsoft
	Exchange Server Administrator program.
	
	CAUSE
	=====
	
	Using the Exchange Administrator program, an Exchange Server administrator has
	added Windows NT accounts on the Permissions tab with Role as User in an attempt
	to allow users to update and/or modify the distribution list.
	
	WORKAROUND
	==========
	
	To allow a group of users to make membership modifications to the DL from within
	the Exchange Client, you must add permissions to the Exchange Server
	distribution list using the Exchange Server Administrator program.
	
	For more informaiton, please see the following Microsoft Knowledge Base article:
	
	  188673 XADM: How to Assign a Group as Owner of a Distribution List
	
	To configure multiple owners of an Exchange distribution list, you can use the
	Permissions page of the distribution list to assign administrative permissions
	to multiple users. But this method may be difficult to manage and update. (By
	default in the Exchange Server Administrator program, the Permissions page is
	not visible for a distribution list. You can make it visible by clicking Options
	on the Tools menu, then click Permissions, and select the Show Permissions Page
	for All Objects option.) Alternately, you can manage multiple ownership of a
	distribution list through a Windows NT group. To do this, perform the following
	steps:
	
	1. Create a mailbox or custom recipient whose Primary Windows NT Account is a
	  Windows NT group.
	
	2. Assign this mailbox as owner of the distribution list.
	
	You can now manage multiple ownership for the distribution list by adding or
	removing members of the Windows NT group account.
	
	MORE INFORMATION
	================
	
	A user who attempts to modify the membership of a DL from within the Exchange
	Client, and who is not an owner of the DL or member of a distribution list which
	is listed as owner of the DL, should receive the following error message:
	
	  Changes to the distribution list membership could not be saved. You do not
	  have sufficient permission to perform this operation on this object.
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
