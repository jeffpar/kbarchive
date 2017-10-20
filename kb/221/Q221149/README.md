---
layout: page
title: "Q221149: XADM: Store Crash in IMAIL HTML-RTF Conversion"
permalink: /kb/221/Q221149/
---

## Q221149: XADM: Store Crash in IMAIL HTML-RTF Conversion

{% raw %}

	Article: Q221149
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
	
	The Microsoft Exchange Server information store may terminate unexpectedly while
	processing inbound SMTP messages.
	
	CAUSE
	=====
	
	In HTML-to-RTF conversion routines, there are problems with the translation of a
	message if it contains a QP-encoded 16-bit Unicode body and if the Unicode data
	is not aligned.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server
	version 5.5. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the latest Exchange Server 5.5 Service Pack
	
	The English version of this fix should have the following file attributes or
	later:
	
	Component: Information Store
	
	+-------------------------+
	| File name  | Version    | 
	+-------------------------+
	| Gapi32.dll | 5.5.2568.0 | 
	+-------------------------+
	| Mdbmsg.dll | 5.5.2568.0 | 
	+-------------------------+
	| Store.exe  | 5.5.2568.0 | 
	+-------------------------+
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5. This problem was first corrected in Exchange Server 5.5 Service
	Pack 3.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 EXC55SP3Fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
