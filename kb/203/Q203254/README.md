---
layout: page
title: "Q203254: XADM: Microsoft Exchange Server CD International Versions"
permalink: /kb/203/Q203254/
---

## Q203254: XADM: Microsoft Exchange Server CD International Versions

{% raw %}

	Article: Q203254
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): kbfile kbsetup
	Last Modified: 06-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	There are four localized versions of Microsoft Exchange Server 5.5.
	
	- English
	
	- French
	
	- German
	
	- Japanese
	
	Microsoft Exchange Server supports three encryption algorithms:
	
	- CAST-64
	
	- DES
	
	- CAST-40
	
	There are no separate high and low encryption codes for Microsoft Exchange
	Server. Microsoft Exchange Server code is the same worldwide. The level of
	encryption is determined by the Microsoft Exchange Client or Outlook client, not
	Exchange Server.
	
	The U.S./Canada versions of all Exchange Client products support all three
	algorithms, but default to CAST-64. All other international (localized) versions
	of Exchange Client support only the CAST-40 (40 bit) algorithm.
	
	Microsoft does not produce a generic International version of Microsoft Exchange
	Server.
	
	MORE INFORMATION
	================
	
	For more information, please refer to the following Microsoft Knowledge Base
	articles:
	
	  Q181921 XADM: Sending Encrypted Mail to Users with Different Encryption
	  Levels
	
	  Q147399 XFOR: How Messages Are Encrypted Between U.S. and International
	
	For more information on security, please refer to the following Internet
	location:
	
	  http://www.microsoft.com/security
	
	Additional query words:
	
	======================================================================
	Keywords          : kbfile kbsetup 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
