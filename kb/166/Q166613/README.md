---
layout: page
title: "Q166613: XCLN: Mac Client Can't Log On If NT Account Has Extended Chars"
permalink: /kb/166/Q166613/
---

## Q166613: XCLN: Mac Client Can't Log On If NT Account Has Extended Chars

{% raw %}

	Article: Q166613
	Product(s): Microsoft Exchange
	Version(s): 1.00
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Macintosh client, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When attempting to log on to a Microsoft Exchange Server mailbox from a
	Microsoft Exchange for Macintosh client, you may receive the following error
	message:
	
	  The logon credentials supplied were incorrect. Make sure
	  your username and domain are correct, then type your
	  password again.
	
	CAUSE
	=====
	
	This error may occur if the Windows NT user account specified contains extended
	characters that are not mapped correctly from the Macintosh character set to the
	Windows ANSI character set.
	
	WORKAROUND
	==========
	
	When creating Windows NT user accounts, avoid using extended characters (for
	example, A-umlaut or E-umlaut) in the user name.
	
	NOTE: An umlaut appears as two dots placed above a vowel.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange for the
	Macintosh, versions 4.0 and 5.0. This problem was corrected in the latest
	Microsoft Exchange Server 5.0 U.S. Service Pack. For information on obtaining
	the service pack, query on the following word in the Microsoft Knowledge Base
	(without the spaces):
	
	  S E R V P A C K
	
	
	MORE INFORMATION
	================
	
	This behavior may be seen when using foreign languages that have extended
	characters in their alphabet.
	
	
	Additional query words: Swedish sp1 codepage logon
	
	======================================================================
	Keywords          :  
	Technology        : kbHWMAC kbOSMAC kbExchangeSearch kbExchangeClientSearch kbExchange500Mac kbExchange400Mac
	Version           : 1.00
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
