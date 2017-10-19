---
layout: page
title: "Q224105: XCLN: LDAP Query Returns Error Message: This Name Could Not..."
permalink: /kb/224/Q224105/
---

## Q224105: XCLN: LDAP Query Returns Error Message: This Name Could Not...

	Article: Q224105
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:98
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook 98 
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use Outlook, Outlook Express, or Pocket Outlook Address Book
	(Lightweight Directory Access Protocol [LDAP]) in Exchange Server, you may
	receive the following error messages:
	
	  There are no entries in the Directory Service that match your search
	  criteria.
	
	-or-
	
	  This name could not be matched.
	
	CAUSE
	=====
	
	The Search tab on the LDAP protocol object in the Microsoft Exchange Server
	Administrator program may be set to something other than "Treat "any" substring
	searches as "initial" substring searches".
	
	You can find the Search tab by navigating to the following objects in the
	Exchange Server Administrator program:
	
	  Organization\Site\Protocols Container\LDAP(Directory)
	
	-or-
	
	  Organization\Site\Servers Container\Protocols\LDAP(Directory) Settings -
	  Server
	
	RESOLUTION
	==========
	
	To resolve this problem, change the Search tab on the LDAP protocol object in
	the Administrator program to "Treat "any" substring searches as "initial"
	substring searches".
	
	WORKAROUND
	==========
	
	Search Options Include:
	
	- "Treat "any" substring searches as "initial" substring searches (fast)"
	  Specifies that only initial substring searches will be performed. Final
	  substring searches will not be performed, and any substring searches are
	  converted to initial substring searches (which will return partial but
	  sometimes incomplete results).
	
	- "Allow only "initial" substring searches (fast)" Specifies that only initial
	  substring searches will be performed. Final substring searches and any
	  substring searches will not be performed.
	
	- "Allow all substring searches (slow)"
	  Specifies that all substring searches will be performed, including initial,
	  any, or final.
	
	LDAP allows LDAP clients to perform searches when they are connected to a
	directory. For example, if you search the directory for a particular user, LDAP
	returns the entry for that user. LDAP matches the requested information with an
	entry in the directory by performing substring searches. There are three types
	of substring searches that LDAP can perform:
	
	- Initial substring search
	  The directory matches the substring that the user specifies against the
	  beginning of an attribute in the directory. For example, an initial substring
	  search for "ne" in a display name would return Suzan Fine. Initial substring
	  searches are typically faster than the other types of substring searches.
	
	- Final substring search
	  The directory matches the substring that the user specifies against the end of
	  an attribute in the directory. For example, a final substring search for "St"
	  in a display name would return Stacey and Steve, but not Sean or Shannon.
	  Final substring searches are typically slower than initial substring
	  searches.
	
	- Any substring search
	  The directory matches the substring that the user specifies against any
	  portion of an attribute in the directory. For example, a substring search for
	  "r" in a display name would return Maria and Raymond. Any substring searches
	  are the slowest substring searches.
	
	MORE INFORMATION
	================
	
	For additional information, click the article numbers below to view the articles
	in the Microsoft Knowledge Base:
	
	  Q177724 XADM: Cannot Find Exchange Server Recipients Using LDAP Queries
	
	  Q198562 XCLN: Cannot Find Users on Referral Server Using Outlook Express
	
	  Q195792 OL2000: (CW) How to Install and Use the LDAP Service
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbOutlook98Search kbZNotKeyword3
	Version           : WINDOWS:98
	Issue type        : kbprb
	
	=============================================================================
	
