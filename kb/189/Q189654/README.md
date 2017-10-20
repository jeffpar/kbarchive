---
layout: page
title: "Q189654: XWEB: &quot;Failed To Get Inbox&quot; Error May Occur If Name Is Ambiguous"
permalink: /kb/189/Q189654/
---

## Q189654: XWEB: &quot;Failed To Get Inbox&quot; Error May Occur If Name Is Ambiguous

{% raw %}

	Article: Q189654
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Active Server Components, version 5.0 
	- Microsoft Outlook Web Access, version 5.5 
	- Microsoft Outlook Web Access, version 5.5 Service Packs 1, 2, 3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	While attempting to log on to a Microsoft Exchange Server mailbox using the
	Outlook Web Access (OWA) client, you may receive the following error messages:
	
	  Failed to get inbox.
	
	-or-
	
	  OWA was unable to get to your inbox.
	
	CAUSE
	=====
	
	The specified alias or user name may not be unique within the Microsoft Exchange
	Global Address List. Permutations of ambiguity include any Last Name, First
	Last, or Alias entered in the logon screen that is equal to any of the following
	for any other mailbox:
	
	  Last Name, First Last, or Alias
	
	For example: John Doe [alias jdoe] and Joseph Doenfron [alias doe]. If Joseph
	enters his alias in the logon screen, it will return one of the above errors
	because of the ambiguity of his alias with John's last name as the server
	attempts to resolve them.
	
	This can occur if you join one or more sites that contain multiple users with the
	same alias or display name. If an ambiguous (non-unique) name is detected, then
	Microsoft Exchange Server is unable to resolve the name to a specific mailbox,
	and the above error messages are returned.
	
	WORKAROUND
	==========
	
	In Microsoft Exchange Server version 5.0, it is only possible to log on with the
	OWA client using an alias name. Therefore, the only resolution is to use unique
	alias names for users in the Microsoft Exchange Server organization.
	
	In Microsoft Exchange Server version 5.5 and later, it is possible to enter the
	following fields for the user's mailbox:
	
	  Alias              jamessmith
	  Last Name          Smith
	  First Last         James Smith
	  Last First         Smith James
	  Last, First        Smith, James
	  user@domain.com    jamessmith@microsoft.com
	
	For example, if a user's alias name is not unique, they can enter their SMTP
	address. This value is more likely to be unique and provides for a greater
	chance of resolution, which will allow the user to access their mailbox.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbZNotKeyword6 kbExchangeSearch kbZNotKeyword2 kbOWASearch kbOWA550 kbOWA550SP1 kbOWA550SP2 kbOWA550SP3 kbExchangeActiveServComp500
	Version           : WINDOWS:5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
