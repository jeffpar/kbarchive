---
layout: page
title: "Q232384: XFOR: Store Does Not Recognize Double Angle Brackets Correctly"
permalink: kb/232/Q232384/
---

## Q232384: XFOR: Store Does Not Recognize Double Angle Brackets Correctly

	Article: Q232384
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55 EXC55SP3Fix
	Last Modified: 30-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you send a text/enriched message (a message that has a content type of
	text/enriched) through an Exchange Server computer, the information store uses
	an incorrect tag in the RTF header. This may cause your e-mail client to
	recognize angle brackets (<>) as HTML tags. If the message contains angle
	brackets, it may not be displayed correctly in the e-mail client.
	
	For instance, text/enriched mail whose body is "This is <<test>", is
	delivered. Outlook 98 mail viewer shows only "This is ".
	
	CAUSE
	=====
	
	More specifically, the header includes the \fromhtml1 tag, which apparently
	tells the e-mail client that the message is formatted in HTML (rather than plain
	text).
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server
	version 5.5. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the Latest Exchange Server 5.5 Service Pack
	
	The English version of this fix should have the following file attributes or
	later:
	
	Component: Information Store
	
	+-------------------------+
	| File name  | Version    | 
	+-------------------------+
	| Gapi32.dll | 5.5.2620.0 | 
	+-------------------------+
	| Mdbmsg.dll | 5.5.2620.0 | 
	+-------------------------+
	| Netif.dll  | 5.5.2620.0 | 
	+-------------------------+
	| Store.exe  | 5.5.2620.0 | 
	+-------------------------+
	
	Component: Directory
	
	+--------------------------+
	| File name   | Version    | 
	+--------------------------+
	| Dsamain.exe | 5.5.2600.0 | 
	+--------------------------+
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5. This problem was first corrected in Exchange Server 5.5 Service
	Pack 3.
	
	Additional query words: SMTP
	
	======================================================================
	Keywords          : exc55 EXC55SP3Fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
