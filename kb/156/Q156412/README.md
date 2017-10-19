---
layout: page
title: "Q156412: Index Server Will Not Index Virtual Directories"
permalink: /kb/156/Q156412/
---

## Q156412: Index Server Will Not Index Virtual Directories

	Article: Q156412
	Product(s): Internet Information Server
	Version(s): winnt:1.0; :
	Operating System(s): 
	Keyword(s): kbenv kbOSWin2000
	Last Modified: 30-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Index Server version 1.0 
	- Indexing Service 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Microsoft Index Server will not index a virtual root. The queries will not hit
	any documents on that virtual root, and the server statistics will show that no
	indexing has occurred on that virtual root.
	
	In the event viewer, you may see the following error message:
	
	  Cannot logon to <domain name>\<user name> because of error 87.
	
	CAUSE
	=====
	
	Microsoft Index Server uses the complete <domain name\user name> to access
	the files to be indexed. If the <domain name\user name> is entered
	incorrectly, the indexing operation will fail with the above error message.
	
	RESOLUTION
	==========
	
	Check the following:
	
	1. The domain name and user name are separated with a backslash "\" not forward
	  slash "/". For example,
	
	     DOMAIN/user is wrong. (forward slash)
	
	     DOMAIN\user is correct. (backslash)
	
	
	2. The domain is assigned along with the user name:
	
	     northamerica\user1 (domain name\username)
	
	
	  If the user name is by itself, Index Server will not function properly.
	
	3. The password is correct.
	
	4. The account has interactive logon privileges on the target computer.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv kbOSWin2000 
	Technology        : kbIdxServSearch kbAudDeveloper kbIdxServ100
	Version           : winnt:1.0; :
	
	=============================================================================
	
