---
layout: page
title: "Q119685: FFAPI: ERRMSG: Mail Received for Unknown Addresses"
permalink: /kb/119/Q119685/
---

## Q119685: FFAPI: ERRMSG: Mail Received for Unknown Addresses

	Article: Q119685
	Product(s): Microsoft Mail For PC Networks
	Version(s): MS-DOS:2.1,3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Software Development Kit: FFAPI for Gateways and Applications, versions 2.1, 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Using the Microsoft Mail File Format API programs to "put" a message into a
	Microsoft Mail postoffice sent to a group alias may result in this error,
	recorded in the m:\log\system.log file:
	
	  User mail received addressed to the following unknown addresses:
	  <address>
	
	CAUSE
	=====
	
	When mailing to a group, the group address must be used, not the alias name.
	
	Both the Admin program and the mail clients display only the alias for postoffice
	groups, not the real addresses. Mail sent to the alias is not delivered.
	
	RESOLUTION
	==========
	
	Find the group address using one of the three procedures below and use it when
	you send the mail.
	
	- Record the address when the group is created in the Admin program (LOCAL
	  ADMIN-GROUP-CREATE).
	
	- Export the address list to another postoffice. The group address appears on
	  the other postoffice.
	
	- Make a copy of the \GLB\GROUP.GLB file, from the Microsoft Mail Postoffice,
	  and use the MS-DOS TYPE command to list the file. This file is not formatted
	  when it appears, but it shows the association of group alias to group name.
	
	
	Additional query words: 3.00 FFAPI groups invalid mailbox kberrmsg
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbMailSearch kbSDKSearch
	Version           : MS-DOS:2.1,3.0
	
	=============================================================================
	
