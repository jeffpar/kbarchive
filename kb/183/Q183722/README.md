---
layout: page
title: "Q183722: Password Synchronization and Local User Accounts Information"
permalink: kb/183/Q183722/
---

## Q183722: Password Synchronization and Local User Accounts Information

	Article: Q183722
	Product(s): Internet Information Server
	Version(s): WINNT:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 29-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Although Internet Service Manager allows you to enable password synchronization
	for a non-local anonymous user account, this is not a supported configuration,
	and may cause all access to your Web or FTP server to be denied. Password
	synchronization should only be used with anonymous user accounts defined on the
	local computer. If your Web site relies on the anonymous user being able to
	access network resources, you cannot use the anonymous authentication password
	synchronization feature and you must specify a valid password for the anonymous
	user.
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis400
	Version           : WINNT:4.0
	Issue type        : kbinfo
	
	=============================================================================
	
