---
layout: page
title: "Q86974: X400: What X.400 Gateway Settings Affect X.25 Card Operation"
permalink: kb/086/Q86974/
---

## Q86974: X400: What X.400 Gateway Settings Affect X.25 Card Operation

	Article: Q86974
	Product(s): Microsoft Mail For PC Networks
	Version(s): MS-DOS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to X.400, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The data within three fields can affect the operation of the X.25 transport that
	carries the X.400 messages:
	
	  X.121
	  Call User Data
	  User Facilities
	
	Messages can sometimes be blocked, without notification appearing within the
	X400GATE.LOG file, as a result of the programming of the fields. These fields
	can be found in the administration program of the gateway postoffice for the
	home message transfer agent (MTA).
	
	These fields may contain information that rejects a call at the OSI lower level
	before the X.400 gateway ever has a chance to receive it.
	
	For example, this can include a bad X.121 (DTE) address or even incorrect reverse
	charges information in the User Facilities selection.
	
	
	Additional query words: pcmail
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGatex400300
	Version           : MS-DOS:3.0
	
	=============================================================================
	
