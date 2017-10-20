---
layout: page
title: "Q163565: XCLN: Fax Recipients' Information does not Appear on Cover Sheet"
permalink: /kb/163/Q163565/
---

## Q163565: XCLN: Fax Recipients' Information does not Appear on Cover Sheet

{% raw %}

	Article: Q163565
	Product(s): Microsoft Exchange
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 15-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 3.x client, version 4.0 
	- Microsoft Exchange Windows 95/98 client, version 4.0 
	- Microsoft Exchange Windows NT client, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you send a FAX from within a Microsoft Exchange client, the Fax recipients'
	information (Recipient's Address/City/State/Zip/County/ Title/Department/Office
	location/Home telephone/Office telephone) do not appear on the cover sheet.
	
	CAUSE
	=====
	
	The Microsoft Exchange profile in use has both the Microsoft Exchange Server
	service and the FAX Service, and the mail delivery is set to mailbox (server
	store) instead of a local personal folder (PST).
	
	RESOLUTION
	==========
	
	You can either:
	
	1. Add a PST to the existing profile and set delivery to that PST.
	
	  -or-
	
	2. If you want mail to reside on the Microsoft Exchange Server and not a local
	  PST, create 2 profiles, one for FAX and one for Microsoft Exchange. Leave
	  delivery in the Microsoft Exchange profile set to mailbox and in the FAX
	  profile, set delivery to a PST.
	
	
	
	Additional query words: 4.0 outlook
	======================================================================
	Keywords          : win95 
	Technology        : kbExchangeSearch kbExchange400 kbExchangeClientSearch kbZNotKeyword kbZNotKeyword2 kbZNotKeyword3 kbExchange400NT kbExchange400Win95
	Version           : 4.0
	
	=============================================================================
	

{% endraw %}
