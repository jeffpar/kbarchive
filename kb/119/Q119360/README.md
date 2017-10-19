---
layout: page
title: "Q119360: Mac Srv: Group Definition Propagated to Other Mail Servers"
permalink: /kb/119/Q119360/
---

## Q119360: Mac Srv: Group Definition Propagated to Other Mail Servers

	Article: Q119360
	Product(s): Microsoft Mail For Appletalk Networks
	Version(s): WINDOWS:3.0,3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 24-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for AppleTalk Networks, versions 3.0, 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In versions 3.0 and later of Microsoft Mail for AppleTalk Networks version, the
	definition of system groups, the members who make up the group, is propagated to
	other Mail servers.
	
	NOTE: System groups are groups defined by the Network Manager versus Personal
	Groups created by individual users.
	
	If a group definition contains other groups, all groups are expanded before group
	information is propagated to other Mail servers. This is a change from Microsoft
	Mail version 2.0, which only propagated the name of the group. This meant that
	any mail sent to a group had to be forwarded to the Mail server where the group
	was defined.
	
	
	Additional query words: 3.00 3.10
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailATN300 kbMailATN310
	Version           : WINDOWS:3.0,3.1
	
	=============================================================================
	
