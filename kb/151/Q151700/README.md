---
layout: page
title: "Q151700: XADM: 4.0 Proxy Address Generator and Scandinavian Characters"
permalink: kb/151/Q151700/
---

## Q151700: XADM: 4.0 Proxy Address Generator and Scandinavian Characters

	Article: Q151700
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 27-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you add a new mailbox to a computer running Microsoft Exchange Server and
	the name includes an extended character such as an "a" or an "o" with an umlaut,
	the character is converted to ae or oe (respectively) in the X.400 and SMTP
	proxy addresses. This also happens with the generation of the common name. This
	is correct for German names but it is incorrect for Scandinavian names. To make
	sense to Scandinavian users, these characters should instead be converted to a
	and o.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 4.0. This problem has been corrected in the latest U.S. Service Pack for
	Microsoft Exchange Server version 4.0. For information on obtaining the Service
	Pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	MORE INFORMATION
	================
	
	After the fix is applied, in generating proxy addresses, the mapping of the
	extended characters will be based on the Microsoft Exchange Server locale, not
	where the Microsoft Exchange Server Administrator program is running. However,
	when generating the common name, the mapping will be based on the locale where
	the Microsoft Exchange Server Administrator program is running.
	
	The fix eliminates the unwanted character mapping. The following languages
	(locales) trigger the conversion of extended characters in a way that makes
	sense to Scandinavian users:
	
	  Danish
	  Faeroese
	  Finnish
	  Icelandic
	  Norwegian
	  Swedish
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
