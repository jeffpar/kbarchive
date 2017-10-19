---
layout: page
title: "Q164884: Err Msg: Connection with Server Could Not Be Established"
permalink: /kb/164/Q164884/
---

## Q164884: Err Msg: Connection with Server Could Not Be Established

	Article: Q164884
	Product(s): Internet Information Server
	Version(s): Winnt:1.0,2.0,3.0
	Operating System(s): 
	Keyword(s): kberrmsg
	Last Modified: 01-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server versions 1.0, 2.0, 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you apply a new Secure Sockets Layer (SSL) key, and you use HTTPS, you may
	get the following error message:
	
	  Cannot open Internet site https://< sightname >.
	  A connection to the server could not be established.
	
	WORKAROUND
	==========
	
	1. Open the Key Manager under Internet Service Manager, click Export Key to copy
	  the key to a backup file.
	
	2. Click Delete to remove the key.
	
	3. Select Commit Changes Now to register the changes in Key Manager.
	
	4. Stop and Restart the WWW Service.
	
	5. In Key Manager, click WWW, and click Import Key to install the key from the
	  backup file.
	
	6. Again select Commit Changes Now to register the changes.
	
	7. Stop and restart the WWW Service.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Internet Information Server
	versions 1.0, 2.0 and 3.0. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	======================================================================
	Keywords          : kberrmsg 
	Technology        : kbiisSearch kbiis300 kbiis200 kbiis100
	Version           : Winnt:1.0,2.0,3.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
