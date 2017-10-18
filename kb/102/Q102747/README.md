---
layout: page
title: "Q102747: X400: Err Msg: Only Four Organization Units Allowed in Address"
permalink: kb/102/Q102747/
---

## Q102747: X400: Err Msg: Only Four Organization Units Allowed in Address

	Article: Q102747
	Product(s): Microsoft Mail For PC Networks
	Version(s): MS-DOS:3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to X.400, version 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	With version 3.2 of Microsoft Mail Gateway to X.400, the Routing section of the
	Administrator program may give this error:
	
	  Only four organization units are allowed in an X.400 address.
	
	CAUSE
	=====
	
	Too many organization units in an address.
	
	RESOLUTION
	==========
	
	Organization units map specific user routing possibilities. For example,
	incoming mail to the Microsoft Mail gateway may have the postoffice mapped in
	organization unit 1 (OU1). Any more than four in an X.400 address violates the
	allowable maximum and you must correct the situation.
	
	
	Additional query words: 3.20 Errmsg
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGatex400320
	Version           : MS-DOS:3.2
	
	=============================================================================
	
