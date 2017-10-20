---
layout: page
title: "Q282968: Err Msg: &quot;Unable to generate a new key request&quot; w/Key Manager"
permalink: /kb/282/Q282968/
---

## Q282968: Err Msg: &quot;Unable to generate a new key request&quot; w/Key Manager

{% raw %}

	Article: Q282968
	Product(s): Internet Information Server
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to create a new key request by using Key Manager, you may
	receive the following error message:
	
	  Unable to generate a new key request
	
	CAUSE
	=====
	
	One or more of the fields of the key request may contain an invalid character,
	such as a comma (,), a single quotation mark ('), or a quotation mark (").
	
	RESOLUTION
	==========
	
	Use only the letters A-Z and the numbers 0-9 as characters in the fields of the
	request. You may use periods (.) in the common name to specify a fully qualified
	domain name (FQDN).
	
	MORE INFORMATION
	================
	
	Service Packs earlier than Service Pack 6 allow you to enter invalid characters
	in the fields of the request. In Service Pack 6 and later, Key Manager prevents
	you from entering invalid characters.
	
	For an illustrated, step-by-step guide that describes how to install
	certificates, see the following Web site:
	
	  http://www.thawte.com/certs/server/keygen/iis4.html
	
	Additional query words: iis4 key manager cert certificate
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis400
	Version           : :4.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
