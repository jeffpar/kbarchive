---
layout: page
title: "Q123222: PC Gen: External Group Details Do Not Display Friendly Names"
permalink: /kb/123/Q123222/
---

## Q123222: PC Gen: External Group Details Do Not Display Friendly Names

	Article: Q123222
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0,3.0b,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 3.0, 3.0b, 3.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	You can select a group from the global address list (GAL) or network address
	list and view the details of that group. The details contain friendly names for
	all the members of that group, unless the group is from an externally defined
	postoffice--then it only displays the alias, name, address type, mailbox,
	postoffice, and network the group is located on.
	
	This is by design; externally defined postoffice addresses, including groups, are
	known only by their network/postoffice/mailbox names. No other group information
	is transferred during the directory exchange process.
	
	To determine the members (friendly names) of an externally defined group, have
	the administrator for that postoffice print or create a text file containing
	groups and members. (From the Mail Administrator program on that postoffice,
	select Local-Admin, Group, Print, and then Printer or File.)
	
	For more information on using the Address Book and groups, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q101932 PC Win: Expansion of Groups, Revealing Group Members
	
	
	Additional query words: 3.00 3.00b 3.20 admin admin.exe
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320 kbMailPCN300 kbMailPCN300b
	Version           : WINDOWS:3.0,3.0b,3.2
	
	=============================================================================
	
