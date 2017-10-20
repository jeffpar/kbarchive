---
layout: page
title: "Q238507: XCON: Exchange Server MTA MIXER Mapping Tables"
permalink: /kb/238/Q238507/
---

## Q238507: XCON: Exchange Server MTA MIXER Mapping Tables

{% raw %}

	Article: Q238507
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 21-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article discusses the mapping from SMTP address to X.400 address and the
	reverse mapping from X.400 to SMTP address in Exchange Server. The MIME Internet
	X.400 Enhanced Relay (MIXER) Conformant Global Address Mapping (MCGAM) is
	implemented in Exchange Server as a plain text file called Mcgam.in.txt, which
	is placed in the message transfer agent's (MTA) run directory (usually Mtadata).
	
	MORE INFORMATION
	================
	
	Mcgam.in.txt
	------------
	
	MCGAM mapping is based on the rule that the components of the two address types
	(X.400 and SMTP) can be mapped equivalently at a certain level, and then
	automatically at lower levels. For example, you can define a mapping as simple
	as "microsoft.com <-> c=uk; a=gold 400; p=microsoft." Then, if it is the
	only mapping in the file, all mappings follow from it (that is,
	sample@support.microsoft.com is mapped to c=uk; a=gold 400; p=microsoft;
	o=support; s=sample). This is defined in the MCGAM file as follows:
	
	  microsoft.com#prmd$microsoft.admd$gold 400.c$uk#
	
	The reverse mapping for X.400 to SMTP is:
	
	  prmd$microsoft.admd$gold 400.c$uk#microsoft.com#
	
	NOTE: The number sign (#) separates SMTP from X.400, the dollar sign ($)
	separates attribute from value, and the period (.) separates attributes. Each
	line is terminated by the number sign (#).
	
	Local.in.txt
	------------
	
	Ideally, an organization defines a single set of mappings and creates a
	Mcgam.in.txt file, which is then distributed to every MTA that has co-located
	Internet Mail Service. This ensures mapping consistency and reversibility (any
	MTA can map any outgoing address back to what it was when it originally entered
	the organization).
	
	In some cases, you may want to override this behavior. For example, an Internet
	Mail Service may be configured to only accept incoming messages. If the "Strict
	MIXER Conformance" registry setting is not defined, and there are no X.400
	mappings for the sender's address, the address is added as an RFC-822 Domain
	Defined Attribute (DDA) to the site's X.400 proxy. A reply to the message
	returns to this site.
	
	An Internet Mail Service for outgoing messages may be configured in another site.
	To tell this MTA to create an X.400 address corresponding to the outgoing
	Internet Mail Service site, you can create another file called Local.in.txt,
	which contains additional mappings to those in the Mcgam.in.txt file. Place this
	file in the MTA run directory (Mtadata) only on the server with the incoming
	Internet Mail Service. The resulting entries in the Mappings.out.txt file are
	clearly labeled with "(local)" or "(MCGAM)," to indicate the file they were read
	from.
	
	Mappings.out.txt
	----------------
	
	This file is generated after either or both of the Mcgam.in.txt and Local.in.txt
	files are created and placed in the Mtadata directory, and the MTA is started
	successfully without any errors. This file displays all mappings from both files
	with explicit designations for each entry, for example:
	
	  s=<*GMD.DE>
	
	  C=DE;A=DBP;P=GMD; (MCGAM)
	
	Additional query words: RFC 2156
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
