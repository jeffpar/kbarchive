---
layout: page
title: "Q175220: XADM: MAPI Calls Fail with MAPI_E_NOT_ENOUGH_MEMORY"
permalink: /kb/175/Q175220/
---

## Q175220: XADM: MAPI Calls Fail with MAPI_E_NOT_ENOUGH_MEMORY

{% raw %}

	Article: Q175220
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 12-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	MAPI allows programmers to collect information about the properties of messages
	and their attachments. When an application makes a MAPI call to retrieve
	properties on an attachment, and PR_ATTACH_DATA_BIN is one of the requested
	properties, the call may fail with MAPI_E_NOT_ENOUGH_MEMORY. This only occurs
	the attachment is 31,010 to 32,768 bytes in size (the lower limit varies
	depending on what other properties are included in the request).
	
	CAUSE
	=====
	
	When a client does a GetProps() call, it passes a list of properties to collect
	information on. The store collects the requested properties and saves the
	information in a pre-allocated buffer to be returned to the client. The size of
	this buffer is 32,768. As properties are collected and saved in this buffer, the
	remaining free space in the buffer is updated. When the PR_ATTACH_DATA_BIN
	property is processed, an attempt is made to put the data in the buffer. Because
	there is insufficient space in the buffer for the attachment data, the function
	collecting the data returns an error. This error is not being processed
	correctly by the Information Store.
	
	WORKAROUND
	==========
	
	To work around this problem:
	
	- Increase the size of the attachment so it does not fall within the range of
	  31,010 to 32,768 bytes.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 4.0. This problem has been corrected in the latest U.S. Service Pack for
	Microsoft Exchange Server version 4.0. For information on obtaining the Service
	Pack, query on the following word in the Microsoft Knowledge Base:
	
	  SERVPACK
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0
	Hardware          : ALPHA MIPS PPC x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
