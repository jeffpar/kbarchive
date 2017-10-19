---
layout: page
title: "Q201802: SMS: Supported Naming Conventions for NDS Logon Point Creation"
permalink: /kb/201/Q201802/
---

## Q201802: SMS: Supported Naming Conventions for NDS Logon Point Creation

	Article: Q201802
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbNDS kbOSNovell
	Last Modified: 21-FEB-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	For a Systems Management Server 2.0 site to successfully create a client access
	point (CAP) and logon point on a NetWare Directory Services (NDS) volume, there
	are certain naming conventions that must be followed. This article documents the
	required naming conventions.
	
	MORE INFORMATION
	================
	
	Tree Names
	----------
	
	The following apply to tree names:
	
	- The NDS tree can contain up to 32 ASCII characters. Accepted characters are
	  a-z, A-Z, 0-9, hyphen ("-"), and the underscore ("_").
	
	- The NDS tree can NOT start or end with an underscore character, nor can it
	  contain two consecutive underscores (__).
	
	- The NDS tree name can NOT contain any spaces.
	
	Container and Volume Names
	--------------------------
	
	The following apply to container and volume names:
	
	- They may not contain any of the following:
	
	   - Slashes ("/")
	
	   - Backslashes ("\")
	
	   - Colons (":")
	
	   - Commas (",")
	
	   - Asterisks ("*")
	
	   - Question marks ("?")
	
	- Object names are NOT case-sensitive.
	
	Distinguished Names
	-------------------
	
	The following apply to distinguished names:
	
	- Distinguished names MUST contain an Organization (O); this is the top level
	  of the Systems Management Server tree.
	
	- Use of the Country (C) in distinguished names is optional. If the C is used,
	  it cannot be longer than two characters.
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words: prodsms nwroles
	
	======================================================================
	Keywords          : kbNDS kbOSNovell 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbinfo
	
	=============================================================================
	
