---
layout: page
title: "Q165059: XCON: Exchange Does Not Support Maximum 3-digit Country Codes"
permalink: /kb/165/Q165059/
---

## Q165059: XCON: Exchange Does Not Support Maximum 3-digit Country Codes

{% raw %}

	Article: Q165059
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): kbusage exc4 exc5 exc55
	Last Modified: 09-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If a route is set up on a Microsoft Exchange Server connector for type X.400 and
	it uses the three-digit numeric string for the country code, messages sent out
	that route will return a non-delivery report (NDR) to the message originator as
	follows:
	
	  Your message did not reach some or all of the intended recipients.
	
	  Subject: Test Numeric Country Code
	  Sent: 2/27/97 11:17:12 AM
	
	  The following recipient(s) could not be reached:
	
	     'TEST (Numeric)' on 2/27/97 11:19:13 AM
	           Unable to deliver the message due to a recipient problem
	           MSEXCH:MSExchangeIS:MORFSITE2:MIRALPHA1
	
	CAUSE
	=====
	
	According to Recommendation X.402 section 18.3.3 of the 1988 ITU Blue Book, it
	is valid to use the numeric country codes specified in Recommendation X.121 on
	the C= portion of an X.400 address.
	
	Microsoft Exchange Server does not currently support this format. Exchange Server
	does fully support ISO 3166, which mandates the use of two-character printed
	strings for country codes.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	versions 4.0 and 5.0. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	
	Additional query words: x400
	
	======================================================================
	Keywords          : kbusage exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
