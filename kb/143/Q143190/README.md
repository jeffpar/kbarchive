---
layout: page
title: "Q143190: Internet Service Manager Fails to Connect to IIS Over Internet"
permalink: /kb/143/Q143190/
---

## Q143190: Internet Service Manager Fails to Connect to IIS Over Internet

	Article: Q143190
	Product(s): Internet Information Server
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 06-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 1.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	It is possible to use Internet Service Manager to manage Internet Information
	Servers in remote locations provided that you have proper administrative
	privileges. This includes not only Internet Information Servers on your Local
	Area Network (LAN) but also across the Internet.
	
	However if the Internet service manager and the remote Internet Information
	Server in the different subnets separated from routers, Internet service manager
	may not be able to see the remote Internet Information Server.
	
	MORE INFORMATION
	================
	
	To manage an Internet Information Server across subnets, use one of the
	following name resolution methods:
	
	- Update the LMHOSTS file and enable LMHOSTS Lookup in Advanced TCP/IP
	  Configuration in Control Panel Network.
	
	  -or-
	
	- Use WINS to resolve the name of the remote Internet Information Server.
	
	  -or-
	
	- Use a Domain Name Server.
	
	Additional query words: prodiis
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbiisSearch kbiis100
	Version           : 1.0
	
	=============================================================================
	
