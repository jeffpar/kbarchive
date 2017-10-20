---
layout: page
title: "Q164060: XFOR: Internet Mail Service Does Not Advertise ESMTP on Connect"
permalink: /kb/164/Q164060/
---

## Q164060: XFOR: Internet Mail Service Does Not Advertise ESMTP on Connect

{% raw %}

	Article: Q164060
	Product(s): Microsoft Exchange
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 28-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.0 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	The Microsoft Exchange Server Internet Mail Service (IMS) supports Extended Set
	of Simple Mail Transfer Protocol (ESMTP) commands, however it does not advertise
	its support of ESMTP on connect.
	
	MORE INFORMATION
	================
	
	Hosts that support the Extended Set of Simple Mail Transfer Protocol (ESMTP)
	respond with the following:
	
	   220-suns.nba.com Sendmail 8.6.12/8.6.9 ready at Wed, 19 Feb 1997
	   15:36:48 -0600
	   220 ESMTP spoken here
	
	Even though the IMS supports these commands, the IMS response is as follows:
	
	   220 chopper2.wspu.net Microsoft Exchange Internet Mail Service
	   5.0.XXXX.0 ready
	
	
	The ESMTP commands supported are referenced in RFC1869 and RFC1870.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server,
	version 5.0. This problem was corrected in the latest Microsoft Exchange Service
	Pack. For information on obtaining the Service Pack, query on the following word
	in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbZNotKeyword2
	Version           : 5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
