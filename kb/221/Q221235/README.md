---
layout: page
title: "Q221235: XADM: Attachments in a Binhex Message Are Empty"
permalink: /kb/221/Q221235/
---

## Q221235: XADM: Attachments in a Binhex Message Are Empty

{% raw %}

	Article: Q221235
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5,5.5 SP1,5.5 SP2
	Operating System(s): 
	Keyword(s): exc55 exc55sp1 exc55sp2 EXC55SP3Fix
	Last Modified: 07-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.5, 5.5 SP1, 5.5 SP2 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Messages arriving from a UNIX system may have an empty attachment.
	
	Several sets of conditions must occur for this to happen. It must be a binhex
	message and it must have been scanned on the sending side by a virus scanner
	before arriving at the Exchange Server computer.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server
	version 5.5. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the latest Exchange Server 5.5 Service Pack
	
	The English version of this fix should have the following file attributes or
	later:
	
	Component: Information Store
	
	+---------------------------+
	| File name    | Version    | 
	+---------------------------+
	| Gapi32.dll   | 5.5.2557.0 | 
	+---------------------------+
	| Imap4evt.dll | 5.5.2557.0 | 
	+---------------------------+
	| Mdbmsg.dll   | 5.5.2557.0 | 
	+---------------------------+
	| Store.exe    | 5.5.2557.0 | 
	+---------------------------+
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article. This problem was first corrected in
	Exchange Server 5.5 Service Pack 3.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 exc55sp1 exc55sp2 EXC55SP3Fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2 kbExchange550SP1 kbExchange550SP2
	Version           : winnt:5.5,5.5 SP1,5.5 SP2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
