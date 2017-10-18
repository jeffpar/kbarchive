---
layout: page
title: "Q247603: 401.3 Unauthorized Due to ACL on Resource"
permalink: kb/247/Q247603/
---

## Q247603: 401.3 Unauthorized Due to ACL on Resource

	Article: Q247603
	Product(s): Internet Information Server
	Version(s): winnt:5.0
	Operating System(s): 
	Keyword(s): kbOSWin2000 kbiis500prod2web kbhttp4013 kbProd2Web
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you connect to an Internet Information Services 5.0 Web site (or a
	particular page on that site), the following error message may occur:
	
	  401.3 Unauthorized due to ACL on resource
	
	CAUSE
	=====
	
	This problem occurs when permissions for the file that the user is trying to
	access are denied to that user. This error message differs from a standard 401
	error message, in that, the user has been logged on to the server, but the
	resource that the user is trying to access is restricted. For example, if only
	Administrators and LocalSystem have access to a file on the server and a user,
	who is a member of the Users group, tries to access it, the user receives a
	401.3 (provided they can log on to the server).
	
	RESOLUTION
	==========
	
	Check the NTFS permissions on the file in question. Make sure the users or
	groups that need access to the file are listed in the file permissions.
	
	MORE INFORMATION
	================
	
	For more information about setting access permissions on files, see the Windows
	2000 documentation.
	
	Additional query words: IIS 5
	
	======================================================================
	Keywords          : kbOSWin2000 kbiis500prod2web kbhttp4013 kbProd2Web 
	Technology        : kbiisSearch kbiis500
	Version           : winnt:5.0
	Issue type        : kbprb
	
	=============================================================================
	
