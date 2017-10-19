---
layout: page
title: "Q216906: IIS 5.0 and Native Windows 2000 Active Directory Mapping"
permalink: /kb/216/Q216906/
---

## Q216906: IIS 5.0 and Native Windows 2000 Active Directory Mapping

	Article: Q216906
	Product(s): Internet Information Server
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Internet Information Services (IIS) version 5.0 allows administrators to "map" a
	client authentication certificate to a Windows 2000 user account. There are two
	possible ways to do this:
	
	- IIS Certificate Mapping
	
	- Native Windows 2000 Active Directory Mapping
	
	IIS Certificate Mapping
	
	IIS Certificate Mapping is the same mapping that is found in IIS 4.0 and is
	available for backward compatibility only. It has the following attributes:
	
	- You can set new rules on each virtual server.
	
	- It handles one-to-one mapping (a certificate blob equals one user account).
	
	- It handles many-to-one mapping (a wildcard rule maps to a user account).
	
	- It does not scale as well as Active Directory mapping.
	
	- The administrator must enter the username and password of the account logging
	  on.
	
	- By default, the account used must have the log on locally privilege.
	
	- The request may be delegated to another computer if the account is configured
	  for delegation.
	
	Native Windows 2000 Active Directory Mapping
	
	Active Directory Mapping is a new kind of client certificate mapping available
	only in Windows 2000. It has the following attributes:
	
	- It scales very well.
	
	- The administrator does not need to know the username or password.
	
	- The user account may not be delegated to another computer even if the account
	  is configured for delegation.
	
	Note: The IIS certificate mapping that is included in IIS 5.0 is for backward
	compatibility only. This feature may be removed in favor of the Active Directory
	mapping in a future release of the Web services.
	
	MORE INFORMATION
	================
	
	For additional information, click the article numbers below to view the articles
	in the Microsoft Knowledge Base:
	
	  Q272175 HOW TO: Configure Active Directory Certificate Mapping
	
	  Q313070 HOW TO: Configure Client Certificate Mappings in Internet Information
	  Services (IIS) 5.0
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis500
	Version           : :5.0
	Issue type        : kbinfo
	
	=============================================================================
	
