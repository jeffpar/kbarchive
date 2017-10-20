---
layout: page
title: "Q163690: XCON: MTA: Content Conversion Error 210 with ISO 6937 Bodypart"
permalink: /kb/163/Q163690/
---

## Q163690: XCON: MTA: Content Conversion Error 210 with ISO 6937 Bodypart

{% raw %}

	Article: Q163690
	Product(s): Microsoft Exchange
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 12-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When receiving a message from a foreign X.400 MTA that has an ISO 6937 Bodypart
	and an IA5 Bodypart, Microsoft Exchange Server may log the following event to
	the Windows NT Event Log:
	
	  message NMI0210: X.400 Service Event, severity 14
	
	         (MTA DISP:FANOUT(15) Proc 112) 07-25-96 02:16:17pm
	           Content conversion failed
	           Object at fault  06000050
	           Conversion error 26
	           MTS Identifier
	  C=CH;A=400NET;P=SANDOZTEST;L=0039400001003278000002
	           Old content type 56010A01
	           New content type 2A864886F7140501
	
	The message cannot be delivered, and a Non Delivery Report is created.
	
	CAUSE
	=====
	
	This is caused by an invalid encoding on the foreign X.400 system. The following
	is an excerpt from a traced message:
	
	...
	  223    3080             Body starts here
	  225        AD80         ISO6937 Body Part starts here
	  227          3180          ISO6937Parameters
	  229          0000
	  231          306B          SEQUENCE OF starts here (ISO6937Data)
	  233              A080         invalid encoding
	  235                  040A 20202020204B7572742C  . . . . .K.u.r.t.,.
	  OCTET_STRING (ISO6937Line)
	  247              0000
	  249              8000         invalid encoding
	...
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 4.0. This problem was corrected in the latest Microsoft Exchange 4.0
	U.S. Service Pack. For information on obtaining the service pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : 4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
