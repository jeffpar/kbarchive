---
layout: page
title: "Q165093: XCON: MTA: Content Conversion Error 260 (Event ID 210)"
permalink: /kb/165/Q165093/
---

## Q165093: XCON: MTA: Content Conversion Error 260 (Event ID 210)

	Article: Q165093
	Product(s): Microsoft Exchange
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 01-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When sending a message from a Microsoft Exchange Client that is connected to a
	Microsoft Mail Postoffice, the following messages may appear in the Windows NT
	Server Event Log:
	
	  Event ID 2171
	
	  An MTA database server error was encountered while reading an attribute.
	  Called from MTA. Procedure: 388.
	  Database error code: 2171.
	  Object at fault: 06000051. Attribute identifier: 95. Value number: 1.
	  Referenced object: 06000068 (00000000 => N/A).
	  Referenced object error 2171. [DB Server DISP:FANOUT 18 51] (14)
	
	  Event ID 210
	
	  An internal MTA error occurred.
	  Content conversion for message C=DE;A=DBP;P=TEST;L=NET/PO/00000123
	  failed.
	  Conversion error: 260, Object at fault: 06000051,
	  Original content type: 2A864886F7140501, New content type: 56010A01.
	  [MTA DISP:FANOUT 18 9] (14)
	
	The sender of the message will get a nondelivery report (NDR). The message was to
	be routed through the following path:
	
	MS Mail -> Exchange Server -> X.400 Connector -> Exchange Server ->
	MS Mail
	
	The error messages appear in the Event Log of the first server. The Event ID 210
	means that the conversion to the X.400 P2 1988 content type failed.
	
	The error may appear with messages that do not have a subject line.
	
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
	
