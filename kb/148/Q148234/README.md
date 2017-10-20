---
layout: page
title: "Q148234: XCON: Latin-1 Characters May Be Translated Incorrectly"
permalink: /kb/148/Q148234/
---

## Q148234: XCON: Latin-1 Characters May Be Translated Incorrectly

{% raw %}

	Article: Q148234
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): kbusage exc4 exc5 exc55
	Last Modified: 19-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A message that contains ISO 8859-1 (Latin-1) characters and is sent from one
	Microsoft Exchange Server computer to another across an X.400 connector may have
	some characters incorrectly translated.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.0. This problem has been corrected in the latest U.S. Service Pack for
	Microsoft Exchange Server version 5.0. For information on obtaining the Service
	Pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	MORE INFORMATION
	================
	
	The following ISO 8859-1 (Latin-1) characters may be incorrectly translated
	across an X.400 connector:
	
	169   (c)     copyright sign
	174   (r)     trademark
	188   1/4     fraction one quarter
	189   1/2     fraction one half
	190   3/4     fraction three quarter
	198   AE      capital AE diphthong
	230   ae      small ae diphthong
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
