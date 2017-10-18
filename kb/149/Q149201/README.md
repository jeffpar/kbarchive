---
layout: page
title: "Q149201: XCLN: '!' at End of URL Not Incorporated into Shortcut"
permalink: kb/149/Q149201/
---

## Q149201: XCLN: '!' at End of URL Not Incorporated into Shortcut

	Article: Q149201
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 24-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 95/98 client, versions 4.0, 5.0 
	- Microsoft Exchange Windows 3.x client, versions 4.0, 5.0 
	- Microsoft Exchange Windows NT client, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When an Internet shortcut (embedded URL) is inserted into a message from within
	Microsoft Exchange Windows clients, a '!' at the end of the URL is not included
	in the shortcut.
	
	MORE INFORMATION
	================
	
	If you add the Internet Shortcut HTTP://WWW.<SOMEPLACE>.COM/TEST! into a
	message, only the HTTP://WWW.<SOMEPLACE>.COM/TEST portion of the link will
	be hot (noted by being the only part underlined).
	
	This behavior is by design. Microsoft Exchange does not permit some punctuation
	as termination. If it did, URL's inside of parenthesis or ending sentences could
	be broken.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbExchangeClientSearch kbZNotKeyword kbZNotKeyword2 kbZNotKeyword3 kbExchange400NT kbExchange500NT kbExchange400Win95 kbExchange500Win95
	Version           : WINDOWS:4.0,5.0
	
	=============================================================================
	
