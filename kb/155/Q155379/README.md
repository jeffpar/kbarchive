---
layout: page
title: "Q155379: XADM: Unable to Match Custom Recipient Due to RFC1327 Conversion"
permalink: /kb/155/Q155379/
---

## Q155379: XADM: Unable to Match Custom Recipient Due to RFC1327 Conversion

{% raw %}

	Article: Q155379
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0
	Operating System(s): 
	Keyword(s): kbinterop kbusage
	Last Modified: 03-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Custom recipients created to allow addressing to SNADS recipients fail, because
	the custom recipient address does not match after the conversion from Internet
	to X.400 mail.
	
	CAUSE
	=====
	
	The conversion of the RFC822 address attributes to X.400 attributes mistakenly
	leaves the "at" sign (@) in the address. Because this is not a printable
	character in X.400, the address does not match the custom recipient address, and
	the message is returned as non-deliverable. The FROM field of the message
	displays as an X.400 address with a DDA value when a custom recipient exists in
	the site.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server,
	versions 4.0 and 5.0. This problem was corrected in the latest Microsoft
	Exchange Server 4.0 and 5.0 U.S. Service Packs. For information on obtaining the
	service pack, query on the following word in the Microsoft Knowledge Base
	(without the spaces):
	
	  S E R V P A C K
	
	MORE INFORMATION
	================
	
	The incoming message's address was converted from RFC822 format to an X.400 OR
	Name using the RFC1327's printable string conversions:
	
	       ps-encoded       = *( ps-restricted-char / ps-encoded-char )
	       ps-encoded-char  =                   "(a)"               ; (@)
	                                          / "(p)"               ; (%)
	                                          / "(b)"               ; (!)
	                                          / "(q)"               ; (")
	                                          / "(u)"               ; (_)
	                                          / "(l)"               ; "("
	                                          / "(r)"               ; ")"
	                                          / "(" 3DIGIT ")"
	
	The DDA Type is "RFC-822" and the address is the escape equivalent version of the
	RFC822 address.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbinterop kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
