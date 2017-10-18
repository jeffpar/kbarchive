---
layout: page
title: "Q248072: Err Msg: HTTP 403.3 - Forbidden: Write Access Forbidden"
permalink: kb/248/Q248072/
---

## Q248072: Err Msg: HTTP 403.3 - Forbidden: Write Access Forbidden

	Article: Q248072
	Product(s): Internet Information Server
	Version(s): winnt:4.0,5.0
	Operating System(s): 
	Keyword(s): kbDSupport kbiis400 kbiis500
	Last Modified: 16-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.0 
	- Microsoft Internet Information Server 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When attempting to POST or write data to a file that resides on a Web server,
	the user may receive the following message in the Web browser:
	
	  HTTP 403.3 - Forbidden: Write Access Forbidden
	
	CAUSE
	=====
	
	This error can occur due to a problem in trying to save the Web page to the Web
	site. This can happen if you attempt to upload to or modify a file in a
	directory that does not allow write access. This can stem from a Posting utility
	(such as Posting Acceptor) or a Web publishing utility (such as FrontPage).
	
	RESOLUTION
	==========
	
	To resolve this problem, verify that the permissions to the directory or page
	are appropriate for the account that is attempting access.
	
	To verify permissions under Windows 2000 (verify only if using an NTFS
	partition):
	
	1. Locate the destination folder where files will be posted.
	
	2. Right-click the folder and click Properties.
	
	3. Select the Security tab.
	
	4. Click Add.
	
	5. Add the account that needs permissions.
	
	6. Click OK.
	
	7. Select the appropriate rights to allow this user to write to this directory
	  (read/write or read/write/modify).
	
	8. Click OK.
	
	Also verify that the virtual directory has write access granted for the users
	coming in.
	
	To verify permissions under Internet Information Server 5.0:
	
	1. Open Internet Services Manager.
	
	2. Expand Machine Name.
	
	3. Expand the site where the upload directory exists.
	
	4. Right-click the upload directory.
	
	5. Click Properties.
	
	6. On the Virtual Directory tab, click Write.
	
	7. Click OK.
	
	Internet Information Server will now have write access to the upload directory.
	
	Additional query words: IIS5
	
	======================================================================
	Keywords          : kbDSupport kbiis400 kbiis500 
	Technology        : kbiisSearch kbiis500 kbiis400
	Version           : winnt:4.0,5.0
	Issue type        : kbprb
	
	=============================================================================
	
