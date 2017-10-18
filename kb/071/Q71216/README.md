---
layout: page
title: "Q71216: Mac Srv: User Lists Not Exchanged Between Mail 2.0 and 3.0"
permalink: kb/071/Q71216/
---

## Q71216: Mac Srv: User Lists Not Exchanged Between Mail 2.0 and 3.0

	Article: Q71216
	Product(s): Microsoft Mail For Appletalk Networks
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for AppleTalk Networks, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Note About Routing in Microsoft Mail: Each Mail server is initially set up to
	exchange messages and user lists with other Mail servers. Therefore, you can add
	Mail servers to a network without configuring the servers in any special way.
	However, by setting up your Mail system in discrete sites and by using the Mail
	Network Administrator application, you can specify which Mail sites will
	exchange messages and/or user lists. This system is called "routing." For more
	information on routing, see the "Microsoft Mail Network Manager's Guide."
	
	Microsoft Mail version 3.00 and Microsoft Mail version 2.00 servers will not
	exchange user lists if the site name and/or password of the 3.00 servers have
	been changed. They will not exchange user lists even if there is a bridge
	connecting the site containing the 3.00 servers and the Local site that contains
	the 2.00 servers. The site information for Mail 2.00 servers cannot be changed
	and is always in the site named "Local".
	
	For example:
	
	1. In a Mail network with 2.00 and 3.00 servers, take a group of 3.00 servers
	  and make them a different site by changing their site name. Name this site
	  "Remote".
	
	2. Set up a bridge between the above 3.00 servers in Remote, and a 3.00 server
	  that is in the default site Local. Specify that they import and export user
	  lists.
	
	The 2.00 servers in the Local site will not exchange user lists with the 3.00
	servers in the Remote site, even though there is a bridge between the Local and
	Remote sites. The 3.00 servers in the Local site will exchange user lists with
	the 3.00 servers in the Remote site.
	
	User lists sent from 3.00 servers in the Local site contain routing information,
	allowing the user list to be forwarded to 3.00 servers in the Remote site. Mail
	version 2.00 servers do not send user lists containing this necessary routing
	information, causing the user lists to be ignored by 3.00 servers in the Remote
	site.
	
	Additional query words: 3.00
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailATN300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
