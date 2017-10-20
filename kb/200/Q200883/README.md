---
layout: page
title: "Q200883: XWEB: Netscape OWA Client Displays Incorrect Language Text"
permalink: /kb/200/Q200883/
---

## Q200883: XWEB: Netscape OWA Client Displays Incorrect Language Text

{% raw %}

	Article: Q200883
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook Web Access, version 5.5 Service Pack 1 
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When accessing Outlook Web Access (OWA) using a Netscape Navigator Web browser,
	you may see the text display in a language not consistent with the primary
	language of the client or server computers. This can happen if you have applied
	the incorrect Exchange Server service pack to the Exchange Server computer. For
	example, if you have a computer running Exchange Server version 5.5 (U.S.
	English Version) and install Service Pack 1 for Exchange Server (German
	version), Netscape Navigator Browser OWA clients may display German text, even
	after you apply the U.S. English version of Exchange Service Pack 1.
	
	RESOLUTION
	==========
	
	To use Netscape Navigator OWA clients again, you must restore the Exchange
	Server installation from a backup made prior to applying the incorrect service
	pack version.
	
	WORKAROUND
	==========
	
	OWA clients can use a browser other than Netscape Navigator without this effect.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Outlook Web Access
	version 5.5 Service Pack 1.
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbOWASearch kbOWA550SP1
	Version           : WINDOWS:5.5
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	

{% endraw %}
