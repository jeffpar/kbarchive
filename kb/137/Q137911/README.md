---
layout: page
title: "Q137911: Mac Srv: How to Configure One Way Address Propagation"
permalink: /kb/137/Q137911/
---

## Q137911: Mac Srv: How to Configure One Way Address Propagation

	Article: Q137911
	Product(s): Microsoft Mail For Appletalk Networks
	Version(s): WINDOWS:3.x
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for AppleTalk Networks, version 3.x 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Mail for AppleTalk Network servers within different site names have the ability
	to send their address lists in a single direction, if desired.
	
	MORE INFORMATION
	================
	
	You can change the site name by running the Mail Network Administrator utility
	and selecting the Set Site Name option under the Admin menu. Then you can use
	the configure routing option to choose a site and server within the site listed
	in the drop down box under the Bridged to Server option. You can then either
	export the local user list to or import the user list from the targeted server.
	
	The administrator on the target server must perform the same operation in order
	for one way local user list exchange to work properly. For example, if you (the
	administrator of the source server) want to export only to the target server,
	you would choose Export User Lists, and the target server administrator would
	select Import User Lists.
	
	You can purge unwanted user lists from the server by running the Remove User
	Lists option under the Admin menu.
	
	
	Additional query words: 3.x
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailATN30xSearch
	Version           : WINDOWS:3.x
	
	=============================================================================
	
