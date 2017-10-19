---
layout: page
title: "Q166572: XADM: 5.0 Proxy Address Generator and Scandinavian Characters"
permalink: /kb/166/Q166572/
---

## Q166572: XADM: 5.0 Proxy Address Generator and Scandinavian Characters

	Article: Q166572
	Product(s): Microsoft Exchange
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	In Microsoft Exchange Server, when you add a new mailbox and the name includes
	extended characters such as the letters a-umlaut or o-umlaut, the characters are
	converted to ae and oe (respectively) in the X.400 and SMTP proxy addresses.
	This will also be the case with the generation of the common name. To be
	readable and logical to Scandinavian users, those letters should be converted to
	the standard letters a and o.
	
	NOTE: An umlaut is a character that has two dots above it.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.0. This problem was corrected in the latest Microsoft Exchange Server
	5.0 U.S. Service Pack. For information on obtaining the service pack, query on
	the following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	MORE INFORMATION
	================
	
	When the fix is applied, in generating proxy addresses, the mapping of the
	Nordic to non-Nordic characters will be based on the Microsoft Exchange Server
	locale, not the locale where the Administrator program is running. However, when
	generating the common name, the mapping will be based on the locale where the
	Administrator program is running.
	
	To prevent unwanted character mapping, for example when the language is German,
	the following languages (locales) will trigger Nordic behavior:
	
	  Danish
	  Faeroese
	  Finnish
	  Icelandic
	  Norwegian
	  Swedish
	
	
	Additional query words: farsi
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbZNotKeyword2
	Version           : 5.0
	Issue type        : kbbug
	
	=============================================================================
	
