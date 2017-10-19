---
layout: page
title: "Q264776: User Manager Returns &quot;Access Is Denied&quot; Message Concerning User"
permalink: /kb/264/Q264776/
---

## Q264776: User Manager Returns &quot;Access Is Denied&quot; Message Concerning User

	Article: Q264776
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you establish a two-way trust relationship between two Windows NT 4.0
	domains, an Administrator from one domain can view the list of users in the
	other domain from User Manager for Domains. However, when you use the
	Administrator user account and attempt to open the properties of a user in the
	other domain, the following error message may appear:
	
	  "The following error occurred while accessing the properties of the user
	  (username): access is denied. User properties cannot be viewed or edited at
	  this time."
	
	CAUSE
	=====
	
	This behavior can occur when the Administrator user account is not a member of
	the local Administrators group in the other domain.
	
	RESOLUTION
	==========
	
	To resolve this issue, add the Administrator user account to the local
	Administrators group in the trusted domain.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	
