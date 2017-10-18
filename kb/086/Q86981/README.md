---
layout: page
title: "Q86981: X400: Effect of Dir-Sync on Gateway Address Lists"
permalink: kb/086/Q86981/
---

## Q86981: X400: Effect of Dir-Sync on Gateway Address Lists

	Article: Q86981
	Product(s): Microsoft Mail For PC Networks
	Version(s): MS-DOS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to X.400, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Directory synchronization (Dir-Sync) is a new feature in version 3.0 Microsoft
	Mail for PC Networks. Directory synchronization allows user lists to be
	propagated among Microsoft Mail systems.
	
	Dir-Sync works between Microsoft Mail systems that are using version 3.0 of the
	Microsoft Mail Gateway to X.400 as the backbone. When the Microsoft Mail
	External postoffice is defined in the EXTERNAL-ADMIN section of the Mail
	Administrator program as being indirect via the X.400 gateway, the mail system
	tries to export the user lists to the other postoffice.
	
	You must perform the normal setup procedures for defining the routing and
	addressing information for the gateway before the file transfer can be
	successful.
	
	
	Additional query words: pcmail
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGatex400300
	Version           : MS-DOS:3.0
	
	=============================================================================
	
