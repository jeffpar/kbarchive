---
layout: page
title: "Q115349: X400: SMTP Address Dropped from To and CC Lists"
permalink: /kb/115/Q115349/
---

## Q115349: X400: SMTP Address Dropped from To and CC Lists

	Article: Q115349
	Product(s): Microsoft Mail For PC Networks
	Version(s): MS-DOS:3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to X.400, version 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you send a message to the X.400 gateway with an SMTP address in the TO: or
	CC: list, the SMTP address is dropped.
	
	CAUSE
	=====
	
	SMTP addresses selected from the global/POSTOFFICE address list are displayed.
	One-off SMTP addresses (entered by the originator) are not displayed.
	
	
	RESOLUTION
	==========
	
	The gateway now creates a free-form name for all recipients as follows:
	
	- if only a foreign email address is available, enclose it in single quotes:
	
	  'laurahal@microsoft.com'
	
	- use a friendly name if one is available, and put the foreign address in
	  parentheses:
	
	  Laura Halliday (laurahal@microsoft.com)
	
	The SMTP address is shown with its friendly name but it cannot be replied to.
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGatex400320
	Version           : MS-DOS:3.2
	
	=============================================================================
	
