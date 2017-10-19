---
layout: page
title: "Q163689: XCON: MTA: Content Conversion Error 210"
permalink: /kb/163/Q163689/
---

## Q163689: XCON: MTA: Content Conversion Error 210

	Article: Q163689
	Product(s): Microsoft Exchange
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 09-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When sending a message from a Microsoft Mail for Windows user through the
	Microsoft Exchange Server MS Mail Connector to a user on X.400, the following
	error message may be logged in the Windows NT Event Log:
	
	  message NMI0210: X.400 Service Event, severity 14
	
	      (MTA DISP:FANOUT(15) Proc 112) 01-25-97 02:16:17pm
	       Content conversion failed
	       Object at fault  06000050
	       Conversion error 4096
	       MTS Identifier   C=DE;A=TEST;P=PSSTEST;L=0039400001003278000002
	       Old content type 2A864886F7140501
	       New content type 56010A01
	
	The following is the routing of the message:
	
	  Microsoft Mail for Windows -> Exchange Server -> X.400
	
	The error message means that the conversion from the Microsoft Exchange message
	format to the X.400 P2/P22 message format fails.
	
	The message cannot be delivered, and a Non Delivery Report is created.
	
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
	
