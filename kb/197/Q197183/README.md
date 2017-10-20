---
layout: page
title: "Q197183: XFOR: Cisco PIX Software Causes Strange Content in SMTP Msgs"
permalink: /kb/197/Q197183/
---

## Q197183: XFOR: Cisco PIX Software Causes Strange Content in SMTP Msgs

{% raw %}

	Article: Q197183
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): kbfixlist
	Last Modified: 08-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Administrators of the Microsoft Exchange Internet Mail Service (IMS) may notice
	SMTP content that once passed through a Cisco 'PIX' router, contains strings of
	'XXXXXXXXXX's.
	
	MORE INFORMATION
	================
	
	The issue is associated with Cisco bug # CSCDK46673. Cisco has a fix available.
	
	Here is an excerpt from Cisco's bug report:
	
	  Bug Id : CSCdk46673
	  > Headline    PIX 4.2(2) - fixup smtp trashes E-mail when NOOP is issued
	  >
	  > Product    pix    Model
	  > Component   pix-app   Duplicate of    </cgi-
	     bin/bugtool/onebug.pl?bugid=>
	  >
	  > Severity    2    Status  </kobayashi/releases/bugstate.html>   R
	  >
	  > Version Found    4.2(2)    Fixed-in Version    4.2(3)
	  > Release Notes In PIX 4.2(2), when a NOOP is issued by an SMTP server
	  > behind a PIX when the fixup smtp command is enabled, portions of the
	  > E-mail will be replaced by a series of ''X''s, which may render the
	  > resulting message unreadable.
	
	Additional query words: Cisco PIX SMTP XXX
	
	======================================================================
	Keywords          :  kbfixlist
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Hardware          : ALPHA x86
	Issue type        : kbinfo
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
