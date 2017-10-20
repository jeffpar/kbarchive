---
layout: page
title: "Q131354: Cannot Connect to NWServer"
permalink: /kb/131/Q131354/
---

## Q131354: Cannot Connect to NWServer

{% raw %}

	Article: Q131354
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to connect to a shared directory or printer on a Windows 95
	computer with the File and Print Sharing for NetWare Networks (NWServer) service
	enabled, you may receive one of the following error messages:
	
	- The user name is not valid.
	
	- The password or user name you specified is not valid for this resource.
	
	You may receive one of these error messages even though you supplied the correct
	user name and password for the shared resource.
	
	CAUSE
	=====
	
	If the security provider used to supply the user list for user-level security is
	another NWServer, passwords cannot be correctly verified.
	
	RESOLUTION
	==========
	
	Windows 95 can specify only user-level security for shared resources when
	installed as an NWServer. Windows 95 uses the list of users and groups contained
	on a Novell NetWare server to determine the appropriate security for users who
	access shared resources. You must specify the name of a Novell NetWare server as
	the security provider in order to use the File and Print Sharing for NetWare
	Networks service in Windows 95.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Windows 95. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	When you are configuring the Access Control tab in Network properties, you must
	specify a server from which to obtain a list of users and groups in order to
	configure Windows 95 for user-level security. Windows 95 cannot determine
	whether the server you specify is a Novell NetWare server or a Windows 95
	computer configured as an NWServer. When you are sharing directories or
	printers, you can select users from the list of users provided by the Windows 95
	NWServer to grant access to the shared resources.
	
	When it is authenticating a user who tries to connect to a shared resource,
	Windows 95 passes the authentication request to the NetWare server. If the
	server to which Windows 95 passes the authentication request is another Windows
	95 computer, no authentication of the user and password occurs.
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	

{% endraw %}
