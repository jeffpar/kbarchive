---
layout: page
title: "Q246881: XIMS: NDR Includes DL Name Rather Than Individual Recipient"
permalink: /kb/246/Q246881/
---

## Q246881: XIMS: NDR Includes DL Name Rather Than Individual Recipient

{% raw %}

	Article: Q246881
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55 kbExchange550preSP4fix kbExchange550sp4Fix
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If you send a message to a distribution list (DL) through the Internet Mail
	Service on an Exchange Server computer that is configured to send content
	formatted in Transport-Neutral Encapsulation Format (TNEF), you may receive a
	non-delivery report (NDR) similar to the following:
	
	  Your message did not reach some or all of the intended recipients.
	
	     Subject:  <subject>
	     Sent:     10/20/99 8:16 PM
	
	  The following recipient(s) could not be reached:
	
	     <recipient> on 10/20/99 8:28 PM
	        The recipient name is not recognized
	           The MTS-ID of the original message is: c=US;a= ;p=Microsoft
	           ;l=TOTO-991021001549Z-18747
	        MSEXCH:IMS:microsoft:<site>:<server> 0 (000C05A6) Unknown Recipient
	
	where <recipient> is the display name of the DL, rather than the individual
	recipient that is not recognized.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server 5.5.
	For additional information, click the following article number to view the
	article in the Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the latest Exchange Server 5.5 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in Microsoft Exchange Server
	version 5.5. This problem was first corrected in Exchange Server 5.5 Service
	Pack 4.
	
	
	Additional query words: ims
	
	======================================================================
	Keywords          : exc55 kbExchange550preSP4fix kbExchange550sp4Fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
