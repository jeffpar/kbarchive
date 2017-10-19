---
layout: page
title: "Q324333: Error if User Not Included in Bypass Traversal Checking Policy"
permalink: /kb/324/Q324333/
---

## Q324333: Error if User Not Included in Bypass Traversal Checking Policy

	Article: Q324333
	Product(s): Internet Information Server
	Version(s): 4.0,5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 18-JUL-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server version 4.0 
	- Microsoft Internet Information Services version 5.0 
	- Microsoft Internet Information Services version 5.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you connect to any page on an Internet Information Services (IIS) Web site,
	you may receive the following error message:
	
	  401.3 Unauthorized due to ACL on resource
	
	CAUSE
	=====
	
	This can occur if the account that is trying to access resources on the server
	does not have enough NTFS file system permissions on the resource.
	
	RESOLUTION
	==========
	
	Do not remove the Everyone group from the Bypass Traverse Checking policy. If
	the Everyone group must be removed from the policy for security reasons, make
	sure that the IUSR account is listed in the policy.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce the Behavior
	-------------------------------
	
	1. Tighten the NTFS permissions on the resource.
	
	For additional information, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q271071 Minimum NTFS Permissions Required for IIS 5.0 to Work
	
	2. Remove Everyone from the local Bypass Traverse Checking security policy.
	
	3. Try to access a simple HTML page on IIS. You receive the 401.3 error message.
	
	
	Additional query words: 401.3 access denied
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis500 kbiis400 kbiis510
	Version           : :4.0,5.0
	Issue type        : kbprb
	
	=============================================================================
	
