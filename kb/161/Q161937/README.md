---
layout: page
title: "Q161937: XCON: IMC Stops Processing Mail on Alpha Platform"
permalink: /kb/161/Q161937/
---

## Q161937: XCON: IMC Stops Processing Mail on Alpha Platform

{% raw %}

	Article: Q161937
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 12-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Internet Mail Connector (IMC) stops processing outbound messages. If the IMC
	is not running, any attempts to start the IMC fail with an event 10.67. No other
	events are logged. DEC Alpha platforms seem to be susceptible to this problem.
	Use of Mdbvu32 will show messages sitting in the MTS-OUT folder.
	
	CAUSE
	=====
	
	The attachment to the message has been corrupted at some point. The
	PR_ATTACHMENT_ENCODING is obtained from the Winmail.dat because the message was
	sent in TNEF but the actual attachment consists of only the data fork because
	the resource fork has been stripped. Imail processes the attachment as
	MAC_BINARY and reads the first 128 bytes of the header and incorrectly
	determines the filename length. The erroneous filename length leads to
	corruption of memory and an eventual crash of the IMC.
	
	WORKAROUND
	==========
	
	To work around this problem, do one of the following:
	
	- Use the resource kit utility Imcsave to remove the messages and save the
	  contents of the MTS-OUT folder.
	
	  -or-
	
	- Use Mdbvu32 to copy messages out of the MTS-OUT folder. Remove the first
	  message and try to start the IMC.
	
	In both cases, the IMC should work once the problem message has been removed.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange version 4.00.
	This problem was corrected in the latest Microsoft Exchange 4.0 U.S. Service
	Pack. For information on obtaining the service pack, query on the following word
	in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	MORE INFORMATION
	================
	
	DEC Alpha platforms are manufactured by Digital Equipment Corporation, a vendor
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	this product's performance or reliability.
	
	Additional query words: SMTP
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
