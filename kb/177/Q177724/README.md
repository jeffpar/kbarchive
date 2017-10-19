---
layout: page
title: "Q177724: XADM: Cannot Find Exchange Server Recipients Using LDAP Queries"
permalink: /kb/177/Q177724/
---

## Q177724: XADM: Cannot Find Exchange Server Recipients Using LDAP Queries

	Article: Q177724
	Product(s): Microsoft Exchange
	Version(s): winnt:5.0,5.5
	Operating System(s): 
	Keyword(s): exc5 exc55
	Last Modified: 22-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When searching for Exchange Server recipients and custom recipients using LDAP
	clients such as Internet Mail or Outlook Express, the results which are returned
	may not accurately reflect the contents of the global address list.
	
	CAUSE
	=====
	
	This can occur because the search string is being compared to fields in the
	properties of the Exchange recipients which may not have similar information.
	
	WORKAROUND
	==========
	
	To correct this problem, populate the First and Last name fields of Exchange
	recipients or custom recipients. LDAP searches will not compare against a
	recipient's Display name.
	
	For additional information about correcting the problem for Microsoft Mail for PC
	Networks (MS Mail PC) custom recipients, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q148500 Creating First/Last Names for MS Mail Custom Recipients
	
	MORE INFORMATION
	================
	
	When LDAP searches are done using Microsoft Internet Mail and Outlook Express,
	an initial string search is performed.
	
	When data is entered in the Name field of an LDAP search, this data is compared
	against the First Name, Last Name, Directory Name, and SMTP e-mail address of
	the recipients in the Exchange Server global address list.
	
	Additional query words: LDAP Internet Search
	
	======================================================================
	Keywords          : exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbZNotKeyword2
	Version           : winnt:5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	
