---
layout: page
title: "Q112039: X400: How the Gateway Handles Non X.400 To/Cc Addresses"
permalink: /kb/112/Q112039/
---

## Q112039: X400: How the Gateway Handles Non X.400 To/Cc Addresses

	Article: Q112039
	Product(s): Microsoft Mail For PC Networks
	Version(s): MS-DOS:2.1,3.0,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to X.400, versions 2.1, 3.0, 3.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When version 2.1, 3.0, or 3.2 of Microsoft Mail Gateway to X.400 builds an X.400
	message and finds that recipients of foreign messaging systems (for example
	SMTP, PROFS, MCI, etc.) have been copied on the message, it places the non-X.400
	recipients and puts them in the free-form-name field of the X.400 P2 header.
	
	This means the receiving X.400 user-agent must display the free-form- name(s) to
	its X.400 recipient in order for that recipient to see that non-X.400 users were
	copied on the message.
	
	This is an interoperability issue since specific X.400 implementations may not
	display free-form-name since support for free-form-name is not mandated by NIST,
	OSTC or INTAP.
	
	Additional query words: 2.10 3.00 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGatex400300 kbMailGatex400320 kbMailGatex400210
	Version           : MS-DOS:2.1,3.0,3.2
	
	=============================================================================
	
