---
layout: page
title: "Q176743: XADM: Help Topic for LDAP Search Options is Incorrect"
permalink: /kb/176/Q176743/
---

## Q176743: XADM: Help Topic for LDAP Search Options is Incorrect

	Article: Q176743
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In Microsoft Exchange Server version 5.5, the Search LDAP (Directory) Site
	Default Help topic contains incorrect information about the differences between
	Initial and Final substring searches.
	
	MORE INFORMATION
	================
	
	The correct information for these two types of searches is described below:
	
	- Initial substring search
	
	  The directory matches the substring that the user specifies against the
	  beginning of an attribute in the directory. For example, an Initial substring
	  search for |St| in a display name would return Stacey and Steve, but not Sean
	  or Shannon. Initial substring searches are typically faster than the other
	  types of substring searches.
	
	- Final substring search
	
	  The directory matches the substring that the user specifies against the end of
	  an attribute in the directory. For example, a Final substring search for |ne|
	  in a display name would return Suzan Fine. Final substring searches are
	  typically slower than Initial substring searches.
	
	
	
	Additional query words: lightweight directory access protocol
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : 5.5
	Issue type        : kbprb
	
	=============================================================================
	
