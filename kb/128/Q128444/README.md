---
layout: page
title: "Q128444: MHS: Err Msg: User Not Found: Postmaster"
permalink: /kb/128/Q128444/
---

## Q128444: MHS: Err Msg: User Not Found: Postmaster

	Article: Q128444
	Product(s): Microsoft Mail For PC Networks
	Version(s): MS-DOS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to MHS, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The following error may occur when you use the MHS gateway with a downstream
	postoffice.
	
	  User not found: Postmaster
	
	CAUSE
	=====
	
	The gateway tries to send mail to the POSTMASTER account if an address is
	invalid.
	
	RESOLUTION
	==========
	
	Create a POSTMASTER account on all downstream postoffices that will be using the
	MHS gateway.
	
	MORE INFORMATION
	================
	
	The Microsoft Mail Gateway to MHS "Administrator's Guide" is incomplete; it
	suggests that you create a POSTMASTER mailbox on the gateway postoffice, but
	does not mention that you should also create a POSTMASTER account on all
	downstream postoffices.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGateMHS300
	Version           : MS-DOS:3.0
	
	=============================================================================
	
