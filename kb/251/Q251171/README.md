---
layout: page
title: "Q251171: Guest Account Cannot be Used When Anonymous Access Is Disabled"
permalink: kb/251/Q251171/
---

## Q251171: Guest Account Cannot be Used When Anonymous Access Is Disabled

	Article: Q251171
	Product(s): Internet Information Server
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 20-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a Web application on Internet Information Server (IIS) is configured to
	allow Basic authentication and at the same time has Anonymous access disabled,
	the built-in Guest user account cannot access the Web application. Also, if you
	rename the built-in Guest user account to another name, the new name cannot be
	used to access the Web application.
	
	CAUSE
	=====
	
	This behavior is by design. If you disable Anonymous access to the Web site, the
	SID of the default Guest user account is also refused access. Even if you rename
	the built-in Guest user account, the SID is the same.
	
	WORKAROUND
	==========
	
	If you want to use a user named Guest to access your Web site, follow these
	steps:
	
	1. Rename the original Guest user account to another name (for example
	  "OldGuest").
	
	2. Create a new user named "Guest" using the Copy function of the User Manager
	  on the "OldGuest" account.
	
	This new user will not have the limitation of the default Guest user account.
	
	REFERENCES
	==========
	
	  Q163846 SID Values For Default Windows NT Installations
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis400
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	
