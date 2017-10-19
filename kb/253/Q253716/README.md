---
layout: page
title: "Q253716: Event ID 8020: DSMN Cannot Synchronize Users on a NetWare Server"
permalink: /kb/253/Q253716/
---

## Q253716: Event ID 8020: DSMN Cannot Synchronize Users on a NetWare Server

	Article: Q253716
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbenv kberrmsg kbnetwork
	Last Modified: 24-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Services for NetWare version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In the Event log, you receive the following error message:
	
	  Event ID 8020
	  The synch agent services failed to modify account [username] on the NetWare
	  server [servername] due to error 10256. DSMN is not able to synchronize any
	  of the users on the NetWare server. Any new user added to NT and migrated to
	  NetWare will work fine.
	
	CAUSE
	=====
	
	This issue can occur when the DSMN server tries to synchronize the accounts on
	the NetWare server.
	
	The NetWare server refuses the request. The actual NetWare error is 255(xFF).
	
	RESOLUTION
	==========
	
	To resolve this issue, you may need to delete the users from NetWare and migrate
	them again from Windows NT by fully synchronizing the NetWare server using DSMN.
	
	MORE INFORMATION
	================
	
	Microsoft recommends that you apply user rights on the NetWare server using
	Groups. When you delete a user from the NetWare server and DSMN is synchronized
	with that server the user and groups the user was in are added to the server
	again. Permissions you assigned to individual users are lost and need to be
	reapplied.
	
	
	Additional query words: DSMN sync synchronize netware
	
	======================================================================
	Keywords          : kbenv kberrmsg kbnetwork 
	Technology        : kbServicesNetware400 kbServicesNetwareSearch
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	
